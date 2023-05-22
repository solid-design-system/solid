import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-avatar');
const { generateTemplate } = storybookTemplate('sd-avatar');

export default {
  title: 'Components/sd-avatar',
  component: 'sd-avatar',
  args: { ...args, 'default-slot': 'Default' },
  argTypes,
};


/**
 * Default: This shows sd-avatar in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
