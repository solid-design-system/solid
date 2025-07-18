import '../../../../components/src/solid-components';
import { html } from 'lit';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-interactive');
const { overrideArgs } = storybookHelpers('sd-interactive');
const { generateTemplate } = storybookTemplate('sd-interactive');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Generates basic styles for interactive elements. This should always be used in combination with `a` or `button` elements.
 * The `sd-interactive--reset` class resets the default browser styles of e. g. a button and was applied to the `button` element in the examples below.
 */

export default {
  title: 'Styles/sd-interactive/Screenshots: sd-interactive',
  tags: ['!autodocs', 'skip-a11y-[color-contrast]'],
  component: 'sd-interactive',
  parameters: {
    ...parameters,
    controls: { disable: true }
  },
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Lorem Ipsum' },
    { type: 'attribute', name: 'sd-interactive--reset', value: true }
  ]),
  argTypes,
  decorators: [
    (story: any) =>
      html`<style>
          button.sd-interactive:not(.sd-interactive--reset) {
            background-color: rgb(239, 239, 239);
            border: 1px solid rgb(204, 204, 204);
            border-radius: 4px;
            color: rgb(51, 51, 51);
            cursor: pointer;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            padding: 8px 16px;
          }
          button.sd-interactive:not(.sd-interactive--reset):hover {
            background-color: rgb(230, 230, 230);
            border-color: rgb(204, 204, 204);
            color: rgb(51, 51, 51) !important;
          }
          button.sd-interactive:not(.sd-interactive--reset):active {
            background-color: rgb(204, 204, 204);
          }</style
        >${story()}`
  ]
};

/**
 * Default: This shows sd-interactive in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<button class="%CLASSES%" title="Action name">%SLOT%</button>' },
      args
    });
  }
};

/**
 * Use the `disabled` class to make an interactive element look disabled. This works as well when setting an `disabled` attribute on the element.
 */

export const Disabled = {
  name: 'Disabled',
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            selector: '.sd-interactive--disabled',
            enabled: false
          }
        ]
      }
    }
  },
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          y: [{ type: 'attribute', name: 'sd-interactive--disabled', values: [false, true] }]
        },
        options: {
          templateContent: '<div class="p-4"><button class="%CLASSES%" title="Disabled button">%SLOT%</button></div>'
        },
        constants: { type: 'attribute', name: 'sd-interactive--disabled', value: true },
        args
      })}
      ${generateTemplate({
        axis: {
          y: [{ type: 'attribute', name: 'sd-interactive--disabled', values: [false, true] }]
        },
        options: {
          templateContent:
            '<div class="bg-primary p-4"><button class="%CLASSES%" title="Disabled button">%SLOT%</button></div>'
        },
        constants: { type: 'attribute', name: 'sd-interactive--inverted', value: true },
        args
      })}
    `;
  }
};

/**
 * Use the `inverted` class to invert the colors of an interactive element.
 */

export const Inverted = {
  name: 'Inverted',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-interactive--inverted', values: [false, true] }]
      },
      options: {
        templateContent: '<button class="%CLASSES%" title="Action name">%SLOT%</button>',
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      constants: { type: 'attribute', name: 'sd-interactive--inverted', value: true },
      args
    });
  }
};

/**
 * Use the `reset` class to reset the default browser styles of e. g. a button.
 */

export const Reset = {
  name: 'Reset',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-interactive--reset', values: [false, true] }]
      },
      options: { templateContent: '<button class="%CLASSES%" title="Action name">%SLOT%</button>' },
      constants: { type: 'attribute', name: 'sd-interactive--reset', value: true },
      args
    });
  }
};

/**
 * Examples: This shows how sd-interactive looks in different contexts.
 */

export const Examples = {
  name: 'Examples',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'slot',
          name: 'default',
          values: ['Text', '<span>Text</span>', '<sd-icon name="system/image" label="System Image"></sd-icon>'].map(
            content => {
              return {
                value: content,
                title: content.replace('name="system/image"', '...')
              };
            }
          ),
          title: 'content'
        }
      },
      options: { templateContent: '<button class="%CLASSES%" title="Action name">%SLOT%</button>' },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, Inverted, Disabled, Reset, Examples]);
