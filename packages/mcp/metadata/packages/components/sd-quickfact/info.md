## Overview

`<sd-quickfact>` — Accordion shows a brief summary and expands to show additional content.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-quickfact/expandable
- sd-quickfact/open
- sd-quickfact/summary

### Key Properties

- prop.expandable: boolean, default=false — Determines if the quickfact is not interactive. When set to `true`, the quickfact will not expand or collapse.
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

- slot.icon: Optional icon to show in the header. Works best with `<sd-icon>`.
- slot.default: The accordion main content.
- slot.summary: The accordion summary. Alternatively, you can use the `summary` attribute.
- slot.expand-icon: Optional expand icon to use instead of the default. Works best with `<sd-icon>`.
- slot.collapse-icon: Optional collapse icon to use instead of the default. Works best with `<sd-icon>`.

### CSS Parts

- part.icon: The container that wraps the icon.
- part.base: The component's base wrapper.
- part.header: The header that wraps both the summary and the expand/collapse icon.
- part.summary: The container that wraps the summary.
- part.summary-icon: The container that wraps the expand/collapse icons.
- part.summary-border: The container that wraps the currently active accordions border.
- part.content: The container that wraps the accordion content slot.
- part.content\_\_slot: The accordion content slot.

## Guidelines

### Use Cases

- Highlight important statistics or facts within a page to draw attention.
- Summarize complex data into digestible pieces of information.
- Emphasize critical points or findings alongside articles or reports.
- Showcase key benefits or features of a product in promotional materials.

### Rules

### Content

- Focus on one key piece of information per quick fact.
- Ensure each quick fact can be understood independently, even when part of a group.
- Avoid using in contexts where detailed explanations are required.

### Behavior

- Use the expandable attribute for supplementary information that isn’t essential for initial understanding.
- Limit the number of quick facts on a single page to avoid overwhelming users.
- Include a single quick fact when needed, even though they are typically presented in groups.

### Icon and Responsiveness

- Make sure the chosen content icon logically illustrates the key fact you want to communicate.
- Adapt the style according to screen size (e.g., ≤ 414px width for mobile screens) to maintain responsiveness.

### Background

- Use light background options such as white, neutral-100, or primary-100.

### Accessibility

- Ensure that the summaries are short, concise and unique as they’re used as the label for the button.

### Related Templates

- quickfact

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
