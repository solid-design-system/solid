import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-alert');
const { defaultTemplate } = storybookTemplates('sd-alert');

export default {
  title: 'Components/sd-alert',
  component: 'sd-alert',
  // We need to show the alert as open, otherwise it won't be visible in Storybook
  args: { ...args, 'open-attr': true },
  argTypes
};

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
