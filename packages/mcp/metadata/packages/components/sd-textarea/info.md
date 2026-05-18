## Overview

`<sd-textarea>` — Textareas collect data from the user and allow multiple lines of text.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-textarea/size
- sd-textarea/rows
- sd-textarea/label
- sd-textarea/floating-label
- sd-textarea/placeholder
- sd-textarea/disabled
- sd-textarea/visually-disabled
- sd-textarea/readonly
- sd-textarea/help-text
- sd-textarea/required
- sd-textarea/valid
- sd-textarea/invalid
- sd-textarea/min-length
- sd-textarea/max-length

### Key Properties

- prop.title: string, default='' — The `title` attribute specifies extra information about an element most often as a default browser tooltip text when the mouse moves over the element.
- prop.name: string, default='' — The name of the textarea, submitted as a name/value pair with form data.
- prop.value: string, default='' — The current value of the textarea, submitted as a name/value pair with form data.
- prop.size: 'lg'|'md'|'sm', default='lg' — The textarea's size.
- prop.label: string, default='' — The textarea's label. If you need to display HTML, use the `label` slot instead.
- prop.helpText [attr: help-text]: string, default='' — The textarea's help text. If you need to display HTML, use the `help-text` slot instead.
- prop.placeholder: string, default='' — Placeholder text to show as a hint when the input is empty.
- prop.rows: number, default=4 — The number of rows to display by default.
- prop.disabled: boolean, default=false — Disables the textarea.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the textarea as if it was disabled and enables aria-disabled
- prop.readonly: boolean, default=false — Makes the textarea readonly.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work.
- prop.required: boolean, default=false — Makes the textarea a required field.
- prop.floatingLabel [attr: floating-label]: boolean, default=false — Enables the floating label behavior for the input.
- prop.minlength: number — The minimum length of input that will be considered valid.
- prop.maxlength: number — The maximum length of input that will be considered valid.
- prop.autocapitalize: |'off'|'none'|'on'|'sentences'|'words'|'characters' — Controls whether and how text input is automatically capitalized as it is entered by the user.
- prop.autocorrect: 'off'|'on' — Indicates whether the browser's autocorrect feature is on or off.
- prop.autocomplete: string — Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
  [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
- prop.autofocus: boolean — Indicates that the input should receive focus on page load.
- prop.enterkeyhint: |'enter'|'done'|'go'|'next'|'previous'|'search'|'send' — Used to customize the label or icon of the Enter key on virtual keyboards.
- prop.styleOnValid [attr: style-on-valid]: boolean, default=false — Shows success styles if the validity of the input is valid.
- prop.spellcheck: boolean, default=true — Enables spell checking on the textarea.
- prop.inputmode: 'none'|'text' — Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
  keyboard on supportive devices.
- prop.defaultValue: string, default='' — The default value of the form control. Primarily used for resetting the form control.
- prop.validity: — Gets the validity state object
- prop.validationMessage: — Gets the validation message
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the control loses focus.
- event.sd-change: Emitted when an alteration to the control's value is committed by the user.
- event.sd-focus: Emitted when the control gains focus.
- event.sd-input: Emitted when the control receives input.
- event.sd-invalid: Emitted when the form control has been checked for validity and its constraints aren't satisfied.

### Slots

- slot.label: The textarea's label. Alternatively, you can use the `label` attribute.
- slot.help-text: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
- slot.tooltip: An optional tooltip that helps describe the input. Use this slot with the `sd-tooltip` component.

### CSS Parts

- part.form-control: The form control that wraps the label, input, and help text.
- part.form-control-label: The label's wrapper.
- part.form-control-input: The input's wrapper.
- part.form-control-help-text: The help text's wrapper.
- part.base: The component's base wrapper.
- part.border: The base part's absolutely positioned border. Allows for easy adjustment of border thickness without affecting component dimensions.
- part.textarea: The internal `<textarea>` control.

## Guidelines

### Use Cases

- Collect detailed user feedback or comments.
- Enable users to write comprehensive reviews of products or services.
- Gather extensive information about issues or requests.
- Capture detailed responses in surveys or questionnaires.

#### Default Textarea

Use the “default” variant when clarity, scannability, and accessibility are your primary concerns.

- Long or descriptive labels, helper text, or units are needed.
- Forms with many fields that users must scan quickly.
- Complex fields with adornments, counters, or tooltips.

#### Floating Label Textarea

Use the “floating-label” variant to conserve vertical space and streamline simple forms, while still keeping the label visible.

- Compact layouts and simple fields.
- Short labels (1–3 words); minimal helper text.
- You want a clean look without duplicate placeholder text.

### Rules

### Content and Guidance

- Inform users whenever minimum or maximum lengths are set; use the field's help text for this.
- Use placeholder text as an addition to label as it should not include essential information required to complete the field correctly.
- Use help text to provide hints or examples of expected inputs.

### Behavior and Interaction

- Provide real-time validation to help users correct errors as they type.
- Provide a visible scrollbar when text overflows.
- Adapt the size of the field to the expected length of user input.
- Avoid including a "clear" button to prevent unwanted loss of user input.

### Background

- Use with light background options such as white, neutral-100, or primary-100.

### Accessibility

- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.

### Related Templates

- button
- forms
- tooltip

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
