## Overview

`<sd-skeleton>` — Skeleton loaders are used as placeholder previews of content before data gets loaded.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-skeleton/variants

### Key Properties

- prop.variant: 'rectangular'|'circular', default='rectangular' — The shape variant when used without slotted content.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The skeleton's content. When provided, adapts to the content's dimensions. When empty, displays according to the variant property.

### CSS Parts

- part.base: The component's base wrapper.

## Guidelines

### Use Cases

- Represent the loading state of specific UI elements like titles, images, and body content on detailed pages.

- Show placeholders for repeating elements such as items in a product grid or a list of search results.

### Rules

**Content and Styling**

- Ensure skeleton screens closely resemble the layout of the final content to provide a smooth transition once the content is loaded.
- Use a consistent skeleton style across similar components for uniformity.
- Make skeletons non-interactive placeholders, not functional components.

**Behavior and Interaction**

- Use skeletons only for content that takes longer than one second to load, avoiding quick flashes.
- Avoid showing skeletons for elements that aren't actually loading, as this can confuse or mislead users.
- Do not rely solely on skeletons for loading feedback; consider providing text like "Loading" for better accessibility.
- Provide smooth, subtle transitions from the skeleton to the loaded content.

**Performance**

- Ensure skeletons are lightweight to avoid overloading the page with complex or animated elements that can affect performance.

### Accessibility

- Use aria-hidden="true" on skeleton placeholders so screenreaders skip them.
- Provide a meaningful status update while skeletons are visible (e.g., “Loading…” or a live region announcing updates) to inform assistive technology users that content is still being retrieved.

### Related Templates

- skeleton

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
