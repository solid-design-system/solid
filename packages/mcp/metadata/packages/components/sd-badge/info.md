## Overview

`<sd-badge>` — Badges are used to draw attention and display statuses or counts.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-badge/variant
- sd-badge/size
- sd-badge/inverted
- sd-badge/overflow

### Key Properties

- prop.size: 'lg'|'md'|'sm', default='lg' — The badge's size.
- prop.variant: 'blue'|'green'|'red', default='blue' — The badge's variant.
- prop.inverted: boolean, default=false — Inverts the badge.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The badge's content.

### CSS Parts

- part.base: The badge's base wrapper.
- part.content: The badge's main content.

## Guidelines

### Use Cases

- Indicate the number of items selected, such as when using a filter.
- Show the count of newly added items.
- Display the number of messages received or tasks still pending.
- Present the quantity of items collected, like those in a shopping cart.

### Rules

### Content

- Use only numbers as content and a “+” for overflow, which is set by the application.

### Colour Variants

- Consistently apply one of the provided colour choices for a cohesive look.
- Use default variants for standard notifications to ensure consistency with the overall design.
- Select blue, green, or red notifications depending on the emphasis you desire. Blue notifications integrate smoothly with the overall design, green notifications attract more attention, and red notifications make notifications stand out the most. Don’t associate colour variants with success or error states.

### Placement and Formatting

- Place where it preserves relation to the element to which it is assigned, while remaining easy to see.
- Make sure it doesn’t cover any informative element or text.
- Refrain from altering the formatting of the number to prevent usability or accessibility issues.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Avoid using badges for purely decorative purposes.
- Make sure the badge is appropriately sized and placed so it does not obscure other important content or controls.
- If the badge conveys critical information, such as the number of items in a cart, ensure that this data is also provided in text elsewhere — such as in the cart details — to guarantee accessibility.
- If the badge content changes dynamically (e.g., a notification count), use ”aria-live” to announce these changes to screen reader users.

### Related Templates

- badge
- tab-group

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-status-badge

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
