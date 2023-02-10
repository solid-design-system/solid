import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-dialog',
  component: 'sd-dialog',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-dialog', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-dialog')
};

// Sets the arg types of the story
Default.argTypes = {};
