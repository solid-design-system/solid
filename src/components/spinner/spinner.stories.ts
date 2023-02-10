import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-spinner', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-spinner'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
