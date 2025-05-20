---
'@solid-design-system/components': major
---

Fixed `sd-scrollable` `start` and `end` events.
- (before): `start` event was emitted when there was available scrolling space in the `start` direction ---> (after): `start` event is emitted when the `start` is reached.
- (before): `end` event was emitted when there was available scrolling space in the `end` direction ---> (after): `end` event is emitted when the `end` is reached.
