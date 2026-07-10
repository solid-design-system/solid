## Overview

`<sd-radio>` — Used to allow the user to select a single option from a group.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-radio, example: size
- component: sd-radio, example: disabled
- component: sd-radio, example: visually-disabled
- component: sd-radio, example: invalid

### Key Properties

- prop.size: 'lg'|'md'|'sm', default='lg' — The radio's size.
- prop.disabled: boolean, default=false — A Boolean attribute which, if present, disables the radio.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — A Boolean attribute which, if present, disables the radio.
- prop.value: string — The radio's value. When selected, the radio group will receive this value.
- prop.invalid: boolean, default=false — A Boolean attribute which, if present, marks the radio Button valid or invalid
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the control loses focus.
- event.sd-focus: Emitted when the control gains focus.

### Slots

- slot.default: The radio's label.

### CSS Parts

- part.base: The component's base wrapper.
- part.control--unchecked: The radio control when the radio is unchecked.
- part.control--checked: The radio control when the radio is checked.
- part.checked: The dot inside the radio component when the radio is checked.
- part.label: The container that wraps the radio's label.

## Guidelines

### Accessibility

- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.
