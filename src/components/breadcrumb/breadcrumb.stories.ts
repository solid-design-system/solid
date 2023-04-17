import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-breadcrumb',
  component: 'sd-breadcrumb',
  args: getDefaultArgs('sd-breadcrumb'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-breadcrumb', args);
  }
};
