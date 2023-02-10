import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-button', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-button')
};

// Sets the arg types of the story
Default.argTypes = {};
