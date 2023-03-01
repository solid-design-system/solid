import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-avatar',
  component: 'sd-avatar',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-avatar', args);
};

Default.args = { ...getDefaultArgs('sd-avatar') };
