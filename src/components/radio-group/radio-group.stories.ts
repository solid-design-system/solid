import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-radio-group', args);
};

Default.args = { ...getDefaultArgs('sd-radio-group') };
