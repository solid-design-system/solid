## Overview

`sd-table` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-table/slot

## Guidelines

### Use Cases

- Organize, structure, and compare data.
- Present tabular content in a scannable, analyzable format for dashboards, reports, or listings.

### Rules

### Interaction

- Enable interactive features like sorting and filtering to enhance data exploration.
- To indicate scrollability, you can use [sd-scrollable](./?path=/docs/components-sd-scrollable--docs).

### First Sticky Column

- Create a sticky first column by enabling the “shadow-right” option.
- Use this feature in wide tables to keep the first column in view while scrolling horizontally.

### Accessibility

- Use proper HTML table elements (e.g., <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>) to ensure screen readers can correctly interpret table headers and cell data.
- Ensure any interactive elements within cells (e.g., sorting or filtering controls) are keyboard accessible and have clear focus indicators.
- If the table is scrollable, confirm that the scrolling behavior and sticky columns preserve the logical reading order and remain navigable for screen reader users.
- Only use tables to display tabular data, not for layout purposes.

### Related Templates

- table--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
