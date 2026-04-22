## Overview

`<sd-divider>` — Dividers are used to visually separate or group elements.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-divider/size
- sd-divider/orientation
- sd-divider/inverted

### Key Properties

- prop.orientation: 'horizontal'|'vertical', default='horizontal' — Determines the orientation of the divider.
- prop.inverted: boolean, default=false — This inverts the divider.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### CSS Parts

- part.base: The component's base wrapper.

## Guidelines

### Use Cases

- Separate distinct item groups to help users clearly see and understand how different pieces of content relate to one another.
- Provide visual breaks in long pages or forms to improve readability.

### Rules

### Spacing and Consistency

- Maintain consistent spacing around separators to prevent them from appearing cramped or too distant from the content they divide.
- Ensure consistent use to prevent confusion, especially for users relying on assistive technologies.

### Whitespace vs. Visual Separators

- Leverage whitespace effectively as a natural divider, which can offer a clean, easy to read and organised design without additional visual elements.

### Background

- Use light background options like white, neutral-100 or primary-100.

### Accessibility

- Verify that dividers are visible and distinct in high contrast mode settings, which are often used by users with visual impairments.
- Use to provide clear separation between sections, helping users understand content flow. Screen readers announce dividers, offering context about transitions between sections.

### Related Templates

- autocomplete
- header-navigation
- menu
- select

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
