import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-format-date',
  component: 'sd-format-date',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-format-date', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-format-date')
};

// Sets the arg types of the story
Default.argTypes = {};
