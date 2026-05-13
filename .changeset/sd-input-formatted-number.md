---
'@solid-design-system/components': minor
'@solid-design-system/styles': minor
'@solid-design-system/tokens': minor
'@solid-design-system/docs': patch
---

Added `type="formatted-number"` variant to `sd-input` for locale-aware numeric formatting:

- Formats the displayed value using `Intl.NumberFormat` on blur; restores the raw value for editing on focus
- Raw numeric string is always stored in `value`; formatted output is shown to the user
- Added `numberFormatOptions` property (`number-format-options` attribute) accepting an `Intl.NumberFormatOptions` object for custom formatting (currency, decimal precision, percentages, etc.)
- `valueAsNumber` getter and setter work correctly for `type="formatted-number"`
- `stepUp()` and `stepDown()` increment/decrement the raw numeric value and re-format on call
- Spin buttons (`spin-buttons`) are supported with `type="formatted-number"`
