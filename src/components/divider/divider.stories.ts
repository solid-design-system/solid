import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-divider');
const { defaultTemplate } = storybookTemplates('sd-divider');

export default {
  title: 'Components/sd-divider',
  component: 'sd-divider',
  args,
  argTypes,
};


/**
 * Default: This shows the divider in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
