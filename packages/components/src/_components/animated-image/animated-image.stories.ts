import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-animated-image');
const { generateTemplate } = storybookTemplate('sd-animated-image');

export default {
  title: 'Components/sd-animated-image',
  component: 'sd-animated-image',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-animated-image in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
