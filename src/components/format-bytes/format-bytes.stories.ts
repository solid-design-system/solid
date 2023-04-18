import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-format-bytes');
const { defaultTemplate } = storybookTemplates('sd-format-bytes');

export default {
  title: 'Components/sd-format-bytes',
  component: 'sd-format-bytes',
  args,
  argTypes,
};


/**
 * Default: This shows the format-bytes in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
