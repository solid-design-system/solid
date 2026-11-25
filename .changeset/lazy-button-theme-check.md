---
'@solid-design-system/components': patch
---

Improved render performance on pages with many components:

- Replaced the per-component `sd-theme-listener` with one shared `style-observer`.
- `sd-button` and `sd-dialog` check theme only before animations, not continuously.
- Fixed theme listeners not being removed when components disconnect.
