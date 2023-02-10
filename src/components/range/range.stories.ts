import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-range',
  component: 'sd-range',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-range', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-range')
};

// Sets the arg types of the story
Default.argTypes = {};
