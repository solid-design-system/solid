import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-resize-observer',
  component: 'sd-resize-observer',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-resize-observer', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-resize-observer'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
