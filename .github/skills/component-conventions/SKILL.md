---
name: component-conventions
description: "Coding conventions for Solid Design System Lit web components. Use for: reference when implementing or modifying any sd-* web component. Covers imports, class decorator, JSDoc, properties, tokens, accessibility, render method, static styles, events, CSS rules, and file naming."
---

# Component Conventions

All `sd-*` web components in `packages/components/src/components/` must follow these conventions.

---

## Change-Type Reference

When extending an existing component, use this table to identify everything that needs updating:

| Change type | What to modify |
|---|---|
| New property/variant | Add `@property`, update `render()` with `cx()` conditional, add JSDoc `@summary`/`@since` update |
| New slot | Add `<slot>` to template, add `@slot` to JSDoc, update `HasSlotController` if used |
| New CSS part | Add `part="..."` attribute in template, add `@csspart` to JSDoc |
| New event | Call `this.emit('sd-event-name')`, add `@event` to JSDoc |
| New CSS custom property | Add `@cssproperty` to JSDoc, use the variable in static styles |
| New dependency component | Add import (e.g. `import '../icon/icon'`), add `@dependency` to JSDoc |
| Accessibility improvement | Update ARIA attributes, keyboard handling, or semantic elements |
| Icon integration | Add `sd-icon` import, add icon styling in `static styles` |

---

## Imports

```typescript
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
```

Additional imports as needed:

| Import | When to use |
|---|---|
| `import { state, query, queryAssignedElements } from 'lit/decorators.js'` | Internal state and DOM queries |
| `import { watch } from '../../internal/watch'` | Property change watchers |
| `import { ifDefined } from 'lit/directives/if-defined.js'` | Optional attributes |
| `import { HasSlotController } from '../../internal/slot'` | Slot detection |
| `import { LocalizeController } from '../../utilities/localize'` | i18n |
| `import { FormControlController } from '../../internal/form'` | Form-participating components |
| `import { html, literal } from 'lit/static-html.js'` | Dynamic tag names (e.g., button vs anchor) |

When using another component inside yours, import it directly and add `@dependency` to the JSDoc:

```typescript
import '../icon/icon';
```

---

## Class Decorator

Always use the project's `register-custom-element` wrapper — **never** Lit's built-in `@customElement`:

```typescript
@customElement('sd-my-component')
export default class SdMyComponent extends SolidElement {
```

---

## JSDoc Documentation Block

The JSDoc block above the class auto-generates Storybook documentation. Include all applicable tags:

```typescript
/**
 * @summary Short description of the component's intended use. Starts with a noun or verb.
 * @documentation https://solid.union-investment.com/[storybook-link]/{name}
 * @status experimental | stable
 * @since {version}
 *
 * @dependency sd-icon
 *
 * @event sd-event-name - Description of when this event is emitted.
 *
 * @slot - The default slot description.
 * @slot slot-name - Description of the named slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The label element.
 *
 * @cssproperty --sd-component--variant--state-property - Description.
 */
```

JSDoc tag → Storybook mapping:

| Tag | Storybook section |
|---|---|
| `@property` | ATTRIBUTES |
| `@slot` | SLOTS |
| `@csspart` | CSS SHADOW PARTS |
| `@dependency` | PROPERTIES (dependencies) |
| `@event` | EVENTS |
| `@state` + `/** @internal */` | Hidden from docs |

CSS property naming convention: `--sd-{component}--{variant}--{state}-{css-property}`

---

## Properties

Always reflect properties to attributes. Exceptions: rich data (Array/Object) or frequently-updated values (e.g., `currentDuration` in video). Required for React 19 compatibility and DOM predictability.

```typescript
/** Description of the property. */
@property({ type: String, reflect: true }) variant: 'primary' | 'secondary' = 'primary';

/** Description of boolean property. */
@property({ type: Boolean, reflect: true }) disabled = false;

/** @internal */
@state() protected internalState = false;
```

- Use union types for constrained string values
- Set sensible defaults matching the "default" variant in Figma
- Mark internal state with `/** @internal */` so it's hidden from Storybook docs

---

## Token System and Mobile First

The design system uses a two-layer token system:

