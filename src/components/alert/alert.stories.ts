import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-alert',
  component: 'sd-alert',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-alert', args);
};

Default.args = { ...getDefaultArgs('sd-alert') };
