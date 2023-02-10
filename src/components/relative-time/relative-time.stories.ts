import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-relative-time',
  component: 'sd-relative-time',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-relative-time', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-relative-time')
};

// Sets the arg types of the story
Default.argTypes = {};
