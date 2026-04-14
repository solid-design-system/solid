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

A list of issues with their metadata (title, body, SP, Priority, Type, linked parents, comments count). The caller is responsible for fetching this data before invoking this skill.

## Definition of Ready (DoR)

Every issue must satisfy these criteria before it can be considered "ready":

1. **Business value** — The issue clearly states *why* it matters (user story, business justification, or impact description)
2. **Estimated by the team** — Story Points (SP) field is set (number > 0)
3. **Clear and well-defined** — Description is specific and actionable: expected behavior, acceptance criteria or DoD checklist, no unresolved placeholder open questions (e.g. "Question1 / Question2")
4. **Dependencies identified** — Linked parent issues, cross-references, or an explicit "no dependencies" statement

**Subtasks** (Design Subtask, Dev Subtask, Design Publish Subtask, Release Notes Subtask) — **2 DoR criteria**:

1. **Estimated by the team** — SP field is set (number > 0)
2. **Dependencies identified** — Dependencies documented

## Procedure

1. **For each issue, extract refinement signals:**
   - SP field set? (number > 0)
   - Priority field set?
   - Type field set?
   - DoR checkboxes: how many checked (`- [x]`) vs unchecked (`- [ ]`)?
   - Open Questions section present? Are questions still placeholders?
   - Acceptance criteria / DoD section present and filled in?
   - Body length and detail level
   - Comments count (indicates discussion / clarification)

3. **Score each issue** against the applicable DoR criteria:

   | Signal | Positive | Negative                                      |
   |--------|----------|-----------------------------------------------|
   | SP field | Set to a number > 0 | Missing or 0                                  |
   | Priority | Set | Missing                                       |
   | Description | Specific current/expected behavior, concrete solution proposal, screenshots/references | Vague, template-only text, very short body    |
   | Open Questions | Resolved or absent | Not resolved or placeholder questions present |
   | DoD/Acceptance | Present with real items | Missing or only template defaults             |
   | Dependencies | Parent issue linked or explicitly stated | No mention                                    |

4. **Classify** issues into:
   - **Ready** — All DoR criteria met, well-defined description
   - **Mostly ready** — All-but-one DoR criteria met; minor gaps only (e.g. just needs SP estimate)
   - **Needs refinement** — <= 50% of DoR criteria met; significant gaps

5. **Report** findings with per-issue evidence and specific actions needed to reach Ready. Include:
   - DoR: eg. "3/4, not yet estimated", "0/4", "4/4" or "2/2"
   - Questions: resolved / unresolved / not applicable / missing
   - Ready state: "Ready", "Mostly ready" or "Needs refinement"

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
