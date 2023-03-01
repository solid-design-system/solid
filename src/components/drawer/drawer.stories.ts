import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-drawer',
  component: 'sd-drawer',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-drawer', args);
};

Default.args = { ...getDefaultArgs('sd-drawer') };
