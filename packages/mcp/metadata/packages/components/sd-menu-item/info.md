## Overview

`<sd-menu-item>` — Menu items provide options for the user to pick from in a menu.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-menu-item/icon-indent
- sd-menu-item/checkmark
- sd-menu-item/disabled

### Key Properties

- prop.type: 'normal'|'checkbox', default='normal' — The type of menu item to render. To use `checked`, this value must be set to `checkbox`.
- prop.checked: boolean, default=false — Draws the item in a checked state.
- prop.disabled: boolean, default=false — Draws the menu item in a disabled state, preventing selection.
- prop.value: string, default='' — A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The menu item's label.
- slot.icon-indent: Used to prepend an icon or similar element to the menu item.
- slot.submenu: Used to denote a nested menu.

### CSS Parts

- part.base: The component's base wrapper.
- part.checked-icon: The icon shown when the menu item is checked.
- part.icon-indent: The icon shown when the menu item has an indent.
- part.label: The menu item's label.
- part.submenu-icon: The icon shown when the menu item has a submenu.

### Related Templates

- menu

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-menu: Used as a list of choices to the user, such as a set of actions or functions.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
