import '../../solid-components';
import { getDefaultArgs, renderDefaultStory, getNewDefaultArgs } from '../../../scripts/storybook/helper';
import { getWcStorybookHelpers } from "@mariohamann/wc-storybook-helpers";
const { events, argTypes, template } = getWcStorybookHelpers("sd-card");

export default {
  title: 'Components/sd-card',
  component: 'sd-card',
  args: getNewDefaultArgs('sd-card'),
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};

export const Default = {
  render: (args: any) => {

    return renderDefaultStory('sd-card', args);
  }

};
