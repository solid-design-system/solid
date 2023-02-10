import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-skeleton',
  component: 'sd-skeleton',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-skeleton', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-skeleton'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
