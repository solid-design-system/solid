import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');

export default {
  title: 'Components/sd-brandshape',
  component: 'sd-brandshape',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: '' // TODO add figma link
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes,
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-brandshape in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
