# Solid Design System — Agent Instructions

These instructions apply to all AI agents working in this workspace.

## Implementing GitHub Issues

When asked to implement a GitHub issue (e.g. "implement issue #1234", "fix #456"), always use the **Github Issue Implementer** agent. Do not attempt to implement issues directly — the Issue Implementer reads the issue, detects its type, and delegates to the correct specialized agent.

## When Planning a GitHub Issue Implementation

When asked to _plan_ the implementation of a GitHub issue, use the **Plan** agent. The issue data is provided in the conversation from the **Github Issue Implementer** agent handoff. The Plan agent will automatically load the pre-implementation checklist and plan structure from the `implementation-plan-checklist` instructions.

## Repository Context

This is the **Solid Design System** (`solid-design-system/solid`) — a Lit-based web component library. Key facts for planning:

- Components live in `packages/components/src/components/`
- Styles live in `packages/styles/src/`
- Stories live in `packages/docs/src/stories/`
- Components use the `register-custom-element` decorator, never Lit's `@customElement`
- CSS uses Tailwind `@apply` with design tokens
- Style components use BEM methodology
- Scaffolding uses `plop` generators
- Changesets are required for all user-facing changes
- Tests use `@open-wc/testing` + `sinon`
- Visual regression uses Chromatic via Storybook
