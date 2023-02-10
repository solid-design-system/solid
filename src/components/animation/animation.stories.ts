import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-animation',
  component: 'sd-animation',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-animation', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-animation'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
