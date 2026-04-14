---
name: get-project-items-by-query
description: "Retrieve GitHub project board items filtered by status column. Use for: listing items in a specific status, refinement overview, backlog review, sprint column inspection. Input: a status value to filter by. Returns structured item data from the Solid Design System Project Board via gh-projects MCP."
---

# Get Project Items by Query

## When to Use

- An agent needs to retrieve issues/PRs from a specific project board column, assignee or label for review, reporting, or to feed into another process.
- Input to downstream skills or agents that need structured project item data

## Input

### Status Value

The calling agent provides `{STATUS_VALUE}` — one of:

- `📋 Backlog`
- `🛠️ To be pre-refined` (which is not for the Refinement!)
- `⚙️ To be refined`
- `🔖 Ready`
- `🏗 In progress`
- `👀 In review`
- `✅ Done`

### Label Value

The calling agent provides `{LABEL_VALUE}` — these are the most important labels, but the agent can specify any label used in the project:

- `BLOCKED`
- `BREAKING CHANGE`
- `Design`
- `Development`
- `Documentation`
- `Epic`
- `Subtask` (which are always tasks of Epics)

## Known Field IDs

| Field     | ID        | Returns              |
|-----------|-----------|----------------------|
| Title     | 37973307  | `string`             |
| Assignees | 37973308  | `string[]` (logins)  |
| Status    | 37973309  | `string` or `null`   |
| Priority  | 37973463  | `string` or `null`   |
| Iteration | 64953433  | `string` or `null`   |
| SP        | 88431758  | `number` or `null`   |

## Procedure

### 1. Fetch items (single API call)

Call `mcp_gh-projects` → `projects_list` with:
- **method**: `list_project_items`
- **owner**: `solid-design-system`
- **owner_type**: `org`
- **project_number**: `1`
- **query**: `status:"{STATUS_VALUE}"` or `assignee:unassigned` or `label:"{LABEL_VALUE}"`
- **fields**: `[37973307, 37973308, 37973309, 37973463, 64953433, 88431758]`
- **per_page**: `50`

If a pagination cursor is returned and there are more items, **stop and ask the user** whether they want to load more before continuing. Only paginate if the user explicitly confirms.

### 2. Parse the response

The MCP tool writes the response JSON to a file. The schema is documented in [`response-schema.json`](response-schema.json).

Write a Node.js script to a temp `.mjs` file, then run it. Adapt the script to match the columns and summary information relevant to the user's request — only include fields that are useful for the current context.

Key data paths to use in scripts:
- `item.content.number` / `item.content.html_url` — issue number and link
- `item.content.title` — issue title
- `item.content.body` — issue body (markdown)
- `item.content.assignees[].login` — assignee logins
- `item.content.labels[].name` — label names

Project fields are provided in `item.fields` (array). 
**Always use this helper** function to extract field values:

```js
function getFieldValue(fields, name) {
  const f = fields.find(f => f.name === name);
  if (!f || f.value == null) return null;
  switch (f.data_type) {
    case "single_select": return f.value.name?.raw ?? null;
    case "iteration":     return f.value.title?.raw ?? null;
    case "number":        return f.value;
    case "title":         return f.value.raw ?? null;
    case "assignees":     return f.value.map(a => a.login);
    default:              return f.value;
  }
}
```

Usage: `getFieldValue(item.fields, "Priority")` → `"🏝 Low"` or `null`.

**Always write scripts to a temp `.mjs` file and run with `node`** — never use `node -e`. Even short scripts break when the shell interprets regex, `${}`, quotes, or parentheses as shell syntax.

```sh
cat << 'SCRIPT' > /tmp/process.mjs
import { readFileSync } from "fs";
const data = JSON.parse(readFileSync("<JSON_FILE_PATH>", "utf8"));
// ... processing ...
SCRIPT
node /tmp/process.mjs
```

Replace `<JSON_FILE_PATH>` with the actual path returned by the MCP tool.

### 3. Return results as a markdown table

The script outputs a ready-to-use markdown table with a summary line. **Present the output directly to the user — do not reformat or paraphrase it.**

**Default to a compact table** — use only the columns most relevant to the query. Fewer columns keep the output readable and cheap. Only include Priority, Iteration, Labels, or Assignees when they add clear value for the user's request. After presenting the table, ask the user if they want a more detailed view with additional columns.

Minimum required columns:
- **Issue**: link format `[#number](html_url)`
- **Title**: issue title

Optional columns (add only when clearly useful):
- **Assignees**: comma-separated logins, or `—`
- **Labels**: comma-separated names, or `—`
- **Status**: current project board status
- **Priority / Iteration**: value or `—` if unset

Always end with a brief summary line (e.g. total count, number of unassigned items, any notable labels like `BLOCKED`). Then ask: _"Want more detail or additional columns?"_

