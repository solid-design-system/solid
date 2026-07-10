## Overview

`<sd-icon>` — Used to display icons.

## API

### Examples

Use the components tool by passing the args `component` and `example` for any of these combinations:

- component: sd-icon, example: name
- component: sd-icon, example: label
- component: sd-icon, example: color
- component: sd-icon, example: size
- component: sd-icon, example: libraries
- component: sd-icon, example: custom-libraries

### Key Properties

- prop.name: string|undefined — The name of the icon to draw. Available names depend on the icon library being used.
- prop.src: string|undefined — An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
  can result in XSS attacks. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon,
  it might make sense to register a custom icon library.
- prop.label: string, default='' — An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
  ignored by assistive devices.
- prop.library: string, default='default' — The name of a registered custom icon library.
- prop.color: 'currentColor'|'primary'|'white', default='currentColor' — The color of the icon.
  "current" refers to currentColor and makes it possible to easily style the icon from outside without any CSS variables.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-load: Emitted when the icon has loaded.
- event.sd-error: Emitted when the icon fails to load due to an error.
