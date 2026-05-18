## Overview

`<sd-scrollable>` — Scrollable is used to indicate there is hidden content to be scrolled.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-scrollable/orientation
- sd-scrollable/scrollbar
- sd-scrollable/buttons
- sd-scrollable/shadows
- sd-scrollable/inset
- sd-scrollable/step

### Key Properties

- prop.orientation: 'horizontal'|'vertical'|'auto', default='horizontal' — Defines the scroll orientation
- prop.scrollbars: boolean, default=false — Activates browser scrollbars
- prop.buttons: boolean, default=false — Activates scroll buttons
- prop.shadows: boolean, default=false — Activates a shadow as optional visual scroll indicator
- prop.inset: boolean, default=false — Adds inset padding
- prop.step: number, default=150 — The amount in px to be scrolled when clicking the buttons.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.start: Emitted when the start of the scrollable is reached.
- event.end: Emitted when the end of the scrollable is reached.
- event.eventName:
- event.button-left: Emitted when the left button is clicked.
- event.button-right: Emitted when the right button is clicked.
- event.button-up: Emitted when the top button is clicked.
- event.button-down: Emitted when the bottom button is clicked.

### Slots

- slot.default: The scrollable's content.
- slot.icon-start: The scrollable's start icon.
- slot.icon-end: The scrollable's end icon.

### CSS Parts

- part.base: The scrollable's base wrapper.
- part.scroll-content: The scrollable's content.
- part.button-start: The scrollable's start scroll button.
- part.button-end: The scrollable's end scroll button.
- part.button-left: The scrollable's left scroll button.
- part.button-right: The scrollable's right scroll button.
- part.button-top: The scrollable's top scroll button.
- part.button-bottom: The scrollable's bottom scroll button.
- part.shadow-left: The scrollable's left shadow.
- part.shadow-right: The scrollable's right shadow.
- part.shadow-top: The scrollable's top shadow.
- part.shadow-bottom: The scrollable's bottom shadow.

## Guidelines

### Use Cases

- Present long lists or detailed information that exceeds the visible area.

### Rules

### Content

- Ensure critical information is not hidden within scrollable areas; users should not have to scroll to find essential content.

### Behavior

- Use visual cues like shadows or buttons to indicate scrollable content when simply cutting off hidden content isn't enough.
- Avoid disabling scrollbars, as they provide essential visual cues for users.
- Limit the use of scrollable containers; excessive scrolling can be frustrating for users.
- Prefer vertical scrolling over horizontal scrolling, especially on mobile devices.

### Responsiveness

- Test whether your scrollable containers adapts well to different screen sizes and orientations.
- Avoid setting fixed heights for scrollable containers if the content size can vary significantly.

### Accessibility

- Ensure keyboard users can access and scroll within the container making the container focusable (tabindex="0") and allow arrow keys to navigate through the content.
- Verify that any interactive elements within the scrollable container receive a proper focus highlight and move into the visible frame.

### Related Templates

- dialog

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
