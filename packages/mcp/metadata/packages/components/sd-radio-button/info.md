## Overview

`<sd-radio-button>` — Radio buttons allow the user to select a single option from a group using a button-like control.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-radio-button/size
- sd-radio-button/checked
- sd-radio-button/label
- sd-radio-button/icon
- sd-radio-button/disabled
- sd-radio-button/visually-disabled

### Key Properties

- prop.size: 'lg'|'md'|'sm', default='lg' — The radio button's size.
- prop.disabled: boolean, default=false — Disables the radio button.
- prop.visuallyDisabled [attr: visually-disabled]: boolean, default=false — Styles the radio-button as if it was disabled and enables aria-disabled
- prop.value: string — The radio's value. When selected, the radio group will receive this value.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the button loses focus.
- event.sd-focus: Emitted when the button gains focus.

### Slots

- slot.default: The radio button's label.
- slot.icon: A presentational icon.

### CSS Parts

- part.base: The component's base wrapper.
- part.button: The internal `<button>` element.
- part.button--checked: The internal button element when the radio button is checked.
- part.icon: The container that wraps the icon.
- part.label: The container that wraps the radio button's label.

## Guidelines

### Use Cases

- Select one option from a group where one is already preselected.
- Switch between groups of settings.
- Filter views by a parent category.

### Rules

### Content

- Include icons to support each option visually if possible.
- Label each choice clearly.

### Behavior

- Don’t use as input method in forms, for they are not form elements. Use [sd-radio](./?path=/docs/components-sd-radio--docs) instead.
- Slot inside of an [sd-radio-group](./?path=/docs/components-sd-radio-group--docs).
- Use only in groups, as they are designed to allow the user to activate one of several options. To work with a single option, use [sd-checkbox](./?path=/docs/components-sd-checkbox--docs) instead.
- Pre-select always a “default” value; there is no invalid state.
- Limit the number of options in the group. Users should be able to retain all options available and not be overwhelmed by them.

### Styling

- All radio buttons in the group must be styled similarly, e.g., each one is labelled with both text and icon.
- Avoid styling options only with icons if they are not common symbols, to prevent ambiguous interpretations.

### Background

- Use with light background options such as white, neutral-100, or primary-100.

### Accessibility

- Provide meaningful alternative text for icon-only radio buttons.
- Communicate the group’s function—such as filtering or view switching—through clear context or labels.
- Use the "visually disabled" attribute to keep disabled elements focusable, hoverable, and able to show tooltips, as they’re otherwise removed from the tab order and inaccessible to screen readers.

### Related Templates

- radio-button-group

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-radio: A radio allows to select only one value from a set of options. Clicking on an unchecked radio will deselect the other one(s).
- sd-radio-group: Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
