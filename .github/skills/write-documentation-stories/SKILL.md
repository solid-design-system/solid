---
name: write-documentation-stories
description: "Create Storybook documentation stories for a Solid Design System component or style. Use for: Writing stories for new or existing components/styles, documenting component/style attributes and slots, interactive documentation samples."
---

# Write Documentation Stories

## File Locations

| Target | Path |
|--------|------|
| Component | `packages/docs/src/stories/components/{name}.stories.ts` |
| Style | `packages/docs/src/stories/styles/{name}.stories.ts` |

`{name}` = tag without `sd-` prefix (e.g., `button` for `sd-button`).

## Reference Examples

Read one existing file matching the target's complexity before writing:

| Complexity | Component | Style |
|------------|-----------|-------|
| Simple | `badge.stories.ts` | `mark.stories.ts` |
| Medium | `tag.stories.ts` | `paragraph.stories.ts` |
| Complex | `button.stories.ts` | `headline.stories.ts` |

---

## File Structure

### Imports

```typescript
import '../../../../components/src/solid-components';
import { html } from 'lit-html'; // only if stories use manual html`` templates
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-{name}');
const { overrideArgs } = storybookHelpers('sd-{name}');
const { generateTemplate } = storybookTemplate('sd-{name}');
```

### Default Export

```typescript
export default {
  title: 'Components/sd-{name}',   // or 'Styles/sd-{name}'
  component: 'sd-{name}',
  tags: ['!dev', 'autodocs'],
  parameters: {
    ...parameters,
    design: { type: 'figma', url: '{FIGMA_URL}' }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Content' }]),
  argTypes
};
```

---

## When to Write a Story

Write **one story per design-changing attribute or feature** — anything that visually alters appearance.

**Always write a story for:**
- Attributes that change appearance (`variant`, `size`, `orientation`)
- Boolean modifiers (`inverted`, `disabled`, `loading`, `selected`)
- Named slots that add visual content (`icon-left`, `icon-right`)
- Link/navigation behavior (`href`)
- Overflow / edge-case content

**Skip a story for:**
- Internal/non-visual attributes (e.g., `value` on a hidden input)
- Attributes already covered in another story
- Purely programmatic APIs (events, methods) with no visual output

---

## Story Ordering

Follow this order (skip non-applicable):

1. Default
2. Variant
3. Open
4. Size
5. Label
6. Orientation / Layout
7. Selected / Checked / Loading
8. Removable / Closable
9. Disabled
10. Visually Disabled
11. Inverted
12. Icon / Scrollbars / Hint / Description / Slots
13. As Link
14. Custom width / padding / styles
15. Alignments
16. Overflow
17. Required / Invalid (adjacent if both exist)

---

## Story Titles

Use short, noun-based names (1–2 words). Match the attribute/class name when possible.

| ✅ Do | ❌ Don't |
|------|---------|
| `'Variant'` | `'Badge Variant Options'` |
| `'As link'` | `'Using as a link element'` |
| `'Inverted'` | `'On dark background'` |

---

## JSDoc Copy Rules

Every story except **Default** must have a JSDoc comment.

**Template:**
```
Use the `{attribute}` attribute to {describe what it does}:

- `value1` (default)
- `value2`
```

**Sentence starters by type:**

| Type | Pattern |
|------|---------|
| Attribute with values | `Use the \`variant\` attribute to set the badge's variant:` |
| Boolean attribute | `Use the \`inverted\` attribute when displayed on primary background.` |
| Slot | `Use the \`icon-left\` slot to add system icons.` |
| CSS class with options | `Use the \`sd-headline--size-*\` classes for alternative appearances:` |
| Boolean CSS class | `Use the \`sd-headline--inverted\` class when displayed on primary background.` |

**Formatting rules:**
- Always start with "Use the `{name}` ..."
- Wrap all code references in backticks
- Mark defaults: `` `lg` (default) ``
- End sentences with a period; no punctuation on bullet items
- Use `__Hint:__` for usage notes, `**Accessibility Hint:**` for a11y notes

**Example:**
```typescript
/**
 * Use the `variant` attribute to change the notification theme:
 *
 * - `info` (default): neutral information about an action
 * - `success`: positive outcome
 * - `error`: destructive and irreversible outcome
 * - `warning`: possible issues that must be considered
 */
```

---

## Sample Content Rules

- Use the attribute value as label text: `<sd-button variant="primary">Primary</sd-button>`
- Show all values of an attribute side-by-side
- Use placeholder images from `./placeholders/images/` for media slots
- Never use generic filler ("Click me", "Default") or external image URLs

---

## Story Patterns

### Default

**Component:**
```typescript
export const Default = {
  name: 'Default',
  render: (args: any) => generateTemplate({ args })
};
```

**Style:**
```typescript
export const Default = {
  render: (args: any) => generateTemplate({
    options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
    args
  })
};
```

### Attribute story
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

### Inverted story
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
    </div>
  `
};
```

### Interactive story (with script)
```typescript
/**
 * Use the `closable` attribute to toggle a close button.
 */
export const Closable = {
  name: 'Closable',
  render: () => html`
    <sd-notification id="closable-example" open closable>Content</sd-notification>
    <script>
      var el = document.querySelector('#closable-example');
      el.addEventListener('sd-after-hide', () => setTimeout(() => { el.open = true; }, 3000));
    </script>
  `
};
```

Add `tags: ['skip-playwright']` if the story relies on timing or interaction that cannot be captured in a screenshot.

---

## Checklist

- [ ] Default story is first and uses `generateTemplate({ args })`
- [ ] One story per design-changing attribute/feature
- [ ] Stories follow the mandatory ordering
- [ ] Each story (except Default) has a JSDoc starting with "Use the ..."
- [ ] Default values marked with `(default)`
- [ ] Code references use backticks in JSDoc
- [ ] Inverted stories have `bg-primary` wrapper
- [ ] `tags: ['!dev', 'autodocs']` set in default export
- [ ] No duplicate demonstrations across stories
