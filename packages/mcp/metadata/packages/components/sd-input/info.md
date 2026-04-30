## Overview

`<sd-input>` — Inputs collect data from the user.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-input/size
- sd-input/label
- sd-input/floating-label
- sd-input/placeholder
- sd-input/value
- sd-input/disabled
- sd-input/visually-disabled
- sd-input/read-only
- sd-input/help-text
- sd-input/clearable
- sd-input/icon
- sd-input/toggle-password
- sd-input/type
- sd-input/required
- sd-input/valid
- sd-input/invalid
- sd-input/pattern
- sd-input/min-length
- sd-input/max-length
- sd-input/min
- sd-input/max
- sd-input/spin-buttons

### Key Properties

- prop.type: |'date'|'datetime-local'|'email'|'number'|'password'|'search'|'tel'|'text'|'time'|'url', default='text' — The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
  to `text`.
- prop.size: 'lg'|'md'|'sm', default='lg' — The input's size.
- prop.inputmode: |'none'|'text'|'decimal'|'numeric'|'tel'|'search'|'email'|'url' — Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
  keyboard on supportive devices.
- prop.value: string, default='' — The current value of the input, submitted as a name/value pair with form data.
- prop.defaultValue: string, default='' — The default value of the form control. Primarily used for resetting the form control.
- prop.placeholder: string, default='' — Placeholder text to show as a hint when the input is empty.
- prop.label: string, default='' — The input's label. If you need to display HTML, use the `label` slot instead.
- prop.helpText [attr: help-text]: string, default='' — The input's help text. If you need to display HTML, use the `help-text` slot instead.
- prop.clearable: boolean, default=false — Adds a clear button when the input is not empty.
- prop.disabled: boolean, default=false — Disables the input.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the input as if it was disabled and enables aria-disabled
- prop.readonly: boolean, default=false — Makes the input readonly.
- prop.passwordToggle [attr: password-toggle]: boolean, default=false — Adds a button to toggle the password's visibility. Only applies to password types.
- prop.passwordVisible [attr: password-visible]: boolean, default=false — Determines whether or not the password is currently visible. Only applies to password input types.
- prop.spinButtons [attr: spin-buttons]: boolean, default=false — Hides the browser's built-in increment/decrement spin buttons for number inputs and displays custom buttons.
- prop.minlength: number — The minimum length of input that will be considered valid.
- prop.maxlength: number — The maximum length of input that will be considered valid.
- prop.min: number|string — The input's minimum value. Only applies to date and number input types.
- prop.max: number|string — The input's maximum value. Only applies to date and number input types.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work.
- prop.name: string, default='' — The name of the input, submitted as a name/value pair with form data.
- prop.title: string, default='' — The `title` attribute specifies extra information about an element most often as a default browser tooltip text when the mouse moves over the element.
- prop.required: boolean, default=false — Makes the input a required field.
- prop.floatingLabel [attr: floating-label]: boolean, default=false — Enables the floating label behavior for the input.
- prop.pattern: string — A regular expression pattern to validate input against.
- prop.step: number|'any' — Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
  implied, allowing any numeric value. Only applies to date and number input types.
