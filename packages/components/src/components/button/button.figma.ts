// url=https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS?node-id=27220-67418
// source=packages/components/src/components/button/button.ts
// component=sd-button
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.getString('<slot>');
const variant = instance.getEnum('variant', {
  'primary (default)': 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  cta: 'cta'
});
const size = instance.getEnum('size', {
  'lg (default)': 'lg',
  md: 'md',
  sm: 'sm'
});
const inverted = instance.getEnum('inverted', { true: true, false: false });
const disabled = instance.getEnum('disabled', { true: true, false: false });
const loading = instance.getEnum('loading', { true: true, false: false });

const hasIconLeft = instance.getBoolean('icon-left');
const iconLeft = hasIconLeft ? instance.getInstanceSwap('↳ icon-swap-left') : null;
let iconLeftCode;
if (iconLeft && iconLeft.type === 'INSTANCE') {
  iconLeftCode = iconLeft.executeTemplate().example;
}

const hasIconRight = instance.getBoolean('icon-right');
const iconRight = hasIconRight ? instance.getInstanceSwap('↳ icon-swap-right') : null;
let iconRightCode;
if (iconRight && iconRight.type === 'INSTANCE') {
  iconRightCode = iconRight.executeTemplate().example;
}

export default {
  example: figma.code`
    <sd-button
      variant="${variant}"
      size="${size}"
      ${inverted ? 'inverted' : ''}
      ${disabled ? 'disabled' : ''}
      ${loading ? 'loading' : ''}
    >
      ${iconLeftCode ? figma.code`<span slot="icon-left">${iconLeftCode}</span>` : ''}
      ${label}
      ${iconRightCode ? figma.code`<span slot="icon-right">${iconRightCode}</span>` : ''}
    </sd-button>
  `,
  id: 'sd-button',
  metadata: { nestable: true }
};
