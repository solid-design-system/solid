## Overview

`sd-pagination` style utility

## API

### Examples

Use the styles tool (with `style` + `example` args) to retrieve the HTML for any of these examples:

- sd-pagination/variants
- sd-pagination/truncation
- sd-pagination/inverted
- sd-pagination/hidden-headline

## Guidelines

### Use Cases

- Divide large sets of articles, search results, or product listings into manageable pages.
- Allow users to paginate through pages of search results or filtered content.
- Enable users to browse products without overwhelming them with too much information at once.

### Rules

### Context and Navigation

- Use pagination consistently across similar content sections to establish predictable user behavior, and place it in easy-to-find locations.
- Avoid pagination when fewer than two or three pages are present; users benefit from simpler controls or scrolling instead.
- Clearly indicate the currently active page to orient users within the paginated content.

### Truncation

- Display a maximum of 7 items. Items can be pages or truncation ellipses.
- If there are seven or fewer pages, ensure all pages are shown without truncation.
- For more than seven pages, always display the first and last, current, previous, and next pages.
- If the current page falls within the first or last four pages, display five pages at that respective end. (e.g., if the user is currently on page 3—within the first four pages—, display pages 1 to 5, truncation, and last page)

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Verify that pagination is fully navigable via keyboard (e.g., Tab to focus, Enter to select).
  Ensure pagination controls have descriptive labels (e.g., “Previous page,” “Next page,” “Page 3”) rather than relying on numeric or symbolic indicators alone.
- Make each pagination button (including page numbers and arrows) sufficiently large to click or tap comfortably with a minimum target size of at least 44×44 px.

#### Aria Attributes

- Use aria-role="navigation" for the pagination container to indicate its purpose.
- Label the component with aria-label="pagination".
- Use aria-current="page" on the active page number to help screen readers announce the current page.
- If page numbers or content update dynamically (e.g., "next" or "previous" page), use aria-live="polite" to announce changes.

### Related Templates

- pagination--docs

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
