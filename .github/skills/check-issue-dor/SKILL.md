---
name: check-issue-dor
description: "Evaluate a provided list of GitHub issues against the project's Definition of Ready (DoR). Use for: sprint readiness, DoR validation, issue quality check, refinement review. Expects issues to be supplied by the caller — does not fetch issues itself."
---

# Check Issue DoR (Definition of Ready)

## When to Use

- Evaluating whether a list of issues meets the Definition of Ready
- Reviewing refinement quality before sprint planning
- Validating DoR completeness before moving issues to 🔖 Ready

## Input

A list of issues with their metadata (title, body, SP, linked parents). The caller is responsible for fetching this data before invoking this skill.

## Definition of Ready (DoR)

Every issue must satisfy these criteria before it can be considered "ready":

1. **Business value** — The issue clearly states *why* it matters (user story, business justification, or impact description)
2. **Estimated by the team** — Story Points (SP) field is set (number > 0)
3. **Clear and well-defined** — Description is specific and actionable: expected behavior, acceptance criteria or DoD checklist, no unresolved placeholder open questions (e.g. "Question1 / Question2")
4. **Dependencies identified** — Linked parent issues, cross-references, or an explicit "no dependencies" statement

Subtasks which have the label "Subtask" only have to meet 2 DoR criteria**:

1. **Estimated by the team** — SP field is set (number > 0)
2. **Dependencies identified** — Dependencies documented

## Procedure

1. Execute the **DoR Evaluation Script** below. It scores the **basic** criteria (Estimated, Dependencies, Open Questions) and writes a single file `$TMPDIR/dor-results.json`. The schema is documented in [`dor-results-schema.json`](dor-results-schema.json). The script also prints a short summary to stdout (~5–10 lines). Don't present the summary to the user yet, only use it for processing in Step 2.

2. **Content Evaluation** — For each **non-subtask** issue, read its `body` from `$TMPDIR/dor-results.json` (items where `subtask` is `false`) and evaluate the two content-based DoR criteria using the **Content Evaluation** below. Record a verdict (✅ met / ❌ not met) and a one-sentence rationale for each criterion.
Don't present the Content Evaluation to the user yet, only use them for processing in Step 3.

**Important**: Use the `read_file` tool to read `$TMPDIR/dor-results.json` — do **not** use `cat` in the terminal. The file can be large and terminal output may be truncated, causing incomplete data. Read the entire file in a single call using a large `endLine` (e.g. `endLine: 9999`).

3. **Produce the final report** — Use the scores from `$TMPDIR/dor-results.json` and merge with your content assessments (step 2) into a single table. Include:
   - DoR: e.g. "3/4, not yet estimated", "0/4", "4/4" or "2/2"
   - Open Questions: resolved / unresolved / not applicable / missing
   - Ready state: all criteria met → 🟢 Ready, all−1 → 🟡 Mostly ready, else → 🔴 Needs refinement
   - Required Actions: list missing criteria and the one-sentence rationale from step 2.

## Content Evaluation

Applies only to **non-subtask** issues (subtasks are fully scored by the script).

For each issue, evaluate these two criteria by reading the issue body:

### 1. Business value

> Does the issue clearly state *why* it matters?

- **Met** — The body contains a user story, business justification, impact description, or problem statement that explains consequences for users or the system.
- **Not met** — The body is a bare task description ("do X") without motivation, or is mostly template boilerplate with no real explanation of impact.

### 2. Clear and well-defined

> Is the description specific and actionable?

