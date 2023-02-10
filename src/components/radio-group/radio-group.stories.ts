import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-radio-group', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-radio-group')
};

// Sets the arg types of the story
Default.argTypes = {};
