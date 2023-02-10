import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tooltip',
  component: 'sd-tooltip',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-tooltip', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-tooltip'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
