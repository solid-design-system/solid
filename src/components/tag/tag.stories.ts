import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tag');
const { defaultTemplate } = storybookTemplates('sd-tag');

export default {
  title: 'Components/sd-tag',
  component: 'sd-tag',
  args,
  argTypes,
};


/**
 * Default: This shows sd-tag in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
