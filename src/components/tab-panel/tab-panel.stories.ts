import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tab-panel');
const { defaultTemplate } = storybookTemplates('sd-tab-panel');

export default {
  title: 'Components/sd-tab-panel',
  component: 'sd-tab-panel',
  args,
  argTypes,
};


/**
 * Default: This shows the tab-panel in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
