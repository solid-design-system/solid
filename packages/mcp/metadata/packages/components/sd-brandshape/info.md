## Overview

`<sd-brandshape>` — The Brandshape highlights a piece of content.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-brandshape/variant
- sd-brandshape/transparent-variants
- sd-brandshape/shapes
- sd-brandshape/image-translate-y

### Key Properties

- prop.variant: |'neutral-100'|'primary'|'white'|'border-primary'|'border-white'|'primary|80'|'white|80'|'image', default='primary' — The brandshape's theme variant.
- prop.shapes: ('top'|'middle'|'bottom')[], default=['top', 'middle', 'bottom'] — Defines which shapes of the brandshape should be displayed.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: The content inside the brandshape.
- slot.image: The image slot for the 'image' variant.

### CSS Parts

- part.base: The component's base wrapper.
- part.content: Middle content wrapper.
- part.shape-top: Top shape.
- part.shape-middle: Middle shape.
- part.shape-bottom: Bottom shape.
- part.stylized-container: Container for border and image variant.

## Guidelines

### Use Cases

- As a core visual element, it conveys the company’s identity across various media and touchpoints. Visit the [Corporate-Toolbox](https://cd.union-investment.de/grundlagen/Basiselemente/Markenform#) to discover further details on its use.
- Highlight a headline, create a callout inside an article or provide a container for an action and its context while reinforcing brand recognition.
- Use over [sd-media](./?path=/docs/styles-sd-media--docs) to add visual support to the brandshape’s content.

### Rules

### Slot

- Use the “default” slot to add content. Ensure this content is meaningful and avoid using brandshape purely for decoration.

### Usage

- Limit the number of brandshapes on a page to maintain their visual impact.
- Use transparent variants only when displayed on image backgrounds.

### Background

- Use light background options like white, neutral-100, or primary-100, or use a primary background when inverted.

### Accessibility

- Ensure sufficient colour contrast for the content displayed on the brandshape background.
- Verify that users can navigate to and interact with action elements within the brandshape using the keyboard.
- Check that accessibility features are maintained across different breakpoints and zoom levels.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

### Related Templates

- brandshape

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
