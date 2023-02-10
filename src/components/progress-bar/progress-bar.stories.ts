import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-progress-bar',
  component: 'sd-progress-bar',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-progress-bar', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-progress-bar')
};

// Sets the arg types of the story
Default.argTypes = {};
