import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-image-comparer',
  component: 'sd-image-comparer',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-image-comparer', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-image-comparer')
};

// Sets the arg types of the story
Default.argTypes = {};
