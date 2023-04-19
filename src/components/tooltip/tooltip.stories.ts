import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tooltip');
const { defaultTemplate } = storybookTemplates('sd-tooltip');

export default {
  title: 'Components/sd-tooltip',
  component: 'sd-tooltip',
  args,
  argTypes,
};


/**
 * Default: This shows sd-tooltip in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
