import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-color-picker',
  component: 'sd-color-picker',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-color-picker', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-color-picker')
};

// Sets the arg types of the story
Default.argTypes = {};
