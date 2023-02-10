import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-switch',
  component: 'sd-switch',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-switch', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-switch'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
