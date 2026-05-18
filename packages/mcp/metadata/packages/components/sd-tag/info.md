## Overview

`<sd-tag>` — Tags are used as labels to organize things or to indicate a selection.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-tag/size
- sd-tag/selected
- sd-tag/removable
- sd-tag/as-link
- sd-tag/disabled
- sd-tag/icon

### Key Properties

- prop.size: 'lg'|'sm', default='lg' — The tag's size.
- prop.selected: boolean, default=false — Displays the tag in a selected state.
- prop.toggleable: boolean, default=false — Defines the tag as toggleable, adding the `aria-pressed` attribute to indicate its selected state
- prop.removable: boolean, default=false — Displays the tag with a removability indicator.
- prop.disabled: boolean, default=false — Displays the tag in a disabled state.
- prop.href: string, default='' — When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
- prop.target: '\_blank'|'\_parent'|'\_self'|'\_top' — Tells the browser where to open the link. Only used when `href` is present.
- prop.download: string|undefined — Tells the browser to download the linked file as this filename. Only used when `href` is present.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the tag loses focus.
- event.sd-focus: Emitted when the tag gains focus.
- event.sd-remove: Emitted when the remove button is activated.
- event.sd-hide: Emitted when the hide method is triggered.
- event.sd-after-hide: Emitted after the tag is hidden and all animations are complete.

### Slots

- slot.default: The tag's content.
- slot.icon-left: A prefix icon or similar element.
- slot.removable-indicator: The tag's removability indicator.

### CSS Parts

- part.base: The component's base wrapper.
- part.content: The tag's content.
- part.removable-indicator: The tag's removability indicator.
- part.icon-left: The container that wraps the left icon area.

## Guidelines

### Use Cases

- Label and categorize items to help users filter and find relevant content.
- Highlight important keywords or attributes associated with an item.
- Allow users to filter content dynamically by clicking on tags.
- Display topics or categories associated with an article, post or product.

### Rules

### Labels

- Try to keep a similar text length for all labels, and specially avoid excessively long ones. If necessary, truncate the label and show the full text in a tooltip on hover.
- Don’t use tags to indicate the status of a task, use [sd-status-badge](./?path=/docs/styles-sd-status-badge--docs) instead.

### Behavior

- Use the “removable” attribute to include a small close “x” button next to the label.
- Avoid using a standalone, non-removable tag, as its selected/unselected state could be unclear. Apply the “removable” attribute for those cases.

### Interactivity

- Tags are interactive elements which trigger an action; to label or categorise items without any interaction use [sd-chip](./?path=/docs/styles-sd-chip--docs) or [sd-flag](./?path=/docs/styles-sd-flag--docs) instead.

### Related Templates

- tag

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
