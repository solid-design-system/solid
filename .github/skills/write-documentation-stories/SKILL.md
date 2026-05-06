---
name: write-documentation-stories
description: "Create Storybook documentation stories for a Solid Design System component or style. Use for: Writing stories for new or existing components/styles, documenting component/style attributes and slots, interactive documentation samples."
---

# Write Documentation Stories

## When to Use

- Creating or updating documentation stories (`.stories.ts`) for a new or existing component or style
- Adding stories for new attributes, slots, or visual states

## File Locations

| File | Path | Purpose |
|------|------|---------|
| Component stories | `packages/docs/src/stories/components/{name}.stories.ts` | Interactive docs + samples |
| Style stories | `packages/docs/src/stories/styles/{name}.stories.ts` | Interactive docs + samples |

Where `{name}` is the tag without the `sd-` prefix (e.g., `button` for `sd-button`).

## Reference Examples

Before writing stories, read one existing story file matching the target's complexity:

**Component documentation stories:**
- **Simple**: read `packages/docs/src/stories/components/badge.stories.ts`
- **Medium**: read `packages/docs/src/stories/components/tag.stories.ts`
- **Complex**: read `packages/docs/src/stories/components/button.stories.ts`

**Style documentation stories:**
- **Simple**: read `packages/docs/src/stories/styles/mark.stories.ts`
- **Medium**: read `packages/docs/src/stories/styles/paragraph.stories.ts`
- **Complex**: read `packages/docs/src/stories/styles/headline.stories.ts`

## Story File Structure

### Imports

```typescript
import '../../../../components/src/solid-components';
import { html } from 'lit-html'; // only needed if stories use manual html`` templates
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-{name}');
const { overrideArgs } = storybookHelpers('sd-{name}');
const { generateTemplate } = storybookTemplate('sd-{name}');
```

### Default Export

**Component:**

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

**Style:**

```typescript
export default {
  title: 'Styles/sd-{name}',
  component: 'sd-{name}',
  tags: ['!dev', 'autodocs'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: '{FIGMA_URL}'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem ipsum' }),
  argTypes
};
```

Key rules:
- `tags`: Always `['!dev', 'autodocs']` for documentation stories
- Include Figma link in `parameters.design` if available
- Override default slot content via `overrideArgs` so the component/style renders meaningfully
- A top-level JSDoc comment above `export default` can document known browser issues

**Optional: Decorators** (for styles needing custom CSS, e.g., text alignment):

```typescript
export default {
  // ...
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template { text-align: left !important; }
      </style>
      ${story()}
    `
  ]
};
```

### Story Ordering (mandatory)

Follow this order for stories — skip any that don't apply:

1. **Default** — Interactive story with controls (always first)
2. **Variant** — All visual variants
3. **Open** — Open/closed state (if primary display toggle)
4. **Size** — All sizes
5. **Label** — Label variations
6. **Orientation / Layout** — Layout orientations
7. **Selected / Checked / Loading** — State toggles
8. **Removable / Closable** — Dismissal features
9. **Disabled** — Disabled state
10. **Visually Disabled** — Accessible disabled state (if component supports it)
11. **Inverted** — Dark/primary background variant
12. **Icon / Scrollbars / Hint / Description / Slots** — Named slot content
13. **As Link** — Link behavior (`href` attribute)
14. **Custom width/padding/styles** — Customization examples
15. **Alignments** — Alignment variations
16. **Overflow** — Edge-case content
17. **Required / Invalid** — Form validation states (must be adjacent if both exist)

### Default Story

**Component:**

```typescript
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
```

**Style (with HTML wrapper):**

```typescript
export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};
```

For styles, use `templateContent` with `%CLASSES%` and `%SLOT%` placeholders to wrap the style in the correct HTML element (e.g., `<h2>`, `<p>`, `<mark>`, `<table>`).

## How to Write Stories

### When to Write a Story

Write **one story per design-changing attribute or feature**. A "design-changing attribute" is any property, slot, or state that visually alters the component's or style's appearance.

**Always write a story for:**

- Each attribute that changes the visual appearance (e.g., `variant`, `size`, `orientation`)
- Boolean modifiers that toggle a visual state (e.g., `inverted`, `disabled`, `loading`, `selected`)
- Named slots that accept visual content (e.g., `icon-left`, `icon-right`)
- Link/navigation behavior (e.g., `href` turning a button into a link)
- Overflow or edge-case content (e.g., long text, max values)

**Do NOT write a separate story for:**

- Internal/non-visual attributes (e.g., `value` on a hidden input)
- Attributes already demonstrated as part of another story (avoid duplication)
- Purely programmatic APIs (events, methods) unless they have a visual component

### Story Titles and JSDoc

#### Titles (the `name` property)

Examples: `'Variant'`, `'Size'`, `'Inverted'`, `'As link'`, `'Icon'`, `'Disabled'`

Rules:
- Use short, noun-based titles (1–2 words). Never use verbose phrases or full sentences.
- Match the attribute/class name when possible
- Use Title Case for multi-word names: `'As link'`, `'Duration Indicator'`
- The `name` property is optional if the export name matches (but recommended for clarity)

#### JSDoc descriptions

Every story (except Default) **must** have a JSDoc comment describing the feature.

**Structure:**

```typescript
/**
 * Use the `{attribute}` attribute to {describe what it does}:
 *
 * - `value1` (default)
 * - `value2`
 * - `value3`
 */
