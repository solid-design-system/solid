import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tab-panel',
  component: 'sd-tab-panel',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-tab-panel', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-tab-panel'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
