## Overview

`<sd-teaser-media>` — Teasers group information into flexible containers so users can browse a collection of related items and actions.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-teaser-media/variant
- sd-teaser-media/default-media-and-headline-slot
- sd-teaser-media/meta-slot
- sd-teaser-media/expandable-slot

### Key Properties

- prop.variant: |'white'|'neutral-100'|'primary'|'primary-100'|'gradient-light'|'gradient-dark', default='white' — Variant of the teaser
- prop.open: boolean, default=false — Controls whether the expandable content is visible
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: An optional main content slot.
- slot.media: An optional media slot.
- slot.meta: An optional meta slot.
- slot.expandable: An optional expandable slot, <strong>not</strong> shown on small devices.
- slot.headline: headline slot.

### CSS Parts

- part.base: The component's base wrapper.
- part.media: The container that wraps the media.
- part.content: The container that wraps the content.
- part.meta: The container that wraps the meta.
- part.headline: The container that wraps the headline.
- part.expandable: The container that wraps the expandable.
- part.main: The container that wraps the main content.
- part.toggle: The button that toggles the expandable content.

## Guidelines

### Use Cases

- Drive traffic to forms or services by providing short summaries and supportive imagery.
- Highlight special offers or promotions with clear calls to action.
- Promote upcoming events or webinars with engaging visuals, dates, and sign-up links.
- Feature downloadable resources like e-books or whitepapers.
- Showcase success stories, case studies, or team member profiles to build trust and credibility.
- Offer quick previews of blog posts, news articles, or videos, encouraging users to explore further.

### Rules

### Content

- Use brief, impactful headings to convey the message quickly; the main content should complement the corresponding heading.
- Ensure that the information in each item is independent from others around it; avoid cross-referencing items placed close together.
- Avoid placing essential information or actions in expandable teaser areas since they are only visible on click.

### Media

- Make sure images are high quality, clear, and relevant to the content; optimize performance by compressing them and implementing lazy loading.
- Remember to include copyright information whenever necessary.
- Avoid placing visual information at the bottom of the image, as it may be covered by text overlays.

### Behaviour

- Avoid adding action elements to the expandable slot content, as these actions are not accessible to all users; only those using a mouse can interact with them.

### Styling

- Adjust paddings and layouts as needed to ensure content is visible and accessible.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Adopt a consistent, semantically correct heading hierarchy to enable quick scanning across multiple teasers on a page. Teaser headings should be the first item in the DOM, introducing a new thematic region and separating the following content from the previous region.
- Include descriptive alt text for the media slot, ensuring that non-text content is accessible.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.
- Avoid placing essential information or actions in expandable teaser areas since they are only visible on click.
- Verify that each link is announced in a way that conveys its unique destination or function to screen readers.
- Ensure that the background images you choose for each teaser variant provide enough contrast with the text to maintain readability.

### Related Templates

- teaser-media

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-teaser: Teasers group information into flexible containers so users can browse a collection of related items and actions.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
