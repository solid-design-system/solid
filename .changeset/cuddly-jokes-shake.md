---
'@solid-design-system/components': patch
'@solid-design-system/docs': patch
---

Fixes to navigation-item:

- Fix navigation-item broken layout

Improved sd-drawer, sd-drawer template and sd-header template a11y:

- Add aria-label to duplicated navigation landmarks in templates
- Fix focus style cut off
- Fix focus management - the focus will go to close button once the drawer is open
- Fix autofocus story
- Make content Area a scrollable region to be accessed by screen readers
- Add close button to no-header variant
- Fix aria-labelledby title issue
- Add a11y hint to add a label
- Add "open drawer" to all stories
