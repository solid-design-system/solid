---
'@solid-design-system/components': minor
'@solid-design-system/docs': minor
---

- Added a new manual management functionality to the `sd-step-group` activated by setting the `active-step` attribute to -1. This disables the current automatic behavior of the `sd-step-group`, like changing every step after the `current` to `waiting`, and allows the user to set manage these states freely. 
- Added a new story "Manual Step state" to the documentation and tests for this use case.
- Fixed the default story in documentation since it was wasn't chaging the `current` step when the attribute `active-step` was changed to 0.