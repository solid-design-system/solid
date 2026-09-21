// url=https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS?node-id=30122-54972
// source=packages/styles/src/modules/copyright.css
// component=sd-copyright
//
// sd-copyright is a CSS-only style module (no dedicated web component). The
// copyright text is passed via the --copyright custom property, not a slot.
// See Ticket 3 audit, Blocker 2.
import figma from 'figma';
const instance = figma.selectedInstance;

const copyrightText = instance.getString('<slot-copyright>');
const orientation = instance.getEnum('&--orientation', {
  'horizontal (default)': 'horizontal',
  vertical: 'vertical'
});
const color = instance.getEnum('color', { white: 'white', black: 'black' });
const shadow = instance.getEnum('shadow', { true: true, false: false });

const classes = [
  'sd-copyright',
  orientation === 'vertical' ? 'sd-copyright--orientation-vertical' : '',
  color === 'black' ? 'sd-copyright--color-black' : '',
  !shadow ? 'sd-copyright--no-shadow' : ''
]
  .filter(Boolean)
  .join(' ');

export default {
  example: figma.code`
    <div class="${classes}" style="--copyright: '${copyrightText}';">
      <!-- media content (image or sd-video) goes here -->
    </div>
  `,
  id: 'sd-copyright',
  metadata: { nestable: true }
};
