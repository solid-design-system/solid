import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tab',
  component: 'sd-tab',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-tab', args);
};

Default.args = { ...getDefaultArgs('sd-tab') };
