import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-icon');
const { defaultTemplate } = storybookTemplates('sd-icon');

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
  args,
  argTypes,
};


/**
 * Default: This shows the icon in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
