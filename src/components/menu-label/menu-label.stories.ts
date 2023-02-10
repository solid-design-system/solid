import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-menu-label',
  component: 'sd-menu-label',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-menu-label', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-menu-label')
};

// Sets the arg types of the story
Default.argTypes = {};
