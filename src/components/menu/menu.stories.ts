import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-menu',
  component: 'sd-menu',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-menu', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-menu'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
