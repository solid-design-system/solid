import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-switch',
  component: 'sd-switch',
  args: getDefaultArgs('sd-switch'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-switch', args);
  }
};
