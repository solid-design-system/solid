import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-avatar');
const { defaultTemplate } = storybookTemplates('sd-avatar');

export default {
  title: 'Components/sd-avatar',
  component: 'sd-avatar',
  args: { ...args, 'default-slot': 'Default' },
  argTypes,
};


/**
 * Default: This shows the avatar in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
