import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-color-picker',
  component: 'sd-color-picker',
  args: getDefaultArgs('sd-color-picker'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-color-picker', args);
  }
};
