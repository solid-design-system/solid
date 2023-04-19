import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tab');
const { defaultTemplate } = storybookTemplates('sd-tab');

export default {
  title: 'Components/sd-tab',
  component: 'sd-tab',
  args,
  argTypes,
};


/**
 * Default: This shows sd-tab in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
