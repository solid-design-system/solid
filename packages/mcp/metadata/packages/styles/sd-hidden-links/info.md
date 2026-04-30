## Overview

`sd-hidden-links` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-hidden-links/stack-links
- sd-hidden-links/multiple-links
- sd-hidden-links/title-for-multiple-links
- sd-hidden-links/surrounding-content
- sd-hidden-links/debug

## Guidelines

### Use Cases

- Provide skip-to-content links for screen readers or keyboard users to bypass repetitive navigation and jump directly to the main content.
- Boost SEO by creating internal links that help search engines crawl and index content, even if the links aren’t visible to sighted users.

### Rules

### Implementation & Behavior

- Include at least one “Skip to Content” link, visible on first Tab press.
- Reveal up to three hidden links sequentially as the user tabs through.
- Use a hidden dropdown if more than three links are needed, auto-focusing the first menu item.

### Focus & Navigation

- Ensure each hidden link is visible on focus and follows a logical tab order.
- Dismiss the hidden link or menu once a selection is made or the user tabs away.

### Labels & Clarity

- Use concise, descriptive labels (e.g., “Skip to Footer”).
- Avoid creating duplicate or overlapping hidden links that offer the same navigation outcomes.

### SEO Impact

- Link to relevant content so search engines can still crawl hidden links.
- Ensure hidden links provide genuine value; empty or misleading links can negatively affect both user experience and SEO.

### Accessibility

- Always include a skip link to meet WCAG 2.2 Level AA compliance.

### Related Templates

- dropdown--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
