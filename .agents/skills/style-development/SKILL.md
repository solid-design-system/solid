---
name: style-development
description: Create, extend, or fix standalone SDS CSS style modules in packages/styles, including BEM modifiers, tokens, responsive behavior, and generated documentation. Route Chromatic visual regression coverage to storybook-authoring's Visual Test Stories, separately from documentation stories. Not Lit shadow-root component styles or consumer app CSS.
---

# Style Development

## Visual Coverage Is Not Documentation

Style appearance regressions belong in `packages/docs/src/stories/styles/{name}.test.stories.ts`: these are **Chromatic visual regression tests**. Follow [storybook-authoring: Visual Test Stories](../storybook-authoring/SKILL.md#visual-test-stories), not its Documentation Stories section, when extending screenshot coverage.

The corresponding `{name}.stories.ts` and `{name}.mdx` explain public classes and usage. Maintain them when the documented contract changes, but do not treat documentation examples as a substitute for dedicated visual tests. Do not add a component behavior `.test.ts` file for a CSS-only module by default.

1. Read the [style contribution guide](../../../packages/styles/CONTRIBUTING.md), target module, and corresponding stories. Use [headline](../../../packages/styles/src/modules/headline.css) for variants or a closer existing module when it better matches the task.
2. Identify the requested selectors, variants, custom properties, themes, and mobile/desktop states. For a bug, reproduce the affected state first and choose the smallest regression check. Preserve unrelated edits and existing public classes.
3. Only for a module that does not exist, run the current generator:

   ```sh
   pnpm --dir packages/styles plop
   ```

   Enter the `sd-*` name and inspect the generated CSS, documentation and visual test stories, and import in `packages/styles/src/index.css` or `packages/styles/src/modules/prose.css`. Never scaffold over an existing module.

4. Implement using BEM names: `sd-{name}`, `sd-{name}--{modifier}`, and existing element conventions. Follow neighboring CSS nesting. Use token-connected Tailwind `@apply`, with mobile values as defaults and desktop breakpoint overrides. No arbitrary bracket values in `@apply`; custom CSS and semantic variable assignments belong outside it.
5. Maintain the JSDoc-like comment used to generate controls: `@name`, `@status`, `@since`, applicable `@variant { values }`, `@boolean`, and `@cssproperty`. Match actual selector names and defaults. Preserve recorded versions; do not invent a release version.
6. For icon children, follow the nearest module's selectors and use valid token utilities or plain CSS for custom sizes. Do not copy draft `@apply text-[3rem]` examples or introduce a new icon library. Route actual icon changes to [icon-maintenance](../icon-maintenance/SKILL.md).
7. Extend the affected variant combinations, responsive behavior, and theme/inverted states in the dedicated `.test.stories.ts` using [Visual Test Stories](../storybook-authoring/SKILL.md#visual-test-stories). Separately use [Documentation Stories](../storybook-authoring/SKILL.md#documentation-stories) and [Overview MDX](../storybook-authoring/SKILL.md#overview-mdx) when public usage or descriptions change.
8. Run `pnpm --dir packages/styles verify` and the relevant docs/browser checks; verify the affected Chromatic snapshots separately. A CSS/package check or Storybook build is not visual regression evidence. Run root `pnpm verify` before submission, and report unrun gates, including unavailable Chromatic results. Use [create-changeset](../create-changeset/SKILL.md) for release impact and [write-migration-guide](../write-migration-guide/SKILL.md) for breaking selector/token changes. Do not commit or push without instruction.
