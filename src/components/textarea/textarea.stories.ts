import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-textarea',
  component: 'sd-textarea',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-textarea', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-textarea')
};

// Sets the arg types of the story
Default.argTypes = {};
