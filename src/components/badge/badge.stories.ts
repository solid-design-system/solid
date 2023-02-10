import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-badge', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-badge'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
