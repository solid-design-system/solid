## Overview

`sd-interactive` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-interactive/inverted
- sd-interactive/disabled
- sd-interactive/reset

## Guidelines

### Use Cases

- Offer a minimal, “quartery” button style with no padding or background for inline interactions or icon-only triggers.
- Provide a text-like clickable element without the visual bulk of standard buttons.
- Create subtle controls within tables (e.g., arrows)

### Rules

### Placement

- Avoid placing interactive elements too close together—users should easily distinguish and activate each link or button.
- Reserve this style for secondary or low-emphasis actions, rather than critical calls to action.

### Icons

- Display system icons before or after the interactive label, but not both.
- Use as an icon-only interactive element (e.g. expand and collapse arrows).

### Background and Icons

- Use with light background options of white, neutral-100 and primary-100 or if inverted with background primary.

### Accessibility

- Use a "title" attribute to provide a hint to the user of what the button does.
- Use the correct semantic element (e.g., <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code>) for each interactive purpose to ensure screen readers announce the function accurately.
- For icon-only: Include an ARIA label describing its function (e.g., “Expand section”) to ensure the element is accessible to screen readers.
- Keep enough space around the “quartery” button so users can easily tap or click it, preventing accidental inputs on adjacent elements and ensuring a minimum target size of at least 44×44 px.

### Related Templates

- interactive--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
