## Overview

`<sd-accordion>` — Accordion shows a brief summary and expands to show additional content.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-accordion/open
- sd-accordion/summary

### Key Properties

- prop.open: boolean, default=false — Indicates whether or not the accordion is open. You can toggle this attribute to show and hide the accordion, or you
  can use the `show()` and `hide()` methods and this attribute will reflect the accordion' open state.
- prop.summary: string — The summary to show in the header. If you need to display HTML, use the `summary` slot instead.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-show: Emitted when the accordion opens.
- event.sd-after-show: Emitted after the accordion opens and all animations are complete.
- event.sd-hide: Emitted when the accordion closes.
- event.sd-after-hide: Emitted after the accordion closes and all animations are complete.

### Slots

- slot.default: The accordion main content.
- slot.summary: The accordion summary. Alternatively, you can use the `summary` attribute.
- slot.expand-icon: Optional expand icon to use instead of the default. Works best with `<sd-icon>`.
- slot.collapse-icon: Optional collapse icon to use instead of the default. Works best with `<sd-icon>`.

### CSS Parts

- part.base: The component's base wrapper.
- part.header: The header that wraps both the summary and the expand/collapse icon.
- part.summary: The container that wraps the summary.
- part.summary-icon: The container that wraps the expand/collapse icons.
- part.summary-border: The container that wraps the currently active accordions border.
- part.content: The container that wraps the accordion content slot.
- part.content\_\_slot: The accordion content slot.

## Guidelines

### Use Cases

- Revealing additional content, such as a detailed description, specifications, or additional options without overwhelming the user with too much content at once.
- Interactive elements like a single FAQ item, where the user can expand to see the answer.
- Useful in forms to hide optional sections that the user can expand if needed, keeping the form clean and concise.

### Rules

### Slots

- Use the ”summary” slot to add text to the header.
- Use the ”default” slot to add content.

### Header Summary

- Make sure the header summary clearly describes the content inside.
- Keep header summaries concise to prevent them from wrapping onto multiple lines.

### Content

- Ensure the content is focused and necessary. If the information can be splitted into different meaningful units, consider using [sd-accordion-group](./?path=/docs/components-sd-accordion-group--docs).
- Avoid using collapsible sections for information that must always be visible.

### Expandable vs. Accordion

- The use of sd-accordion is generally recommended over the use of [sd-expandable](./?path=/docs/components-sd-expandable--docs): the former gives the user a quick scan header to decide if the content is relevant to them, offers a cleaner layout and is more accessible as a result.

### Background

- Use light background options like white, neutral-100 or primary-100.

### Accessibility

- Use only for non-critical information. Hiding content can become a potential barrier, making content more challenging to discover.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

### Related Templates

- accordion-group
- skeleton

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-accordion-group: Short summary of the component's intended use.

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
