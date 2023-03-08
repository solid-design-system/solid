import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
  args: getDefaultArgs('sd-badge'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-badge', args);
  }
};
