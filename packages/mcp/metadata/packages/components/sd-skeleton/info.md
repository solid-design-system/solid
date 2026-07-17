## Overview

`<sd-skeleton>` — Used as a placeholder preview of the content before the data gets loaded to reduce load-time frustration.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-skeleton, example: variants

### Key Properties

- prop.variant: 'rectangular'|'circular', default='rectangular' — The shape variant when used without slotted content.

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
