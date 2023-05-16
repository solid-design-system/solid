import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-format-date');
const { defaultTemplate } = storybookTemplates('sd-format-date');

export default {
  title: 'Components/sd-format-date',
  component: 'sd-format-date',
  args,
  argTypes,
};


/**
 * Default: This shows sd-format-date in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
