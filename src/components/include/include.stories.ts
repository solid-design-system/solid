import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-include',
  component: 'sd-include',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-include', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-include')
};

// Sets the arg types of the story
Default.argTypes = {};
