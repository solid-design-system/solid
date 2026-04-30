## Overview

`sd-status-badge` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-status-badge/variants

## Guidelines

### Use Cases

- Provide a quick, non-interactive indicator of an element’s status (e.g., info, success, error, warning).
- Indicate the current stage or progress of a process or workflow, such as "in progress" or "completed".
- Show the availability status of resources or personnel, like "online" or "offline."
- Label items in lists, dashboards, or summaries with clear visual cues.

### Rules

### Variants and Placement

- Match the badge’s color and icon to the wording or message of the associated element so users instantly recognize the status (blue for info, green for success, red for error, yellow for warning).
- Ensure the badge is clearly visible and doesn’t overlap critical content or interactive elements.

### Background

- Use light background options like white, neutral-100 or primary-100.

### Accessibility

- We recommend to combine a badge with text to reinforce the message.
- Integrate the status badge’s information into the accessible name or description of the related element to ensure that its meaning is programmatically connected to the item it describes.
- Make sure that the badge icon is hidden from screen readers, as the information is already conveyed by the badge label.

### Related Templates

- status-badge--docs
- badge--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
