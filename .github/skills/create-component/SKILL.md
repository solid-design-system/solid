---
name: create-component
description: "Scaffold and implement a new Lit web component for the Solid Design System. Use for: new component implementation, component scaffolding, implementing a component from a GitHub issue spec or other task description, adding a new sd-* web component."
---

# Create Component

## When to Use

- Implementing a new web component from a GitHub issue (New Component Issue Template)
- Scaffolding a new `sd-*` component with all required files
- Adding a component to the Solid Design System component library

## Prerequisites

- The component name must start with `sd-` (e.g., `sd-button`, `sd-accordion`)
- A GitHub issue should exist with the component spec (Props, Slots, Parts, CSS Properties, Stories)
- If adapting from Shoelace, the source component should be identified

## Procedure

### Step 0: Read existing component for reference

Before implementing, read one existing component file matching your target complexity:
- **Simple**: read `packages/components/src/components/badge/badge.ts`
- **Complex with form control**: read `packages/components/src/components/button/button.ts`
- **With slots and events**: read `packages/components/src/components/accordion/accordion.ts`
- **Form input**: read `packages/components/src/components/input/input.ts`

### Step 1: Scaffold with plop

Run the plop generator to create the initial file structure:

```sh
cd packages/components && pnpm plop
```

When prompted for tag name, enter the full tag (e.g., `sd-button`). This creates:

| File | Location |
|------|----------|
| Component | `packages/components/src/components/{name}/{name}.ts` |
| Tests | `packages/components/src/components/{name}/{name}.test.ts` |
| Stories | `packages/docs/src/stories/components/{name}.stories.ts` |
| Test Stories | `packages/docs/src/stories/components/{name}.test.stories.ts` |
| Overview MDX | `packages/docs/src/stories/components/{name}.mdx` |
| Export | Updated `packages/components/src/solid-components.ts` |

Where `{name}` is the tag without the `sd-` prefix (e.g., `button` for `sd-button`).

### Step 1b: Check — should this component be adapted from a Shoelace component?

Check the task description for whether this component should be based on a Shoelace component. Signals: the task mentions Shoelace, references `sl-*`, or specifies a specific Shoelace basis.

**If NOT based on Shoelace** — skip this step, continue to Step 2.

**If based on Shoelace** — read the [Shoelace adaptation guide](./references/shoelace-adaptation.md) and follow it now. This replaces the plop-generated `{name}.ts` and `{name}.test.ts` with adapted Shoelace source code. The other plop-generated files (stories, test stories, MDX, export registration) remain unchanged.

After completing the adaptation guide, continue to Step 2 to apply the project's component conventions (JSDoc, properties, CSS, accessibility) to the adapted code.

### Step 2: Implement the component

Edit `packages/components/src/components/{name}/{name}.ts` following these conventions:

#### Imports

```typescript
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
```

Additional imports as needed:
- `import { state, query, queryAssignedElements } from 'lit/decorators.js'` — for internal state and DOM queries
- `import { watch } from '../../internal/watch'` — for property change watchers
- `import { ifDefined } from 'lit/directives/if-defined.js'` — for optional attributes
- `import { HasSlotController } from '../../internal/slot'` — for slot detection
- `import { LocalizeController } from '../../utilities/localize'` — for i18n
- `import { FormControlController } from '../../internal/form'` — for form-participating components
- `import { html, literal } from 'lit/static-html.js'` — when tag names are dynamic (e.g., button vs anchor)

#### Component imports

When using another component inside yours, import it directly and document the dependency:
```typescript
import '../icon/icon';
```
Add `@dependency sd-icon` to the JSDoc block.

#### Class decorator

Always use the project's `register-custom-element` wrapper, **never** Lit's built-in `@customElement`:

```typescript
@customElement('sd-my-component')
export default class SdMyComponent extends SolidElement {
```

#### JSDoc documentation block

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
 * @cssproperty --sd-component--variant--state-property - Description of the CSS custom property.
 */
```

JSDoc tag → Storybook mapping:
- `@property` → ATTRIBUTES section
- `@slot` → SLOTS section
- `@csspart` → CSS SHADOW PARTS section
- `@dependency` → PROPERTIES section (dependencies)
- `@event` → EVENTS section
- `@state` + `/** @internal */` → hidden from docs

CSS property naming convention: `--sd-{component}--{variant}--{state}-{css-property}`

#### Properties

Always reflect properties to attributes. Exceptions: rich data (Array/Object) or frequently-updated values (e.g., `currentDuration` in video). This is required for React 19 compatibility and DOM predictability.

```typescript
/** Description of the property. */
@property({ type: String, reflect: true }) variant: 'primary' | 'secondary' = 'primary';

/** Description of boolean property. */
@property({ type: Boolean, reflect: true }) disabled = false;

