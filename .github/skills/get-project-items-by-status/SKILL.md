---
name: get-project-items-by-status
description: "Retrieve GitHub project board items filtered by status column. Use for: listing items in a specific status, refinement overview, backlog review, sprint column inspection. Input: a status value to filter by. Returns structured item data from the Solid Design System Project Board via gh-projects MCP."
---

# Get Project Items by Status

## When to Use

- An agent needs to retrieve issues/PRs from a specific project board column
- Listing items in a status like "⚙️ To be refined", "🔖 Ready", "🏗 In progress", etc.
- Input to downstream skills or agents that need structured project item data

## Input

The calling agent provides `{STATUS_VALUE}` — one of:

- `📋 Backlog`
- `🛠️ To be pre-refined`
- `⚙️ To be refined`
- `🔖 Ready`
- `🏗 In progress`
- `👀 In review`
- `✅ Done`

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
- **query**: `status:"{STATUS_VALUE}"`
- **fields**: `[37973307, 37973308, 37973309, 37973310, 37973463, 64953433]`
- **per_page**: `50`

If a pagination cursor is returned, repeat with `after` until all items are collected.

### 2. Parse the response with an inline Node.js scriptlet

#### Response JSON Schema

The MCP tool writes large JSON to a file with the following schema:
[`response-schema.json`](response-schema.json)

Run the following Node.js one-liner, replacing `<JSON_FILE_PATH>` with the actual path:

```sh
node -e '
const data = JSON.parse(require("fs").readFileSync("<JSON_FILE_PATH>", "utf8"));
const getField = (fields, name) => fields.find(f => f.name === name);
console.log("| # | Issue | Title | Assignees | Labels | Priority | Iteration |");
console.log("|---|-------|-------|-----------|--------|----------|-----------|");
let unassigned = 0;
const notable = new Set();
data.items.forEach((item, i) => {
  const c = item.content;
  const assignees = (c.assignees || []).map(a => a.login).join(", ") || "—";
  const labels = (c.labels || []).map(l => l.name).join(", ") || "—";
  (c.labels || []).forEach(l => { if (["BLOCKED","Critical-A11y-Issue"].includes(l.name)) notable.add(l.name); });
  if ((c.assignees || []).length === 0) unassigned++;
  const priority = getField(item.fields, "Priority")?.value?.name?.raw || "—";
  const iteration = getField(item.fields, "Iteration")?.value?.title?.raw || "—";
  const issue = c.html_url ? "[#" + c.number + "](" + c.html_url + ")" : "#" + c.number;
  console.log("| " + [i+1, issue, c.title, assignees, labels, priority, iteration].join(" | ") + " |");
});
const parts = ["**" + data.items.length + "** items total"];
if (unassigned) parts.push("**" + unassigned + "** unassigned");
if (notable.size) parts.push("notable labels: " + [...notable].sort().join(", "));
console.log("_" + parts.join("; ") + "_");
'
```

This outputs a ready-to-use markdown table with a summary line. Present the output directly to the user.

### 3. Return results as a markdown table

| # | Issue | Title | Assignees | Labels | Priority | Iteration |
|---|-------|-------|-----------|--------|----------|-----------|

- **Issue**: link format `[#number](html_url)`
- **Assignees**: comma-separated logins, or `—`
- **Labels**: comma-separated names, or `—`
- **Priority / Iteration**: value or `—` if unset

End with a summary line: total count, how many unassigned, any notable labels (e.g. BLOCKED).

## Constraints

- Use the field IDs from the Known Field IDs table.
- Parse JSON using the inline Node.js scriptlet above. **Do NOT create additional helper scripts.**
- Filter server-side using the `query` parameter.
