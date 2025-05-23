---
'@solid-design-system/components': major
---

Improved `sd-header` component:
- Improved `--sd-header-calculated-height` property calculation.
- Added padding to the `sd-header` element when it has the `fixed` attribute, to prevent the following siblings from being overlapped by the header.
- Improved accessibility by removing the `position: fixed` at a certain minimum viewport height, to ensure it doesn't cover much of the screen.