/** @internal */
@state() protected internalState = false;
```

- Mark internal state with `/** @internal */` so it's hidden from Storybook docs
- Use union types for constrained string values
- Set sensible defaults matching the "default" variant in Figma

#### Token System and Mobile First

The design system uses a two-layer token system defined in [`packages/tokens/src/tokens.json`](../../../packages/tokens/src/tokens.json):

- **`UI Core`** — primitive values: spacing scale, font sizes (`text-sm` through `text-4xl`), font weights, line heights, border widths, colors
- **`UI Semantic`** — named aliases that reference core tokens (e.g., `sd-headline.text-4xl` → `{text-4xl}` = 40px)

Tokens are compiled into CSS custom properties (`--sd-*`) and a Tailwind config (`tokens.tailwind.json`). Components consume tokens exclusively through **Tailwind classes** — never raw CSS values.

**Mobile tokens** are smaller variants for small viewports, defined as a nested `mobile` group alongside standard tokens:

| Token | `fontSize` | px |
|---|---|---|
| `sd-headline.text-4xl` | `{text-4xl}` | 40px |
| `sd-headline.mobile.text-4xl` | `{text-3xl}` | 32px |
| `sd-display.text-4xl` | `{text-4xl}` | 40px |
| `sd-display.mobile.text-4xl` | `{text-3xl}` | 32px |
| `body.normal.text-xl` | `{text-xl}` | 24px |
| `body.normal.mobile.text-xl` | `{text-lg}` | 20px |

**Mobile First**: 

The design system is generic across devices, but follows the Mobile First approach (e.g., mobile spacing/sizing tokens are the base, larger breakpoints override)
- Always use the mobile token value as the unsuffixed default Tailwind class, and override with the desktop token value at the appropriate breakpoint. The existing style modules use eg.  `sm:` for headlines and `lg:` for display:

```css
/* headline: mobile = text-3xl (32px), desktop sm: = text-4xl (40px) */
@apply text-3xl sm:text-4xl leading-tight;

/* display: mobile = text-3xl (32px), desktop lg: = text-4xl (40px) */
@apply text-3xl lg:text-4xl leading-tight;
```

- Never use desktop token size as the default and add a responsive override — always start small and scale up.

#### Accessibility

Every component must implement accessibility as a first-class concern:
- Use **semantic HTML elements** — prefer `<button>`, `<a>`, `<input>` over generic `<div>`/`<span>` for interactive elements
- Apply **ARIA landmarks, roles, states, and properties** where semantic HTML alone is insufficient (e.g., `role="tablist"`, `aria-expanded`, `aria-selected`)
- Ensure **keyboard navigation** — all interactive elements must be reachable via Tab (use correct `tabindex` sequence) and activatable via Enter/Space
- Provide **descriptive text and labels** for non-text content (e.g., `aria-label` on icon-only buttons, `label` on `sd-icon`)
- Announce **dynamic content changes** to screen readers via ARIA live regions (`aria-live="polite"` or `aria-live="assertive"`)

#### Render method

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

#### Static styles

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

#### Events

Emit events using the inherited `this.emit()` method:

```typescript
this.emit('sd-change', { detail: { value: this.value } });
```

Event naming convention: `sd-{event-name}` (e.g., `sd-blur`, `sd-focus`, `sd-change`).

### Step 3: Verify the export registration

Check that `packages/components/src/solid-components.ts` contains the new export. The plop generator adds it at the `/* plop:component */` marker:

```typescript
export { default as SdMyComponent } from './components/my-component/my-component.js';
/* plop:component */
```

### Step 4: Implement tests

Use the **write-component-tests** skill to create comprehensive tests.

### Step 5: Implement stories

Use the **write-component-stories** skill to create documentation stories and visual regression test stories.

### Step 6: Create changeset

Use the **create-changeset** skill to create a changeset describing the new component.

### Step 7: Verify

Run from the repository root:

```sh
pnpm verify
```

This runs linting, tests, and builds across all packages.

## CSS Conventions

These rules apply to all CSS inside components:

- **Tailwind-first**: Use TailwindCSS classes connected to design tokens for all styling
- **Convert BEM to Tailwind**: Replace BEM-style CSS with Tailwind utility classes where possible
- **`@apply` in `css` tagged templates**: Use `@apply` to generate CSS inside `css` tagged template literals
- **No arbitrary values in `@apply`**: Do NOT use `mt-[var(--spacing-xxl)]` or similar — this increases the main TailwindCSS bundle size. Add those custom values as plain CSS outside `@apply`
- **Figma consistency**: When a Figma variable name differs from the CSS property, directly assign the CSS variable:
  ```css
  background-color: var(--sd-color-icon-fill-neutral-800, var(--sd-color-neutral-800));
  ```
- **Icons in components**: Include in `components/icon/library.system.ts`. Before adding, [compress with SVGOMG](https://jakearchibald.github.io/svgomg/) and remove fills. Use via `sd-icon` with `library="system"` and `name="your-key"`, add `label` for accessibility.

## File Naming Conventions

- Component tag: `sd-my-component`
- Component directory: `packages/components/src/components/my-component/`
- Component file: `my-component.ts`
- Test file: `my-component.test.ts`
- Stories file: `packages/docs/src/stories/components/my-component.stories.ts`
- Test stories: `packages/docs/src/stories/components/my-component.test.stories.ts`
- Overview MDX: `packages/docs/src/stories/components/my-component.mdx`
- Class name: `SdMyComponent` (PascalCase of the tag name)
- Export name: `SdMyComponent`
