import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-option',
  component: 'sd-option',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-option', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-option')
};

// Sets the arg types of the story
Default.argTypes = {};
