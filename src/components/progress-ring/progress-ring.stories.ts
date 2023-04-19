import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-progress-ring');
const { defaultTemplate } = storybookTemplates('sd-progress-ring');

export default {
  title: 'Components/sd-progress-ring',
  component: 'sd-progress-ring',
  args,
  argTypes,
};


/**
 * Default: This shows sd-progress-ring in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
