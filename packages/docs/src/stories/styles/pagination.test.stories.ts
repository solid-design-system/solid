import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-pagination');
const { overrideArgs } = storybookHelpers('sd-pagination');
const { generateTemplate } = storybookTemplate('sd-pagination');
const { generateScreenshotStory } = storybookUtilities;

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Styles/sd-pagination/Screenshots: sd-pagination',
  component: 'sd-pagination',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([{}]),
  argTypes,
  decorators: [withActions] as any
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Combination = generateScreenshotStory([Default]);
