import '../../solid-components';
import { getWcStorybookHelpers } from "@mariohamann/wc-storybook-helpers";
const { args, events, argTypes, template } = getWcStorybookHelpers("sd-alert");

export default {
  title: 'Components/sd-alert',
  component: 'sd-alert',
  // We need to show the alert as open, otherwise it won't be visible in Storybook
  args: { ...args, 'open-attr': true },
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};

export const Default = {
  render: (args: any) => {
    return template(args);
  }
};
