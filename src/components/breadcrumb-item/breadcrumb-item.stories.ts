import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-breadcrumb-item');
const { defaultTemplate } = storybookTemplates('sd-breadcrumb-item');

export default {
  title: 'Components/sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',
  args,
  argTypes,
};


/**
 * Default: This shows sd-breadcrumb-item in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
