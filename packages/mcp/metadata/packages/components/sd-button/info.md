## Overview

`<sd-button>` — Buttons represent actions that are available to the user.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-button/variants
- sd-button/size
- sd-button/as-link
- sd-button/loading
- sd-button/disabled
- sd-button/visually-disabled
- sd-button/inverted
- sd-button/icon

### Key Properties

- prop.title: string, default='' — The `title` attribute specifies extra information about an element most often as a default browser tooltip text when the mouse moves over the element.
- prop.variant: 'primary'|'secondary'|'tertiary'|'cta', default='primary' — The button's theme variant.
- prop.inverted: boolean, default=false — Inverts the button.
- prop.size: 'lg'|'md'|'sm', default='lg' — The button's size.
- prop.disabled: boolean, default=false — Disables the button.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the button as if it was disabled and enables aria-disabled
- prop.loading: boolean, default=false — Draws the button in a loading state.
- prop.type: 'button'|'submit'|'reset', default='button' — The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
  `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
- prop.name: string, default='' — The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
  This attribute is ignored when `href` is present.
- prop.value: string, default='' — The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
  button is the submitter. This attribute is ignored when `href` is present.
- prop.href: string, default='' — When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
- prop.target: '\_blank'|'\_parent'|'\_self'|'\_top' — Tells the browser where to open the link. Only used when `href` is present.
- prop.download: string|undefined — Tells the browser to download the linked file as this filename. Only used when `href` is present.
- prop.form: string — The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
  value of this attribute must be an id of a form in the same document or shadow root as the button.
- prop.formAction [attr: formaction]: string — Used to override the form owner's `action` attribute.
- prop.formEnctype [attr: formenctype]: 'application/x-www-form-urlencoded'|'multipart/form-data'|'text/plain' — Used to override the form owner's `enctype` attribute.
- prop.formMethod [attr: formmethod]: 'post'|'get' — Used to override the form owner's `method` attribute.
- prop.formNoValidate [attr: formnovalidate]: boolean — Used to override the form owner's `novalidate` attribute.
- prop.formTarget [attr: formtarget]: '\_self'|'\_blank'|'\_parent'|'\_top' — Used to override the form owner's `target` attribute.
- prop.validity: — Gets the validity state object
- prop.validationMessage: — Gets the validation message
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the button loses focus.
- event.sd-focus: Emitted when the button gains focus.
- event.sd-invalid: Emitted when the form control has been checked for validity and its constraints aren't satisfied.

### Slots

- slot.default: The button's label.
- slot.icon-left: A prefix icon or similar element.
- slot.icon-right: A suffix icon or similar element.

### CSS Parts

- part.base: The component's base wrapper.
- part.icon-left: The container that wraps the left icon area.
- part.label: The button's label.
- part.icon-right: The container that wraps the right icon area.
- part.motion-wrapper: The container that wraps the motion animation.

## Guidelines

### Use Cases

- Highlight key actions, like "Request information" or "Next step".
- Provide supporting actions, like "Learn more", "Explore topic", or "Cancel".
- Use for functional actions after user input, such as submitting a form or searching for content.

### Rules

### Function

- Use to trigger an action or place a link inside it to navigate to other content.

### Action Labels

- Write simple, self-explanatory labels that include both a verb (action) and a noun.
- Use text-only labels whenever possible.
- Avoid generic labels like "OK" or “Download”. Use “Confirm selection” or “Download Report” instead.
- Limit action labels to 1 to 3 words or 15 to 20 characters.

### Action Priority

- Select the appropriate variant for each action based on context and importance.
- Avoid displaying more than one Call To Action (CTA) at a time on the screen, especially in the same context (e.g., teaser).

### Icons

- Add icons to labels only when they clearly support the associated action (e.g., print, email, share), and reserve icon-only buttons for exceptions.
- Avoid displaying both left and right icons simultaneously.
- To prevent overcrowding, do not use icons on buttons with extensive copy that spans multiple lines.

### Placement and Responsiveness

- Maintain consistent placement of interactive elements throughout the user interface.
- Position the primary action at the top (in vertical layout) or on the right (in horizontal layout) when paired with a secondary option.
- Avoid placing two primary actions next to each other; opt for a secondary action instead.
- Expand to full width on small devices if applicable.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Ensure that button text is unique and contextual. Screen readers will read it aloud, helping users understand the action associated with the button.
- Keep button text short. Longer copy is harder to scan and increases cognitive load. Remember that translations may double the length of the text.
- Be aware that button’s height may change based on the user’s preferred font size set system-wide.
- For icon-only: Include an ARIA label describing its function (e.g., “Expand section”) to ensure the button is accessible to screen readers.
- Prefer keeping the button enabled by default by relying on default values or by validating on submit.
- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.

### Related Templates

- badge
- breadcrumb
- button
- checkbox-group
- dialog
- drawer
- forms
- header-navigation
- headline
- menu
- notification
- status-badge
- table
- teaser
- teaser-media

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
