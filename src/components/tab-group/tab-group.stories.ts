import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tab-group',
  component: 'sd-tab-group',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-tab-group', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-tab-group'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
