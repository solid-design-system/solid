import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tag',
  component: 'sd-tag',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-tag', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-tag'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
