import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-textarea',
  component: 'sd-textarea',
  args: getDefaultArgs('sd-textarea'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-textarea', args);
  }
};
