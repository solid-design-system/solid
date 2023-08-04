/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-badge');
const { overrideArgs } = storybookHelpers('sd-badge');
const { generateTemplate } = storybookTemplate('sd-badge'); // Replace with your custom element tag

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fPGhgNZv98U4H69Gu2tlWi/Button?type=design&node-id=13-18&t=jDLqFEdY7ZlOJurc-4'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: '8' }]),
  argTypes,
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-badge in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The badge in all possible combinations of `variant` and `inverted`.
 */

export const VariantAndInverted = {
  name: 'Variant × Inverted',
  parameters: { controls: { exclude: ['variant', 'inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    });
  }
};

/**
 * The badge in all possible combinations of `variant` and `size`.
 */

export const VariantAndSize = {
  name: 'Variant × Size',
  parameters: { controls: { exclude: ['variant', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * The badge in all possible combinations of `variant` and `size`.
 */

export const Overflown = {
  name: 'Variant × Size (Overflowing)',
  parameters: { controls: { exclude: ['variant', 'size', 'overflowing'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'size' }
      },
      constants: [{ type: 'attribute', name: 'overflowing', value: true }],
      args
    });
  }
};

/**
 * Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.
 */

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'content', 'overflow-indicator', 'size', 'overflowing'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-badge::part(...){outline: solid 2px red}',
          values: ['base', 'content', 'overflow-indicator'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-badge::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'slot', name: 'default', value: '<span class="content">8</span>' },
        {
          type: 'slot',
          name: 'overflow-indicator',
          value: '<span class="overflow-indicator" slot="overflow-indicator">+</span>'
        },
        { type: 'attribute', name: 'overflowing', value: true }
      ],
      args
    });
  }
};

/**
 *
 */
export const Slots = {
  parameters: {
    controls: { exclude: ['default', 'overflow-indicator', 'size', 'overflowing'] }
  },
  decorators: [
    (story: any) =>
      html`<style>
          .slot-highlight {
            --slot-content: '8';
            color: white;
            border-radius: 6px;
            border-color: red;
            border-width: 2px;
            border-style: solid;
            --slot-height: 100%;
            --slot-width: 100%;
          }
        </style>
        <div style="zoom: 1.25;">${story()}</div>`
  ],
  render: (args: any) => {
    return html`
      ${['default'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=...',
              values: [
                {
                  value: `<span class="slot-highlight">8</span>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            { type: 'template', name: 'width', value: '<div style="width: 100px">%TEMPLATE%</div>' },
            { type: 'attribute', name: 'overflowing', value: true }
          ],
          args
        })
      )}
    `;
  }
};

/**
 * Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.
 */

export const ButtonAndBadge = {
  name: 'Variant × Size with Button',
  parameters: { controls: { exclude: ['variant', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'size' }
      },
      constants: [
        { type: 'template', name: 'button', value: '<sd-button>Default%TEMPLATE%</sd-button>' },
        { type: 'attribute', name: 'slot', value: 'icon-right' }
      ],
      args
    });
  }
};
