import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-range-tick');
const { overrideArgs } = storybookHelpers('sd-range-tick');
const { generateTemplate } = storybookTemplate('sd-range-tick');

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Components/sd-range-tick/Screenshots: sd-range-tick',
  component: 'sd-range-tick',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([]),
  argTypes,
  decorators: [withActions] as any
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
