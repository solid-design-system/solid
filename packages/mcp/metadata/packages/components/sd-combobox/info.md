## Overview

`<sd-combobox>` — Comboboxes allow you to choose items from a menu of predefined options.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-combobox/size
- sd-combobox/placement
- sd-combobox/label
- sd-combobox/floating-label
- sd-combobox/placeholder
- sd-combobox/disabled
- sd-combobox/visually-disabled
- sd-combobox/help-text
- sd-combobox/focus
- sd-combobox/suggestion-container-height
- sd-combobox/clearable
- sd-combobox/icons
- sd-combobox/search
- sd-combobox/multiple
- sd-combobox/max-options-visible
- sd-combobox/required
- sd-combobox/valid
- sd-combobox/invalid
- sd-combobox/async-options
- sd-combobox/custom-filter

### Key Properties

- prop.name: string, default='' — The name of the combobox, submitted as a name/value pair with form data.
- prop.value: string|string[], default='' — The current value of the combobox, submitted as a name/value pair with form data.
- prop.defaultValue: string, default='' — The default value of the form control. Primarily used for resetting the form control.
- prop.size: 'lg'|'md'|'sm', default='lg' — The combobox's size.
- prop.placeholder: string, default='' — Placeholder text to show as a hint when the combobox is empty.
- prop.maxOptionsTagLabel [attr: max-options-tag-label]: string, default='' — Label text shown on tag if max-options-visible is reached.
- prop.disabled: boolean, default=false — Disables the combobox control.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the combobox as if it was disabled and enables aria-disabled
- prop.clearable: boolean, default=false — Adds a clear button when the combobox is not empty.
- prop.open: boolean, default=false — Indicates whether or not the combobox is open.
  You can toggle this attribute to show and hide the listbox, or you can use the `show()`
  and `hide()` methods and this attribute will reflect the combobox's open state.
- prop.hoist: boolean, default=false — Enable this option to prevent the listbox from being clipped,
  when the component is placed inside a container with `overflow: auto|scroll`.
  Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
- prop.label: string, default='' — The combobox's label. If you need to display HTML, use the `label` slot instead.
- prop.placement: 'top'|'bottom', default='bottom' — The preferred placement of the combobox's menu.
  Note that the actual placement may vary as needed to keep the listbox inside of the viewport.
- prop.helpText [attr: help-text]: string, default='' — The combobox's help text. If you need to display HTML, use the `help-text` slot instead.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element.
  This attribute allows you to place the form control outside of a form and associate it
  with the form that has this `id`.
  The form must be in the same document or shadow root for this to work.
- prop.required: boolean, default=false — The combobox's required attribute.
- prop.floatingLabel [attr: floating-label]: boolean, default=false — Enables the floating label behavior for the input.
- prop.type: 'search'|'text', default='text' — The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
  to `text`.
- prop.getOption: OptionRenderer, default=defaultOptionRenderer — A function that customizes the rendered option. The first argument is the option, the second
  is the query string, which is typed into the combobox.
  The function should return either a Lit TemplateResult or a string containing trusted HTML
  to render in the shown list of filtered options.
  If the query string should be highlighted use the `highlightOptionRenderer` function.
- prop.multiple: boolean, default=false — Allows more than one option to be selected.
- prop.useTags: boolean, default=true — Uses interactive `sd-tag` elements representing individual options in the display input when `multiple` is `true`. It cannot be opted out.
- prop.maxOptionsVisible [attr: max-options-visible]: number, default=3 — The maximum number of selected options to show when `multiple` and `useTags` are `true`. After the maximum, "+n" will be shown to
  indicate the number of additional items that are selected. Set to 0 to remove the limit.
