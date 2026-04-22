## Overview

`<sd-option>` — Options define the selectable items within various form controls such as [select](/components/select).

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-option/size
- sd-option/checkbox
- sd-option/selected
- sd-option/disabled

### Key Properties

- prop.size: 'lg'|'md'|'sm', default='lg' — The option's size is inherited automatically from the `size` attribute of the parent `sd-select`.
- prop.checkbox: boolean, default=false — Prefixes a styled checkbox to the option. Enabled automatically in `sd-select` when attribute `checklist` is set to `true`.
- prop.disabled: boolean, default=false — Draws the option in a disabled state, preventing selection.
- prop.value: string, default='' — The option's value. When selected, the containing form control will receive this value. The value must be unique
  from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
  multiple values.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The option's label.
- slot.left: Used to prepend an icon or similar element to the menu item.
- slot.right: Used to append an icon or similar element to the menu item.

### CSS Parts

- part.checked-icon: The checked icon, an `<sd-icon>` element.
- part.base: The component's base wrapper.
- part.label: The option's label.
- part.left: The container that wraps the left.
- part.right: The container that wraps the right.

## Guidelines

### Use Cases

- Provide options in selects or comboboxes.
- Allow users to select from a list of predefined choices in forms or settings, where they might choose one or more options.
- Present filter options in searches or data tables.

### Rules

### Content

- Make sure all items in the list are mutually exclusive and unambiguous to help users understand what they are selecting.
- Provide a default choice where applicable to guide users.

### Behavior

- Use the “checkbox” variant for multi-select and the “default” variant for single-select choices.
- Provide a reason or alternative if some choice is disabled.

### Accessibility

- Long option names can be difficult to understand and perceive, so it’s best to keep them concise.
- Ensure that the beginning of each option is unique to avoid confusion, especially for screen reader users.
- Don’t include headings or interactive elements like links, buttons, or checkboxes within dropdown options.

### Related Templates

- combobox
- forms
- select
- switch
- tooltip

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-select: Selects allow you to choose items from a menu of predefined options.
- sd-combobox: Comboboxes allow you to choose items from a menu of predefined options.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
