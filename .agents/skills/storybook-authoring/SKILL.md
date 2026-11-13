---
name: storybook-authoring
description: Write or update SDS Storybook artifacts in packages/docs. Use Visual Test Stories (.test.stories.ts) for Chromatic visual regression and screenshot matrices; use Documentation Stories (.stories.ts), overview MDX, and composed templates for documentation and usage guidance. Not component behavior unit tests or consumer application scaffolding.
---

# Storybook Authoring

Read the [docs contribution guide](../../../packages/docs/CONTRIBUTING.md) and one nearby example of the requested artifact. Paths below are relative to the repository root. Read component source or style metadata to verify APIs and defaults before documenting them; do not copy old draft examples blindly.

Existing documentation stories may still use the Storybook generation helpers. Treat that as legacy usage, not a pattern to copy: these helpers belong only in visual test stories.

## Choose the Artifact

**Separate testing from documentation by purpose and filename.** Dedicated **Chromatic visual regression tests** live in `.test.stories.ts`; ordinary `.stories.ts`, overview MDX, and composed templates are **documentation**. Select the matching section below before editing. A documentation example does not replace dedicated visual regression coverage, and a screenshot matrix does not replace usage guidance.

| Purpose                            | Location                                                 | Reference                                                                                |
| ---------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Explain a component feature        | `packages/docs/src/stories/components/{name}.stories.ts` | [Badge stories](../../../packages/docs/src/stories/components/badge.stories.ts)          |
| Explain a CSS module               | `packages/docs/src/stories/styles/{name}.stories.ts`     | [Headline stories](../../../packages/docs/src/stories/styles/headline.stories.ts)        |
| Test appearance with Chromatic     | Corresponding `{name}.test.stories.ts`                   | [Badge screenshots](../../../packages/docs/src/stories/components/badge.test.stories.ts) |
| Provide usage guidance             | Corresponding `{name}.mdx`                               | [Badge overview](../../../packages/docs/src/stories/components/badge.mdx)                |
| Show a composed real-world pattern | `packages/docs/src/stories/templates/{topic}.stories.ts` | Existing template closest to the requested interaction                                   |

Component behavior assertions belong in [component-tests](../component-tests/SKILL.md), not either Storybook category. Chromatic may also capture documentation/template stories; that does not make them the dedicated visual test suite or remove their documentation purpose.

## Documentation Stories

