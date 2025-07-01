import '../../../../components/src/solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-range-tick');
const { generateTemplate } = storybookTemplate('sd-range-tick');

/**
 * Used to represent a tick within a sd-range.
 *
 * **Related templates**:
 * - [Range](./?path=/docs/templates-range--docs)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-range-tick',
  component: 'sd-range-tick',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  decorators: [withActions] as any
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
