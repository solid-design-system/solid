// url=https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS?node-id=68576-58443
// source=packages/styles/src/modules/chip.css
// component=sd-chip
//
// sd-chip is a CSS-only style module (no dedicated web component) applied to a
// non-interactive label element. See Ticket 3 audit, Blocker 2.
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('<chip>');
const color = instance.getEnum('&--color', { primary: 'primary', neutral: 'neutral', white: 'white' });
const shade = instance.getEnum('&--shade', {
  subtle: 'subtle',
  low: 'low',
  medium: 'medium',
  high: 'high',
  none: 'none'
});
const size = instance.getEnum('&--size', { 'sm (default)': 'sm', lg: 'lg' });
const sharp = instance.getEnum('&--sharp', { true: true, false: false });
const outlined = instance.getEnum('&--outlined', { true: true, false: false });

const classes = [
  'sd-chip',
  color !== 'primary' ? `sd-chip--color-${color}` : '',
  shade !== 'subtle' ? `sd-chip--shade-${shade}` : '',
  size === 'lg' ? 'sd-chip--size-lg' : '',
  sharp ? 'sd-chip--sharp' : '',
  outlined ? 'sd-chip--outline' : ''
]
  .filter(Boolean)
  .join(' ');

export default {
  example: figma.code`<span class="${classes}">${label}</span>`,
  id: 'sd-chip',
  metadata: { nestable: true }
};
