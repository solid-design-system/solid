import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-card',
  component: 'sd-card',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-card', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-card')
};

// Sets the arg types of the story
Default.argTypes = {};
