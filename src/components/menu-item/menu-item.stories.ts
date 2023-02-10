import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-menu-item',
  component: 'sd-menu-item',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-menu-item', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-menu-item')
};

// Sets the arg types of the story
Default.argTypes = {};
