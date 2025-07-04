import '../../../../components/src/solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-range-tick');
const { generateTemplate } = storybookTemplate('sd-range-tick');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-range-tick',
  component: 'sd-range-tick',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs?node-id=15911-3947&t=8iWCIgBhk0cwDsb7-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args, constants: [{ type: 'slot', name: 'default', value: '50' }] });
  }
};

/**
 * Use the `subtick` attribute to render a tick for finer scale readings:
 * - default: standard tick marks for main scale intervals
 * - subtick: additional smaller tick marks between main ticks for more precise visual granularity
 */
export const Ticks = {
  render: (args: any) => {
    return generateTemplate({ args, constants: [{ type: 'attribute', name: 'subtick', value: true }] });
  }
};
