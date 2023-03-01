import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-select', args);
};

Default.args = { ...getDefaultArgs('sd-select') };
