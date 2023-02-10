import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-visually-hidden',
  component: 'sd-visually-hidden',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-visually-hidden', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-visually-hidden')
};

// Sets the arg types of the story
Default.argTypes = {};
