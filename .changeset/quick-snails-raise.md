---
'@solid-design-system/components': patch
---

Fixes for keyboard focus in `sd-datepicker`:

- A focused start or end date of a range keeps its selected color instead of switching to the hover color.
- Opening the calendar focuses today, the selected date, or the first date of the range.
- Tab reaches the calendar from the input and then the navigation buttons; Escape closes it from anywhere.
- Unavailable dates can be focused and are announced as unavailable instead of being skipped.
