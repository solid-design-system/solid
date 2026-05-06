---
name: write-test-stories
description: "Create visual regression test stories for Chromatic for a Solid Design System component or style. Use for: Chromatic visual regression screenshots, screenshot combination matrices, test stories covering all visual state combinations."
---

# Write Test Stories

## When to Use

- Creating or updating visual regression test stories (`.test.stories.ts`) for Chromatic
- Adding screenshot coverage for new attributes, slots, or visual states
- Covering all visual state combinations in axis matrices

## File Locations

| File | Path | Purpose |
|------|------|---------|
| Component test stories | `packages/docs/src/stories/components/{name}.test.stories.ts` | Visual regression for Chromatic |
| Style test stories | `packages/docs/src/stories/styles/{name}.test.stories.ts` | Visual regression for Chromatic |

Where `{name}` is the tag without the `sd-` prefix (e.g., `button` for `sd-button`).

## Reference Examples

Before writing test stories, read an existing test story file:

- read `packages/docs/src/stories/components/badge.test.stories.ts`

## Imports

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

## Default export

```typescript
export default {
  title: 'Components/sd-{name}/Screenshots: sd-{name}',
  component: 'sd-{name}',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: '{FIGMA_URL}'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Content' }]),
  argTypes
};
```

Key rules:
- Title includes `Screenshots:` prefix under the component (e.g., `'Components/sd-badge/Screenshots: sd-badge'`)
- For styles: `'Styles/sd-{name}/Screenshots: sd-{name}'`
- `tags: ['!autodocs']` — no auto-documentation
- Controls are disabled

## What to cover

Create one combination story for each meaningful pair of visual attributes. At minimum cover:
- Every attribute × variant combination (e.g., variant × size, variant × disabled)
- Inverted × each visual attribute (with `templateBackgrounds`)
- Slot content variations (default slot, named slots)
- State toggles in isolation (disabled, loading, checked, selected)
- Interactive pseudo-states (hover, focus) if the component supports them

Use the axis API below to build these matrices.

## Combination stories using axis

Use `generateTemplate` with `axis` to create combination matrices:

```typescript
/**
 * All combinations of variant and size.
 */
export const VariantAndSize = {
  name: 'Variant × Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};
```

## Inverted combinations with background

```typescript
export const VariantAndInverted = {
  name: 'Variant × Inverted',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['', 'rgba(var(--sd-color-primary))']
        }
      }
    });
  }
};
```

## Slot screenshot stories

```typescript
export const Slots = {
  name: 'Slots',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'default',
          title: 'slot=...',
          values: [
            {
              value: `<span class='slot slot--border slot--background'>Content</span>`,
              title: 'default'
            }
          ]
        }
      },
      args
    });
  }
};
```

Use the `.slot`, `.slot--border`, `.slot--background` utility classes (from `preview-head.html`) to mock slot elements in visual tests.

---

## Checklist

Before finishing, verify:

- [ ] Test stories cover all visual attribute combinations (axis matrices)
- [ ] Test stories use `tags: ['!autodocs']` with controls disabled
- [ ] Title includes `Screenshots:` prefix
- [ ] Inverted combinations use `templateBackgrounds`
- [ ] Slot variations use `.slot` utility classes
- [ ] No duplicate coverage across stories
