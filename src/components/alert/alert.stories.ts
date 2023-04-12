import '../../solid-components';
import { getDefaultArgs, renderDefaultStory, getNewDefaultArgs } from '../../../scripts/storybook/helper';
import { getWcStorybookHelpers } from "wc-storybook-helpers";
const { events, argTypes, template } = getWcStorybookHelpers("sd-alert");

export default {
  title: 'Components/sd-alert',
  component: 'sd-alert',
  args: getNewDefaultArgs('sd-alert'),
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
