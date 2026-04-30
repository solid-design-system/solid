## Overview

`sd-flag` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-flag/variants

## Guidelines

### Use Cases

- Indicate the status of items with visual labels, such as “New,” “Featured,” “Expired,” or “Limited Stock”.
- Label content type, like “Video,” “Article,” or “Podcast” to help users quickly identify the nature of the content.

### Rules

### Label and Styling

- Keep flag text short and easily scannable. Long text disrupts layouts and diminishes the flag’s visual impact.
- Use the “&--variant” property to apply the color variant that best works on the background, keeping it consistent throughout the product.

### Chips and Flags

- [sd-chip](./?path=/docs/styles-sd-chip--docs) and sd-flag can be used for similar purposes. Use them consistently throughout your product and, if both are needed, be sure to define which categories each should be used for (e.g. a chip on an article teaser informs about its subject, the flag about the type of article).

### Chips and Tags

- Use only as a non-interactive element; for interactive elements (e.g., a dynamic filter), use [sd-tag](./?path=/docs/styles-sd-tag--docs) instead.

### Accessibility

- Present flags as static labels (no focus or click behavior) to ensure screen readers don’t treat them as actionable elements.
- If the flag conveys crucial information (e.g., “Expired”), include that text in the accessible name or description for the surrounding context.

### Related Templates

- flag--docs
- teaser--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
