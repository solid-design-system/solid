import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-menu-label');
const { defaultTemplate } = storybookTemplates('sd-menu-label');

export default {
  title: 'Components/sd-menu-label',
  component: 'sd-menu-label',
  args,
  argTypes,
};


/**
 * Default: This shows sd-menu-label in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
