import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-skeleton');
const { defaultTemplate } = storybookTemplates('sd-skeleton');

export default {
  title: 'Components/sd-skeleton',
  component: 'sd-skeleton',
  args,
  argTypes,
};


/**
 * Default: This shows sd-skeleton in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
