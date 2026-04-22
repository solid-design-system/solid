## Overview

`<sd-step-group>` — Used as navigation bar that guides users through the steps of a process or task.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-step-group/size
- sd-step-group/orientation
- sd-step-group/horizontal-inline
- sd-step-group/active-step
- sd-step-group/not-interactive
- sd-step-group/icon

### Key Properties

- prop.size: 'lg'|'sm', default='lg' — The step-groups's size.
- prop.orientation: 'horizontal'|'vertical', default='horizontal' — Determines the orientation of the step-group.
- prop.activeStep [attr: active-step]: number, default=0 — The active step in the step-group. If set to -1, steps have to be managed manually.
- prop.notInteractive [attr: not-interactive]: boolean, default=false — Determines if the step-group is not interactive.
- prop.label: string, default='' — A label to use in the step-group. This won't be displayed on the screen, but it will be announced by assistive
  devices when interacting with the control and is strongly recommended.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: Used for grouping steps in the step group. Must be `<sd-step>` elements.

### CSS Parts

- part.base: The component's base wrapper.
- part.body: The container that wraps the steps.

## Guidelines

### Use Cases

- Break complex data input tasks, such as filling out forms, into smaller, manageable steps to reduce cognitive strain and improve the user experience.
- Guide users through workflows that require completion of tasks in a specific order.
- Divide surveys or questionnaires into steps to make navigation, review, and completion easier and more intuitive.

### Rules

### Content

- Ensure each section has a clear and concise label that describes the task or content.
- Keep each section manageable; avoid overloading it with too much information or too many tasks.

### User Guidance

- Make it clear to users that they are navigating a multistep process.
- Indicate the user’s current position and provide feedback on completed steps to help track progress.
- Provide clear error messages and guidance if users need to correct information before proceeding.

### Navigation

- Arrange sections in a logical, sequential order to guide users, commonly from left to right.
- Maintain consistent navigation for all steps to avoid user errors; include an option to return to previous steps.
- Prevent users from skipping sections unless it is absolutely necessary and clearly indicated.

### Layout and Responsiveness

- Use a consistent layout design across all steps to ensure a cohesive experience.
- Use vertical or horizontal orientations, depending on what suits the process and viewport best.
- Be aware that choosing a horizontal layout may cause layout issues, such as overflow on small viewports or when the page is zoomed in; consider this when deciding between horizontal and vertical layouts.

### Background

- Use light background options such as white, neutral-100, or primary-100.

### Related Templates

- step-group

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-step: Steps are used inside [step groups](/components/step-group) to guide users through the steps of a process or task..

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
