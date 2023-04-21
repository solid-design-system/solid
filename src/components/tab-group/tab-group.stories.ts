import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tab-group');
const { defaultTemplate } = storybookTemplates('sd-tab-group');

export default {
  title: 'Components/sd-tab-group',
  component: 'sd-tab-group',
  args,
  argTypes,
};


/**
 * Default: This shows sd-tab-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
