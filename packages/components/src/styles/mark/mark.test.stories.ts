import '../../solid-components';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-mark');
const { overrideArgs } = storybookHelpers('sd-mark');
const { generateTemplate } = storybookTemplate('sd-mark');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Highlight text sections in the accent color. Use the <mark> tag for regular fonts-sizes at 24px and above, and use bold fonts at 18.67px.
 */

export default {
  title: 'Styles/sd-mark/Screenshots: sd-mark',
  tags: ['!autodocs'],
  component: 'sd-mark',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

/**
 * Default: This shows sd-mark in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<mark class="%CLASSES%">%SLOT%</mark>' },
      args
    });
  }
};

/**
 * Examples: This shows how sd-mark looks in different contexts.
 */

export const Examples = {
  name: 'Examples',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-mark',
          values: ['sd-display', 'sd-leadtext'].map(style => {
            return { value: `<p class="${style}">%TEMPLATE%</p>`, title: style };
          })
        }
      },
      options: { templateContent: 'Lorem <mark class="%CLASSES%">Ipsum</mark>' },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, Examples]);
