import '../../solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-paragraph');
const { overrideArgs } = storybookHelpers('sd-paragraph');
const { generateTemplate } = storybookTemplate('sd-paragraph');
const { generateScreenshotStory } = storybookUtilities;

/**
 * A paragraph is used to display blocks of text. It uses the base font size and can contain bold and/or link styles.<br>
 * <br>
 * <b>Sizes</b>
 * <li>lg is the default paragraph size.</li>
 * <li>sm can be used as an alternative for tighter spaces.</li>
 */

export default {
  title: 'Styles/sd-paragraph/Screenshot Tests',
  tags: ['!autodocs'],
  component: 'sd-paragraph',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SkTc8tXPNPjZlxvXXJ6vTt/Paragraph?type=design&node-id=1701-741&mode=design&t=FsmhHop5U1y6FbYg-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

/**
 * Default: This shows sd-paragraph in its default state.
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
 * Use the `inverted` class to make a paragraph with inverted colors.
 */

export const Inverted = {
  name: 'Inverted',
  parameters: { controls: { exclude: ['sd-paragraph--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-paragraph--inverted', values: [false, true] }]
      },
      constants: { type: 'attribute', name: 'sd-paragraph--inverted', value: true },
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, Inverted]);
