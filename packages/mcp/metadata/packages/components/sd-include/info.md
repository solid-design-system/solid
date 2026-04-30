## Overview

`<sd-include>` — Includes give you the power to embed external HTML files into the page.

## API

### Key Properties

- prop.src: string — The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
  code and can result in XSS attacks.
- prop.mode: 'cors'|'no-cors'|'same-origin', default='cors' — The fetch mode to use.
- prop.allowScripts [attr: allow-scripts]: boolean, default=false — Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
  code and can result in XSS attacks.
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-load: Emitted when the included file is loaded.
- event.sd-error: Emitted when the included file fails to load due to an error.