- **Met** — The body includes expected behavior or a concrete solution description, acceptance criteria or a DoD checklist with meaningful items, and no unresolved placeholder open questions.
- **Not met** — The body lacks acceptance criteria beyond template defaults, has only a vague scope or a link to a parent issue, or the Open Questions section contains unresolved placeholders (flagged by the scriptlet's `oqStatus`).

Use the scriptlet's **Open Questions** status as an input signal: if the scriptlet reports ❌ unresolved, that weighs against "Clear and well-defined".

## Examples of Well-Refined Issues

- Clear current vs expected behavior with screenshots
- Reproducible steps listed
- Technical root-cause hint provided
- Explicit scope (e.g. affected component list)
- Concrete solution proposal with rationale (e.g. accessibility guidelines)

## Examples of Not-Refined Issues

- Body is mostly copy-pasted template with placeholder questions
- No SP set
- No acceptance criteria beyond template defaults
- Very short description with only a link to a parent issue
- Open Questions section contains only "Question1 / Question2"

## Type Detection

Only one label distinction matters for DoR: whether the issue has the **`Subtask`** label.

- **Subtask** (label `Subtask` present) → **2 DoR criteria** (Estimated + Dependencies)
- **All other issues** (no `Subtask` label) → **4 DoR criteria**

Check with: `(item.content.labels || []).some(l => l.name === "Subtask")`

## DoR Evaluation Script

The following script scores the **basic** DoR criteria (Estimated, Dependencies, Open Questions) for all items from **get-project-items-by-query**. Content-based criteria (Business value, Clear & well-defined) are evaluated by the Content Evaluation in step 2.

Write the script to a temp file, then run with `node`, passing the JSON file path and the output file path as arguments.

```sh
TMPDIR=$(mktemp -d /tmp/github-copilot-skill-eval-dor-XXXXXX)
cat << 'SCRIPT' > "$TMPDIR/script.mjs"
import { readFileSync, writeFileSync } from "fs";

const jsonPath = process.argv[2];
const outPath = process.argv[3];
const data = JSON.parse(readFileSync(jsonPath, "utf8"));

// --- helpers (from get-project-items-by-query) ---
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

function evaluateDoR(item) {
  const body = item.content.body || "";
  const subtask = isSubtask(item);
  const sp = getFieldValue(item.fields, "SP");

  // --- body parsing (basic signals only) ---
  const dorSection = body.match(/## DoR[\s\S]*?(?=\n## |$)/)?.[0] || "";
  const dorEstimated = /- \[x\].*estimated/i.test(dorSection);
  const dorDeps = /- \[x\].*dependenc/i.test(dorSection);

  const oqSection = body.match(/### Open Questions[\s\S]*?(?=\n## |\n### [^O]|$)/)?.[0] || "";
  const hasOQ = oqSection.length > 25;
  const isPlaceholder = /Question1|Question2/.test(oqSection);
  const hasUnresolved = hasOQ && (isPlaceholder || /- \[ \]/.test(oqSection));

  let oqStatus = "n/a";
  if (hasOQ && !hasUnresolved) oqStatus = "resolved";
  else if (hasUnresolved) oqStatus = "unresolved";

  // --- scoring DoR ---
  const estimated = dorEstimated || (sp != null && sp > 0);
  const dependencies = dorDeps;
  const basicMet = [estimated, dependencies].filter(Boolean).length;
  const missing = [];
  if (!estimated) missing.push("Estimated");
  if (!dependencies) missing.push("Dependencies");
  if (hasUnresolved) missing.push("Resolve Open Questions");

  const total = subtask ? 2 : 4;

  let readyState;
  if (subtask) {
    if (basicMet === total) readyState = "ready";
    else if (basicMet >= total - 1) readyState = "mostly-ready";
    else readyState = "needs-refinement";
  } else {
    readyState = "pending-content-review";
  }

  const result = {
    num: item.content.number,
    url: item.content.html_url,
    title: item.content.title,
    subtask,
    estimated,
    dependencies,
    oqStatus,
    basicMet,
    dorTotal: total,
    readyState,
    missing,
  };

  // Include body only for non-subtasks (needed for content evaluation)
  if (!subtask) {
    result.body = body.length > 3000 ? body.slice(0, 3000) + "\n\n[... truncated]" : body;
  }

  return result;
}

// --- run ---
const items = data.items.map(evaluateDoR);
const subtasks = items.filter(r => r.subtask);
const nonSubtasks = items.filter(r => !r.subtask);

const output = {
  summary: {
    total: items.length,
    subtaskCount: subtasks.length,
    issueCount: nonSubtasks.length,
    subtaskReady: subtasks.filter(r => r.readyState === "ready").length,
    subtaskMostlyReady: subtasks.filter(r => r.readyState === "mostly-ready").length,
    subtaskNeedsRefinement: subtasks.filter(r => r.readyState === "needs-refinement").length,
    issuesPendingContentReview: nonSubtasks.length,
  },
  items,
};

writeFileSync(outPath, JSON.stringify(output, null, 2));

// --- stdout: short summary only ---
const s = output.summary;
console.log("DoR evaluation complete.");
console.log(`Total: ${s.total} items (${s.subtaskCount} subtasks, ${s.issueCount} issues)`);
if (s.subtaskCount > 0) {
  console.log(`Subtasks: ${s.subtaskReady} ready, ${s.subtaskMostlyReady} mostly ready, ${s.subtaskNeedsRefinement} needs refinement`);
}
if (s.issueCount > 0) {
  console.log(`Issues: ${s.issuesPendingContentReview} pending content review`);
}
console.log(`Output: ${outPath}`);
SCRIPT
node "$TMPDIR/script.mjs" "<JSON_FILE_PATH>" "$TMPDIR/dor-results.json"
```
