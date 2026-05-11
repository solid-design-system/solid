---
name: write-template-stories
description: "Create Storybook template stories for Solid Design System templates. Use for: writing real-world usage examples that combine multiple sd-* components, building template stories in packages/docs/src/stories/templates/, showcasing end-to-end UI patterns with realistic content."
---

# Write Template Stories

## What This Is For

Template stories live in `packages/docs/src/stories/templates/` and demonstrate **real-world, end-to-end UI patterns** that combine multiple `sd-*` components into a coherent, production-realistic example. They are **not** component API demos — they are reference implementations a developer could drop into a product.

## File Location

`packages/docs/src/stories/templates/{name}.stories.ts`

`{name}` = topic name in kebab-case (e.g., `login-form`, `product-card`, `data-table`).

---

## Before Writing: Gather Design & Component Context

### 1. Get the Figma Design

Use the **Figma MCP** (`figma/get_design_context`) to retrieve the design for the template.

- Extract layout structure, spacing, colours, and which components are used
- Identify the Figma node URL — it will be embedded in the story's `design` parameter
- Match Tailwind tokens from the design (use `solid-design-system/token-info` for the correct class names)

### 2. Discover Available Components & Styles

Use the **Solid MCP** tools to understand what is available:

- `solid-design-system/components` — list all `sd-*` components; call with a specific component name to get its full API (properties, slots, events, CSS parts)
- `solid-design-system/styles` — list all `sd-*` CSS styles; call with a specific style name to see class names
- `solid-design-system/templates` — browse existing template compositions for inspiration and to avoid duplication
- `solid-design-system/icon-search` — find the correct icon name for `<sd-icon name="...">` — always search with EN + DE synonyms

### 3. Read Reference Examples

Read 1–2 existing template story files before writing, choosing ones that are structurally similar to the target:

| Pattern | Reference file |
|---------|----------------|
| Single-component enhancement | `tooltip.stories.ts` |
| Form composition | look for a form-based template |
| Card / data display | look for a card or list template |

```
packages/docs/src/stories/templates/
```

---

## File Structure

### Imports

```typescript
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
```

> **No** `storybookDefaults`, `storybookHelpers`, or `storybookTemplate` imports — template stories use raw `html` templates only.

### Default Export

```typescript
export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/{TopicName}',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: '{FIGMA_NODE_URL}'  // retrieved from Figma MCP
    }
  }
};
```

---

## Story Rules

### Each Story Is Self-Contained

Every story renders in the **same browser window** as all other stories (shared `window` context in Storybook). This means:

- **Every interactive element that uses an `id` must use a unique ID** — prefix with the story export name in kebab-case (e.g., `id="login-form-email"`, not `id="email"`)
- **Every `<script>` block must use `document.getElementById('{story-prefix}-{element}')` or `document.querySelector('#story-prefix-element')`** — never bare tag selectors that could match elements from other stories
- **Do not rely on shared global state** — each story must work independently regardless of render order

### Use Realistic Content

Templates must look like production UIs:

- Use real, domain-appropriate label text (e.g., "Email address", "Amount in EUR", not "Label" or "Placeholder")
- Use realistic values for inputs, options, and text (e.g., "John Smith", "€ 12,500", "Submit application")
- Use placeholder images from `./placeholders/images/` for image slots
- Use `sd-icon` with names from `solid-design-system/icon-search` — never `library="_internal"`
- Apply appropriate layout with Tailwind utility classes matching the Figma design

### Combine Components Meaningfully

A template story must demonstrate **component collaboration**, not a single component in isolation:

- Minimum 2 different `sd-*` components per story (exceptions: when wrapping a single component with meaningful context like a form field with label, tooltip, hint, and validation)
- Show realistic slot composition (labels, tooltips, hints, icons, badges)
- Show interactive state where relevant (open dropdowns, active tabs, filled forms)

### One Story Per Distinct Use Case

Each named export is a distinct, realistic scenario — not a variant matrix:

