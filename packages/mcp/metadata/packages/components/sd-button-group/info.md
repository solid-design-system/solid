## Overview

`<sd-button-group>` — Button groups can be used to group related buttons into sections.

## API

### Key Properties

- prop.label: string, default='' — A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
  devices when interacting with the control and is strongly recommended.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Slots

- slot.default: One or more `<sd-button>` elements to display in the button group.

### CSS Parts

- part.base: The component's base wrapper.