- prop.styleOnValid [attr: style-on-valid]: boolean, default=false — Shows success styles if the validity of the input is valid.
- prop.filter: (option: SdOption, queryString: string) => boolean — A function used to filter options in the combobox component.
  The default filter method is a case- and diacritic-insensitive string comparison.
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
- event.sd-show: Emitted when the combobox's menu opens.
- event.sd-after-show: Emitted after the combobox's menu opens and all animations are complete.
- event.sd-hide: Emitted when the combobox's menu closes.
- event.sd-after-hide: Emitted after the combobox's menu closes and all animations are complete.
- event.sd-invalid: Emitted when the form control has been checked for validity and its constraints aren't satisfied.
- event.sd-error: Emitted when the combobox menu fails to open.

### Slots

- slot.default: The listbox options. Must be `<sd-option>` elements. You can use `<sd-optgroup>`'s to group items visually.
- slot.label: The combobox's label. Alternatively, you can use the `label` attribute.
- slot.help-text: Text that describes how to use the combobox. Alternatively, you can use the `help-text` attribute.
- slot.left: Used to prepend a presentational icon or similar element to the combobox.
- slot.right: Used to append a presentational icon or similar element to the combobox.
- slot.clear-icon: An icon to use in lieu of the default clear icon.
- slot.expand-icon: The icon to show when the control is expanded and collapsed. Rotates on open and close.

### CSS Parts

- part.form-control: The form control that wraps the label, combobox, and help text.
- part.form-control-label: The label's wrapper.
- part.form-control-input: The combobox's wrapper.
- part.form-control-help-text: The help text's wrapper.
- part.combobox: The container that wraps the prefix, combobox, clear icon, and expand button.
- part.left: The container that wraps the left icon slot.
- part.right: The container that wraps the right icon slot.
- part.display-input: The element that displays the selected option's label, an `<input>` element.
- part.listbox: The listbox container where the options are slotted and the filtered options list exists.
- part.filtered-listbox: The container that wraps the filtered options.
- part.clear-button: The clear button.
- part.expand-icon: The container that wraps the expand icon.

## Guidelines

### Use Cases

- Allow users to select one or more options from a potentially large list by typing a search string and filtering suggestions.
- Provide an autocomplete feature in forms where specific or complex entries benefit from quick lookup.
- Implement in search fields or filter panels when users may not recall the exact option name but can approximate it.

#### Default Combobox

Use the “default” variant when clarity, scannability, and accessibility are your primary concerns.

- Long or descriptive labels, helper text, or units are needed.
- Forms with many fields that users must scan quickly.
- Complex fields with adornments, counters, or tooltips.

#### Floating Label Combobox

Use the “floating-label” variant to conserve vertical space and streamline simple forms, while still keeping the label visible.

- Compact layouts and simple fields.
- Short labels (1–3 words); minimal helper text.
- You want a clean look without duplicate placeholder text.

### Rules

### Variant Consistency

Do not mix the two variants (default / floating label) within the same product, flow or form. Read the use cases above to know when to use each type.

### Content and Labels

- Keep option labels concise so that suggestions are easy to scan and select.
- Provide a clear, descriptive placeholder (e.g., “Search or select an option…”) to help users understand they can type and choose from suggestions.
- Avoid repeating the same initial word in multiple suggestions to reduce scanning difficulty.

### Searching Behavior

- Filter available options in real time as the user types; highlight or bold matching text to indicate relevance.
- Show a message (e.g., “No matches found”) when no options align with the user’s input.
- Consider limiting the maximum number of displayed suggestions to avoid overwhelming users.

### Background

- Use light backgrounds such as white, neutral-100, or primary-100 for clarity and consistency across different layouts.
- Keep focus styles clearly visible when the user navigates through suggestions with a keyboard or screen reader.

### Accessibility

- To ensure screenreader compatibility, consider including a statement such as "Fields marked with an asterisk (\*) are required" at the start of the form.
- A visible label may be omitted for search input fields within a combobox if an associated button—complete with a clear search icon and an appropriate accessible name (e.g., aria-label="Search")—is provided.
- Be aware that group labels will be neglected by most assistive devices.
- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.

### Related Templates

- combobox

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-option: Options define the selectable items within various form controls such as [select](/components/select).
- sd-optgroup: The <sd-optgroup> element creates a grouping for <sd-option>s within a <sd-combobox>.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
