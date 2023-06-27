import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-tab-group');
const { generateTemplate } = storybookTemplate('sd-tab-group');

export default {
  title: 'Components/sd-tab-group',
  component: 'sd-tab-group',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-tab-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
