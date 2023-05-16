import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-badge');
const { defaultTemplate } = storybookTemplates('sd-badge');

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
  args,
  argTypes,
};


/**
 * Default: This shows sd-badge in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
