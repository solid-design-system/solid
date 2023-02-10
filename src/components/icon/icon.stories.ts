import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-icon', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-icon'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
