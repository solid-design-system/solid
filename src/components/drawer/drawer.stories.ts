import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-drawer',
  component: 'sd-drawer',
  args: getDefaultArgs('sd-drawer'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-drawer', args);
  }
};
