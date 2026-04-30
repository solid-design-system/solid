## Overview

`<sd-map-marker>` — A marker identifies a location on google map

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-map-marker/variant
- sd-map-marker/state
- sd-map-marker/animated
- sd-map-marker/slot
- sd-map-marker/not-interactive
- sd-map-marker/as-link

### Key Properties

- prop.variant: 'cluster'|'main'|'place', default='main' — The map-marker's variant.
- prop.state: 'default'|'hover'|'active', default='default' — The map-marker's state.
- prop.animated: boolean, default=false — The map-marker's is animated when displayed.
- prop.notInteractive [attr: not-interactive]: boolean, default=false — Determines if the map-marker is interactive.
- prop.href: string, default='' — When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
- prop.target: '\_blank'|'\_parent'|'\_self'|'\_top' — Tells the browser where to open the link. Only used when `href` is present.
- prop.label: string, default='' — Only relevant when map-marker is interactive.
  When set, it will be used to announce the name of the map-marker to screenreaders,
  otherwise, screenreaders will announce the content inside the default slot.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-blur: Emitted when the map marker loses focus.
- event.sd-focus: Emitted when the map marker is focused.

### Slots

- slot.default: The marker's content.\

### CSS Parts

- part.base: The components' base wrapper.
- part.marker: The markers' svg wrapper.
- part.content: The container that wraps the default slot.
- part.motion-wrapper: The container that wraps the motion animation.

## Guidelines

### Use Cases

- Indicate individual locations on a map, such as offices, venues, or other points of interest.
- Group individual locations into clusters at higher zoom levels, displaying the number of locations in the cluster.

### Rules

### Styling and Icons

- Use logos or icons for place pins that can be easily identified.
- Avoid using overly complex logos or icons that might confuse users.
- Limit the variety of icons to prevent confusion about the meaning of markers.

### Behavior and Interaction

- Keep the main marker for the current or preset location visible at all times.
- Ensure that only one main marker is active at any given moment.
- Use clustering for high-density areas to enhance map readability.
- Regularly update the marker data to reflect current information.

### Accessibility

- If interactive, provide an accessible name by adding a descriptive text to the ”default” slot and visually hide it if needed.
- Offer alternative interactions or text-based listings of markers for users who cannot easily manipulate or see the map.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

### Related Templates

- map-marker

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
