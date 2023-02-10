import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tree',
  component: 'sd-tree',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-tree', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-tree'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
