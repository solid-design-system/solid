---
'@solid-design-system/components': patch
---

Improved render performance on pages with many components:

- Replaced per-component theme observers with one shared `MutationObserver`. Components still read their own `--sd-theme`, so nested themes work.
- `sd-button` and `sd-dialog` check theme only before animations, not continuously.
- Fixed theme listeners not being removed when components disconnect.
