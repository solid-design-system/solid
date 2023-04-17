import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args: getDefaultArgs('sd-select'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-select', args);
  }
};
