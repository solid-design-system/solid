## Overview

`<sd-breadcrumb>` — A responsive breadcrumb navigation component used to visualize a page's location
within the site's hierarchy and provide easy navigation to previous sections.

## API

### Key Properties

- prop.label: string, default='' — The breadcrumbs' label. Required for proper accessibility.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: `sd-breadcrumb-item` elements to display in the breadcrumb.

### CSS Parts

- part.base: The component's base wrapper.
- part.list: The list containing the slotted elements.
- part.truncated: The truncated wrapper.
- part.truncated-dropdown: The truncated dropdown containing the truncated breadcrumbs.

## Guidelines

### Use Cases

- Clarify user location within the website or app hierarchy, improving orientation.
- Allow easy navigation back to previous pages or higher-level sections.
- Enhance discoverability by displaying category paths or product hierarchy levels.
- Simplify backtracking from filtered or search result pages to broader content areas.

### Rules

### Content and Labeling

- Use clear and descriptive labels that accurately represent each page or section in the navigation path.
- Keep breadcrumb trails short and easy to read to avoid overwhelming users.
- The final breadcrumb item should be non-clickable, as it represents the current page or location.

### Placement and Consistency

- Ensure breadcrumbs are placed consistently across pages to align with user expectations.
- Use breadcrumbs primarily in structured, multi-level navigation contexts. Avoid implementing them for non-hierarchical or dynamically generated paths, where they may confuse rather than assist users.

### Responsiveness

- On mobile devices breadcrumb is shortened to only provide a link to the higher-level page.

### Background

- Use light background options like white, neutral-100 or primary-100.

### Accessibility

- Dynamically update breadcrumbs and announce changes with aria-live for screen readers.
- Provide clear labels for breadcrumb items to ensure screen readers convey the navigation path effectively.

### Related Templates

- breadcrumb

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-breadcrumb-item: An individual breadcrumb item for use exclusively within the `sd-breadcrumb`.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
