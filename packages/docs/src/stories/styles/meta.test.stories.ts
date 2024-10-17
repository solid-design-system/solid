import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../../components/scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-meta');
const { overrideArgs } = storybookHelpers('sd-meta');
const { generateTemplate } = storybookTemplate('sd-meta');
const { generateScreenshotStory } = storybookUtilities;

/**
 * List of meta information like file size, date or whatever needed. Seperated by pipes.<br>
 * <br>
 * <b>Sizes</b><br>
 * <li>lg is the default size.</li>
 * <li>sm can be used as an alternative in tight spaces.</li>
 */

export default {
  title: 'Styles/sd-meta/Screenshots: sd-meta',
  tags: ['!autodocs'],
  component: 'sd-meta',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Um1B3fI5fvdFVJv6LO7kZG/Meta-Information?type=design&node-id=0-1&mode=design&t=I2fDQn7HjSc75K1V-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: '11. August 2023' }),
  argTypes
};

/**
 * Default: This shows sd-meta in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<time class="%CLASSES%" datetime="2023-08-11">%SLOT%</time>' },
      args
    });
  }
};

/**
 * The sd-meta in all possible combinations of `variant` and `size`.
 */

export const LightAndSize = {
  name: 'Light × Size',
  parameters: { controls: { exclude: ['sd-meta--light', 'sd-meta--size-...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-meta--light' },
        y: { type: 'attribute', name: 'sd-meta--size-...' }
      },
      args
    });
  }
};

/**
 * The sd-meta in all possible combinations of `light` and `inverted`.
 */

export const LightAndInverted = {
  name: 'Light × Inverted',
  parameters: { controls: { exclude: ['sd-meta--light', 'sd-meta--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-meta--light' },
        y: { type: 'attribute', name: 'sd-meta--inverted', values: [false, true] }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      }
    });
  }
};

/**
 * The sd-meta with pipe.
 */

export const Pipe = {
  name: 'Pipe',
  parameters: { controls: { exclude: ['sd-meta--pipe', 'sd-meta--light', 'sd-meta--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-meta--light' },
        y: { type: 'attribute', name: 'sd-meta--inverted', values: [false, true] }
      },
      constants: { type: 'attribute', name: 'sd-meta--pipe', value: true },
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, LightAndSize, LightAndInverted, Pipe]);
