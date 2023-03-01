import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-switch',
  component: 'sd-switch',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-switch', args);
};

Default.args = { ...getDefaultArgs('sd-switch') };
