import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-input', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-input')
};

// Sets the arg types of the story
Default.argTypes = {};