- Explain public APIs and usage with readable, focused examples. Do not add exhaustive screenshot matrices here; put visual regression combinations in [Visual Test Stories](#visual-test-stories).
- Write explicit, readable HTML examples using `html` from `lit-html`; component stories register `../../../../components/src/solid-components`. Do not use `storybookDefaults`, `storybookHelpers`, `storybookTemplate`, `generateTemplate`, or `generateScreenshotStory` in documentation stories, even if a neighboring legacy story does.
- Preserve the correct `Components/sd-*` or `Styles/sd-*` title and define metadata, args, and argTypes explicitly as needed. Keep interactive examples wired to their declared args through explicit bindings, not helper-generated templates; demonstrate distinct features in separate named exports.
- Prefer plain HTML attributes over Lit property bindings for public attribute APIs so examples remain copyable outside Lit. Set object/array values as JSON string attributes only when the component supports that conversion; use property bindings for genuinely property-only APIs.
- Follow the established sample order: default, variants/open, size, labels, orientation, state, disabled, inverted, slots/icons, customization, alignment, required/invalid. Omit irrelevant categories rather than creating empty stories.
- Write concise sample JSDoc using actual attribute/class names, one explanatory sentence, and `(default)` on the actual default option. Keep list items unpunctuated and use realistic content that demonstrates the feature.
- `.slot`, `.slot--border`, and related placeholders are Storybook-only utilities defined in [preview-head.html](../../../packages/docs/.storybook/preview-head.html); do not suggest them as consumer CSS.

## Visual Test Stories

- These are **tests for Chromatic**, not documentation samples or component behavior unit tests. Use `packages/docs/src/stories/components/{name}.test.stories.ts` for components and `packages/docs/src/stories/styles/{name}.test.stories.ts` for CSS modules.
- Reuse [the Storybook helpers](../../../packages/docs/scripts/storybook/helper.ts) here: `storybookDefaults`, `storybookHelpers`, `storybookTemplate`, and `storybookUtilities` provide test metadata, args, generated matrices, and combined screenshots. This helper-based generation is for visual regression tests only, not documentation.
- Follow the existing `Components/sd-*/Screenshots: sd-*` or `Styles/sd-*/Screenshots: sd-*` title, `tags: ['!autodocs']`, and disabled controls. Keep testing matrices separate from the interactive documentation stories.
- Use existing `generateTemplate` axes for meaningful variant/size/state combinations, with `templateBackgrounds` for inverted states. Avoid redundant Cartesian products that add no coverage.
- Reuse `storybookUtilities.generateScreenshotStory` for the combined screenshot story, following the reference's exports, tags, and controls settings.
- Cover affected slots, parts, themes, responsive layouts, and focus/disabled states where relevant. Check whether the existing matrix already captures a bug before adding another story.
- Make asynchronous/interactive states deterministic using the existing Storybook/Playwright setup. Do not add `skip-playwright`, disable snapshots, or remove assertions merely because the story has interaction. Preserve an intentional existing exception only with its rationale and alternative coverage.

## Overview MDX

Reuse the current overview structure: imports from `@storybook/addon-docs/blocks`, the local `OverviewFormatter`, the corresponding stories, a `links` object, and the `content` string. Follow the closest existing overview for headings and wrapper props rather than inventing a second layout.

The `content` string is a JavaScript template literal: unescaped backticks terminate it, and literal interpolation sequences must also be escaped. Prefer the existing `<code>` markup for inline code, escaping HTML element names such as `<code>&lt;h2&gt;</code>`, rather than inserting raw Markdown backticks into the string.

Include the default example, description, relevant component/template links, usage guidance, and applicable accessibility/browser notes. Verify Storybook link targets. Use only supplied or verified Figma URLs; leave unavailable optional links absent/empty as the local pattern permits and report the gap. Do not fabricate Figma node IDs or repeat obsolete browser warnings.

## Template Stories

- Start from the closest existing template. Compose actual SDS components/styles into a realistic use case rather than another API variant matrix. Write explicit Lit HTML; do not use the visual-test generation helpers for template documentation.
- Use supplied designs and repository tokens. If Figma or SDS MCP capabilities are available, discover their current tool names; otherwise use local source, metadata, and examples. MCP access is optional and host-specific tool prefixes are not stable APIs.
- Use verified public icon names for public template content; do not expose `_internal` as a consumer icon catalog. Reuse existing placeholder assets and responsive layout conventions.
- Keep stories self-contained: unique story-prefixed IDs, selectors scoped to that story, no shared global state or leaking listeners. Follow the local script/lifecycle pattern and verify interaction after rerender rather than assuming an inline script executes on every render.
- Add accessibility/interaction coverage for the behavior introduced. Do not automatically disable Playwright or Chromatic for new interactive templates.

## Validate

Run the relevant checks from [the docs scripts](../../../packages/docs/package.json), starting with `pnpm --dir packages/docs ts.verify` when TypeScript changes. Build/render the changed stories and run their relevant browser/visual checks; use `pnpm --dir packages/docs verify` for the package gate and root `pnpm verify` before submission. The docs test command's prerequisites come from its current runner; do not assume a dev server alone runs every test.

Report validation by purpose: documentation build/render checks for examples and links; Storybook browser/Playwright checks for interaction/accessibility; **Chromatic snapshot results for visual regression**. Passing one does not prove the others passed. For `.test.stories.ts` changes, inspect the affected Chromatic snapshots/diffs when available and report unavailable or pending results explicitly.

Report which stories rendered, which interactions/visual states were checked, and which gates were unavailable. Do not claim a screenshot was reviewed merely because Storybook built. Use [create-changeset](../create-changeset/SKILL.md) when a docs deployment or package release is intended.
