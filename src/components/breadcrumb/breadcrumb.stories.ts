import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-breadcrumb');
const { defaultTemplate } = storybookTemplates('sd-breadcrumb');

export default {
  title: 'Components/sd-breadcrumb',
  component: 'sd-breadcrumb',
  args,
  argTypes,
};


/**
 * Default: This shows the breadcrumb in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
