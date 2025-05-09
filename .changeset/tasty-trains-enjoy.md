---
'@solid-design-system/components': major
---

Implemented `sd-tag` motion design:
- Toggle `opacity = 0` and `hidden = true` on `remove` button click.
- Implement new `sd-after-remove` event which is triggered after the remove animation.
- The `sd-remove` can be canceled using `event.preventDefault()` to stop any animation and `sd-after-remove` from being triggered.

