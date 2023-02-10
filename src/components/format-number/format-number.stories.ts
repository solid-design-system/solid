import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-format-number',
  component: 'sd-format-number',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-format-number', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-format-number'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
