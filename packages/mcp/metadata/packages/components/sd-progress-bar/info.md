## Overview

`<sd-progress-bar>` — Progress bars are used to visualize the completion state of a process.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-progress-bar, example: label
- component: sd-progress-bar, example: value-max
- component: sd-progress-bar, example: value-position
- component: sd-progress-bar, example: loading
- component: sd-progress-bar, example: custom-height
- component: sd-progress-bar, example: value-formatter
- component: sd-progress-bar, example: inverted

### Key Properties

- prop.value: number|null, default=null — The current progress value.
- prop.max: number, default=100 — The maximum progress value.
- prop.label: string, default='' — The progress bar's label. If you need to display HTML, use the `label` slot instead.
- prop.valuePosition [attr: value-position]: 'right'|'bottom'|null, default=null — Displays the progress value on the right side of the indicator.
- prop.inverted: boolean, default=false — Inverts the progress bar's colors.
- prop.showLabel [attr: show-label]: boolean, default=false — Shows the label visually.
- prop.valueFormatter: (value: number) => string — A function used to format the progress-bar's value.
  The value of the progress-bar is passed as the only argument.
  The function should return a string to display in the value-position part.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.label: The input's label. Alternatively, you can use the `label` attribute.

### CSS Parts

- part.base: The component's base wrapper.
- part.value-right: Value's on the right side of the indicator.
- part.value-bottom: Value's on the bottom of the indicator.
- part.label: The label element.
- part.bar: The progress bar's container.

## Guidelines

### Use Cases

- Display the completion status of multi-step processes or task
- Communicate the loading or processing state of an activity, such as file uploads or data syncing.

### Rules

### Behavior

- Always reflect the actual progress accurately and avoid fake animations when real progress data is available.
- Avoid using a progress bar for binary states and use a status indicator instead.
- Pair the progress bar with a label or percentage to give users a clear sense of progress.

### Value

- If displaying a value with a long copy prefer the bottom value-position.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Never omit label on functional progress bars (file uploads, form steps, loading states).
- The aria-hidden pattern is only appropriate when the progress information is either redundant or meaningless to screen reader users – for example, a visual scroll position tracker on a blog page.
- The label attribute is required in code. It provides an accessible name for the progress bar and must always be set, even when not visually displayed. For decorative uses (e.g. a blog article scroll indicator), add aria-hidden="true" to remove it from the accessibility tree entirely. In this case label can be omitted.
- Set a value for the label attribute to ensure aria-label and aria-description are set. Without it, the component defaults to aria-hidden="true", only appropriate for decorative progress bars (such as a scroll indicator).
