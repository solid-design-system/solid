---
name: write-test-stories
description: "Create visual regression test stories for Chromatic for a Solid Design System component or style. Use for: Chromatic visual regression screenshots, screenshot combination matrices, test stories covering all visual state combinations."
---

# Write Visual Regression Test Stories

## What this is for

Test stories (`.test.stories.ts`) drive Chromatic visual regression screenshots. They use axis matrices to capture every combination of visual attributes in a single story — no interactive controls, no docs.

## File Locations

| Target | Path |
|--------|------|
| Component | `packages/docs/src/stories/components/{name}.test.stories.ts` |
| Style | `packages/docs/src/stories/styles/{name}.test.stories.ts` |

## Reference Example

Read `packages/docs/src/stories/components/badge.test.stories.ts` before writing.

---

## File Structure

### Imports

```typescript
import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-{name}');
const { overrideArgs } = storybookHelpers('sd-{name}');
const { generateTemplate } = storybookTemplate('sd-{name}');
const { generateScreenshotStory } = storybookUtilities;
```

### Default Export

```typescript
export default {
  title: 'Components/sd-{name}/Screenshots: sd-{name}',
  // Styles: 'Styles/sd-{name}/Screenshots: sd-{name}'
  component: 'sd-{name}',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: { type: 'figma', url: '{FIGMA_URL}' }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Content' }]),
  argTypes
};
```

---

## What to Cover

Every test story file must cover:

| Story | What to test |
|-------|-------------|
| Variant × Size | Core attribute matrix |
| Variant × Disabled | State overlay on all variants |
| Variant × Inverted | Dark-background variant (with `templateBackgrounds`) |
| Slots | Visual slot content using `.slot` utility classes |
| Pseudo-states | Hover / focus (if component is interactive) |

> **Avoid redundant stories.** If an attribute or state combination is already fully captured in an existing axis matrix story, do **not** add a separate story for it. Each story must add unique visual coverage that is not already present in the x/y axis combinations.

---

## Axis Matrices — the Variant Multiplier

Use the `axis` API on `generateTemplate` to build a 2D grid of variants. This is the primary tool for VRT coverage.

**Basic matrix:**
```typescript
export const VariantAndSize = {
  name: 'Variant × Size',
  render: (args: any) => generateTemplate({
    axis: {
      x: { type: 'attribute', name: 'variant' },
      y: { type: 'attribute', name: 'size' }
    },
    args
  })
};
```

The axis values are read automatically from the component's `argTypes`. To override:
```typescript
x: { type: 'attribute', name: 'inverted', values: [false, true] }
```

---

## Inverted Combinations (Dark Background)

Use `templateBackgrounds` to alternate row backgrounds when testing inverted states:

```typescript
export const VariantAndInverted = {
  name: 'Variant × Inverted',
  render: (args: any) => generateTemplate({
    axis: {
      x: { type: 'attribute', name: 'variant' },
      y: { type: 'attribute', name: 'inverted', values: [false, true] }
    },
    args,
    options: {
      templateBackgrounds: {
        alternate: 'y',                              // switch bg per row
        colors: ['', 'rgba(var(--sd-color-primary))'] // light, then primary
      }
    }
  })
};
```

---

## Slot Stories

Use the `.slot`, `.slot--border`, `.slot--background` utility classes (defined in `preview-head.html`) to mock slot content visually:

```typescript
export const Slots = {
  name: 'Slots',
  render: (args: any) => generateTemplate({
    axis: {
      x: {
        type: 'slot',
        name: 'default',
        title: 'slot=...',
        values: [
          {
            value: `<span class="slot slot--border slot--background">Content</span>`,
            title: 'default'
          }
        ]
      }
    },
    args
  })
};
```

---

## Checklist

- [ ] Title includes `Screenshots:` prefix
- [ ] `tags: ['!autodocs']` and `controls: { disable: true }`
- [ ] All visual attribute pairs have axis matrix stories
- [ ] Inverted combinations use `templateBackgrounds`
- [ ] Slot variations use `.slot` utility classes
- [ ] No duplicate coverage across stories
