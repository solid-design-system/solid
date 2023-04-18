import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-format-number');
const { defaultTemplate } = storybookTemplates('sd-format-number');

export default {
  title: 'Components/sd-format-number',
  component: 'sd-format-number',
  args,
  argTypes,
};


/**
 * Default: This shows the format-number in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
