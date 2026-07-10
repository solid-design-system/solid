## Overview

`<sd-datepicker>` — Used to enter or select a date or a range of dates using a calendar view.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-datepicker, example: size
- component: sd-datepicker, example: alignment
- component: sd-datepicker, example: label
- component: sd-datepicker, example: floating-label
- component: sd-datepicker, example: placeholder
- component: sd-datepicker, example: disabled
- component: sd-datepicker, example: visually-disabled
- component: sd-datepicker, example: help-text
- component: sd-datepicker, example: required
- component: sd-datepicker, example: valid
- component: sd-datepicker, example: invalid
- component: sd-datepicker, example: disabled-weekends
- component: sd-datepicker, example: disabled-dates
- component: sd-datepicker, example: range
- component: sd-datepicker, example: visible-month

### Key Properties

- prop.locale: string, default='en-US' — Used for formatting and announcements (e.g., 'en-US', 'de-DE').
- prop.value: string|null, default=null — Selected date when not in range mode.
  Eg: `value="2025.11.10"` or `value="2025-11-10"` (both accepted)
- prop.range: boolean, default=false — Enables date range selection when true.
- prop.rangeStart [attr: range-start]: string|null, default=null — Range start date when in range mode.
  Eg: `range-start="2025.11.10"` or `range-start="2025-11-10"` (both accepted)
- prop.rangeEnd [attr: range-end]: string|null, default=null — Range end date when in range mode.
  Eg: `range-end="2025.11.10"` or `range-end="2025-11-10"` (both accepted)
- prop.allowSameDayRange: boolean, default=false — Allows selecting the same start and end date when true.
- prop.min: string|number|Date|undefined, default=undefined — Minimum selectable date
  Eg: `min="2025.11.10"` or `min="2025-11-10"` (both accepted)
- prop.max: string|number|Date|undefined, default=undefined — Maximum selectable date
  Eg: `max="2025.11.10"` or `max="2025-11-10"` (both accepted)
- prop.viewMonth [attr: view-month]: Date|null, default=null — The month initially displayed by the calendar grid.
  Eg: `view-month="2026-07"` or `view-month="2026.07"`
- prop.firstDayOfWeek: number|null, default=null — First day of the week (0=Sun .. 6=Sat). If null, defaults to 1 (Monday).
- prop.disabledWeekends [attr: disabled-weekends]: boolean, default=false — When true, weekends (Saturday/Sunday) are disabled.
- prop.disabledDates [attr: disabled-dates]: string[]|string, default=[] — List of disabled dates.
  Eg: `disabled-dates="2025-10-31,2025-11-11"` or `disabled-dates="2025.10.31,2025.11.11"` (both accepted)
- prop.isDateDisabled: ((d: Date) => boolean)|null, default=null — Custom predicate that can disable specific dates at runtime.
- prop.size: 'lg'|'md'|'sm', default='lg' — Size of the input and calendar visuals.
- prop.alignment: 'left'|'right', default='left' — Horizontal alignment of the flyout relative to the input.
- prop.label: string, default='' — Text label for the input. Can be overridden with slot="label".
- prop.helpText [attr: help-text]: string, default='' — Help text shown below the input. Can be overridden with slot="help-text".
- prop.floatingLabel [attr: floating-label]: boolean, default=false — Enables the floating label behavior for the input.
- prop.disabled: boolean, default=false — Disables the control entirely when true.
- prop.required: boolean, default=false — Makes the input a required field.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Makes the control non-interactive visually (like disabled) without disabling it functionally.
- prop.styleOnValid [attr: style-on-valid]: boolean, default=false — When true, applies success styling for valid selections.
- prop.readonly: boolean, default=false — Makes the input read-only (non-editable) when true.
- prop.placement: 'top'|'bottom', default='bottom' — Preferred placement of the flyout relative to the input (top|bottom).
- prop.placeholder: string, default='' — Placeholder text for the input when no date is selected.
- prop.name: string, default='' — The name of the datepicker, submitted as a name/value pair with form data.
- prop.form: string, default='' — By default, form controls are associated with the nearest containing `<form>` element.
  This attribute allows you to place the form control outside of a form and associate it
  with the form that has this `id`.
- prop.hasFocus: boolean, default=false — True when the input or calendar has focus.
- prop.showValidStyle: boolean, default=false — Whether to show the valid styling state.
- prop.showInvalidStyle: boolean, default=false — Whether to show the invalid styling state.
- prop.currentPlacement: — Actual placement currently used by the flyout.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-change: Emitted when the date selection changes.
- event.sd-range-select: Emitted when the date range selection changes.
- event.sd-select: Emitted when the date selection changes.
- event.sd-datepicker-close: Emitted when the datepicker is closed.
- event.sd-focus: Emitted when the datepicker is focused.
- event.sd-blur: Emitted when the datepicker is blurred.
- event.sd-month-change: Emitted when the month is changed.
- event.sd-month-year: Emitted when the year is changed.

### Slots

- slot.default: The default slot.
- slot.label: The label for the date input.
- slot.help-text: The help text, displayed below the input.
- slot.tooltip: The tooltip icon and content.

### CSS Parts

- part.datepicker: The component's base wrapper.
- part.header: The header containing the month/year and navigation buttons.
- part.prev-year-button: The button to go to the previous year.
- part.prev-month-button: The button to go to the previous month.
- part.month-label: The month and year label.
- part.next-month-button: The button to go to the next month.
- part.next-year-button: The button to go to the next year.
- part.grid: The calendar grid container.
- part.weekday: Each weekday label in the calendar header.
- part.day: Each day button in the calendar grid.
- part.form-control: The form control wrapper around the input.
- part.form-control-label: The label for the input.
- part.form-control-input: The input element.
- part.border: The border around the input.
- part.invalid-icon: The icon shown when the input is invalid.
- part.valid-icon: The icon shown when the input is valid.
- part.form-control-help-text: The help text, displayed below the input.

## Guidelines

### Use Cases

- Reservations & Scheduling: Select or enter a specific date for bookings, appointments, or events.
- Data Filtering & Analysis: Choose a start and end date to define a time range for reports, trends, or historical records.

#### Default Datepicker

Use the “default” variant when clarity, scannability, and accessibility are your primary concerns.

- Long or descriptive labels, helper text, or units are needed.
- Forms with many fields that users must scan quickly.
- Complex fields with adornments, counters, or tooltips.

#### Floating Label Datepicker

Use the “floating-label” variant to conserve vertical space and streamline simple forms, while still keeping the label visible.

- Compact layouts and simple fields.
- Short labels (1–3 words); minimal helper text.
- You want a clean look without duplicate placeholder text.

<sd-notification variant="warning" open>**Don’t use sd-datepicker for the following use cases:**

If entering a birth date is required: Use sd-input with type date.

If a week selection is required: Use sd-select with a list of weeks to select from. </sd-notification>

### Rules

### Variant Consistency

Do not mix the two variants (default / floating label) within the same product, flow or form. Read the use cases above to know when to use each type.

### Behavior

- Opens a calendar flyout when clicking the input for quick date selection.
- Supports manual date entry (e.g., DD.MM.YYYY) for users who prefer typing.

### Content

- Use the default label.
- Append an asterisk (\*) to indicate required fields.
- Include placeholder text (e.g., “Select date”) for usability.
- Provide contextual hints where additional guidance is needed.

### Background

- Place on light backgrounds (white, neutral-100, or primary-100) for clarity and readability.
