## Overview

`<sd-header>` — Used as a container for the main navigation of a website.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-header, example: fixed

### Key Properties

- prop.fixed: boolean, default=false — Determines whether the header is fixed or not. If the header is fixed at the top of the page, a shadow is shown underneath.

### Slots

- slot.default: The header's default content.

### CSS Parts

- part.main: The container that wraps the header's content.

## Guidelines

### Use Cases

- Display primary navigation links for easy access to different sections of the website.
- Showcase the company logo prominently to reinforce brand identity.
- Include links for user account access.
- Provide a prominent search function to help users quickly find content.

### Rules

### Navigation Structure and Content

- Include the logo, main navigation, and, if applicable, sub-brand logos and meta navigation.
- Use the number of navigation items that best suits the content, always ensuring categories are clearly labeled and mutually exclusive.
- Regularly update the navigation links to reflect current content and structure.

### Layout

- Place navigation items to the left, the logo at the top left, and meta navigation on the right in wider viewports to keep consistency across products.
- In smaller viewports, place an expandable menu on the right to host navigation items while keeping the logo consistently on the left across all viewport sizes.
- Keep the navigation fixed at the top of the website when scrolling back to the top.

### Visual Style and Branding

- Provide clear visual indicators for active or selected navigation items.
- Refrain from customizing elements in ways that deviate from the brand identity.
- Include the company logo prominently; do not use a header without the corresponding logo.

### Accessibility

- Refrain from injecting non-navigation or unrelated content (like dynamic elements) into the header container to avoid distracting or confusing assistive technology.
- Provide a unique ID on the header container for skip links, ensuring keyboard users can quickly bypass navigation if desired.
- When placing a logo in the header, the alt text should describe its target (e.g., 'Union Investment Homepage') rather than the image itself (e.g., 'Union Investment Logo'), and it should either match the visual label or at least start with the same words.
