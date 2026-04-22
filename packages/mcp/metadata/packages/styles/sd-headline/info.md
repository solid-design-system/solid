## Overview

`sd-headline` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-headline/sizes
- sd-headline/inverted
- sd-headline/inline

## Guidelines

### Use Cases

- Differentiate content sections on a webpage or platform.
- Draw readers into the content, such as articles, blog posts, or marketing materials.
- Improve search engine optimization (SEO) by using targeted keywords in headlines to increase visibility and ranking.
- Support call-to-action (CTA) elements by making key messages more engaging and compelling (e.g., “Start Your Free Trial Today”).

### Rules

### Hierarchy and Sizing

- Maintain consistent usage of headline sizes to ensure clear hierarchy and accessibility.
- Decouple headline sizes from semantic H-tagging; the CMS or content page sets the actual heading tags.

### Icons

- Accompany a headline with an icon, either to the left or inline with the text for added visual context.

### Color and Appearance

- Use text/primary color to differentiate hierarchy between headlines.
- Display desktop headlines (4xl, 3xl) and mobile headlines in primary color unless inverted.
- Optionally highlight text in green accent color at a minimum font size of 18.67px to maintain accessibility.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Always use proper HTML heading tags for logical structure in the document, even if style classes decouple font size from H-tags, to ensure consistent design, accessibility, and flexibility across use cases. H-tags are applied in the CMS following semantic headline order.
- Pair any icon usage with a clear text label to ensure the visual meaning is also conveyed to users who cannot see icons. If the icon is purely decorative, mark it with aria-hidden="true".
- Ensure accent-colored text meets the 18.67px minimum font size to maintain accessibility.

### Related Templates

- headline--docs
- mark--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
