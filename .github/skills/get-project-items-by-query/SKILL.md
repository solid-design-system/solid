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

| Field     | ID       |
|-----------|----------|
| Title     | 37973307 |
| Assignees | 37973308 |
| Status    | 37973309 |
| Labels    | 37973310 |
| Priority  | 37973463 |
| Iteration | 64953433 |

## Procedure

### 1. Fetch items (single API call)

Call `mcp_gh-projects` → `projects_list` with:
- **method**: `list_project_items`
- **owner**: `solid-design-system`
- **owner_type**: `org`
- **project_number**: `1`
- **query**: `status:"{STATUS_VALUE}"` or `assignee:unassigned` or `label:"{LABEL_VALUE}"`
- **fields**: `[37973307, 37973308, 37973309, 37973310, 37973463, 64953433]`
- **per_page**: `50`

If a pagination cursor is returned and there are more items, **stop and ask the user** whether they want to load more before continuing. Only paginate if the user explicitly confirms.

### 2. Parse the response

The MCP tool writes the response JSON to a file. The schema is documented in [`response-schema.json`](response-schema.json).

Use an inline Node.js one-liner to read and process the file. Adapt the script to match the columns and summary information relevant to the user's request — only include fields that are useful for the current context.

Key data paths to use in scripts:
- `item.content.number` / `item.content.html_url` — issue number and link
- `item.content.title` — issue title
- `item.content.assignees[].login` — assignee logins
- `item.content.labels[].name` — label names
- `item.fields` — array of project fields; use `fields.find(f => f.name === "<FieldName>")?.value` to read a field value

**Do NOT create additional helper scripts.** Keep processing inline.

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
node -e '
const data = JSON.parse(require("fs").readFileSync("<JSON_FILE_PATH>", "utf8"));
const getField = (fields, name) => fields.find(f => f.name === name);
console.log("| # | Issue | Title | Assignees | Priority | Iteration |");
console.log("|---|-------|-------|-----------|----------|-----------|");
let unassigned = 0;
data.items.forEach((item, i) => {
  const c = item.content;
  const assignees = (c.assignees || []).map(a => a.login).join(", ") || "—";
  if ((c.assignees || []).length === 0) unassigned++;
  const priority = getField(item.fields, "Priority")?.value?.name?.raw || "—";
  const iteration = getField(item.fields, "Iteration")?.value?.title?.raw || "—";
  const issue = c.html_url ? "[#" + c.number + "](" + c.html_url + ")" : "#" + c.number;
  console.log("| " + [i+1, issue, c.title, assignees, priority, iteration].join(" | ") + " |");
});
console.log("_**" + data.items.length + "** items total; **" + unassigned + "** unassigned_");
'
```

### Example 2 — Blocked items overview (label filter)

Query: `label:"BLOCKED"`

```sh
node -e '
const data = JSON.parse(require("fs").readFileSync("<JSON_FILE_PATH>", "utf8"));
const getField = (fields, name) => fields.find(f => f.name === name);
console.log("| # | Issue | Title | Assignees | Status | Labels |");
console.log("|---|-------|-------|-----------|--------|--------|");
data.items.forEach((item, i) => {
  const c = item.content;
  const assignees = (c.assignees || []).map(a => a.login).join(", ") || "—";
  const labels = (c.labels || []).map(l => l.name).join(", ") || "—";
  const status = getField(item.fields, "Status")?.value?.name?.raw || "—";
  const issue = c.html_url ? "[#" + c.number + "](" + c.html_url + ")" : "#" + c.number;
  console.log("| " + [i+1, issue, c.title, assignees, status, labels].join(" | ") + " |");
});
console.log("_**" + data.items.length + "** blocked items_");
'
```

### Example 3 — Unassigned work triage (minimal view)

Query: `assignee:unassigned`

```sh
node -e '
const data = JSON.parse(require("fs").readFileSync("<JSON_FILE_PATH>", "utf8"));
const getField = (fields, name) => fields.find(f => f.name === name);
console.log("| # | Issue | Title | Status | Labels |");
console.log("|---|-------|-------|--------|--------|");
data.items.forEach((item, i) => {
  const c = item.content;
  const labels = (c.labels || []).map(l => l.name).join(", ") || "—";
  const status = getField(item.fields, "Status")?.value?.name?.raw || "—";
  const issue = c.html_url ? "[#" + c.number + "](" + c.html_url + ")" : "#" + c.number;
  console.log("| " + [i+1, issue, c.title, status, labels].join(" | ") + " |");
});
console.log("_**" + data.items.length + "** unassigned items_");
'
```

## Issue Type Mapping

Issue type can be derived from **labels** and **title prefix** — both already available in query results. This is useful for downstream skills (e.g. `check-issue-dor`) that need to apply type-specific evaluation criteria.

**Detection priority**: Check labels first (more reliable), then fall back to title prefix.

| Labels | Title Prefix | Resolved Type | Template File |
|--------|-------------|---------------|---------------|
| `🙌 Epic` + `style-components` | `feat:` | New Style Component (Epic) | `new-style-component-issue-template.md` |
| `🙌 Epic` | `feat:` | Epic | `new-component-issue-template.md` or `feature-issue-template.md` |
| `🎨 figma` + `Subtask` | `feat[design]:` | Design Subtask | `subtask-template-design.md` |
| `🔧 code` + `Subtask` | `feat[dev]:` | Dev Subtask | `subtask-template-dev.md` |
| `Subtask` + `documentation` | `docs:` | Release Notes Subtask | `release-notes-subtask-template.md` |
| `🎨 figma` (no `Subtask`) | `feat[design]:` | Simple Design Feature | `simple-design-feature-issue-template.md` |
| `🔧 code` (no `Subtask`) | `feat[dev]:` | Simple Dev Feature | `simple-dev-feature-template.md` |
| — | `fix:` | Bugfix | `fix-issue-template.md` |
| — | `docs:` | Documentation | `docs-issue-template.md` |
| — | `perf:` | Performance | `performance-issue-template.md` |
| — | `test:` | Test | `test-issue-template.md` |
| — | `ci:` | CI | `ci-issue-template.md` |
| — | `chore:` | Chore | `chore-issue-template.md` |

All template files are in `.github/ISSUE_TEMPLATE/`. To get the current DoR/DoD sections and expected structure for a type, **read the template file directly** rather than hardcoding — this keeps the mapping current when templates are updated.

**Type** is an optional output column. When included, derive it using the mapping above in the inline Node.js script.

## Constraints

- Use the field IDs from the Known Field IDs table.
- Filter server-side using the `query` parameter.
- **Do NOT create additional helper scripts.** Keep all processing inline.
