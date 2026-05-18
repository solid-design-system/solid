## Overview

`<sd-tab>` — Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-tab/variant
- sd-tab/active
- sd-tab/disabled
- sd-tab/visually-disabled
- sd-tab/icon

### Key Properties

- prop.variant: 'default'|'container', default='default' — When set to container, a border appears around the current tab and tab-panel.
- prop.active: boolean, default=false — Draws the tab in an active state.
- prop.disabled: boolean, default=false — Disables the tab and prevents selection.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the tab as if it was disabled and enables aria-disabled
- prop.panel: string, default='' — The name of the tab panel this tab is associated with. The panel must be located in the same tab group.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The tab's label.
- slot.left: Optional element (eg. icon) positioned to the left of the label.

### CSS Parts

- part.base: The component's base wrapper.
- part.active-tab-indicator: The active tab indicator.
- part.hover-bottom-border: The bottom border that appears when the tab is hovered.

## Guidelines

### Accessibility

- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.

### Related Templates

- tab-group

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-tab-group: Tab groups organize content into a container that shows one section at a time.
- sd-tab-panel: Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
