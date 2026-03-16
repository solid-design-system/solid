---
'@solid-design-system/components': minor
---

Previously when the user types something in the component `sd-combobox` that is not one of the options, pressing tab would save the "wrong" text in the state. This push fixes that issue. So now when the user types something that is not part of the list/options, pressing tab would delete the text written.
