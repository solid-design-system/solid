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

1. Execute the **DoR Evaluation Scriptlet** below. It scores the **mechanical** criteria (Estimated, Dependencies, Open Questions) and produces two outputs:
   - A **mechanical scores table** with per-issue results. Subtask issues are fully scored here (2/2). Non-subtask issues show only their mechanical sub-score with content criteria marked as *"⏳ description review pending"*.
   - **Issue bodies for description review** — For each non-subtask issue, the scriptlet prints the issue body so you can evaluate it in step 2.

2. **Content evaluation** — For each **non-subtask** issue, read the issue body from the scriptlet output and evaluate the two content-based DoR criteria using the **Content Evaluation** below. Record a verdict (✅ met / ❌ not met) and a one-sentence rationale for each criterion.

3. **Produce the final report** — Merge the mechanical scores (step 1) with your content assessments (step 2) into a single table. Include:
   - DoR: e.g. "3/4, not yet estimated", "0/4", "4/4" or "2/2"
   - Questions: resolved / unresolved / not applicable / missing
   - Ready state: all criteria met → 🟢 Ready, all−1 → 🟡 Mostly ready, else → 🔴 Needs refinement
   - Required Actions: list missing criteria and one-sentence rationale from step 2

## Content Evaluation

Applies only to **non-subtask** issues (subtasks are fully scored by the scriptlet).

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

## DoR Evaluation Scriptlet

The following script scores the **mechanical** DoR criteria (Estimated, Dependencies, Open Questions) for all items from **get-project-items-by-query**. Content-based criteria (Business value, Clear & well-defined) are evaluated by the description review in step 2.

Write it to a temp file, replace `<JSON_FILE_PATH>`, then run with `node`.

```sh
cat << 'SCRIPT' > /tmp/eval-dor.mjs
import { readFileSync } from "fs";
const data = JSON.parse(readFileSync("<JSON_FILE_PATH>", "utf8"));

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

  // --- body parsing (mechanical signals only) ---
  const dorSection = body.match(/## DoR[\s\S]*?(?=\n## |$)/)?.[0] || "";
  const dorEstimated = /- \[x\].*estimated/i.test(dorSection);
  const dorDeps = /- \[x\].*dependenc/i.test(dorSection);

  const oqSection = body.match(/### Open Questions[\s\S]*?(?=\n## |\n### [^O]|$)/)?.[0] || "";
  const hasOQ = oqSection.length > 25;
  const isPlaceholder = /Question1|Question2/.test(oqSection);
  const hasUnresolved = hasOQ && (isPlaceholder || /- \[ \]/.test(oqSection));

  let oqStatus = "—";
  if (hasOQ && !hasUnresolved) oqStatus = "✅ resolved";
  else if (hasUnresolved) oqStatus = "❌ unresolved";

  // --- scoring ---
  const mechanical = [];
  mechanical.push({ name: "Estimated", met: dorEstimated || (sp != null && sp > 0) });
  mechanical.push({ name: "Dependencies", met: dorDeps });

  const mechMet = mechanical.filter(c => c.met).length;
  const mechMissing = mechanical.filter(c => !c.met).map(c => c.name);
  if (hasUnresolved) mechMissing.push("Resolve Open Questions");

  // Subtasks: fully scored (2 mechanical criteria)
  // Non-subtasks: 2 mechanical + 2 content-based (evaluated by content)
  const total = subtask ? 2 : 4;

  let readyState;
  if (subtask) {
    if (mechMet === total) readyState = "🟢 Ready";
    else if (mechMet >= total - 1) readyState = "🟡 Mostly ready";
    else readyState = "🔴 Needs refinement";
  } else {
    readyState = "⏳ description review pending";
  }

  return {
    num: item.content.number,
    url: item.content.html_url,
    title: item.content.title,
    body,
    subtask,
    mechScore: `${mechMet}/2`,
    dorTotal: total,
    oqStatus,
    readyState,
    mechMissing,
  };
}

// --- run ---
const results = data.items.map(evaluateDoR);
const subtasks = results.filter(r => r.subtask);
const nonSubtasks = results.filter(r => !r.subtask);

// Part 1: Mechanical scores table
console.log("## Mechanical Scores\n");
console.log("| Issue | Title | Type | Estimated | Dependencies | Open Questions | Mechanical | Ready state |");
console.log("|-------|-------|------|:---------:|:------------:|:--------------:|:----------:|-------------|");
for (const r of results) {
  const issue = `[#${r.num}](${r.url})`;
  const type = r.subtask ? "Subtask" : "Issue";
  const est = r.mechMissing.includes("Estimated") ? "❌" : "✅";
  const deps = r.mechMissing.includes("Dependencies") ? "❌" : "✅";
  console.log(`| ${issue} | ${r.title} | ${type} | ${est} | ${deps} | ${r.oqStatus} | ${r.mechScore} | ${r.readyState} |`);
}

if (subtasks.length > 0) {
  const ready = subtasks.filter(r => r.readyState === "🟢 Ready").length;
  const mostly = subtasks.filter(r => r.readyState === "🟡 Mostly ready").length;
  const needs = subtasks.filter(r => r.readyState === "🔴 Needs refinement").length;
  console.log(`\n**Subtasks (${subtasks.length}):** ${ready} ready, ${mostly} mostly ready, ${needs} need refinement`);
}
if (nonSubtasks.length > 0) {
  console.log(`\n**Non-subtask issues (${nonSubtasks.length}):** mechanical scores above — proceed to content evaluation (step 2).`);
}

// Part 2: Issue bodies for description review (non-subtasks only)
if (nonSubtasks.length > 0) {
  console.log("\n---\n");
  console.log("## Issue Bodies for description review\n");
  for (const r of nonSubtasks) {
    console.log(`### #${r.num} — ${r.title}\n`);
    const truncated = r.body.length > 3000 ? r.body.slice(0, 3000) + "\n\n[... truncated]" : r.body;
    console.log(truncated);
    console.log("\n---\n");
  }
}
SCRIPT
node /tmp/eval-dor.mjs
```
