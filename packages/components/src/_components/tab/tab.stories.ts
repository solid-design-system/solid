import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-tab');
const { generateTemplate } = storybookTemplate('sd-tab');

export default {
  title: 'Components/sd-tab',
  component: 'sd-tab',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-tab in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
