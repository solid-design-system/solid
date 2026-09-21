// url=https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS?node-id=2036-18109
// source=packages/styles/src/modules/list.css
// component=sd-list
//
// sd-list is a CSS-only style module (no dedicated web component) applied to a
// native <ul>/<ol>. See Ticket 3 audit, Blocker 2.
import figma from 'figma';
const instance = figma.selectedInstance;

const variant = instance.getEnum('*&--variant', { unordered: 'unordered', ordered: 'ordered', icon: 'icon' });
const inverted = instance.getEnum('&--inverted', { true: true, false: false });
const orientation = instance.getEnum('&--orientation', { vertical: 'vertical', horizontal: 'horizontal' });

const tag = variant === 'ordered' ? 'ol' : 'ul';
const classes = [
  variant === 'icon' ? 'sd-list--icon' : '',
  'sd-list',
  inverted ? 'sd-list--inverted' : '',
  variant === 'icon' && orientation === 'horizontal' ? 'sd-list--horizontal' : ''
]
  .filter(Boolean)
  .join(' ');

export default {
  example: figma.code`
    <${tag} class="${classes}">
      <li>List item</li>
      <li>List item</li>
    </${tag}>
  `,
  id: 'sd-list',
  metadata: { nestable: true }
};
