import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-checkbox');
const { defaultTemplate } = storybookTemplates('sd-checkbox');

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
  args,
  argTypes,
};


/**
 * Default: This shows the checkbox in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
