import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-alert',
  component: 'sd-alert',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-alert', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-alert')
};

// Sets the arg types of the story
Default.argTypes = {};
