## Overview

`<sd-icon>` — Icons are symbols that can be used to represent various options within an application.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-icon/name
- sd-icon/label
- sd-icon/color
- sd-icon/size
- sd-icon/icon-libraries

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

### Related Templates

- badge
- breadcrumb
- button
- checkbox-group
- dialog
- drawer
- dropdown
- forms
- header-navigation
- headline
- interactive
- link
- mark
- menu
- pagination
- quickfact
- radio-button-group
- range
- status-badge
- step-group
- tab-group
- table
- tag
- teaser

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
