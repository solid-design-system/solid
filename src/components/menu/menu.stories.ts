import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-menu');
const { defaultTemplate } = storybookTemplates('sd-menu');

export default {
  title: 'Components/sd-menu',
  component: 'sd-menu',
  args,
  argTypes,
};


/**
 * Default: This shows the menu in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
