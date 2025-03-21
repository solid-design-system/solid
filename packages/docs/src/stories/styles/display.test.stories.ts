import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-display');
const { overrideArgs } = storybookHelpers('sd-display');
const { generateTemplate } = storybookTemplate('sd-display');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Display provides larger text sizes that are not used as headlines. <br>
 * <br>
 * The different sizes allow for a more versatile styling of text elements. Display text should not be used as substitute for headlines.<br>
 * <br>
 * <b>Sizes</b>
 * <li>xl is the default size.</li>
 */

export default {
  title: 'Styles/sd-display/Screenshots: sd-display',
  tags: ['!autodocs'],
  component: 'sd-display',
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2b3TvrfxawUSvpnQEqSowL/Display?type=design&node-id=954-4198&mode=design&t=JogAvP1YEInWjWEF-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

/**
 * Default: This shows sd-display in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};

/**
 * Use the `inverted` class to make a display with inverted colors.
 */

export const Inverted = {
  name: 'Inverted',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-display--inverted', values: [false, true] }]
      },
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, Inverted]);
