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

A list of issues with their metadata:
- **Required**: title, body, SP, Priority, Labels, linked parents, comments count
- **Required**: detected issue type and corresponding template file name (see the Issue Type Mapping in `get-project-items-by-query` skill)

The caller is responsible for fetching this data and detecting the issue type before invoking this skill.

## Issue Type–Aware Evaluation

Different issue types have different DoR criteria. The applicable template file determines what to check.

### Detecting what to check

1. Use the detected issue type (from labels + title prefix) to identify the template file in `.github/ISSUE_TEMPLATE/`.
2. **Read the template file** to extract the current:
   - **DoR section** — which checklist items are expected
   - **Open Questions section** — whether the template includes one
3. Evaluate the issue body against these template-defined expectations.

### DoR criteria by type

**Standard issues** (Bugfix, Simple Design/Dev Feature, Documentation, Performance, Test, CI, Chore, Epic) — **4 DoR criteria**:

1. **Business value** — The issue clearly states *why* it matters
2. **Estimated by the team** — SP field is set (number > 0)
3. **Clear and well-defined** — Description is specific and actionable
4. **Dependencies identified** — Linked parent issues or explicit "no dependencies"

**Subtasks** (Design Subtask, Dev Subtask, Design Publish Subtask, Release Notes Subtask) — **2 DoR criteria**:

1. **Estimated by the team** — SP field is set (number > 0)
2. **Dependencies identified** — Dependencies documented

### Additional checks (type-dependent)

**Open Questions** — If the template defines an Open Questions section (Design Subtask, Dev Subtask, Design Publish Subtask, New Component, New Style Component), flag any unresolved placeholder questions (e.g. "Question1 / Question2") as a refinement gap.

## Procedure

1. **For each issue, read the matching template** at `.github/ISSUE_TEMPLATE/<template-file>.md` to determine the expected DoR items and whether Open Questions apply.

2. **Extract refinement signals:**
   - SP field set? (number > 0)
   - Priority field set?
   - DoR checkboxes in issue body: how many checked (`- [x]`) vs unchecked (`- [ ]`)?
   - Open Questions section present? Are questions still placeholders?
   - Body length and detail level
   - Comments count (indicates discussion / clarification)

3. **Score each issue** against the applicable DoR criteria:

   | Signal | Positive | Negative |
   |--------|----------|----------|
   | SP field | Set to a number > 0 | Missing or 0 |
   | Priority | Set | Missing |
   | Description | Specific current/expected behavior, concrete solution proposal, screenshots/references | Vague, template-only text, very short body |
   | Open Questions | Resolved or absent | Placeholder "Question1/Question2" still present |
   | Dependencies | Parent issue linked or explicitly stated | No mention |

4. **Classify** issues into:
   - **Mostly ready** — All or all-but-one DoR criteria met; minor gaps only
   - **Needs refinement** — Two or more DoR criteria unmet; significant gaps

5. **Report** findings with per-issue evidence and specific actions needed to reach Ready. Include:
   - The detected issue type
   - Which DoR criteria apply (2 or 4) and which are met/unmet
   - Open Questions status (if applicable): resolved / unresolved / not applicable

## Examples of Well-Refined Issues

- Clear current vs expected behavior with screenshots
- Reproducible steps listed
- Technical root-cause hint provided
- Explicit scope (e.g. affected component list)
- Concrete solution proposal with rationale (e.g. accessibility guidelines)

## Examples of Not-Refined Issues

- Body is mostly copy-pasted template with placeholder questions
- No SP, Priority, or Type set
- No acceptance criteria beyond template defaults
- Very short description with only a link to a parent issue
- Open Questions section contains only "Question1 / Question2"
