import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-checkbox');
const { generateTemplate } = storybookTemplate('sd-checkbox');

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
  args,
  argTypes,
};


/**
 * Default: This shows sd-checkbox in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
