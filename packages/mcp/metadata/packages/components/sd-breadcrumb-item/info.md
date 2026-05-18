## Overview

`<sd-breadcrumb-item>` — An individual breadcrumb item for use exclusively within the `sd-breadcrumb`.

## API

### Key Properties

- prop.href: string, default='' — When not set, the breadcrumb will render as disabled.
- prop.target: '\_blank'|'\_parent'|'\_self'|'\_top' — Tells the browser where to open the link. Only used when `href` is present.
- prop.current: boolean, default=false — When set, the attribute `aria-current="page"` will be applied.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The breadcrumb label.

### CSS Parts

- part.base: The component's base wrapper.

## Guidelines

### Use Cases

- Populate an <sd-link href="/?path=/docs/components-sd-breadcrumb--docs">sd-breadcrumb</sd-link> navigation helping users easily access different pages.

### Rules

### Content and Labeling

- Use clear and descriptive labels that accurately represent each page or section in the navigation path.

### Background

- Use light background options like white, neutral-100 or primary-100.

### Accessibility

- Dynamically update breadcrumbs and announce changes with aria-live for screen readers.
- Provide clear labels for breadcrumb items to ensure screen readers convey the navigation path effectively.

### Related Templates

- breadcrumb

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-breadcrumb: A responsive breadcrumb navigation component used to visualize a page's location
  within the site's hierarchy and provide easy navigation to previous sections.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
