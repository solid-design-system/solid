import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-dialog',
  component: 'sd-dialog',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-dialog', args);
};

Default.args = { ...getDefaultArgs('sd-dialog') };
