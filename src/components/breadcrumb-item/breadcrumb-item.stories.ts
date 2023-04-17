import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',
  args: getDefaultArgs('sd-breadcrumb-item'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-breadcrumb-item', args);
  }
};
