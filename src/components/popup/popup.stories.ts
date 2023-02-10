import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-popup',
  component: 'sd-popup',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-popup', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-popup')
};

// Sets the arg types of the story
Default.argTypes = {};
