---
'@solid-design-system/components': patch
---

Fixes for keyboard focus in `sd-datepicker`:

- Improved range start and end date focus states for better visual consistency.
- Improved calendar focus behavior by focusing today when no date or range is selected.
- Improved calendar keyboard navigation: Tab now moves focus from the input to the calendar and then to the navigation buttons, while Escape closes the calendar from any focused element.
- Improved calendar accessibility by allowing unavailable dates to receive focus and be announced as unavailable instead of being skipped.
