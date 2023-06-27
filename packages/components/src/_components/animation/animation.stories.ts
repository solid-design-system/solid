import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-animation');
const { generateTemplate } = storybookTemplate('sd-animation');

export default {
  title: 'Components/sd-animation',
  component: 'sd-animation',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-animation in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
