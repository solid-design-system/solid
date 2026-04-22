## Overview

`<sd-checkbox-group>` — Checkbox groups are used to group multiple [checkbox](/components/checkbox). It provides only presentational functionality.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-checkbox-group/size
- sd-checkbox-group/orientation
- sd-checkbox-group/label
- sd-checkbox-group/help-text

### Key Properties

- prop.size: 'lg'|'md'|'sm', default='lg' — The checkbox group's size. This size will be applied to the label, all child checkboxes.
- prop.orientation: 'horizontal'|'vertical', default='vertical' — The orientation property determines the alignment of the component's content or elements. It accepts two possible
  values: 'horizontal' and 'vertical'. The default value is 'vertical'.
  This property allows you to control the visual layout and arrangement of elements within the component, providing
  flexibility in how the component is displayed based on your specific design needs.
- prop.label: string, default='' — The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
  instead.
- prop.helpText [attr: help-text]: string, default='' — The element help text. If you need to display HTML, use the `help-text` slot instead.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The default slot where `<sd-checkbox>` elements are placed.
- slot.label: The checkbox group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
- slot.tooltip: An optional tooltip that helps describe the checkbox-group. Use this slot with the `sd-tooltip` component.
- slot.help-text: Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.

## Guidelines

### Use Cases

- Allow users to select multiple options from a list in forms.
- Indicate agreement to terms and conditions.
- Use a parent option to select or deselect all items in a list.
- Enable filtering of data on a page, in a menu, or within a component.
- Check [sd-checkbox](./?path=/docs/components-sd-checkbox--docs) for single usage guidelines.

### Rules

### Labels

- Provide a clear, mutually exclusive label for each option to avoid ambiguity and ensure accessibility.
- Frame labels positively (e.g., "Enable notifications" instead of "Disable notifications").

### Layout and Structure

- Align options vertically for better readability and user experience.
- List selections in a logical order, such as alphabetical or numerical.
- Place selections consistently across the interface.

### Interaction and Functionality

- Ensure each selection works independently unless used for bulk actions.
- Use a parent option for bulk selection or deselection of all items.
- Avoid using checkboxes when only one option can be selected; use radio buttons instead.
- Refrain from using checkboxes for mutually exclusive choices.
- Don’t use checkboxes for binary actions that take immediate effect; use a switch instead.

### Accessibility

- Ensure that the group label is short and concise as it may be read out with every option or when users enter the group.
- An error-text with a warning icon should be placed underneath an invalid checkbox or, if used in a group, underneath the checkbox group. Error messages should always provide hints for solutions.
- Use an asterisk with a blank before ( \*) at the end of its label when designing a mandatory checkbox.

### Related Templates

- checkbox-group
- forms
- tooltip

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-checkbox: Checkboxes allow the user to toggle an option on or off.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
