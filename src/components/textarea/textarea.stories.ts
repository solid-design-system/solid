import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-textarea');
const { defaultTemplate } = storybookTemplates('sd-textarea');

export default {
  title: 'Components/sd-textarea',
  component: 'sd-textarea',
  args,
  argTypes,
};


/**
 * Default: This shows the textarea in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
