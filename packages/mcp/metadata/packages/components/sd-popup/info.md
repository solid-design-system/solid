## Overview

`<sd-popup>` — Popup is a utility that lets you declaratively anchor "popup" containers to another element.

## API

### Key Properties

- prop.anchor: Element|string — The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide its `id` or a
  reference to it here. If the anchor lives inside the popup, use the `anchor` slot instead.
- prop.active: boolean, default=false — Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
  down and the popup will be hidden.
- prop.placement: |'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'right'|'right-start'|'right-end'|'left'|'left-start'|'left-end', default='top' — The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
  panel inside of the viewport.
- prop.strategy: 'absolute'|'fixed', default='absolute' — Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if
  overflow is clipped, using a `fixed` position strategy can often workaround it.
- prop.distance: number, default=0 — The distance in pixels from which to offset the panel away from its anchor.
- prop.skidding: number, default=0 — The distance in pixels from which to offset the panel along its anchor.
- prop.arrow: boolean, default=false — Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
  `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
  `::part(arrow)` in your stylesheet.
- prop.arrowPlacement [attr: arrow-placement]: |'start'|'end'|'center'|'anchor', default='anchor' — The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
  anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
  align the arrow to the start, end, or center of the popover instead.
- prop.arrowPadding [attr: arrow-padding]: number, default=10 — The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
  this will prevent it from overflowing the corners.
- prop.flip: boolean, default=false — When set, placement of the popup will flip to the opposite site to keep it in view. You can use
  `flipFallbackPlacements` to further configure how the fallback placement is determined.
- prop.flipFallbackPlacements [attr: flip-fallback-placements]: string, default='' — If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
  string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
  fallback strategy will be used instead.
- prop.flipFallbackStrategy [attr: flip-fallback-strategy]: 'best-fit'|'initial', default='best-fit' — When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
  the popup should be positioned using the best available fit based on available space or as it was initially
  preferred.
- prop.flipBoundary: Element|Element[] — The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
  default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
  change the boundary by passing a reference to one or more elements to this property.
- prop.flipPadding [attr: flip-padding]: number, default=0 — The amount of padding, in pixels, to exceed before the flip behavior will occur.
- prop.shift: boolean, default=false — Moves the popup along the axis to keep it in view when clipped.
- prop.shiftBoundary: Element|Element[] — The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
  default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
  change the boundary by passing a reference to one or more elements to this property.
- prop.shiftPadding [attr: shift-padding]: number, default=0 — The amount of padding, in pixels, to exceed before the shift behavior will occur.
- prop.autoSize [attr: auto-size]: 'horizontal'|'vertical'|'both' — When set, this will cause the popup to automatically resize itself to prevent it from overflowing.
- prop.sync: 'width'|'height'|'both' — Syncs the popup's width or height to that of the anchor element.
- prop.autoSizeBoundary: Element|Element[] — The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
  default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
  change the boundary by passing a reference to one or more elements to this property.
- prop.autoSizePadding [attr: auto-size-padding]: number, default=0 — The amount of padding, in pixels, to exceed before the auto-size behavior will occur.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-reposition: Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.
- event.sd-current-placement: Emitted when the popup's placement changes automatically based on screen limitations.

### Slots

- slot.default: The popup's content.
- slot.anchor: The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.

### CSS Parts

- part.arrow: The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.
- part.popup: The popup's container. Useful for setting a background color, box shadow, etc.

### Related Templates

- autocomplete

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
