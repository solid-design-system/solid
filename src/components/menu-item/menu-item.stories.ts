import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-menu-item',
  component: 'sd-menu-item',
  args: getDefaultArgs('sd-menu-item'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-menu-item', args);
  }
};
