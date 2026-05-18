## Overview

`<sd-expandable>` — Expandable shows a brief summary and expands to show additional content.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-expandable/open
- sd-expandable/inverted
- sd-expandable/gradient

### Key Properties

- prop.open: boolean, default=false — Used to check whether the component is expanded or not.
- prop.inverted: boolean, default=false — Inverts the expandable and sets the color of the gradient to primary.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-show: Emitted when the expandable opens.
- event.sd-after-show: Emitted after the expandable opens and all animations are complete.
- event.sd-hide: Emitted when the expandable closes.
- event.sd-after-hide: Emitted after the expandable closes and all animations are complete.

### Slots

- slot.default: Content of the expandable
- slot.toggle-open: Content of the toggle button when the expandable is open
- slot.toggle-closed: Content of the toggle button when the expandable is closed
- slot.expand-icon: The icon of the toggle button when the expandable is closed
- slot.collapse-icon: The icon of the toggle button when the expandable is open

### CSS Parts

- part.base: The component's base wrapper.
- part.content: The content of the expandable.
- part.toggle: The toggle button of the expandable.
- part.toggle-icon: The wrapper of the toggle icons.
- part.summary: The summary of the expandable.
- part.details: The details element of the expandable.

## Guidelines

### Use Cases

- Display non-essential information that users can choose to read if interested.
- Prevent clutter by truncating long text blocks and allowing users to expand them as needed.
- Implement in product descriptions to show more details on demand.

### Rules

### Content and Labels

- Use the ”default” slot to add content.
- Use concise labels for the trigger (e.g., “Read more,” “Show more”).
- The initial visible text should give a hint about the hidden content.
- Make sure the expandable component only conceals supplementary, non-essential content. Essential information should be readily accessible without interaction, enabling users to obtain necessary details effortlessly.

### Interaction and Usage

- Avoid overloading with too much content. If a long text is required, consider other options for displaying it, e.g., triggering a [sd-dialog](./?path=/docs/components-sd-dialog--docs).
- Do not nest expandable sections within other expandable sections.

### Expandable vs. Accordion

- The use of [sd-accordion](./?path=/docs/components-sd-accordion--docs) is generally recommended over the use of [sd-expandable](./?path=/docs/components-sd-expandable--docs): accordions give the user a quick scan header to decide if the content is relevant to them, offer a cleaner layout and are more accessible as a result.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Expandables are designed for text blocks, ensuring no interactive elements appear upon expansion. This keeps the focus on the expandable trigger, whether open or closed, with labels adjusted for each state.
- The expandable component should only hide non-critical content, to ensure users can access essential information without unnecessary interaction.

### Related Templates

- expandable

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
