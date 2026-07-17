## Overview

`<sd-menu-item>` — Used to provide options for the user to pick from a menu.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-menu-item, example: icon-indent
- component: sd-menu-item, example: checkmark
- component: sd-menu-item, example: disabled

### Key Properties

- prop.type: 'normal'|'checkbox', default='normal' — The type of menu item to render. To use `checked`, this value must be set to `checkbox`.
- prop.checked: boolean, default=false — Draws the item in a checked state.
- prop.disabled: boolean, default=false — Draws the menu item in a disabled state, preventing selection.
- prop.value: string, default='' — A unique value to store in the menu item. This can be used as a way to identify menu items when selected.

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
