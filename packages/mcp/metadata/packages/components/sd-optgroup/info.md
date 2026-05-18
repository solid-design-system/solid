## Overview

`<sd-optgroup>` — The <sd-optgroup> element creates a grouping for <sd-option>s within a <sd-combobox>.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-optgroup/disabled

### Key Properties

- prop.disabled: boolean, default=false — Disables all options in the optgroup.
- prop.label: string, default='' — The optgroups label. If you need to display HTML, use the `label` slot instead.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The given options. Must be `<sd-option>` elements.
- slot.label: The label for the optgroup

### CSS Parts

- part.base: The component's base wrapper.
- part.label-container: The container that wraps prefix, label and base
- part.divider: The divider that is displayed above the content
- part.options: The container that wraps the <sd-option> elements.

## Guidelines

### Use Cases

- Provide options in selects or comboboxes.
- Allow users to select from a list of predefined choices in forms or settings, where they might choose one or more options.
- Present filter options in searches or data tables.

### Rules

### Content

- Make sure all items in the list are mutually exclusive and unambiguous to help users understand what they are selecting.
- Provide a default choice where applicable to guide users.
- Use the optional grouping label and/or divider attributes to visually identify the groups.

### Behavior

- Use the “checkbox” variant for multi-select and the “default” variant for single-select choices.
- Provide a reason or alternative if some choice is disabled.

### Accessibility

- Ensure that the group label is short and concise as it may be read out when users enter the group.

### Related Templates

- combobox

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-select: Selects allow you to choose items from a menu of predefined options.
- sd-combobox: Comboboxes allow you to choose items from a menu of predefined options.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
