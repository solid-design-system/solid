import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-mutation-observer',
  component: 'sd-mutation-observer',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-mutation-observer', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-mutation-observer'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
