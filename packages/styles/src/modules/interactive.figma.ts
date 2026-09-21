// url=https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS?node-id=11909-3032
// source=packages/styles/src/modules/interactive.css
// component=sd-interactive
//
// sd-interactive is a CSS-only style module (no dedicated web component) applied to
// an interactive element such as a link or reset button. The `&--icon-only` Figma
// variant has no corresponding CSS modifier in interactive.css and is intentionally
// omitted here — see Ticket 3 audit, Blocker 2.
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('<slot>');
const inverted = instance.getEnum('&--inverted', { true: true, false: false });
const disabled = instance.getEnum('&--disabled', { true: true, false: false });

const classes = ['sd-interactive', inverted ? 'sd-interactive--inverted' : '', disabled ? 'sd-interactive--disabled' : '']
  .filter(Boolean)
  .join(' ');

export default {
  example: figma.code`<a href="#" class="${classes}">${label}</a>`,
  id: 'sd-interactive',
  metadata: { nestable: true }
};
