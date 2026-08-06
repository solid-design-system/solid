## Overview

`sd-meta` – Used to display meta information like file size, date or other.

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-meta/variants
- sd-meta/size
- sd-meta/inverted
- sd-meta/pipe

## Guidelines

### Use Cases

- Provide relevant data points about files, media or articles such as file size, upload or publish date, user or author info.

### Rules

### Clarity & Consistency

- Use concise, standard formats for common meta elements and implement them consistently across the product.
- Maintain a logical order—date or time-related information often comes first, followed by file sizes or user details.

### Background and Emphasis

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.
- Use Primary-400 to de-emphasize text content

### Accessibility

- If meta information includes dates, file sizes, or user details, ensure they are labeled in a way that screen readers can recognize (e.g., “Published on July 10, 2025” rather than “07/10/25”). If a shorter version is needed due to space constraints, ensure the full label is provided over the accessible aria label.
- Avoid abbreviations or unclear shorthand unless they are commonly understood.
- Group or label meta items if multiple data points appear together (e.g., file size, date, author) so they’re perceived as related information.
