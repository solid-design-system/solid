## Overview

`<sd-checkbox>` — Checkboxes allow the user to toggle an option on or off.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-checkbox/size
- sd-checkbox/disabled
- sd-checkbox/visually-disabled
- sd-checkbox/checked
- sd-checkbox/indeterminate
- sd-checkbox/required
- sd-checkbox/invalid

### Key Properties

- prop.title: string, default='' — The `title` attribute specifies extra information about an element most often as a default browser tooltip text when the mouse moves over the element.
- prop.name: string, default='' — The name of the checkbox, submitted as a name/value pair with form data.
- prop.value: string — The current value of the checkbox, submitted as a name/value pair with form data.
- prop.size: 'sm'|'md'|'lg', default='lg' — The checkbox's size.
- prop.disabled: boolean, default=false — Disables the checkbox.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the checkbox as if it was disabled and enables aria-disabled
- prop.checked: boolean, default=false — Draws the checkbox in a checked state.
- prop.indeterminate: boolean, default=false — Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
  all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
- prop.defaultChecked: boolean, default=false — The default value of the form control. Primarily used for resetting the form control.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work.
- prop.required: boolean, default=false — Makes the checkbox a required field.
- prop.validity: — Gets the validity state object
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the checkbox loses focus.
- event.sd-change: Emitted when the checked state changes.
- event.sd-focus: Emitted when the checkbox gains focus.
- event.sd-input: Emitted when the checkbox receives input.

### Slots

- slot.default: The checkbox's label.

### CSS Parts

- part.base: The component's base wrapper.
- part.control: The square container that wraps the checkbox's checked state.
- part.control--checked: Matches the control part when the checkbox is checked.
- part.control--indeterminate: Matches the control part when the checkbox is indeterminate.
- part.checked-icon: The checked icon, an `<sd-icon>` element.
- part.indeterminate-icon: The indeterminate icon, an `<sd-icon>` element.
- part.label: The container that wraps the checkbox's label.

## Guidelines

### Use Cases

- Used for selections that don’t immediately activate.
- Selecting an option like "Agree to Terms and Conditions" before submitting a registration form.
- Opt-in/Opt-out of notifications or subscriptions.
- Check [sd-checkbox-group](./?path=/docs/components-sd-checkbox-group--docs) for group use cases and usage guidelines.

### Rules

### Content

- Provide a clear, descriptive label for each selection to avoid confusion.
- Frame labels positively, such as "Enable notifications" instead of "Disable notifications."

### Interaction and Usage

- Ensure each selection operates independently unless used for bulk actions.
- List selections in a logical order, such as alphabetical or numerical.
- Refrain from using a single checkbox when the action should take effect immediately — use [sd-switch](./?path=/docs/components-sd-switch--docs) instead.

### Accessibility

- Checkboxes should always look like checkboxes to meet user’s expectations.
- Nesting other interactive elements like links inside labels should be avoided.
- An error-text with a warning icon should be placed underneath an invalid checkbox or, if used in a group, underneath the checkbox group. Error messages should always provide hints for solutions.
- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.
- In Figma use an asterisk with a blank before ( \*) at the end of its label when designing a mandatory checkbox. In code use the “required” boolean.

### Related Templates

- checkbox-group
- forms
- table
- tooltip

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-checkbox-group: Checkbox groups are used to group multiple [checkbox](/components/checkbox). It provides only presentational functionality.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
