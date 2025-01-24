---
'@solid-design-system/components': patch
---

Fixed `sd-navigation-item` broken layout

Improved sd-drawer a11y:
- Fix focus management - the focus will go to close button once the drawer is open
- Make content area a scrollable region to be accessed by screen readers
- Add close button to no-header variant
- Fix aria-labelledby title issue
