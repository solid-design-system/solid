## Overview

`sd-list` – Used to make blocks of text easier to read and to divide information into manageable sections.

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-list/variants
- sd-list/levels
- sd-list/orientation
- sd-list/inverted

## Guidelines

### Use Cases

- Arrange content into numbered or bulleted lists to improve readability and help users digest information quickly.

### Rules

### Content and Styling

- Incorporate content icons to visually differentiate list items, but use them sparingly to avoid cognitive load in lengthy lists with a different icons.
- Use numbered lists when there’s a particular order or hierarchy between its elements.
- Apply bold text to emphasize essential details or terminology and include hyperlinks where relevant to direct users to external pages or sections.

### Nesting

- Keep nesting to a minimum—excessive levels can overwhelm users and complicate scanning.
- Break out sub-points into their own list when nesting levels exceed two or three.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Limit nested levels to keep list structure clear and easily manageable for screen readers.
- Mark decorative icons as aria-hidden="true" if they provide no additional meaning, and ensure descriptive text is provided for icons that convey crucial information.

### Related Templates

- list--docs
- link--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
