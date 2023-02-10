import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-split-panel',
  component: 'sd-split-panel',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-split-panel', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-split-panel'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
