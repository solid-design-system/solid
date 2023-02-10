import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-animated-image',
  component: 'sd-animated-image',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-animated-image', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-animated-image'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
