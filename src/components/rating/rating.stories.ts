import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-rating',
  component: 'sd-rating',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-rating', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-rating'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
