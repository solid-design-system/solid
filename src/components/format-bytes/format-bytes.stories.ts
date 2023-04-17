import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-format-bytes',
  component: 'sd-format-bytes',
  args: getDefaultArgs('sd-format-bytes'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-format-bytes', args);
  }
};
