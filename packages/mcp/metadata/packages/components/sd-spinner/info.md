## Overview

`<sd-spinner>` — Spinners are used to show the progress of an indeterminate operation.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-spinner/variants
- sd-spinner/size

### Key Properties

- prop.color: 'primary'|'white'|'currentColor', default='currentColor' — The color color of the spinner.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

## Guidelines

### Use Cases

- Indicate that content is being loaded, such as when fetching data from a server or loading a new page.
- Show ongoing background processes, like file uploads or data processing tasks.
- Used within buttons or interactive elements to indicate that an action is being processed.
- Apply to sections of a page that are loading independently, such as widgets or panels.
- Display when a form is being submitted to show that the submission is in progress.

### Rules

### Content

- Include a label or message to provide context about what is being loaded, especially if the loading time is long.

### Behavior and Placement

- Use for processes that take a short amount of time (typically under 4 seconds).
- Apply within specific sections rather than blocking the entire page, unless absolutely necessary.
- Place in a consistent location relative to the content it is loading.

### Styling

- Maintain consistency in size and style; avoid using spinners of varying sizes on the same page.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Assign role="status" or use a live region (e.g., aria-live="polite") to inform screen reader users of ongoing loading.
- A spinner shouldn’t itself be focusable or interactive, nor prevent from navigating to other parts of the page while loading continues.
