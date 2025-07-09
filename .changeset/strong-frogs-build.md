---
'@solid-design-system/components': patch
---

Fixed the following issues in the `sd-tab-group` component:

- `sd-tab-panel` focus was always visible even when tabbing into other child elements. Now it will move the focus to the correct elements.
- `sd-tab-group` logic to scroll into view the next and previous tab was breaking when on the first or last tab element. Added another validation to prevent it.
