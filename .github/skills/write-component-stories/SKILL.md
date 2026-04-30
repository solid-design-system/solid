---
name: write-component-stories
description: "Create Storybook documentation stories and visual regression test stories for a Solid Design System component. Use for: writing stories, creating component documentation, adding Storybook samples, visual regression tests, Chromatic screenshots."
---

# Write Component Stories

## When to Use

- Creating Storybook stories for a new component
- Adding documentation stories for component features
- Creating visual regression test stories for Chromatic
- Writing the overview MDX documentation page

## File Locations

| File | Path | Purpose |
|------|------|---------|
| Stories | `packages/docs/src/stories/components/{name}.stories.ts` | Interactive docs + samples |
| Test Stories | `packages/docs/src/stories/components/{name}.test.stories.ts` | Visual regression for Chromatic |
| Overview MDX | `packages/docs/src/stories/components/{name}.mdx` | Component documentation page |

Where `{name}` is the component tag without `sd-` prefix.

## Storybook Conventions

The Storybook is organized into sections: DOCS, PACKAGES, COMPONENTS, UTILITIES, STYLES, TEMPLATES, LEGAL. Component docs live in `packages/docs/src/stories/packages/components`.

### Description format
- Start descriptions with "Used to ..." (inspiration from [Shoelace](https://shoelace.style))
- End sentences with a period (except bullet list items)
- Use code attribute/class names: `lg` not "large"
- Mark defaults: `lg (default)`
- If no code name for default, describe it: "lg is the default value"
- Use a colon before bullet lists (e.g., "Use the size attribute to change a button's size:")
- No punctuation marks at end of bullet items (e.g., `lg (default)`)

### Sample content rules
- Samples should emphasize what is shown — if showing "Inverted", put "Inverted" in the text
- First sample shows slots (in Figma, only if no interaction needed)
- Use the component name when possible (e.g., "Button") instead of "Default"
- For components with media slots (teasers, cards, etc.), use placeholder images from `./placeholders/images/` (e.g., `./placeholders/images/architecture.jpg`, `./placeholders/images/collaboration.jpg`, `./placeholders/images/generic.jpg`). See `packages/placeholders/README.md` for the full list.

### Screenshot tests
- All screenshot tests in `{component}.test.stories.ts`
- Create combination stories covering all visual state combinations
- Ask: "How many visual states can this component have and in which combinations?"

### Migration guides
- Component Library (`ui-...`): place in `packages/docs/src/stories/docs/migration/`, name by old component (e.g., `ui-button.mdx`)
- Breaking changes: place in `packages/docs/src/stories/packages/{PKG}/Migration/from v{OLD}/`

## Procedure

### Step 0: Read an existing story for reference

Before writing stories, read one existing story file matching the target component's complexity:
- **Simple**: read `packages/docs/src/stories/components/badge.stories.ts`
- **Complex**: read `packages/docs/src/stories/components/button.stories.ts`
- **Test stories**: read `packages/docs/src/stories/components/badge.test.stories.ts`
- **Overview MDX**: read `packages/docs/src/stories/components/badge.mdx`

## Documentation Stories (`{name}.stories.ts`)

### Imports

```typescript
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-{name}');
const { overrideArgs } = storybookHelpers('sd-{name}');
const { generateTemplate } = storybookTemplate('sd-{name}');
```

### Default export (story metadata)

```typescript
export default {
  title: 'Components/sd-{name}',
  component: 'sd-{name}',
  tags: ['!dev', 'autodocs'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: '{FIGMA_URL}'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Content' }]),
  argTypes
};
```

Key points:
- `title`: Always `'Components/sd-{name}'`
- `tags`: Always `['!dev', 'autodocs']` for documentation stories
- Include the Figma design link in `parameters.design`
- Override default slot content via `overrideArgs` when the component needs content to render

### Story ordering (mandatory)

Follow this order for stories — skip any that don't apply:

1. **Default** — Interactive story with controls, must be first
2. **Variant** / **Open** — Shows all variants
3. **Size** — Shows all sizes
4. **Label** — Label variations
5. **Orientation** — Layout orientations
6. **Selected / Checked / Loading / Removable** — State toggles
7. **Disabled** — Disabled state
8. **Inverted** — Inverted/dark background state
9. **Icon / Scrollbars / Hint / Description / Slots** — Additional content areas
10. **Custom width/padding/styles** — Customization examples
11. **Alignments** — Alignment variations
12. **Required / Invalid** — Form validation states (must be adjacent if both exist)

### Story format

#### Interactive Default story (always first)

```typescript
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
```

#### Static sample stories

Each story has a JSDoc comment describing the feature:

```typescript
/**
 * Use the `variant` attribute to set the badge's variant:
 *
 * - `blue` (default)
 * - `green`
 * - `red`
 */
export const Variant = {
  name: 'Variant',
  render: () => html`
    <div class="flex gap-12">
      <sd-badge variant="blue">8</sd-badge>
      <sd-badge variant="green">8</sd-badge>
      <sd-badge variant="red">8</sd-badge>
    </div>
  `
};
```

#### Inverted stories (require background)

```typescript
export const Inverted = {
  name: 'Inverted',
  render: () => html`
    <div class="flex gap-12 bg-primary p-4">
      <sd-component inverted>Content</sd-component>
    </div>
  `
};
```

## Test Stories (`{name}.test.stories.ts`)

These stories are for **Visual Regression Testing on Chromatic**. They cover all visual state combinations.

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

### Default export

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

Key differences from documentation stories:
- Title includes `Screenshots:` prefix under the component
- `tags: ['!autodocs']` — no auto-documentation
- Controls are disabled

### What to cover

Create one combination story for each meaningful pair of visual attributes. At minimum cover:
- Every attribute × variant combination (e.g., variant × size, variant × disabled)
- Inverted × each visual attribute (with `templateBackgrounds`)
- Slot content variations (default slot, named slots)
- State toggles in isolation (disabled, loading, checked, selected)
- Interactive pseudo-states (hover, focus) if the component supports them

Use the axis API below to build these matrices.

### Combination stories using axes

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

### Inverted combinations with background

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

### Slot screenshot stories

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

## Overview MDX (`{name}.mdx`)

```mdx
import { Meta, Canvas } from '@storybook/addon-docs/blocks';
import { OverviewFormatter } from '../../Overview.jsx';

import * as SdComponentStories from './{name}.stories';

export const links = {
  'storybook-docs': './?path=/docs/components-sd-{name}--docs',
  'figma-library': '{FIGMA_LIBRARY_URL}',
  'figma-docs': '{FIGMA_DOCS_URL}'
};

export const content = `
# {ComponentTitle}

Used to {description starting with a verb}.

<DefaultStory />

<DocumentationLinks links=${JSON.stringify(links, null, 2)} />

#### Related Components

[sd-related-component](./?path=/docs/components-sd-related-component--docs)

#### Related Templates

[Template Name](./?path=/docs/templates-template-name--docs)

### Common Use Cases

- Use case 1
- Use case 2

### Usage Guidelines

#### Guideline Title

- Guideline details

### Accessibility Information

- Accessibility details

Visit <sd-link href="https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS-%E2%80%93-Component-Library?node-id=38262-58412&t=1qhfYXrbNhSCYCzZ-4" target="_blank">Solid DS Best Practices for WCAG Compliance</sd-link> to learn more about our accessibility standards.`;

<Meta title="Components/sd-{name}/Overview" />

<OverviewFormatter story={SdComponentStories.Default}>{content}</OverviewFormatter>
```
