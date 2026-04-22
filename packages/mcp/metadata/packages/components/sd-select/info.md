## Overview

`<sd-select>` — Selects allow you to choose items from a menu of predefined options.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-select/size
- sd-select/placement
- sd-select/label
- sd-select/floating-label
- sd-select/placeholder
- sd-select/disabled
- sd-select/visually-disabled
- sd-select/help-text
- sd-select/clearable
- sd-select/multiple
- sd-select/use-tags
- sd-select/max-options-visible
- sd-select/required
- sd-select/valid
- sd-select/invalid

### Key Properties

- prop.defaultValue: string|string[], default='' — The default value of the form control. Primarily used for resetting the form control.
- prop.open: boolean, default=false — Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
  use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
- prop.size: 'lg'|'md'|'sm', default='lg' — The select's size.
- prop.placement: 'top'|'bottom', default='bottom' — The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
  inside of the viewport.
- prop.label: string, default='' — The select's label. If you need to display HTML, use the `label` slot instead.
- prop.placeholder: string, default='' — Placeholder text to show as a hint when the select is empty.
- prop.maxOptionsTagLabel [attr: max-options-tag-label]: string, default='' — Label text shown on tag if max-options-visible is reached.
- prop.disabled: boolean, default=false — Disables the select control.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the select as if it was disabled and enables aria-disabled
- prop.helpText [attr: help-text]: string, default='' — The select's help text. If you need to display HTML, use the `help-text` slot instead.
- prop.clearable: boolean, default=false — Adds a clear button when the select is not empty.
- prop.multiple: boolean, default=false — Allows more than one option to be selected.
- prop.useTags: boolean, default=false — Uses interactive `sd-tag` elements representing individual options in the display input when `multiple` is `true`.
- prop.maxOptionsVisible [attr: max-options-visible]: number, default=3 — The maximum number of selected options to show when `multiple` and `useTags` are `true`. After the maximum, "+n" will be shown to
  indicate the number of additional items that are selected. Set to 0 to remove the limit.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work.
- prop.name: string, default='' — The name of the select, submitted as a name/value pair with form data.
- prop.value: string|string[], default='' — The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
  value attribute will be a space-delimited list of values based on the options selected, and the value property will
  be an array. **For this reason, values must not contain spaces.**
- prop.required: boolean, default=false — The select's required attribute.
- prop.floatingLabel [attr: floating-label]: boolean, default=false — Enables the floating label behavior for the input.
- prop.styleOnValid [attr: style-on-valid]: boolean, default=false — Shows success styles if the validity of the input is valid.
- prop.hoist: boolean, default=false — Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
  `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
- prop.validity: — Gets the validity state object
- prop.validationMessage: — Gets the validation message
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-change: Emitted when the control's value changes.
- event.sd-clear: Emitted when the control's value is cleared.
- event.sd-input: Emitted when the control receives input.
- event.sd-focus: Emitted when the control gains focus.
- event.sd-blur: Emitted when the control loses focus.
- event.sd-show: Emitted when the select's menu opens.
- event.sd-after-show: Emitted after the select's menu opens and all animations are complete.
- event.sd-hide: Emitted when the select's menu closes.
- event.sd-after-hide: Emitted after the select's menu closes and all animations are complete.
- event.sd-invalid: Emitted when the form control has been checked for validity and its constraints aren't satisfied.

### Slots

- slot.default: The listbox options. Must be `<sd-option>` elements. You can use `<sd-divider>` to group items visually.
- slot.label: The input's label. Alternatively, you can use the `label` attribute.
- slot.help-text: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
- slot.clear-icon: An icon to use in lieu of the default clear icon.
- slot.expand-icon: The icon to show when the control is expanded and collapsed. Rotates on open and close.
- slot.tooltip: An optional tooltip that helps describe the input. Use this slot with the `sd-tooltip` component.

### CSS Parts

- part.form-control: The form control that wraps the label, input, and help text.
- part.form-control-label: The label's wrapper.
- part.form-control-input: The select's wrapper.
- part.form-control-help-text: The help text's wrapper.
- part.combobox: The container the wraps the combobox, clear icon, and expand button.
- part.display-input: The element that displays the selected option's label, an `<input>` element.
- part.listbox: The listbox container where options are slotted.
- part.tags: The container that houses option tags when `multiselect` is used.
- part.tag: The individual tags that represent each multiselect option.
- part.tag\_\_base: The tag's base part.
- part.tag\_\_content: The tag's content part.
- part.tag\_\_removable-indicator: The tag's remove button.
- part.clear-button: The clear button.
- part.expand-icon: The container that wraps the expand icon.

## Guidelines

### Use Cases

- Enable users to select one or more options from a list of predefined choices in forms.
- Implement in filter panels to allow users to refine search results or data views.
- Provide options in settings pages where users need to choose preferences from a list.

#### Default Select

Use the “default” variant when clarity, scannability, and accessibility are your primary concerns.

- Long or descriptive labels, helper text, or units are needed.
- Forms with many fields that users must scan quickly.
- Complex fields with adornments, counters, or tooltips.

#### Floating Label Select

Use the “floating-label” variant to conserve vertical space and streamline simple forms, while still keeping the label visible.

- Compact layouts and simple fields.
- Short labels (1–3 words); minimal helper text.
- You want a clean look without duplicate placeholder text.

### Rules

### Variant Consistency

Do not mix the two variants (default / floating label) within the same product, flow or form. Read the use cases above to know when to use each type.

### Content and Labels

- Keep each option to a single line of text for readability.
- Ensure all options have consistent line lengths for easier scanning.
- Avoid using the same word or phrase at the beginning of options.
- Provide a meaningful placeholder option to guide users.

### Selection Behavior

- Use for lists with more than five options; for fewer options, consider using sd-radio for single selection or [sd-checkbox](./?path=/docs/components-sd-checkbox--docs) for multiple selection.
- Apply the "multiple" attribute when multiple selections are allowed, and pair it with "checkbox" for corresponding nested options.
- By default, the number of selected options is displayed after the text.
- Display selected options as tags within the field to help users track their selections.

### Background

- Use light background options such as white, neutral-100, or primary-100.

### Accessibility

- If multiple options can be selected, clearly announce this capability to screenreader users and offer a way to view all chosen items.
- Be aware that group labels in select components will be neglected by most assistive devices.
- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.

### Related Templates

- forms
- select
- switch
- tooltip

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-option: Options define the selectable items within various form controls such as [select](/components/select).
- sd-optgroup: The <sd-optgroup> element creates a grouping for <sd-option>s within a <sd-combobox>.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
