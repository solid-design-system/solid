import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-checkbox', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-checkbox'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
