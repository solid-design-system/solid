import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-checkbox', args);
};

Default.args = { ...getDefaultArgs('sd-checkbox') };
