## Overview

`<sd-radio-group>` — Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-radio-group/size
- sd-radio-group/label
- sd-radio-group/orientation
- sd-radio-group/required
- sd-radio-group/help-text
- sd-radio-group/disabled
- sd-radio-group/invalid

### Key Properties

- prop.size: 'lg'|'md'|'sm', default='lg' — The radio group's size. This size will be applied to the label, all child radios and radio buttons.
- prop.required: boolean, default=false — Ensures a child radio is checked before allowing the containing form to submit.
- prop.orientation: 'horizontal'|'vertical', default='vertical' — The orientation property determines the alignment of the component's content or elements. It accepts two possible
  values: 'horizontal' and 'vertical'. The default value is 'vertical'.
  This property allows you to control the visual layout and arrangement of elements within the component, providing
  flexibility in how the component is displayed based on your specific design needs.
- prop.label: string, default='' — The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
  instead.
- prop.helpText [attr: help-text]: string, default='' — The element help text. If you need to display HTML, use the `help-text` slot instead.
- prop.name: string, default='option' — The name of the radio group, submitted as a name/value pair with form data.
- prop.value: string, default='' — The current value of the radio group, submitted as a name/value pair with form data.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work.
- prop.validity: — Gets the validity state object
- prop.validationMessage: — Gets the validation message
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-change: Emitted when the radio group's selected value changes.
- event.sd-input: Emitted when the radio group receives user input.
- event.sd-invalid: Emitted when the form control has been checked for validity and its constraints aren't satisfied.

### Slots

- slot.default: The default slot where `<sd-radio>` or `<sd-radio-button>` elements are placed.
- slot.label: The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
- slot.help-text: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
- slot.tooltip: An optional tooltip that helps describe the radio-group. Use this slot with the `sd-tooltip` component.

### CSS Parts

- part.form-control: The form control that wraps the label, input, and error text.
- part.form-control-label: The label's wrapper.
- part.form-control-input: The input's wrapper.
- part.button-group: The button group that wraps radio buttons.
- part.button-group\_\_base: The button group's `base` part.

## Guidelines

### Use Cases

- Present options in forms where only one selection is allowed (e.g., gender selection, payment methods).
- Provide clear and concise choices in settings or configuration panels.
- Enable users to make a selection in surveys or questionnaires.
- Offer options in filter panels where only one filter can be applied at a time.

### Rules

### Grouping and Labels

- Group related options together using fieldsets and legends for better context and accessibility.
- Provide a group label that states the category or describes the actions to take.

### Selection Behavior

- Provide a default selected option; never display options without a default selection.
- Do not disable all choices in a group; if a selection is not applicable, consider hiding the group instead.
- Use only when users need to select one option; for multiple selections, use checkboxes instead.

### Background

- Use with light background options such as white, neutral-100, or primary-100.

### Accessibility

- Ensure that the group label is short and concise as it may be read out when users enter the group.
- Ensure radios are easily tappable on touch devices.
- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.

### Related Templates

- forms
- radio-button-group
- tooltip

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-radio: A radio allows to select only one value from a set of options. Clicking on an unchecked radio will deselect the other one(s).
- sd-radio-button: Radio buttons allow the user to select a single option from a group using a button-like control.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
