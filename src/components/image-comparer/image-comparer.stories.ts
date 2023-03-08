import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-image-comparer',
  component: 'sd-image-comparer',
  args: getDefaultArgs('sd-image-comparer'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-image-comparer', args);
  }
};
