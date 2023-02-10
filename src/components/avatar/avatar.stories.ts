import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-avatar',
  component: 'sd-avatar',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-avatar', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-avatar')
};

// Sets the arg types of the story
Default.argTypes = {};
