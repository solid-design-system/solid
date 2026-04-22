## Overview

`sd-prose` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-prose/styling-options
- sd-prose/full-width
- sd-prose/inverted

## Guidelines

### Use Cases

- Create visually engaging and dynamic content by incorporating various text styles, formatting options, and image embeds.
- Enhance readability by structuring content with headings, lists, and block quotes to guide the reader through complex information.
- Apply a consistent look to long-form or mixed-format content in a rich text editor (e.g., articles, blog posts, documentation).

### Rules

### Layout and Consistency

- Choose between full-width or non-full-width settings based on the overall page design and readability requirements.
- Be aware of the preset spacing, which applies a 16px vertical gap between elements and removes top padding from the first element.
- Limit the number of custom overrides—frequent manual changes undermine the benefit of a unified “sd-prose” setup.

### Readability

- Keep line lengths within recommended ranges (roughly 60–80 characters) for paragraphs, especially at full width.
- Use headings and subheadings judiciously to break up large content into scannable sections.
- Incorporate bullet points and numbered lists to present information clearly and concisely.
- Utilize ample white space to prevent content from feeling cramped and to improve overall readability.
- Add media elements such as images, videos, or infographics to make the content more engaging and break up large blocks of text.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted. Note that tables are not compatible with primary.

### Accessibility

- Avoid skipping heading levels, such as from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>, going down the page. Assistive technologies rely on heading tags to convey a logical structure.
- Within sd-prose, heading tags are always bound to specific font sizes and styles. Layout flexibility is achieved when CMS modules employ sd-headline (which supports h-tagging) together with sd-prose.
- Provide descriptive alt text or captions for images, infographics, and other media embeds, ensuring that screen readers can convey the same information.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.
- Adhere to the recommended line length (60–80 characters) and maintain adequate spacing between elements, aiding users with low vision or reading difficulties.
