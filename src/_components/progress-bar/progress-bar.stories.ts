import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-progress-bar');
const { defaultTemplate } = storybookTemplates('sd-progress-bar');

export default {
  title: 'Components/sd-progress-bar',
  component: 'sd-progress-bar',
  args,
  argTypes,
};


/**
 * Default: This shows sd-progress-bar in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
