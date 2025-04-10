---
'@solid-design-system/components': patch
---

Fix `sd-carousel` a11y issues when set to autoplay.

- Switch from `role="status"` to `aria-live` for more granular control.
- Update `aria-live` when element is focused.
- Add localized `aria-label` to `scroll-container`.
