import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-dropdown',
  component: 'sd-dropdown',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-dropdown', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-dropdown')
};

// Sets the arg types of the story
Default.argTypes = {};
