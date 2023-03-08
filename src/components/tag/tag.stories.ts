import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tag',
  component: 'sd-tag',
  args: getDefaultArgs('sd-tag'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-tag', args);
  }
};
