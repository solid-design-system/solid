import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tree-item',
  component: 'sd-tree-item',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-tree-item', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-tree-item'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