| ✅ Good story names | ❌ Bad story names |
|---|---|
| `InputWithTooltip` | `InputVariant1` |
| `LoginFormWithValidation` | `DefaultForm` |
| `ProductCardWithBadge` | `CardExample` |

---

## Story Patterns

### Simple Composition

```typescript
export const InputWithTooltip = {
  name: 'Input with Tooltip',
  render: () => html`
    <sd-input id="input-with-tooltip-field" class="w-[400px] py-6">
      <label slot="label">Liquid assets</label>
      <sd-tooltip
        slot="tooltip"
        placement="top-start"
        size="sm"
        content="Available cash assets"
      ></sd-tooltip>
    </sd-input>
  `
};
```

### Form Composition

```typescript
export const ContactForm = {
  name: 'Contact Form',
  render: () => html`
    <form id="contact-form-root" class="flex flex-col gap-4 w-[480px]" novalidate>
      <sd-input id="contact-form-name" required>
        <label slot="label">Full name</label>
      </sd-input>
      <sd-input id="contact-form-email" type="email" required>
        <label slot="label">Email address</label>
      </sd-input>
      <sd-textarea id="contact-form-message">
        <label slot="label">Your message</label>
      </sd-textarea>
      <sd-button type="submit" variant="primary">Send message</sd-button>
    </form>
    <script type="module">
      const form = document.getElementById('contact-form-root');
      form.addEventListener('submit', e => {
        e.preventDefault();
      });
    </script>
  `
};
```

### Interactive Story (with Script)

When a story requires JavaScript interaction, always:
1. Use `<script type="module">` — module scope prevents re-declaration errors across Storybook re-renders
2. Use `const`/`let` freely inside module scripts
3. Use ID-prefixed selectors to avoid cross-story collisions
4. Add `tags: ['skip-playwright']` if the story depends on timing or interaction state

```typescript
export const DismissibleNotification = {
  name: 'Dismissible Notification',
  tags: ['skip-playwright'],
  render: () => html`
    <sd-notification id="dismissible-notif" open closable>
      Your changes have been saved.
    </sd-notification>
    <script type="module">
      const dismissibleNotif = document.getElementById('dismissible-notif');
      dismissibleNotif.addEventListener('sd-after-hide', () => {
        setTimeout(() => { dismissibleNotif.open = true; }, 3000);
      });
    </script>
  `
};
```

---

## JSDoc on Named Stories

Every named story export should have a brief JSDoc explaining the real-world scenario it represents:

```typescript
/**
 * A search input combined with a dropdown filter — suitable for data table toolbars
 * or list filtering UIs.
 */
export const SearchWithFilter = { ... };
```

---

## Story Title Naming

Use PascalCase for export names; the `name` property should be title-case prose:

```typescript
export const ProductCardWithRating = {
  name: 'Product Card with Rating',
  ...
};
```

---

## Checklist

- [ ] Figma design retrieved via Figma MCP; `design.url` set in default export
- [ ] Component APIs verified via `solid-design-system/components` before use
- [ ] Icons resolved via `solid-design-system/icon-search` (never `library="_internal"`)
- [ ] Tailwind tokens verified via `solid-design-system/token-info`
- [ ] Existing templates checked via `solid-design-system/templates` to avoid duplication
- [ ] Every `id` attribute is unique and story-prefixed
- [ ] `<script type="module">` used for all inline scripts (`const`/`let` are safe in module scope)
- [ ] `<script>` blocks use story-prefixed `getElementById` selectors
- [ ] Content is realistic — no filler text or generic placeholders
- [ ] Each story combines components meaningfully (≥ 2 `sd-*` components or rich slot composition)
- [ ] `chromatic: { disableSnapshot: true }` set in default export parameters
- [ ] No `storybookDefaults`/`storybookHelpers`/`storybookTemplate` imports
- [ ] `tags: ['skip-playwright']` added to stories with timing/interaction dependencies
