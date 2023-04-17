import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-animated-image',
  component: 'sd-animated-image',
  args: getDefaultArgs('sd-animated-image'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-animated-image', args);
  }
};
