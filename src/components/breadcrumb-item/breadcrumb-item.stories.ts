import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-breadcrumb-item', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-breadcrumb-item'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
