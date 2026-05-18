## Overview

`<sd-notification>` — Alerts are used to display important messages inline or as toast notifications.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-notification/variants
- sd-notification/open
- sd-notification/closable
- sd-notification/duration
- sd-notification/duration-indicator
- sd-notification/toast-notification
- sd-notification/toast-bottom-center

### Key Properties

- prop.variant: 'info'|'success'|'error'|'warning', default='info' — The sd-notification's theme.
- prop.open: boolean, default=false — Indicates whether or not sd-notification is open. You can toggle this attribute to show and hide the notification, or you can
  use the `show()` and `hide()` methods and this attribute will reflect the notifications's open state.
- prop.closable: boolean, default=false — Enables a close button that allows the user to dismiss the notification.
  It also allows the user to dismiss the notification using the ESC.
- prop.duration: default=Infinity — The length of time, in milliseconds, the sd-notification will show before closing itself. If the user interacts with
  the notification before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
  the notification will not close on its own.
- prop.durationIndicator [attr: duration-indicator]: boolean, default=false — Enables an animation that visualizes the duration of a notification.
- prop.toastStack [attr: toast-stack]: 'top-right'|'bottom-center', default='top-right' — The position of the toasted sd-notification.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-show: Emitted when the notification opens.
- event.sd-after-show: Emitted after the notification opens and all animations are complete.
- event.sd-hide: Emitted when the notification closes.
- event.sd-after-hide: Emitted after the notification closes and all animations are complete.

### Slots

- slot.default: The sd-notification's main content.
- slot.icon: An icon to show in the sd-notification. Works best with `<sd-icon>`.

### CSS Parts

- part.base: The component's base wrapper.
- part.wrapper: The container that wraps all the notification elements.
- part.icon: The container that wraps the optional icon.
- part.content: The container that wraps the notifications's main content and the close button.
- part.message: The container that wraps the notifications's main content.
- part.duration-indicator\_\_elapsed: The current duration indicator.
- part.duration-indicator\_\_total: The total duration indicator.
- part.close-button: The close button, an `<sd-icon-button>`.

## Guidelines

### Use Cases

#### Inline Notification

Provide contextual feedback – that needs to be noted – to users through inline notifications that are directly embedded within the content of a page or form.

- Integrated into the area where the user is already focused to avoid disrupting the user's workflow.
- Provide feedback on user actions, such as errors, warnings, or confirmations  (e.g. "Unable to save changes. Check your internet connection and try again.", "You have unsaved changes. Are you sure you want to leave this page?" or "Payment completed. Thank you for your purchase!")
- Announce important updates or changes within the application  (e.g. New feature alert! You can now schedule posts directly from the dashboard.", "Maintenance scheduled for January 30th, 2:00 AM - 4:00 AM. The application will be unavailable during this time.")
- Highlight critical information or display system messages that require user attention (e.g. "System update required. Please restart your application to apply the latest updates." or "Your account has been temporarily suspended due to suspicious activity. Contact support for assistance.")
- May contain interactive elements such as links and buttons.

#### Toast Notification

Provide brief, unobtrusive messages to users through toast notifications that overlay the interface and do not necessarily need attention.

- Take the user's attention temporarily away from their current task by appearing on the screen with animations to ensure they are noticed.
- Provide feedback on user actions, such as errors, warnings, or confirmations.  (e.g., "Failed to load data", "Your message has been sent", "Your settings have been saved").
- Announce updates, reminders, or confirmations  (e.g., "Your settings have been saved").
- May contain interactive elements such as links and buttons.
- They can serve as supplementary information for content available on other pages (e.g., a toast notification "Item has been added to the cart" alongside a shopping cart page).

### Rules

### Content

- Provide clear, actionable information or guidance, avoiding vague or overly technical language.
- Avoid repeating or paraphrasing the title in the body if both are present.
- Avoid using non-essential information that can be conveyed through other means.

### Behavior

- Allow users to dismiss notifications if they are not critical.
- Avoid displaying important information in toast notifications that automatically disappear.
- If a notification has a set duration, include a duration indicator to show how much time remains before it disappears.
- Avoid overloading users with too many notifications at once.
- Use sd-dialog for actions that require immediate user response.

### Placement

- Place notifications in consistent locations across the application.
- Avoid placing notifications where they can be easily overlooked or ignored.

### Styling

- Use appropriate variant to indicate the semantic meaning (e.g., green for success, red for error, etc.).
- Keep the text style as default; text can be bolded or linked.
- Keep the provided icon as it cannot be omitted.

### Accessibility

- Screen Reader Support: By using these ARIA roles appropriately, you can ensure that all users, including those who rely on screen readers, receive important notifications in a timely and accessible manner. Use ARIA role "alert" for notifications needing immediate attention, like error messages or critical updates. Screen readers announce these immediately, interrupting ongoing speech. Use ARIA role "status" for less urgent notifications, like informational messages. Screen readers announce these without interrupting ongoing speech.
- Keyboard Navigation: Notifications should be reachable and dismissible using keyboard shortcuts. For example, use the “Tab” key to navigate to the notification and “Esc” to dismiss it.
- Accessible Focus Order: Ensure that notifications with actionable items have an accessible focus order.
- Visibility Duration: Important notifications should not disappear automatically. Users should have enough time to read and understand the message. Supplementary information for content available on other pages can disappear automatically.

#### Toast Notifications

<sd-notification variant="warning" open>
  <p>**Please be aware of the following accessibility requirements:**</p>
  <ul>
    <li>Prefer default (inline) notifications over toast notifications.</li>
    <li>Don’t use toasts for critical information.</li>
    <li>Don’t overuse toast notifications.</li>
    <li>When the page is zoomed in, toasts may obscure large parts of the screen.</li>
    <li>Only use interactive elements in toast notifications for additional actions.</li>
    <li>Consider not using buttons in timed toasts.</li>
  </ul>
</sd-notification><br>

- Toast messages make use of the role="status" attribute. This will trigger certain assistive devices, such as screen readers, to announce the content at a convenient moment after the toast appears.
- Hotkey Access: Toast notifications will use an already existing container from the DOM with the ids "sd-toast-stack--top-right" and "sd-toast-stack--bottom-center". The "aria-label" prop should be set to set proper names to the containers. In case these containers are not present, the sd-notification will take care of creating it with default label "Notifications". Landmark regions can be navigated using the keyboard by pressing the F6 key to move forward, and the Shift + F6 key to move backward.
- Don't trap focus.

<sd-notification variant="warning" open>
  **Known screen readers issues:** Due to inconsistency between screen readers when announcing the toast notification we recommend using inline notification
</sd-notification><br>

### Related Templates

- notification
- range

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
