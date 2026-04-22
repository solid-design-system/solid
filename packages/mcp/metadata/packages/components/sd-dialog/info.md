## Overview

`<sd-dialog>` — Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-dialog/open
- sd-dialog/headline
- sd-dialog/no-close-button

### Key Properties

- prop.open: boolean, default=false — Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
  use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.
- prop.headline: string, default='' — The dialog's headline as displayed in the header. If you need to display HTML, use the `headline` slot instead.
- prop.noCloseButton [attr: no-close-button]: boolean, default=false — This will remove the default close button. Please ensure you provide an easy, accessible way for users to dismiss the dialog.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-show: Emitted when the dialog opens.
- event.sd-after-show: Emitted after the dialog opens and all animations are complete.
- event.sd-hide: Emitted when the dialog closes.
- event.sd-after-hide: Emitted after the dialog closes and all animations are complete.
- event.sd-initial-focus: Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
- event.sd-request-close: Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.

### Slots

- slot.default: The dialog's main content.
- slot.headline: The dialog's headline. Alternatively, you can use the `headline` attribute.
- slot.footer: The dialog's footer, usually one or more buttons representing various options.
- slot.close-button: The dialog's close button. Works best with `<sd-button>` and `<sd-icon>`.

### CSS Parts

- part.base: The component's base wrapper.
- part.overlay: The overlay that covers the screen behind the dialog.
- part.panel: The dialog's panel (where the dialog and its content are rendered).
- part.header: The dialog's header. This element wraps the title and header actions.
- part.title: The dialog's title.
- part.close-button: The close button, an `<sd-button>`.
- part.body: The dialog's body.
- part.footer: The dialog's footer.

## Guidelines

### Use Cases

- Confirm an action which can have significant consequences and explicit user approval or input is needed (e.g. deleting a file).
- Present important information that must be seen and acknowledged before proceeding (e.g., session expired and renewed login required).
- Require users to enter information or select from multiple options before continuing.
- For non-critical content or information that doesn’t require immediate user input, please use [sd-notification](./?path=/docs/components-sd-notification--docs) to avoid workflow disruption.

### Rules

### Slots

- Use the ”headline” slot to add a headline.
- Add main content on the ”default” slot. The “default” slot is always scrollable.
- Use the ”footer” slot to add action elements. The “footer” slot is always fixed.

### Headline and Content

- Use clear and concise headlines that describe the purpose.
- Avoid displaying content unrelated to the current workflow.
- Refrain from using dialogs for complex forms or large amounts of information.

### Actions

- Ensure a clear user journey by using a single primary button for the main action and secondary buttons for less important actions.
- Provide an action to close the interaction if a close button is not present in the top-right corner.
- Avoid having multiple primary action buttons within the same dialog.

### User Interaction

- Require users to take an action before they can continue interacting with the rest of the interface.
- Provide multiple ways to close the dialog, such as an “X” button, a cancel button, or clicking outside the dialog.
- Avoid excessive use of dialogs, as they can be disruptive to the user experience.

### Accessibility

- Always provide a headline for the dialog.
- Always include a visible and easily accessible close button within the modal.

### Related Templates

- dialog

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
