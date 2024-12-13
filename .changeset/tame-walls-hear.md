---
'@solid-design-system/components': patch
'@solid-design-system/docs': patch
---

Improved a11y for sd-step and sd-step-group:

- Add list role to sd-step-group
- Add list-item role to sd-step
- Fix tests
- Remove tabindex to avoid a mismatch between information the users get depending on the chosen navigation type
- Add ARIA attributes to components
- Fix text colors in disabled state
