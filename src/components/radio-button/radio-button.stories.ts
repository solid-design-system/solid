import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-radio-button',
  component: 'sd-radio-button',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-radio-button', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-radio-button')
};

// Sets the arg types of the story
Default.argTypes = {};
