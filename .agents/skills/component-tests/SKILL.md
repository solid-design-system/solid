---
name: component-tests
description: Write or repair SDS component behavior and regression tests using Web Test Runner and open-wc. Use for properties, events, keyboard/focus behavior, forms, slots, or accessibility assertions. For Chromatic visual regression and .test.stories.ts screenshot matrices, use storybook-authoring's Visual Test Stories instead; not CSS-only modules.
---

# Component Tests

## Choose the Right Coverage

- **Behavior tests**: `packages/components/src/components/{name}/{name}.test.ts`, run with Web Test Runner/open-wc. This skill owns assertions about properties, events, keyboard/focus, forms, slots, and accessibility.
- **Visual regression tests**: `packages/docs/src/stories/components/{name}.test.stories.ts`, captured by **Chromatic**. Use [storybook-authoring: Visual Test Stories](../storybook-authoring/SKILL.md#visual-test-stories) for screenshot matrices and appearance regressions.
- **Documentation**: `{name}.stories.ts`, `{name}.mdx`, and template stories explain APIs and usage. They are not the dedicated visual regression suite; follow Storybook authoring's documentation sections.

A change affecting both behavior and appearance needs both kinds of regression coverage. Neither screenshots nor documentation examples replace behavioral assertions.

## Select Existing Coverage

Read the affected `packages/components/src/components/{name}/{name}.test.ts`, the component, and the [runner configuration](../../../packages/components/web-test-runner.config.js). Use [badge tests](../../../packages/components/src/components/badge/badge.test.ts) for a simple reference or an existing form/keyboard control matching the behavior. Extend the owning test file rather than creating a parallel suite.

For a reported bug, write a check that fails for the observed behavior before changing implementation where practical. Describe the behavior precisely; mention an issue number when useful, but do not rely on the number as the assertion.

## Test Conventions

- Import `../../../dist/solid-components` to register the built bundle, not the source barrel. Import the component type with `import type` and use typed `fixture` calls.
- Use `expect`, `fixture`, and `html` from `@open-wc/testing`; import async helpers only as needed. Reuse the file's Sinon and event utilities.
- Group tests under the `sd-*` tag and behavior-oriented `describe`/`it` names. Cover applicable default values, property/attribute behavior, events/details, slots, disabled/loading states, and forms.
- Test user-observable behavior rather than internal reactive state, lifecycle methods, or exact Tailwind classes. Use shadow-root queries when observing the rendered native control is necessary; prefer existing test helpers over new abstractions.
- Exercise the relevant keyboard pattern, focus movement/restoration, accessible names, and ARIA state changes. Follow neighboring `expect(element).to.be.accessible()` coverage for supported variants. An automated accessibility assertion does not replace interaction tests.
- Await the actual event, Lit update, or observable state with existing helpers. Avoid arbitrary delays and increasing timeouts to hide failures. Restore spies/stubs and avoid leaking listeners or global state between tests.
- Keep appearance-only combinations in [Visual Test Stories](../storybook-authoring/SKILL.md#visual-test-stories), not in this behavioral suite or documentation examples.

## Execute

Commands run from the repository root; replace `button` with the component's filename/group:

```sh
pnpm --dir packages/components test.single.ci button
```

The script builds the bundle and already supplies `--group`; its final argument is the group value. It runs configured Chromium/WebKit browsers, not Jest. Use `pnpm --dir packages/components test.single button` only when watch mode is explicitly wanted.

Run the focused group after a regression fix and the required full gates before submission. Distinguish a failing assertion from a build/browser/environment blocker. Report the exact command and outcome; a test file's existence is not evidence that it passed.
