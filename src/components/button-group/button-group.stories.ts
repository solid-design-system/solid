import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-button-group',
  component: 'sd-button-group',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-button-group', args);
};

Default.args = { ...getDefaultArgs('sd-button-group') };