- **`UI Core`** — primitive values: spacing scale, font sizes (`text-sm` through `text-4xl`), font weights, line heights, border widths, colors
- **`UI Semantic`** — named aliases that reference core tokens (e.g., `sd-headline.text-4xl` → `{text-4xl}` = 40px)

Tokens are compiled into CSS custom properties (`--sd-*`) and a Tailwind config. Components consume tokens exclusively through **Tailwind classes** — never raw CSS values.

**Mobile First**: use the mobile token as the unsuffixed default Tailwind class, override with the desktop token at the breakpoint:

```css
/* headline: mobile = text-3xl (32px), desktop sm: = text-4xl (40px) */
@apply text-3xl sm:text-4xl leading-tight;

/* display: mobile = text-3xl (32px), desktop lg: = text-4xl (40px) */
@apply text-3xl lg:text-4xl leading-tight;
```

Never use the desktop token as the default and add a responsive override — always start small and scale up.

---

## Accessibility

Every component must implement accessibility as a first-class concern:

- Use **semantic HTML elements** — prefer `<button>`, `<a>`, `<input>` over generic `<div>`/`<span>` for interactive elements
- Apply **ARIA roles, states, and properties** where semantic HTML alone is insufficient (e.g., `role="tablist"`, `aria-expanded`, `aria-selected`)
- Ensure **keyboard navigation** — all interactive elements must be reachable via Tab and activatable via Enter/Space
- Provide **descriptive labels** for non-text content (e.g., `aria-label` on icon-only buttons, `label` on `sd-icon`)
- Announce **dynamic content changes** via ARIA live regions (`aria-live="polite"` or `aria-live="assertive"`)

---

## Render Method

Use `classix` (`cx`) for composing Tailwind classes conditionally:

```typescript
render() {
  return html`
    <div
      part="base"
      class=${cx(
        'inline-flex items-center justify-center',
        {
          primary: 'bg-primary text-white',
          secondary: 'bg-white text-primary border border-primary',
        }[this.variant],
        this.disabled && 'opacity-50 pointer-events-none'
      )}
    >
      <slot></slot>
    </div>
  `;
}
```

---

## Static Styles

Always spread `SolidElement.styles` — never remove it:

```typescript
static styles = [
  ...SolidElement.styles,
  css`
    :host {
      @apply inline-flex;
    }

    :host([size='md'])::part(base) {
      @apply px-2 py-1;
    }
  `
];
```

---

## Events

Emit events using the inherited `this.emit()` method:

```typescript
this.emit('sd-change', { detail: { value: this.value } });
```

Naming convention: `sd-{event-name}` (e.g., `sd-blur`, `sd-focus`, `sd-change`).

---

## CSS Rules

- **Tailwind-first**: Use Tailwind classes for all token-connected styling
- **Convert BEM to Tailwind**: Replace BEM-style CSS with Tailwind utility classes where possible
- **`@apply` in `css` tagged templates**: Use `@apply` inside `css` template literals only
- **No arbitrary values in `@apply`**: Do NOT use `@apply mt-[var(--spacing-xxl)]` — add custom values as plain CSS outside `@apply` (avoids bloating the Tailwind bundle)
- **Figma consistency**: When a Figma variable name differs from the CSS property, assign the CSS variable directly:
  ```css
  background-color: var(--sd-color-icon-fill-neutral-800, var(--sd-color-neutral-800));
  ```
- **Icons**: Add to `components/icon/library.system.ts`. Compress with [SVGOMG](https://jakearchibald.github.io/svgomg/) and remove fills before adding. Use via `<sd-icon library="system" name="your-key">`, always add `label` for accessibility.

---

## File Naming

| Item | Convention |
|---|---|
| Component tag | `sd-my-component` |
| Directory | `packages/components/src/components/my-component/` |
| Component file | `my-component.ts` |
| Test file | `my-component.test.ts` |
| Stories file | `packages/docs/src/stories/components/my-component.stories.ts` |
| Test stories | `packages/docs/src/stories/components/my-component.test.stories.ts` |
| Overview MDX | `packages/docs/src/stories/components/my-component.mdx` |
| Class name | `SdMyComponent` (PascalCase of tag) |
| Export name | `SdMyComponent` |
