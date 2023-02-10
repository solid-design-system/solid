import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-format-bytes',
  component: 'sd-format-bytes',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-format-bytes', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-format-bytes'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
