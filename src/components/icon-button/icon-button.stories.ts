import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-icon-button',
  component: 'sd-icon-button',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-icon-button', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-icon-button'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
