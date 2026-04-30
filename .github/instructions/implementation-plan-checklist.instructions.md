---
description: "Use when planning the implementation of a GitHub issue. Covers the pre-implementation checklist and plan structure required before producing an implementation plan."
---

# Implementation Planning

## 1. Pre-Implementation Checklist

Before producing a plan, evaluate the issue against the checklist below. Check all items in the **Universal** section, then check the items for the **detected issue type**.

For each gap found, formulate a specific, actionable question and ask the user before proceeding. Do not make assumptions about missing information.

### Universal Checklist (all issue types)

- [ ] **Business value** — Does the issue clearly state _why_ it matters? (user story, business justification, or impact description)
- [ ] **Scope boundaries** — Is it clear what is in scope and what is not? Are affected components/areas listed?
- [ ] **Acceptance criteria** — Are there concrete, testable acceptance criteria or a Definition of Done checklist?
- [ ] **Dependencies identified** — Are linked parent issues, cross-references, or an explicit "no dependencies" statement present?
- [ ] **Estimated by the team** — Is the Story Points (SP) field set?
- [ ] **Open Questions resolved** — Are all items in the "Open Questions" section answered? Check if comments contain answers to originally open questions.
- [ ] **Comment signals reviewed** — Have decisions, scope changes, or additional specs from comments been incorporated?

### New Component / New Style Component

- [ ] **Figma documentation link** — Is a Figma design link present and accessible?
- [ ] **Props table complete** — Are all props listed with Name, Type, Default, and Description?
- [ ] **CSS Properties defined** — Are CSS custom properties listed?
- [ ] **Parts defined** — Are component parts (shadow DOM parts) listed?
- [ ] **Slots defined** — Are slot names and purposes listed?
- [ ] **Stories listed** — Are the required Storybook stories specified?
- [ ] **Shoelace adaptation** — Is it clear whether this component adapts a Shoelace component? If yes, which one?
- [ ] **Breaking changes** — Is it clear whether this is a new component or replaces an existing one?

### Bugfix

- [ ] **Current behavior described** — Is the wrong behavior clearly documented?
- [ ] **Expected behavior described** — Is the correct behavior clearly stated?
- [ ] **Reproduction steps** — Are steps to reproduce specific and actionable?
- [ ] **Affected parts identified** — Are the component names, templates, features or other affected parts clearly specified in the title, body, or comments?
- [ ] **Technical root cause** — Is there a hint about a technical cause? (optional but helpful)
- [ ] **Breaking change assessment** — Could the fix change existing behavior for other consumers?

### Dev Feature / Dev Subtask

- [ ] **Suggested solution** — Is a concrete solution approach described?
- [ ] **Technical context** — Are relevant components, APIs, or system areas mentioned?
- [ ] **Breaking changes** — Is it clear whether the change is breaking or non-breaking?
- [ ] **Migration impact** — If breaking, is there guidance on migration or backward compatibility?

### Subtasks (label `Subtask`)

Subtasks only require:

- [ ] **Estimated by the team** — SP field is set
- [ ] **Dependencies identified** — Dependencies documented
- [ ] **Description clear** — The task is specific and actionable

## 2. Produce the Implementation Plan

After all checklist gaps are resolved (or explicitly deferred by the user), produce a structured plan covering:

1. **Issue reference** — Issue number (e.g. `#1234`) and title. This is required so downstream agents can match the plan to the correct issue.
2. **Summary** — One paragraph describing what will be implemented and why
3. **Affected files** — List of files that will be created or modified
4. **Implementation steps** — Ordered list of concrete steps
5. **Testing strategy** — What tests need to be written or updated
6. **Stories / documentation** — What Storybook stories or docs need to be created
7. **Changeset** — Package name, bump type (major/minor/patch), and summary line
8. **Verification** — How to verify the implementation is correct

## 3. After Planning is Complete

When the plan is finalized:

1. Save the plan to session memory at `/memories/session/plan.md`.
2. Route to the correct implementation agent using the `agent-routing` instructions. Resolve the detected issue type against the routing table and tell the user which agent to switch to.
3. End with the routing output format specified in the `agent-routing` instructions.
