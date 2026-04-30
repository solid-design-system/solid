## Overview

`<sd-tooltip>` — Tooltips display additional information based on a specific action.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-tooltip/size
- sd-tooltip/placement
- sd-tooltip/disabled
- sd-tooltip/trigger
- sd-tooltip/close-trigger
- sd-tooltip/hoist
- sd-tooltip/custom-trigger

### Key Properties

- prop.size: 'lg'|'sm', default='lg' — Sets the size of the default trigger icon.
- prop.content: string, default='' — The tooltip's content. If you need to display HTML, use the `content` slot instead.
- prop.placement: |'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end', default='top' — The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
  inside of the viewport.
- prop.disabled: boolean, default=false — Disables the tooltip so it won't show when triggered.
- prop.open: boolean, default=false — Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.
- prop.trigger: string, default='click focus' — Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
  options can be passed by separating them with a space. When manual is used, the tooltip must be activated
  programmatically.
- prop.closeTrigger [attr: close-trigger]: string, default='click focus escape' — Controls how the tooltip is closed.
  Possible options: `click`, `hover`, `focus`, `escape`, `manual`.
  Multiple options can be passed with spaces.
- prop.hoist: boolean, default=false — Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
  `overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
  scenarios.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-show: Emitted when the tooltip begins to show.
- event.sd-after-show: Emitted after the tooltip has shown and all animations are complete.
- event.sd-hide: Emitted when the tooltip begins to hide.
- event.sd-after-hide: Emitted after the tooltip has hidden and all animations are complete.

### Slots

- slot.default: The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
- slot.anchor: Slot to change the default trigger icon. The default icon is an info circle.
- slot.content: The content to render in the tooltip. Alternatively, you can use the `content` attribute.

### CSS Parts

- part.base: The component's base wrapper, an `<sd-popup>` element.
- part.base\_\_popup: The popup's exported `popup` part. Use this to target the tooltip's popup container.
- part.base\_\_arrow: The popup's exported `arrow` part. Use this to target the tooltip's arrow.
- part.body: The tooltip's body where its content is rendered.

## Guidelines

### Use Cases

- Provide additional, useful, and non-essential information about form fields.
- Expand abbreviations or acronyms that might be unfamiliar to users.
- Offer detailed information about specific data points in charts or graphs.
- Provide more context for error messages or warnings and anticipate any questions that users may have.

### Rules

### Trigger Element

- Use any interactive element as a tooltip trigger by placing it in the provided slot; the default trigger (info-i) can be replaced based on context or preference.

### Content

- Use short, descriptive text; if a longer explanation is required, consider non-interactive means to convey this information.
- Avoid jargon or highly technical language; aim to solve questions, not trigger more.
- Do not use for critical or unique information.
- Do not place links, buttons, or other interactive elements within the content.

### Behavior and Placement

- Place the tooltip where the floating element does not obscure important content related to the subject.
- Ensure it disappears when the user interacts with other elements.
- Avoid tootlips being cropped by other elements of the interface; use appropriate placement for this purpose.

### Styling

- Display a headline by bolding the text if it makes the content easier to understand.
- Emphasize key information by bolding parts of the text.

### Background

- Use with light background options of white, neutral-100 and primary-100.

### Accessibility

- Avoid placing buttons, links, or other interactive controls inside a tooltip, as it’s designed to be an ephemeral container for supplementary information.
- On desktop, tooltips open by default on hover over the trigger element, or optionally on click. They close by clicking the trigger again or by moving the pointer away.
- On touch devices, tooltips open when tapping on the trigger element and close by tapping on the trigger element again.
- For keyboard navigation, tooltips should open by focusing (Tab) on the trigger element and close by pressing Escape or by moving focus away.

### Related Templates

- button
- forms
- switch
- table
- tooltip

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
