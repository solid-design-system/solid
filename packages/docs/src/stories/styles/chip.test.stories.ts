import '../../../../components/src/solid-components';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-chip');
const { overrideArgs } = storybookHelpers('sd-chip');
const { generateTemplate } = storybookTemplate('sd-chip');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Styles/sd-chip/Screenshots: sd-chip',
  tags: ['!autodocs'],
  component: 'sd-chip',
  parameters: {
    ...parameters,
    controls: { disable: true }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Chip' }),
  argTypes
};

const templateContent = '<span class="%CLASSES%">%SLOT%</span>';

const colors = {
  type: 'attribute' as const,
  name: 'sd-chip--color',
  values: ['sd-chip--color-primary', 'sd-chip--color-neutral', 'sd-chip--color-white']
};

const shades = {
  type: 'attribute' as const,
  name: 'sd-chip--shade',
  values: [
    'sd-chip--shade-subtle',
    'sd-chip--shade-low',
    'sd-chip--shade-medium',
    'sd-chip--shade-high',
    'sd-chip--shade-none'
  ]
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent },
      args
    });
  }
};

export const ColorXShade = {
  name: 'Color x Shade',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: colors,
        x: shades
      },
      options: { templateContent },
      args
    });
  }
};

export const ColorXShadeOutline = {
  name: 'Color x Shade x Outline',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: colors,
        x: shades
      },
      constants: [{ type: 'attribute', name: 'sd-chip--outline', value: true }],
      options: { templateContent },
      args
    });
  }
};

export const Sharp = {
  name: 'Sharp',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'sd-chip--sharp',
          values: ['', 'sd-chip--sharp']
        }
      },
      options: { templateContent },
      args
    });
  }
};

export const Size = {
  name: 'Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'sd-chip--size',
          values: ['', 'sd-chip--size-lg']
        }
      },
      options: { templateContent },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, ColorXShade, ColorXShadeOutline, Sharp, Size]);
