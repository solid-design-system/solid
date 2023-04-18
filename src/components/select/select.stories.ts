import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-select');
const { defaultTemplate } = storybookTemplates('sd-select');

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args,
  argTypes,
};


/**
 * Default: This shows the select in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
