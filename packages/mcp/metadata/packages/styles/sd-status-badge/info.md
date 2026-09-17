## Overview

`sd-status-badge` – Used as a visual, non-interactive indicator of a status related to a particular element.

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-status-badge/variants
- sd-status-badge/sizes

## Guidelines

### Use Cases

- Provide a quick, non-interactive indicator of an element’s status (e.g., info, success, error, warning).
- Indicate the current stage or progress of a process or workflow, such as "in progress" or "completed".
- Show the availability status of resources or personnel, like "online" or "offline."
- Label items in lists, dashboards, or summaries with clear visual cues.

### Rules

### Variants

Choose the variant based on what the status means, so users instantly recognize what's being communicated: success for positive outcomes, warning for issues needing attention, error for failed or destructive outcomes, info for neutral notifications, and neutral for inactive or default states.

### Size

Choose the size based on context density: lg for standalone or prominent indicators, md for denser layouts like tables and lists, and sm for very tight spaces such as data grids or inline text. Note: Only use size sm which comes without an icon if the label alone is unambiguous and statuses remain distinguishable in grayscale.

### Placement

Keep the badge clearly visible and avoid overlapping critical content or interactive elements.

### Background

Use light background options like white, neutral-100 or primary-100.

### Accessibility

- Never rely on color alone to show status – add a text label, or an icon if the label isn't self-explanatory (abbreviations, codes, multi-locale use).
- Size sm: Only use size sm if the label alone is crystal clear, single-locale, and statuses stay distinguishable in grayscale. Otherwise, size up.
- Integrate the status badge’s information into the accessible name or description of the related element to ensure that its meaning is programmatically connected to the item it describes.
- Status badge icon with text – Make sure that the badge icon is hidden from screen readers, as the information is already conveyed by the status badge text.

### Related Templates

- status-badge--docs
- badge--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
