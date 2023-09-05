import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-interactive');
const { overrideArgs } = storybookHelpers('sd-interactive');
const { generateTemplate } = storybookTemplate('sd-interactive');

/**
 * Generates basic styles for interactive elements. This should always be used in combination with `a` or `button` elements.
 * The `sd-interactive--reset` class resets the default browser styles of e. g. a button and was applied to the `button` element in the examples below.
 */

export default {
  title: 'Styles/sd-interactive',
  component: 'sd-interactive',
  parameters: {
    ...parameters
  },
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Lorem Ipsum' },
    { type: 'attribute', name: 'sd-interactive--reset', value: true }
  ]),
  argTypes
};

/**
 * Default: This shows sd-interactive in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<button class="%CLASSES%">%SLOT%</button>' },
      args
    });
  }
};

/**
 * Use the `disabled` class to make an interactive element look disabled. This works as well when setting an `disabled` attribute on the element.
 */

export const Disabled = {
  parameters: { controls: { exclude: ['sd-interactive--disabled', 'sd-interactive--reset'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-interactive--disabled', values: [false, true] }]
      },
      options: { templateContent: '<button class="%CLASSES%">%SLOT%</button>' },
      constants: { type: 'attribute', name: 'sd-interactive--disabled', value: true },
      args
    });
  }
};

/**
 * Use the `reset` class to reset the default browser styles of e. g. a button.
 */

export const Reset = {
  parameters: { controls: { exclude: ['sd-interactive--reset'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-interactive--reset', values: [false, true] }]
      },
      options: { templateContent: '<button class="%CLASSES%">%SLOT%</button>' },
      constants: { type: 'attribute', name: 'sd-interactive--reset', value: true },
      args
    });
  }
};

/**
 * Examples: This shows how sd-interactive looks in different contexts.
 */

export const Examples = {
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'slot',
          name: 'default',
          values: [
            'Text',
            '<span>Text</span>',
            '<sd-icon library="global-resources" name="system/picture"></sd-icon>'
          ].map(content => {
            return {
              value: content,
              title: content.replace('library="global-resources" name="system/picture"', '...')
            };
          }),
          title: 'content'
        }
      },
      options: { templateContent: '<button class="%CLASSES%">%SLOT%</button>' },
      args
    });
  }
};
