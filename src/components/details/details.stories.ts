import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-details',
  component: 'sd-details',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-details', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-details'),
  summary: '<span slot="summary">Summary Label</span>',
  slot: 'Laborum aute aliquip proident commodo pariatur non.'
};

// Sets the arg types of the story
Default.argTypes = {};
