---
name: check-issue-questions
description: "Analyze a provided list of GitHub issues for unclear requirements, missing technical information, and missing or unclear business cases. Produces a list of Open Questions per issue to prepare for refinement. Expects issues to be supplied by the caller — does not fetch issues itself."
---

# Check Issue Questions

## When to Use

- Preparing open questions before a refinement session
- Identifying gaps in issue descriptions that need clarification
- Reviewing issues in "To be Pre-Refined" or "To be Refined" columns

## Input

A list of issues with their metadata (title, body, labels, linked parents). The caller is responsible for fetching this data before invoking this skill.

## Analysis Dimensions

Every issue is analyzed across three dimensions to surface open questions:

### 1. Requirements Clarity

Check whether the issue description provides clear, actionable requirements:

- **Acceptance criteria** — Are there concrete, testable acceptance criteria or a Definition of Done checklist?
- **Expected behavior** — Is the desired outcome described precisely (not just "fix it" or "improve")?
- **Scope boundaries** — Is it clear what is in scope and what is not? Are affected components/areas listed?
- **Edge cases** — Are obvious edge cases or error scenarios addressed?
- **User perspective** — Is it clear which user role or persona is affected?

### 2. Technical Information

Check whether sufficient technical context is provided:

- **Reproduction steps** — For bugs: are there clear steps to reproduce?
- **Technical context** — Are relevant components, APIs, or system areas mentioned?
- **Browser / environment** — For UI issues: are target browsers or environments specified?
- **Breaking changes** — Is it clear whether the change is breaking or non-breaking?
- **Migration impact** — If breaking: is there guidance on migration or backward compatibility?
- **Design / mockups** — For UI changes: are designs, mockups, or screenshots referenced?

### 3. Business Case

Check whether the business motivation is clear:

- **Problem statement** — Is it clear what problem this solves and for whom?
- **Impact / urgency** — Is the impact or urgency explained (e.g. number of affected users, blocked workflows)?
- **Business justification** — Is there a reason *why* this matters beyond "it would be nice"?
- **Priority rationale** — Does the priority level match the described impact?

## Procedure

1. Execute the **Issue Extraction Script** below. It extracts issue metadata and body content and writes `$TMPDIR/issues-for-review.json`. The script also prints a short summary to stdout. Don't present the summary to the user yet.

2. **Content Analysis** — For each issue, read its data from `$TMPDIR/issues-for-review.json` and evaluate each of the three analysis dimensions above. For each gap found, formulate a concrete, actionable open question.

   **Important**: Use the `read_file` tool to read `$TMPDIR/issues-for-review.json` — do **not** use `cat` in the terminal. The file can be large and terminal output may be truncated, causing incomplete data. Read the entire file in a single call using a large `endLine` (e.g. `endLine: 9999`).

   Guidelines for formulating questions:
   - Be specific: "What browsers need to support this?" not "More info needed"
   - Be actionable: each question should have a clear owner who can answer it
   - Avoid duplicates: don't ask about something already answered in the issue body
   - Group by dimension: keep requirements, technical, and business questions separate
   - Skip dimensions that are fully covered — only list questions where gaps exist
   - For subtasks (label `Subtask`): focus only on Requirements Clarity and Technical Information — skip Business Case (the parent epic covers it)

3. **Produce the final report** — For each issue, output:

   - **Issue**: `[#number](html_url)` — title
   - **Labels**: comma-separated label names
   - **Analysis Summary**: one-sentence overall assessment (e.g. "Missing acceptance criteria and no technical context provided")
   - **Open Questions**: grouped by dimension, numbered list

   Use this format for each issue:

   ```
   ### [#number](html_url) — title

   **Labels**: label1, label2
   **Summary**: one-sentence assessment

   **Open Questions**

   **Requirements Clarity**
   1. Question about missing acceptance criteria...
   2. Question about unclear scope...

   **Technical Information**
   1. Question about missing reproduction steps...

   **Business Case**
   1. Question about missing problem statement...
   ```

   If an issue has no open questions across any dimension, mark it as: **No open questions — issue is well-defined.**

   End with a summary table:

   | Issue | Questions | Top Gap |
   |-------|-----------|---------|
   | [#123](url) | 5 | Requirements Clarity |
   | [#456](url) | 0 | — |

   And a final summary line: total issues reviewed, total open questions, most common gap dimension.

## Issue Extraction Script

The following script extracts issue metadata and body content for analysis. It handles both subtasks and regular issues.

Write the script to a temp file, then run with `node`, passing the JSON file path and the output file path as arguments.

```sh
TMPDIR=$(mktemp -d /tmp/github-copilot-skill-check-questions-XXXXXX)
cat << 'SCRIPT' > "$TMPDIR/extract.mjs"
import { readFileSync, writeFileSync } from "fs";

const jsonPath = process.argv[2];
const outPath = process.argv[3];
const data = JSON.parse(readFileSync(jsonPath, "utf8"));

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

function isSubtask(item) {
  return (item.content.labels || []).some(l => l.name === "Subtask");
}

function extractIssue(item) {
  const body = item.content.body || "";
  const subtask = isSubtask(item);
  const labels = (item.content.labels || []).map(l => l.name);
  const sp = getFieldValue(item.fields, "SP");
  const priority = getFieldValue(item.fields, "Priority");
  const status = getFieldValue(item.fields, "Status");

  // Extract existing Open Questions section if present
  const oqSection = body.match(/### Open Questions[\s\S]*?(?=\n## |\n### [^O]|$)/)?.[0] || "";
  const hasExistingOQ = oqSection.length > 25;
  const isPlaceholder = /Question1|Question2/.test(oqSection);

  return {
    num: item.content.number,
    url: item.content.html_url,
    title: item.content.title,
    subtask,
    labels,
    sp,
    priority,
    status,
    hasExistingOQ,
    existingOQPlaceholder: isPlaceholder,
    body: body.length > 4000 ? body.slice(0, 4000) + "\n\n[... truncated]" : body,
  };
}

const items = data.items.map(extractIssue);
const subtasks = items.filter(r => r.subtask);
const nonSubtasks = items.filter(r => !r.subtask);

const output = {
  summary: {
    total: items.length,
    subtaskCount: subtasks.length,
    issueCount: nonSubtasks.length,
  },
  items,
};

writeFileSync(outPath, JSON.stringify(output, null, 2));

console.log("Issue extraction complete.");
console.log(`Total: ${output.summary.total} items (${output.summary.subtaskCount} subtasks, ${output.summary.issueCount} issues)`);
console.log(`Output: ${outPath}`);
SCRIPT
node "$TMPDIR/extract.mjs" "<JSON_FILE_PATH>" "$TMPDIR/issues-for-review.json"
```
