import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tab',
  component: 'sd-tab',
  args: getDefaultArgs('sd-tab'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-tab', args);
  }
};
