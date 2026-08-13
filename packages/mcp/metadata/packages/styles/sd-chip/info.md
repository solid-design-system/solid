## Overview

`sd-chip` – Used as a small, non-interactive label that represents a status, property or meta-data.

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-chip/color
- sd-chip/shade
- sd-chip/size
- sd-chip/outlined
- sd-chip/rounded

## Guidelines

### Use Cases

- Display selected items or categories within [sd-teaser](./?path=/docs/components-sd-teaser--docs), such as chosen filters, tags, or interests.
- Indicate attributes of items, such as “New,” “Featured,” or “Verified”.
- Communicate user roles, like “Moderator” or “Admin”.

### Rules

### Label and Styling

- Keep chip text short and easily scannable. Long text disrupts layouts and diminishes the chip’s visual impact.
- Avoid overuse. Too many chips in one area can create visual clutter.
- Use the “&--color” and “&--shade” properties to apply the color that best works on the background, and “&--outlined” for a border-only style, keeping it consistent throughout the product.

### Chips and Tags

- Use only as a non-interactive element; for interactive elements (e.g., a dynamic filter), use [sd-tag](./?path=/docs/components-sd-tag--docs) instead.

### Corner Style

- Use rounded="none" when sd-chip sits directly on top of an image or a container with no padding, so the rounded corners aren’t cut off at the edge. For all other placements, use rounded="default".

### Accessibility

- Since chips are non-interactive, ensure they are marked in a way that prevents them from receiving focus.
- If the chip text is already conveyed in the teaser body, consider hiding the chip from screen readers using aria-hidden="true" to prevent repeating the same information.
- If the chip adds unique context, it should be part of the teaser’s overall accessible description.

### Related Templates

- chip--docs
- tab-group--docs
- status-badge--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
