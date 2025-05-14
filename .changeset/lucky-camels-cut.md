---
'@solid-design-system/components': major
---

`sd-scrollable` `start` and `end` events were not working as expected.
- `start` event was emitted when there was available scrolling space in the start direction.
- `end` event was emitted when there was available scrolling space in the end direction.

Now events are working as expected, only being triggered when the `start`/`end` is reached.
