---
'@solid-design-system/components': patch
---

fix: make sd-tooltip more accessible:

- Fixed tooltip ignoring first click due to focus logic.
- Provided a label for the icon.
- Added `aria-describedby` attribute to the button.
- Removed "Long Content" story from screenshot tests.
