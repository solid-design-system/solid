## Overview

`<sd-flipcard>` — Flipcard allows for the addition of content/information on both "sides" of the card, through means of a flip animation. Used to add dynamism and interactivity to a page.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-flipcard/variants
- sd-flipcard/aspect-ratios
- sd-flipcard/placement
- sd-flipcard/flip-direction

### Key Properties

- prop.flipDirection [attr: flip-direction]: 'horizontal'|'vertical', default='horizontal' — Allows the flipcard to flip vertically or horizontally.
- prop.placement: 'top'|'bottom', default='top' — Determines the placement of the contents of the flipcard.
- prop.frontVariant [attr: front-variant]: 'primary'|'primary-100'|'gradient-light'|'gradient-dark', default='primary' — Determines the variant of the front face of the flipcard.
- prop.backVariant [attr: back-variant]: 'primary'|'primary-100'|'gradient-light'|'gradient-dark', default='primary' — Determines the variant of the back face of the flipcard.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-flip-front: Emmited when the front face of the flipcard is clicked.
- event.sd-flip-back: Emmited when the back face of the flipcard is clicked.

### Slots

- slot.front: The front face of the flipcard.
- slot.back: The back face of the flipcard.
- slot.media-front: An optional media slot which can be as a background. Dependent from gradient variant.
- slot.media-back: An optional media slot which can be as a background. Dependent from gradient variant.

### CSS Parts

- part.base: The component's base wrapper.
- part.front: The container that wraps the front-side of the flipcard.
- part.back: The container that wraps the back-side of the flipcard.
- part.front-button: The button that flips the flipcard to the back.
- part.back-button: The button that flips the flipcard to the front.
- part.front-interactive-container: The container that wraps the front side and the flip button.
- part.back-interactive-container: The container that wraps the back side and the flip button.
- part.front-slot-container: The container that wraps the front slot.
- part.back-slot-container: The container that wraps the back slot.
- part.media-front: The container that wraps the media-front slot.
- part.media-back: The container that wraps the media-back slot.
- part.front-secondary-gradient: The container that wraps the secondary gradient of the front side.
- part.back-secondary-gradient: The container that wraps the secondary gradient of the back side.

## Guidelines

### Use Cases

- Present brief, essential information on the front with additional details on the back.
- Highlight key features or benefits of a product or service.
- Display before-and-after comparisons.
- Showcase testimonials or quotes with more context on the flip side.

### Rules

### Content

- Keep the front side simple and engaging to encourage users to flip the card.
- Do not use for critical information that needs to be immediately visible.
- Use with image, text or both content types.
- Keep alignment consistent on both sides, i.e. if you have top-aligned content on the front side, the content on the flip side should also be top aligned.

### Interaction

- Ensure action items are placed exclusively on the back of the sd-flipcard with exception for the flip button that should be visible on both sides.

### Context of Use

- Avoid using in contexts where users might not understand the flipping interaction.
- Avoid using in time-sensitive environments.

### Accessibility

- Use only for non-critical information. Hiding content can become a potential barrier, making it more challenging for users to access information.
- Keep the flip button to make sure the flipping can be accessed over keyboard navigation.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

### Related Templates

- flipcard

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
