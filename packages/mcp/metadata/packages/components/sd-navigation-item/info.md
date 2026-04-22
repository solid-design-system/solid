## Overview

`<sd-navigation-item>` — Flexible button / link component that can be used to quickly build navigations. Takes one of 3 forms: link (overrides all other if 'href' is provided), button (default), or accordion (if 'children' slot defined).

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-navigation-item/size
- sd-navigation-item/orientation
- sd-navigation-item/as-link
- sd-navigation-item/current
- sd-navigation-item/disabled
- sd-navigation-item/divider
- sd-navigation-item/chevron
- sd-navigation-item/accordion
- sd-navigation-item/separated
- sd-navigation-item/description
- sd-navigation-item/indented
- sd-navigation-item/relaxed

### Key Properties

- prop.vertical: boolean, default=false — The navigation item's orientation. If false, properties below this point are not used.
- prop.size: 'md'|'lg'|'sm', default='md' — The navigation item's font size.
- prop.href: string — The navigation item's href target. If provided, the navigation item will use an anchor tag otherwise it will use a button tag. The 'children' slot and accordion behavior will be ignored if an 'href' is provided.
- prop.target: '\_blank'|'\_parent'|'\_self'|'\_top' — Tells the browser where to open the link. Only used when `href` is defined.
- prop.download: string|undefined — Tells the browser to download the linked file as this filename. Only used when `href` is defined.
- prop.current: boolean, default=false — Indicates that the navigation item is currently selected. The aria-current attribute is set to "page" on the host if true.
- prop.disabled: boolean, default=false — Disables the navigation item.
- prop.chevron: boolean, default=false — Appends a chevron to the right side of a navigation item. Only used if `vertical` is true.
- prop.relaxed: boolean, default=false — Adds additional padding to navigation item's left and right sides. Only used if `vertical` is true.
- prop.divider: boolean, default=false — Adds additional padding to navigation item's left and right sides. Only used if `vertical` is true.
- prop.indented: boolean, default=false — Adds additional padding to navigation item's left side. Only used if `vertical` is true.
- prop.open: boolean, default=false — Reflects HTML details element state and allows control from parent. Only used if `vertical` is true, no `href`is undefined, and `children` is defined.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-show: Emitted when the navigation item has has children, no href, and is clicked while HTML details are hidden.
- event.sd-hide: Emitted when the navigation item has has children, no href, and is clicked while HTML details are shown.

### Slots

- slot.default: The navigation item's label.
- slot.description: \*Vertical only: Slot used to provide a description for the navigation item.
- slot.children: Slot used to provide nested child navigation elements. If provided, details and summary elements will be used. A chevron will be shown on the right side regardless of the chevron property.

### CSS Parts

- part.base: The component's base wrapper including children.
- part.content-wrapper: The component's content wrapper.
- part.content: The component's content excluding children.
- part.chevron: The container that wraps the chevron.
- part.description: The component's description area below its main content.
- part.divider: The component's optional top divider.

## Guidelines

### Use Cases

- Populate an [sd-header](./?path=/docs/components-sd-header--docs) navigation bar at the top of a page, helping users easily access different sections.
- Implement navigation items in a sidebar for a more detailed and hierarchical navigation structure.

### Rules

### Labels and Icons

- Use clear, concise labels for navigation items.
- Don’t use icons alone unless they are universally understood.
- Use icons and labels together to enhance comprehension.

### Text Styles and Descriptions

- The default style is “book”, but text can be bolded if desired.
- Bold text for current / parent as well as first level navigation.
- Override with ”text.black” for non-clickable second level items.
- Be consistent in the use of descriptions: Include them for all items at the same level and keep them similar in length.

### Spacing

- Use relaxed for extra spacing on vertical desktop viewports.
- Use indented for nested navigation items in vertical desktop or mobile viewports and in horizontal mobile menus.

### Background Options

- Use with background options of white, neutral-100, and primary-100.

### Accessibility

- Provide a logical tab order that follows the visual sequence of navigation items and their different levels.
- Use aria-current="page" or aria-current="location" on the active navigation item to communicate the user’s current location.

### Related Templates

- badge
- breadcrumb
- drawer
- dropdown
- header-navigation

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-header: Header

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
