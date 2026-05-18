## Overview

`<sd-step>` — Steps are used inside [step groups](/components/step-group) to guide users through the steps of a process or task..

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-step/size
- sd-step/orientation
- sd-step/horizontal-inline
- sd-step/current
- sd-step/waiting
- sd-step/disabled
- sd-step/as-link
- sd-step/no-tail
- sd-step/not-interactive
- sd-step/icon
- sd-step/label
- sd-step/description
- sd-step/description-and-label-using-attributes

### Key Properties

- prop.size: 'lg'|'sm', default='lg' — The step's size.
- prop.orientation: 'horizontal'|'vertical', default='horizontal' — Determines the orientation of the step.
- prop.horizontalInline [attr: horizontal-inline]: boolean, default=false — Enables the horizontal inline variant for more compact layout.
- prop.waiting: boolean, default=false — Sets the step to a waiting state.
- prop.disabled: boolean, default=false — Sets the step to a disabled state.
- prop.current: boolean, default=false — Sets the step to an active state.
- prop.noTail [attr: no-tail]: boolean, default=false — Removes the tail from the step.
- prop.notInteractive [attr: not-interactive]: boolean, default=false — Determines if the step is not interactive.
- prop.label: string, default='' — The step's label overwriting the `label` slot. Use the `label` slot for complex label content.
- prop.description: string, default='' — The step's description overwriting the `description` slot. Use the `description` slot for complex description content.
- prop.index: number, default=1 — The step's number in a step-group
- prop.href: string, default='' — When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the button loses focus.
- event.sd-focus: Emitted when the button gains focus.

### Slots

- slot.default: The step's description.
- slot.label: The step's label.
- slot.circle-content: The content inside a step circle. This could be an icon or a number.

### CSS Parts

- part.base: The component's base wrapper.
- part.circle-and-tail-container: The container that wraps the step's circle and tail.
- part.circle: The circle that marks the step's state.
- part.tail: The step's tail.
- part.text-container: The container that wraps the step's label and description.
- part.label: The step's label.
- part.description: The step's description.

## Guidelines

### Rules

### Content

- Keep titles concise, typically between 1 to 2 words.
- Provide a description when additional context is needed. Use the "default" slot for the description, or the "description" attribute if applicable.
- Hide the title if desired, depending on design requirements.

### Styling

- Add a content icon to a non-interactive item using the "circle-content" slot.
- Maintain consistency in icon usage, ensuring icons are either included on all steps or none.

### Background

- Use light background options such as white, neutral-100, or primary-100.

### Related Templates

- step-group

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-step-group: Used as navigation bar that guides users through the steps of a process or task.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
