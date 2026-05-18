## Overview

`<sd-teaser>` — Teasers group information into flexible containers so users can browse a collection of related items and actions.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-teaser/variant
- sd-teaser/default-and-headline-slot
- sd-teaser/media-slot
- sd-teaser/meta-slot
- sd-teaser/inset
- sd-teaser/breakpoint
- sd-teaser/reverse
- sd-teaser/distribution

### Key Properties

- prop.variant: |'white'|'white border-neutral-400'|'neutral-100'|'primary'|'primary-100', default='white' — Variant of the teaser
- prop.breakpoint: number, default=448 — Breakpoint where the teaser switches from `vertical` to `horizontal`. `0` is always `horizontal`, `9999` is always `vertical`.
- prop.inset: boolean, default=false — The teaser's inner padding. This is always set in `white border-neutral-400`.
- prop.reversedLayout [attr: reversed-layout]: boolean, default=false — Reverses the layout in horizontal variant
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: An optional main content slot.
- slot.media: An optional media slot.
- slot.meta: An optional meta slot.
- slot.headline: headline slot.

### CSS Parts

- part.base: The component's base wrapper.
- part.media: The container that wraps the media.
- part.content: The container that wraps the content.
- part.meta: The container that wraps the meta.
- part.headline: The container that wraps the headline.
- part.main: The container that wraps the main content.

## Guidelines

### Use Cases

- Display content and actions on a particular topic in a flexible layout.
- Showcase new or featured products and services.
- Display recent news or important updates.
- Provide a brief overview of key features or benefits of a product or service.
- Present upcoming events or webinars with concise details and links.
- Offer a preview of blog posts, articles, or video content.

### Rules

### Content

- Use brief, impactful headings to convey the message quickly; the main content should complement the corresponding heading.
- Ensure that the information in each item is independent from others around it; avoid cross-referencing items placed close together.
- Do not use the metadata slot as an image caption or to convey any other kind of information but metadata.

### Layout and Orientation

- Use a horizontal layout for an impactful, standalone teaser.
- Prefer a vertical layout when placing a teaser within a block of text, so it flows naturally with surrounding copy.
- Arrange multiple teasers in a grid for a cohesive user experience, maintaining consistent alignment and padding.
- Use the “breakpoint” attribute to override default layout behavior across different screen sizes, but ensure the teaser adapts effectively.

### Interaction

- Use non-clickable teasers when their target should be conveyed over a CTA or a text link.
- Avoid grouping [clickable](./?path=/docs/templates-teaser--docs#unclickable-teaser-with-button) and [non-clickable](./?path=/docs/templates-teaser--docs#clickable-teaser) items together, as this can negatively affect user expectations.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Include descriptive alt text or captions for images or video in the media slot, ensuring that non-text content is accessible.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.
- Adopt a consistent, semantically correct heading hierarchy to enable quick scanning across multiple teasers on a page. Teaser headings should be the first item in the DOM, introducing a new thematic region and separating the following content from the previous region.
- Ensure that each link target –especially clickable teasers that lack a dedicated action button or link element– clarifies its destination or function for screen readers.

### Related Templates

- audio
- headline
- teaser

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-teaser-media: Teasers group information into flexible containers so users can browse a collection of related items and actions.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
