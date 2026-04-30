## Overview

`<sd-link>` — A link component.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-link/size
- sd-link/as-link
- sd-link/icon
- sd-link/standalone
- sd-link/disabled
- sd-link/visually-disabled
- sd-link/inverted

### Key Properties

- prop.standalone: boolean, default=false — Control the layout of icon and text within the component and the component's positioning.
- prop.size: 'inherit'|'lg'|'sm', default='inherit' — The link's size.
- prop.inverted: boolean, default=false — Inverts the link.
- prop.href: string, default='' — When not set, the link will render as disabled.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the link as if it was disabled and enables aria-disabled
- prop.target: '\_blank'|'\_parent'|'\_self'|'\_top' — Tells the browser where to open the link. Only used when `href` is present.
- prop.download: string|undefined — Tells the browser to download the linked file as this filename. Only used when `href` is present.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the link loses focus.
- event.sd-focus: Emitted when the link gains focus.

### Slots

- slot.default: The default slot.
- slot.icon-left: The icon to display on the left side of the link.
- slot.icon-right: The icon to display on the right side of the link.

### CSS Parts

- part.base: The component's base wrapper.
- part.icon-left: The container that wraps the left icon area.
- part.label: The link's label.
- part.icon-right: The container that wraps the right icon area.

## Guidelines

### Use Cases

- Navigate to other pages or sections within the same page.
- Link to external websites or resources, such as file downloads.
- Include links within text blocks for references or citations.
- Link to emails or phone numbers.

### Rules

### Link Text and Label

- Be specific and use descriptive and concise link text that indicates the destination or action. For example, instead of "Click here for more information", use "Learn more about our services".
- Avoid generic phrases like "Click here".
- Display system icons before or after the link label when an action is actively executed as a result, such as opening a new window.

### Behavior and Interaction

- Do not use links for actions that should be performed by buttons (e.g., submitting forms, triggering modals).
- Do not open links in new tabs without informing the user.
- Avoid placing too many links close together to make sure they’re easy to click or tap.

### Backgrounds

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Use descriptive link text that clearly conveys its purpose to screen reader users out of context.
- Avoid having multiple links that point to the same URL within the same context, as this can be confusing for users.
- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.

### Related Templates

- dialog
- flipcard
- forms
- link
- notification
- table
- teaser

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
