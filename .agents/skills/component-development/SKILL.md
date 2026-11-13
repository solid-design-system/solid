---
name: component-development
description: Create, extend, or fix SDS Lit web components in packages/components. Use for sd-* properties, slots, events, behavior, and component CSS; not standalone CSS modules, consumer application code, or icon synchronization.
---

# Component Development

## Establish the Change

1. Read the task, [component contribution guide](../../../packages/components/CONTRIBUTING.md), [authoring conventions](./references/conventions.md), and the affected component and test. Read one neighboring implementation only when it resolves a concrete question. Use repository source as the authority; do not assume an MCP server is available.
2. Resolve the component tag and directory: `sd-button` maps to `packages/components/src/components/button/`. Preserve unrelated working-tree changes and the existing public API unless a breaking change was requested.
3. Identify the observable behavior, required properties/slots/parts/events, and one focused check. For a bug, reproduce it and add a failing regression test before changing implementation when practical. Keep the fix local rather than refactoring its neighbors.

## New Components

Only scaffold when the component does not exist:

```sh
pnpm --dir packages/components plop
```

Enter the full `sd-*` tag. Inspect the generated source, test, documentation story, visual test story, and export in `packages/components/src/solid-components.ts`. Check the generator's actual output before creating additional files, including the overview MDX page. Do not overwrite an existing component with generated files.

Adapt from Shoelace only when the task calls for it; then read the [adaptation reference](./references/shoelace-adaptation.md).

## Existing Components

Do not run the generator. Update only the implementation and artifacts affected by the change:

| Change                                    | Follow-through                                                                        |
| ----------------------------------------- | ------------------------------------------------------------------------------------- |
| Property, variant, or default             | Decorator/type/default, render/styles, property docs, behavior tests and examples     |
| Slot, part, event, or CSS custom property | Implementation and corresponding public JSDoc; tests for observable behavior          |
| Dependency component                      | Direct component import and `@dependency`                                             |
| Accessibility                             | Established semantic/keyboard pattern, accessible name, focus and regression coverage |
| Layout or state styling                   | Existing visual matrix; add the missing state only                                    |

When adding a slot to a component that uses `HasSlotController`, register the slot name with that controller so slot changes trigger updates. Cover adding and removing its content after the initial render where this affects behavior.

## Verify and Finish

Use [component-tests](../component-tests/SKILL.md) for behavior coverage and [storybook-authoring](../storybook-authoring/SKILL.md) for public examples and visual states. Do not change documentation stories for a logic-only fix unless their documented behavior changes.

Run the touched component's group first, replacing `button` with its directory name:

```sh
pnpm --dir packages/components test.single.ci button
```

This command builds the test bundle and runs a named Web Test Runner group; do not append another `--group`. After focused checks pass, run the required `pnpm verify` from root before submission. Report failed or unavailable gates rather than declaring them passed.

Use [create-changeset](../create-changeset/SKILL.md) for release impact. Route breaking API changes to [write-migration-guide](../write-migration-guide/SKILL.md). Summarize changed behavior, tests, and remaining review needs. Do not commit, push, or open a PR unless explicitly requested.
