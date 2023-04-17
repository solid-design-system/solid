import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-menu-label',
  component: 'sd-menu-label',
  args: getDefaultArgs('sd-menu-label'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-menu-label', args);
  }
};
