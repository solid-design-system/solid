## Overview

`<sd-drawer>` — Drawers slide in from a container to expose additional options and information.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-drawer/open
- sd-drawer/placement
- sd-drawer/no-header

### Key Properties

- prop.open: boolean, default=false — Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
  use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.
- prop.label: string, default='' — You should always include a relevant label even when using
  `no-header`, as it is required for proper accessibility.
- prop.placement: 'end'|'start', default='end' — The direction from which the drawer will open.
- prop.contained: boolean, default=false — By default, the drawer slides out of its containing block (the viewport). Contained is a hidden feature used only for testing purposes. Please do not use it in production as it will likely change.
- prop.noHeader [attr: no-header]: boolean, default=false — Removes the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the drawer.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-show: Emitted when the drawer opens.
- event.sd-after-show: Emitted after the drawer opens and all animations are complete.
- event.sd-hide: Emitted when the drawer closes.
- event.sd-after-hide: Emitted after the drawer closes and all animations are complete.
- event.sd-initial-focus: Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
- event.sd-request-close: Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.

### Slots

- slot.default: The drawer's main content.
- slot.header: The drawer's header, usually a title.
- slot.footer: The drawer's footer, usually one or more buttons representing various options.

### CSS Parts

- part.base: The component's base wrapper.
- part.overlay: The overlay that covers the screen behind the drawer.
- part.panel: The drawer's panel (where the drawer and its content are rendered).
- part.header: The drawer's header. This element wraps the title and the close-button.
- part.title: The drawer's title.
- part.close-button: The close button, an `<sd-button>`.
- part.body: The drawer's body.
- part.footer: The drawer's footer.

## Guidelines

### Use Cases

- Display supplementary information or options without navigating away from the main screen.
- Provide contextual help or guidance related to the current screen.
- House navigation menus on smaller devices.
- Present filter options, forms or settings that users can interact with without losing their place.

### Rules

### Slots

- Use the ”header” slot to add navigation and/or action elements if desired.
- Use the ”default” slot to add main content. The “default” slot is always scrollable. For simplicity, sd-scrollable is integrated into the component as a wrapper for the slot in Figma, but will need to be used in code if desired.
- Use the ”footer” slot to add action elements if desired. The “footer” slot is always fixed.

### Content

- Ensure the content is supplementary and does not include critical information that users must see immediately such as notifications or alerts; instead, use [sd-notification](./?path=/docs/components-sd-notification--docs) or [sd-dialog](./?path=/docs/components-sd-dialog--docs) for those purposes.
- Check that the drawer content is fully visible and readable, even at larger font sizes.

### Interaction and Behavior

- Maintain the state of the content when it is reopened.
- Avoid opening automatically without user interaction.
- Provide multiple ways to close the interface for easy dismissal, such as a close button or clicking outside of it.

### Layout

- Ensure it does not cover critical content or actions on the main screen.
- If using a tertiary action in the header, adjust the left padding to 0px for proper alignment.

### Accessibility

- Always provide a label for the drawer so that screenreaders correctly announce the component.
- Make sure that the close button is always visible to ensure users are able to close the drawer.

### Related Templates

- breadcrumb
- drawer
- header-navigation

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
