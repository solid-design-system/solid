---
'@solid-design-system/styles': patch
---

Replace counters() with counter() inside ordered lists:

- counter() is sufficient here since we are already incrementing each level's counter separately.
- Fixes an issue where nested ordered lists would sometimes not display correct numbering in some browsers.
