import '../../solid-components';
import { storybookDefaults, storybookTemplates, storybookHelpers } from '../../../scripts/storybook/helper';

const { argTypes } = storybookDefaults('sd-alert');
const { overrideArgs } = storybookHelpers('sd-alert');
const { generateTemplate } = storybookTemplate('sd-alert');

export default {
  title: 'Components/sd-alert',
  component: 'sd-alert',
  // We need to show the alert as open, otherwise it won't be visible in Storybook
  args: overrideArgs({ attributes: { 'open': true } }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
