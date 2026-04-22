## Overview

`<sd-switch>` — Switches allow the user to toggle an option on or off.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-switch/checked
- sd-switch/disabled
- sd-switch/required
- sd-switch/invalid

### Key Properties

- prop.title: string, default='' — The `title` attribute specifies extra information about an element most often as a default browser tooltip text when the mouse moves over the element.
- prop.name: string, default='' — The name of the switch, submitted as a name/value pair with form data.
- prop.value: string — The current value of the switch, submitted as a name/value pair with form data.
- prop.disabled: boolean, default=false — Disables the switch.
- prop.checked: boolean, default=false — Draws the switch in a checked state.
- prop.defaultChecked: boolean, default=false — The default value of the form control. Primarily used for resetting the form control.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work.
- prop.required: boolean, default=false — Makes the switch a required field.
- prop.validity: — Gets the validity state object
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the switch loses focus.
- event.sd-change: Emitted when the checked state changes.
- event.sd-focus: Emitted when the switch gains focus.
- event.sd-input: Emitted when the switch receives input.

### Slots

- slot.default: The switch's label.
- slot.tooltip: An optional tooltip that helps describe the switch. Use this slot with the `sd-tooltip` component.

### CSS Parts

- part.base: The component's base wrapper.
- part.control: The square container that wraps the switch's state.
- part.control--checked: Matches the control part when the switch is on.
- part.control--unchecked: Matches the control part when the switch is off.
- part.thumb: The circle that marks the switch's state.
- part.label: The container that wraps the switch's label.

## Guidelines

### Use Cases

- Allow users to switch between two states.
- Use to enable or disable settings, such as turning notifications on or off.
- Toggle features or functionalities within an application, applying changes immediately.

### Rules

### Content

- Make sure both the label and action are clear by using appropriate text.
- Place label text on top of the control, such as in a header, while action text should be placed to the right, next to the control.
- Use adjectives to describe actions, as they are less ambiguous than verbs.
- Limit use to binary choices, such as "on/off" or "yes/no".

### Behavior

- Use for actions that take effect immediately without requiring additional confirmation.
- Ensure the visual state accurately reflects its functional state.
- If it's unclear whether the component is showing a state or an action, use [sd-checkbox](./?path=/docs/components-sd-checkbox--docs) instead.

### Accessibility

- Consider alternatives to switches, as many users may find them confusing.
- If the switch triggers dynamic changes (e.g., loading new content), provide a corresponding announcement.

### Related Templates

- switch

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