- prop.autocapitalize: |'off'|'none'|'on'|'sentences'|'words'|'characters' — Controls whether and how text input is automatically capitalized as it is entered by the user.
- prop.autocomplete: string — Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
  [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
- prop.autofocus: boolean — Indicates that the input should receive focus on page load.
- prop.enterkeyhint: |'enter'|'done'|'go'|'next'|'previous'|'search'|'send' — Used to customize the label or icon of the Enter key on virtual keyboards.
- prop.styleOnValid [attr: style-on-valid]: boolean, default=false — Shows success styles if the validity of the input is valid.
- prop.spellcheck: boolean, default=true — Enables spell checking on the input.
- prop.valueAsDate: — Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted.
- prop.valueAsNumber: — Gets or sets the current value as a number. Returns `NaN` if the value can't be converted.
- prop.validity: — Gets the validity state object
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the control loses focus.
- event.sd-change: Emitted when an alteration to the control's value is committed by the user.
- event.sd-clear: Emitted when the clear button is activated.
- event.sd-focus: Emitted when the control gains focus.
- event.sd-input: Emitted when the control receives input.
- event.sd-search: Emitted when the search button is activated.

### Slots

- slot.label: The input's label. Alternatively, you can use the `label` attribute.
- slot.left: Used to prepend a presentational icon or similar element to the input.
- slot.right: Used to append a presentational icon or similar element to the input.
- slot.clear-icon: An icon to use in lieu of the default clear icon.
- slot.show-password-icon: An icon to use in lieu of the default show password icon.
- slot.hide-password-icon: An icon to use in lieu of the default hide password icon.
- slot.help-text: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
- slot.tooltip: An optional tooltip that helps describe the input. Use this slot with the `sd-tooltip` component.

### CSS Parts

- part.form-control: The form control that wraps the label, input, and help text.
- part.form-control-label: The label's wrapper.
- part.form-control-input: The input's wrapper.
- part.form-control-help-text: The help text's wrapper.
- part.form-control-floating-label: The floating label text's wrapper.
- part.base: The component's base wrapper.
- part.border: The base part's absolutely positioned border. Allows for easy adjustment of border thickness without affecting component dimensions.
- part.input: The internal `<input>` control.
- part.left: The container that wraps the left.
- part.clear-button: The clear button.
- part.password-toggle-button: The password toggle button.
- part.right: The container that wraps the right.
- part.invalid-icon: The invalid icon.
- part.valid-icon: The valid icon.
- part.invalid-message: The invalid message.

## Guidelines

### Use Cases

- Collect user data in forms, including names, emails, dates, and passwords.
- Allow users to enter numerical values like quantities or prices.

#### Default Input

Use the “default” variant when clarity, scannability, and accessibility are your primary concerns.

- Long or descriptive labels, helper text, or units are needed.
- Forms with many fields that users must scan quickly.
- Complex fields with adornments, counters, or tooltips.

#### Floating Label Input

Use the “floating-label” variant to conserve vertical space and streamline simple forms, while still keeping the label visible.

- Compact layouts and simple fields.
- Short labels (1–3 words); minimal helper text.
- You want a clean look without duplicate placeholder text.

### Rules

### Variant Consistency

- Do not mix the two variants (default / floating label) within the same product, flow or form. Read the use cases above to know when to use each type.

### Labels and Placeholders

- Use descriptive and concise labels.
- Avoid using placeholder text as a substitute for labels.

### User Guidance

- Provide instructions within helper text for completing the field, such as password or character count (e.g., “maxlength” and ”minlength”...).
- Offer additional guidance with tooltips or help text to guide users on the expected input format and prevent unclear or ambiguous interpretation.

### Validation and Formatting

- Use dynamic formatting to automatically format user input as they type.
- Validate user entries in real-time to provide immediate feedback whenever possible.
- Avoid using fields for actions that require immediate feedback; use buttons instead.

### Input Types

- Use appropriate field types for the given purpose (e.g., “email”, “password”, “number”). For custom autocomplete functionalities (e.g., search fields) use [sd-combobox](./?path=/docs/components-sd-combobox--docs).
- Use for brief text input only. For longer inputs, such as comments or user feedback, use [sd-textarea](./?path=/docs/components-sd-textarea--docs) instead.

### Accessibility

- Ensure that focus moves in sequential order between input fields and other form elements. When an input field is focused, it should be clearly indicated.
- Avoid disabled input fields. If needed, ensure that they remain in the regular tab order but cannot be activated, allowing screen readers to announce their state and purpose. Use the native disabled attribute or appropriate ARIA attributes (e.g., aria-disabled="true").
- Ensure input fields are usable on all screen sizes. On smaller screens, consider using larger touch targets for input fields.
- Placeholder text should offer a hint of what the user should write and must always go together with a label.
- Prefer keeping the input enabled by default by relying on default values or by validating on submit.
- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.
- Use “autocomplete” attribute to enable automated browser assistance when filling out forms.

### Related Templates

- autocomplete
- forms
- input
- range
- tooltip

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
