## Overview

`<sd-file-selector>` — Used to select a file by clicking or dragging a file into a drop-area.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-file-selector, example: variant
- component: sd-file-selector, example: sizes
- component: sd-file-selector, example: label
- component: sd-file-selector, example: disabled
- component: sd-file-selector, example: visually-disabled
- component: sd-file-selector, example: help-text
- component: sd-file-selector, example: multiple-files
- component: sd-file-selector, example: hide-value
- component: sd-file-selector, example: required
- component: sd-file-selector, example: invalid
- component: sd-file-selector, example: directory

### Key Properties

- prop.files: — The selected files as a `FileList` object. The `FileList` behaves like an array, so you can get the number of
  selected files via its `length` property.
- prop.name: string, default='' — The name of the file selector, submitted as a name/value pair with form data.
- prop.title: string, default='' — The `title` attribute specifies extra information about an element most often as a default browser tooltip text when the mouse moves over the element.
- prop.value: — The value of the file selector contains a string that represents the path of the selected file. If multiple
  files are selected, the value represents the first file in the list. The only valid value when setting a file
  input is an empty string.
- prop.defaultValue: string, default='' — The default value of the form control. Primarily used for resetting the form control.
- prop.size: 'sm'|'md'|'lg', default='lg' — The file selector's size.
- prop.label: string, default='' — The file selector's label, this field is required to ensure accessibility. It is visually hidden by default, use the `showLabel` property to display it.
- prop.showLabel [attr: show-label]: boolean, default=false — Visually displays the file selector's label.
- prop.helpText [attr: help-text]: string, default='' — The file selector's help text. If you need to display HTML, use the `help-text` slot instead.
- prop.disabled: boolean, default=false — Disables the file selector.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the input as if it was disabled and enables aria-disabled
- prop.droparea [attr: drop-area]: boolean, default=false — Draw the file selector as a drop area.
- prop.accept: string, default='' — Comma-separated list of supported file types (e.g. `.jpg,.png,image/*`).
- prop.styleOnValid [attr: style-on-valid]: boolean, default=false — Shows success styles if the validity of the input is valid.
- prop.capture: 'user'|'environment' — Specifies which camera to use for capture of image or video data. Works only when not using a droparea.
- prop.multiple: boolean, default=false — Indicates whether the user can select more than one file. Has no effect if `webkitdirectory` is set.
- prop.webkitdirectory: boolean, default=false — Indicates that the file selector should let the user select directories instead of files. Non-standard, but
  supported by all major browsers.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
  to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
  the same document or shadow root for this to work.
- prop.required: boolean, default=false — Makes the input a required field.
- prop.hideValue [attr: hide-value]: boolean, default=false — Suppresses the value from being displayed in the file selector.
- prop.validity: — Gets the validity state object.
- prop.validationMessage: — Gets the validation message.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the control loses focus.
- event.sd-change: Emitted when an alteration to the control's value is committed by the user.
- event.sd-error: Emitted when multiple files are selected via drag and drop, without the `multiple` property being set.
- event.sd-focus: Emitted when the control gains focus.
- event.sd-input: Emitted when the control receives input.

### Slots

- slot.label: The file selector's label. Alternatively, you can use the `label` attribute.
- slot.help-text: Text that describes how to use the file selector. Alternatively, you can use the `help-text` attribute.

### CSS Parts

- part.form-control: The form control that wraps the label, input, and help text.
- part.form-control-label: The label's wrapper.
- part.form-control-input: The input's wrapper.
- part.form-control-help-text: The help text's wrapper.
- part.button-wrapper: The wrapper around the button and text value.
- part.button: The sd-button acting as a file input trigger.
- part.value: The chosen files or placeholder text for the file input.
- part.droparea: The element wrapping the drop zone.
- part.droparea-background: The background of the drop zone.
- part.droparea-icon: The container that wraps the icon for the drop zone.
- part.droparea-value: The text for the drop zone.
- part.invalid-icon-message: The container that wraps the invalid icon and message.
- part.invalid-icon: The invalid icon.
- part.invalid-message: The invalid message.

## Guidelines

### Use Cases

- Select files or documents as part of a form submission.
- Attach supporting files in profile or account settings.
- Replace or update assets in content management workflows.
- Handle single or multiple file selections within any form or multi-step forms.

#### Default

Use the `default` variant when the select action is secondary to other form fields, or when space is limited.

- Inline file selector in dense or compact forms.
- Single-file selection where minimal visual weight is needed.
- Flows where the selection action sits alongside other inputs.

#### Drop Area

Use the `drop-area` variant when file selector is the primary action on the page or step.

- Dedicated selector steps in multi-step flows.
- Scenarios where drag-and-drop is a likely or preferred interaction.
- Select flows that support multiple files at once.

### Rules

<b>Do not mix both variants within the same form or flow.</b>

### Label and Help Text

- Always provide a descriptive label (e.g., "Select file", "Signed contract").
- Use help text to communicate accepted file types and size limits
- Do not rely on the drop-area copy alone to convey constraints.

### Error Handling

- Use error-text to surface validation errors: below the component (default variant) or next to each individual file selector when the "show selected files" attribute is active (drop-area variant).
- Write error text in plain language with a clear solution (e.g., "The file is too large. Maximum allowed size is 5 MB.").

### Per-error-type copy guidance

- Provide distinct error messages for each failure scenario rather than a generic fallback — for example: wrong file type, file too large, empty file, too many files, or selection failure.

### Background

- Use light background options such as white, neutral-100, or primary-100.

### Accessibility

- Use `visually-disabled` to keep disabled elements focusable and tooltip-accessible.
- Associate error text via `aria-describedby` so they are announced on focus.
- Use the `visually-disabled` attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.
- A label must always be provided, even when it is visually hidden. The label is used to provide an accessible name for the file selector, ensuring that screen reader users can identify the purpose of the control.
