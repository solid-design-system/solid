import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-menu-item');
const { defaultTemplate } = storybookTemplates('sd-menu-item');

export default {
  title: 'Components/sd-menu-item',
  component: 'sd-menu-item',
  args,
  argTypes,
};


/**
 * Default: This shows sd-menu-item in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
