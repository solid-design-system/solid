import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-button-group',
  component: 'sd-button-group',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-button-group', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-button-group'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
