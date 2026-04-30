## Overview

`sd-media` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-media/description
- sd-media/inverted

## Guidelines

### Use Cases

- Display images, illustrations, animations or videos.
- Use to populate the media slot in [sd-teaser](./?path=/docs/components-sd-teaser--docs) or the default slot in [sd-carousel](./?path=/docs/components-sd-carousel--docs).

### Rules

### Aspect Ratio

- Use the nested [sd-aspect-ratio](https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3646-41470&t=cm2c2fYXSZANLiBp-0) helper component to select from predefined aspect ratios.

### Attribution and Description

- Use the html <code>figcaption</code> element to add a description.

### Performance

- Use appropriate formats and compress media files without significant quality loss to optimize loading times and performance.
- Limit the number of media items on a single page to prevent slowing down page load times.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Provide concise, descriptive alt text for the embedded element.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.
- Compress media to reduce load times, preventing lengthy loading that might hinder access to other page elements.

### Related Templates

- media--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