```

**Sentence patterns:**

| Pattern | Example |
|---------|---------|
| Attribute with options | `Use the \`variant\` attribute to set the badge's variant:` |
| Boolean attribute | `Use the \`inverted\` attribute when displayed on primary background.` |
| Slot | `Use the \`icon-left\` slot to add system icons.` |
| CSS class with options | `Use the \`sd-headline--size-*\` classes for alternative appearances:` |
| Boolean CSS class | `Use the \`sd-headline--inverted\` class when displayed on primary background.` |
| Behavior | `Use the \`loading\` attribute to make a button busy.` |

**Copy-text rules:**

- Always start with "Use the `{name}` attribute/class/slot to ..."
- Always use backticks for code references: `` `lg` ``, `` `variant` ``
- Always mark defaults: `` `lg` (default) ``
- End sentences with a period
- Use a colon before bullet lists
- No punctuation at end of bullet items
- Separate usage hints with `__Hint:__` prefix
- Separate accessibility notes with `**Accessibility Hint:**` prefix
- Describe what each value *does* — not just its name

**Example:**

```typescript
/**
 * Use the `variant` attribute to change the theme of the notification:
 *
 * - `info` (default): suitable for notifications, conveying neutral information about an action
 * - `success`: imply a successful or positive outcome of an action
 * - `error`: indicate a destructive and irreversible outcome of an action
 * - `warning`: alert for possible issues or significant changes that must be considered
 */
```

### Sample Content Rules

- Use the attribute value as text: `<sd-button variant="primary">Primary</sd-button>`
- Use the component name for Default slot content: `'Button'`, `'Badge'`
- Use meaningful descriptive text for content-heavy components
- Show all values of an attribute side-by-side for comparison
- Use placeholder images from `./placeholders/images/` for media slots
- Never use generic filler text (e.g., "Click me", "Default") or external image URLs

### Story Patterns

#### Component patterns

**Attribute story:**

```typescript
/**
 * Use the `variant` attribute to set the badge's variant:
 *
 * - `blue` (default)
 * - `green`
 * - `red`
 *
 * __Hint:__ Select blue, green, or red depending on the emphasis you desire.
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

**Inverted story:**

```typescript
/**
 * Use the `inverted` attribute when displayed on primary background.
 */
export const Inverted = {
  name: 'Inverted',
  render: () => html`
    <div class="flex gap-12 bg-primary p-4">
      <sd-badge inverted>8</sd-badge>
      <sd-badge variant="green" inverted>8</sd-badge>
      <sd-badge variant="red" inverted>8</sd-badge>
    </div>
  `
};
```

**Disabled story:**

```typescript
/**
 * Use the `disabled` attribute to disable a button.
 */
export const Disabled = {
  render: () => html`
    <div class="flex gap-12">
      <sd-button variant="primary" disabled>Disabled</sd-button>
      <sd-button variant="secondary" disabled>Disabled</sd-button>
    </div>
  `
};
```

**Interactive story (with script):**

When a story requires JavaScript for demonstration (e.g., toggling states, event handling), include an inline `<script>` block with a unique ID selector:

```typescript
/**
 * Use the `closable` attribute to toggle a close button.
 */
export const Closable = {
  name: 'Closable',
  render: () => html`
    <sd-notification id="closable-example" open closable>Content</sd-notification>
    <script>
      var element = document.querySelector('#closable-example');
      element.addEventListener('sd-after-hide', () => {
        setTimeout(() => { element.open = true; }, 3000);
      });
    </script>
  `
};
```

Add `tags: ['skip-playwright']` if the story depends on timing or user interaction that cannot be captured in a screenshot.

#### Style patterns

**Attribute story:**

```typescript
/**
 * Use the `sd-headline--size-*` classes for alternative appearances:
 *
 * - 4xl is the default size
 * - `sd-headline--size-3xl`
 * - `sd-headline--size-xl`
 * - `sd-headline--size-lg`
 * - `sd-headline--size-base`
 */
export const Sizes = {
  render: () => html`
    <div class="flex flex-col gap-12">
      <p class="sd-headline">Lorem ipsum sic semper</p>
      <p class="sd-headline sd-headline--size-3xl">Lorem ipsum sic semper</p>
      <p class="sd-headline sd-headline--size-xl">Lorem ipsum sic semper</p>
      <p class="sd-headline sd-headline--size-lg">Lorem ipsum sic semper</p>
      <p class="sd-headline sd-headline--size-base">Lorem ipsum sic semper</p>
    </div>
  `
};
```

**Inverted story:**

```typescript
/**
 * Use the `sd-headline--inverted` class when displayed on primary background.
 */
export const Inverted = {
  render: () => html`
    <div class="bg-primary p-4">
      <h4 class="sd-headline sd-headline--inverted">Lorem ipsum sic semper</h4>
    </div>
  `
};
```

## Checklist

Before finishing, verify:

- [ ] Default story is first and uses `generateTemplate({ args })`
- [ ] Every design-changing attribute has its own story
- [ ] Stories follow the mandatory ordering
- [ ] Each story (except Default) has a JSDoc comment starting with "Use the ..."
- [ ] Default values are marked with `(default)` in option lists
- [ ] Code names use backticks in JSDoc
- [ ] Inverted stories have `bg-primary` background wrapper
- [ ] Sample text reflects what is being demonstrated
- [ ] `tags: ['!dev', 'autodocs']` is set in the default export
- [ ] No duplicate demonstrations across stories
