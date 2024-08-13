import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-copyright');
const { overrideArgs } = storybookHelpers('sd-copyright');

/**
 * Can be displayed at the bottom of an image for example.
 */
export default {
  title: 'Styles/sd-copyright',
  tags: ['!dev'],
  component: 'sd-copyright',
  parameters: {
    ...parameters
  },
  args: overrideArgs(
    {
      type: 'slot',
      name: 'default',
      value: `<img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover"/>`
    },
    {
      '--copyright': '© 2024 Solid Design System'
    }
  ),
  argTypes
};

export const Default = {
  name: 'Default',
  render: () =>
    html`<div class="sd-copyright max-w-xl" style="--copyright: '© 2024 Solid Design System';">
      <img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover" />
    </div>`
};