## Examples

### Example 1 — Sprint planning view (status + priority + iteration)

Query: `status:"🔖 Ready"`

```sh
cat << 'SCRIPT' > /tmp/project-query.mjs
import { readFileSync } from "fs";
const data = JSON.parse(readFileSync("<JSON_FILE_PATH>", "utf8"));
function getFieldValue(fields, name) {
  const f = fields.find(f => f.name === name);
  if (!f || f.value == null) return null;
  switch (f.data_type) {
    case "single_select": return f.value.name?.raw ?? null;
    case "iteration":     return f.value.title?.raw ?? null;
    case "number":        return f.value;
    case "title":         return f.value.raw ?? null;
    case "assignees":     return f.value.map(a => a.login);
    default:              return f.value;
  }
}
console.log("| # | Issue | Title | Assignees | Priority | Iteration |");
console.log("|---|-------|-------|-----------|----------|-----------|" );
let unassigned = 0;
data.items.forEach((item, i) => {
  const c = item.content;
  const assignees = (c.assignees || []).map(a => a.login).join(", ") || "—";
  if ((c.assignees || []).length === 0) unassigned++;
  const priority = getFieldValue(item.fields, "Priority") || "—";
  const iteration = getFieldValue(item.fields, "Iteration") || "—";
  const issue = c.html_url ? `[#${c.number}](${c.html_url})` : `#${c.number}`;
  console.log(`| ${[i+1, issue, c.title, assignees, priority, iteration].join(" | ")} |`);
});
console.log(`_**${data.items.length}** items total; **${unassigned}** unassigned_`);
SCRIPT
node /tmp/project-query.mjs
```

### Example 2 — Blocked items overview (label filter)

Query: `label:"BLOCKED"`

```sh
cat << 'SCRIPT' > /tmp/project-query.mjs
import { readFileSync } from "fs";
const data = JSON.parse(readFileSync("<JSON_FILE_PATH>", "utf8"));
function getFieldValue(fields, name) {
  const f = fields.find(f => f.name === name);
  if (!f || f.value == null) return null;
  switch (f.data_type) {
    case "single_select": return f.value.name?.raw ?? null;
    case "iteration":     return f.value.title?.raw ?? null;
    case "number":        return f.value;
    case "title":         return f.value.raw ?? null;
    case "assignees":     return f.value.map(a => a.login);
    default:              return f.value;
  }
}
console.log("| # | Issue | Title | Assignees | Status | Labels |");
console.log("|---|-------|-------|-----------|--------|--------|" );
data.items.forEach((item, i) => {
  const c = item.content;
  const assignees = (c.assignees || []).map(a => a.login).join(", ") || "—";
  const labels = (c.labels || []).map(l => l.name).join(", ") || "—";
  const status = getFieldValue(item.fields, "Status") || "—";
  const issue = c.html_url ? `[#${c.number}](${c.html_url})` : `#${c.number}`;
  console.log(`| ${[i+1, issue, c.title, assignees, status, labels].join(" | ")} |`);
});
console.log(`_**${data.items.length}** blocked items_`);
SCRIPT
node /tmp/project-query.mjs
```

### Example 3 — Unassigned work triage (minimal view)

Query: `assignee:unassigned`

```sh
cat << 'SCRIPT' > /tmp/project-query.mjs
import { readFileSync } from "fs";
const data = JSON.parse(readFileSync("<JSON_FILE_PATH>", "utf8"));
function getFieldValue(fields, name) {
  const f = fields.find(f => f.name === name);
  if (!f || f.value == null) return null;
  switch (f.data_type) {
    case "single_select": return f.value.name?.raw ?? null;
    case "iteration":     return f.value.title?.raw ?? null;
    case "number":        return f.value;
    case "title":         return f.value.raw ?? null;
    case "assignees":     return f.value.map(a => a.login);
    default:              return f.value;
  }
}
console.log("| # | Issue | Title | Status | Labels |");
console.log("|---|-------|-------|--------|--------|" );
data.items.forEach((item, i) => {
  const c = item.content;
  const labels = (c.labels || []).map(l => l.name).join(", ") || "—";
  const status = getFieldValue(item.fields, "Status") || "—";
  const issue = c.html_url ? `[#${c.number}](${c.html_url})` : `#${c.number}`;
  console.log(`| ${[i+1, issue, c.title, status, labels].join(" | ")} |`);
});
console.log(`_**${data.items.length}** unassigned items_`);
SCRIPT
node /tmp/project-query.mjs
```

## Constraints

- Use the field IDs from the Known Field IDs table.
- Filter server-side using the `query` parameter.
- **Always write scripts to a temp `.mjs` file** — never use `node -e` (shell quoting breaks regex, `${}`, and parentheses).
