import '../../solid-components';
import { html } from 'lit';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-flag');
const { overrideArgs } = storybookHelpers('sd-flag');
const { generateTemplate } = storybookTemplate('sd-flag');

/**
 * A small, non-interactive label the represents a category.
 *
 * <b>Variants</b><br>
 * <li>white is the default variant.</li>
 */

export default {
  title: 'Styles/sd-flag',
  component: 'sd-flag',
  parameters: {
    ...parameters
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Lorem Ipsum' }]),
  argTypes,
  decorators: [
    (story: any) =>
      html` <style>
          #root-inner {
            background-color: rgb(242 242 242);
          }
        </style>
        ${story()}`
  ]
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: '<span class="%CLASSES%">%SLOT%</span>'
        // templateBackground: 'rgb(var(--sd-color-neutral-200, 242 242 242))'
      },
      args
    });
  }
};

export const Variants = {
  name: 'Variants',
  parameters: {
    controls: {
      exclude: ['sd-flag--size-neutral-200', 'sd-flag--size-neutral-300', 'sd-flag--size-neutral-500']
    }
  },
  render: (args: any) => {
    return html` ${[
      {
        title: '',
        constant: `Lorem ipsum`
      }
    ].map(flag =>
      generateTemplate({
        axis: {
          y: [
            {
              type: 'attribute',
              name: 'Variant',
              values: ['sd-flag--neutral-200', 'sd-flag--neutral-300', 'sd-flag--neutral-500']
            }
          ]
        },
        constants: {
          type: 'slot',
          name: 'default',
          value: `${flag.constant}`
        },
        options: {
          // templateBackground: 'rgb(var(--sd-color-neutral-200, 242 242 242))',
          title: `${flag.title}`
        },
        args
      })
    )}`;
  }
};
