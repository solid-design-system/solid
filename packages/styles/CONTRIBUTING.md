# Contributing

## Quick Start

If you are working on a style, follow the steps below:

1. Create new styles via `cd packages/styles && pnpm plop`. This creates:
   - A new CSS file: `./packages/styles/src/modules/*.css`
   - A new documentation story: `./packages/docs/src/stories/styles/*.stories.ts`
   - A new test story: `./packages/docs/src/stories/styles/*.test.stories.ts`
   - An update to either `./packages/styles/src/index.css` or `./packages/styles/src/modules/prose.css` to include the new style.
2. Add JSDocs-like comments to your code to create controls for storybook automatically. This can be done by creating comments, as described below.

## Code Guidelines

When writing CSS, ensure to:

1. Use [BEM](https://getbem.com) methodology for your class names.
2. Use Tailwind's `@apply` directive to apply Tailwind classes to your CSS.

## Documenting

When adding comments to your modules, please add a list of all variants of your module to your css file. Comments like this will take care that storybooks documentation is automatically updated:

```css
/**
 * This is a demo class.
 * @name sd-demo
 * @status stable
 * @since 1.0
 * @variant { NO_DEFAULT | left | right } sd-demo--... The position.
 * @variant { xl | 3xl } sd-demo--size-... The size.
 * @boolean { false } sd-demo--inverted Inverts the demo.
 */
```

This will create documentation for the following classes:

- `sd-demo`
- `sd-demo--left`
- `sd-demo--right`
- `sd-demo--size-xl`
- `sd-demo--size-3xl`
- `sd-demo--inverted`

_ You can always refer to the existing components and styles to familiarize yourself with the workflow!_

## Testing

Ensure to edit your test stories in `./packages/docs/src/stories/styles/*.test.stories.ts` to include all variants of your module. These are used for Visual Regression Testing on Chromatic.

Ask yourself: _"How many visual states can this component or style have and in which combinations?"_ Attempt to write stories that concisely present these visuals states.

Have a look at the existing test stories to familiarize yourself how to create screenshot tests that create stories depending on the variants of your module.

![image](https://github.com/solid-design-system/solid/assets/39494579/b6b4c3c4-47b0-4497-a1f6-1778e3109c03)
