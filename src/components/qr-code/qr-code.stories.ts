import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-qr-code',
  component: 'sd-qr-code',
};

// Renders the default story
export const Default = (args: any) => {
  return renderDefaultStory('sd-qr-code', args);
};

// Sets the default args of the story
Default.args = {
  ...getDefaultArgs('sd-qr-code'),
  slot: 'Default Slot'
};

// Sets the arg types of the story
Default.argTypes = {};
