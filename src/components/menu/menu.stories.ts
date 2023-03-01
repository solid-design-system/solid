import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-menu',
  component: 'sd-menu',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-menu', args);
};

Default.args = { ...getDefaultArgs('sd-menu') };
