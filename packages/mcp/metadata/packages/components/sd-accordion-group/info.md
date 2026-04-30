## Overview

`<sd-accordion-group>` — Short summary of the component's intended use.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-accordion-group/close-others

### Key Properties

- prop.closeOthers [attr: close-others]: boolean, default=false — Closes other accordions.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The default slot where `<sd-accordion>` elements are placed.

### CSS Parts

- part.base: The component's base wrapper.

## Guidelines

### Use Cases

- Organise content into collapsible sections to save space.
- Display FAQs where each question can be expanded to reveal its answer.
- Structure lengthy content into manageable expandable sections.
- Create navigational menus where each section can be expanded to show sub-items, mainly for small viewports.

### Rules

### Slots

- Use the ”summary” slot to add text to the header.
- Use the ”default” slot to add content.

### Content

- Ensure the content is relevant and necessary; avoid including unrelated information.
- Avoid using collapsible sections for content that needs to be always visible or is critical for immediate user attention.

### Header Summary

- Make sure the header summary clearly describes the content inside.
- Keep header summaries concise to prevent them from wrapping onto multiple lines.

### Behaviour

- Keep only one section open at a time to prevent information overload, unless multiple open sections are necessary.
- Avoid nesting collapsible sections within each other to prevent a confusing user experience.

### Expandable vs. Accordion

- The use of [sd-accordion](./?path=/docs/components-sd-accordion--docs) is generally recommended over the use of [sd-expandable](./?path=/docs/components-sd-expandable--docs): the former gives the user a quick scan header to decide if the content is relevant to them, offers a cleaner layout and is more accessible as a result.

### Background

- Use light background options such as white, neutral-100, or primary-100.

### Accessibility

- Use only for non-critical information. Hiding content can become a potential barrier, making it more challenging for users to access information.
- Use “close-others” attribute to keep only one item from the group open at a time, reducing the amount of information displayed at once and therefore reducing the cognitive load on the user.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

### Related Templates

- accordion-group
- skeleton

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-accordion: Accordion shows a brief summary and expands to show additional content.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
