import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-divider',
  component: 'sd-divider',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-divider', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-divider')
};

// Sets the arg types of the story
Default.argTypes = {};
