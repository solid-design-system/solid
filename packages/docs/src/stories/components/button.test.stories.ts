/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from 'storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
const { argTypes, parameters } = storybookDefaults('sd-button');
const { overrideArgs } = storybookHelpers('sd-button');
const { generateTemplate } = storybookTemplate('sd-button'); // Replace with your custom element tag
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-button/Screenshots: sd-button',
  component: 'sd-button',
  tags: ['!autodocs'],
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes,
  parameters: {
    ...parameters,
    controls: { disable: true }
  }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const VariantAndSize = {
  name: 'Variant × Size',
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

export const VariantAndInverted = {
  name: 'Variant × Inverted',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['var(--sd-color-white)', 'var(--sd-color-primary)'] }
      }
    });
  }
};

export const Loading = {
  name: 'Loading',
  render: (args: any) => {
    return html`${generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'variant' },
          { type: 'attribute', name: 'size' }
        ],
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      constants: [
        { type: 'attribute', name: 'loading', value: true },
        { type: 'slot', name: 'default', value: 'Loading' }
      ],
      args,
      options: {
        title: 'disabled=false',
        templateBackgrounds: { alternate: 'y', colors: ['var(--sd-color-white)', 'var(--sd-color-primary)'] }
      }
    })}
    ${generateTemplate({
      axis: {
        x: [{ type: 'attribute', name: 'variant' }],
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      constants: [
        { type: 'attribute', name: 'loading', value: true },
        { type: 'attribute', name: 'disabled', value: true },
        { type: 'slot', name: 'default', value: 'Loading' }
      ],
      args,
      options: {
        title: 'disabled=true',
        templateBackgrounds: { alternate: 'y', colors: ['var(--sd-color-white)', 'var(--sd-color-primary)'] }
      }
    })}`;
  }
};

export const Inverted = {
  name: 'Inverted',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'variant' },
          { type: 'attribute', name: 'disabled' },
          { type: 'attribute', name: 'loading' }
        ]
      },
      constants: { type: 'attribute', name: 'inverted', value: true },
      options: { templateBackground: 'var(--sd-color-primary)' },
      args
    });
  }
};

export const Disabled = {
  name: 'Disabled',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'variant' },
          { type: 'attribute', name: 'size' },
          { type: 'attribute', name: 'loading' }
        ],
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      constants: { type: 'attribute', name: 'disabled', value: true },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['var(--sd-color-white)', 'var(--sd-color-primary)'] }
      }
    });
  }
};

export const FullWidth = {
  name: 'Full Width',
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'icon-right',
          values: [
            { value: '', title: '-' },
            {
              value: '<sd-icon name="system/image" slot="icon-right"></sd-icon>',
              title: 'system/image'
            }
          ]
        },
        y: {
          type: 'slot',
          name: 'icon-left',
          values: [
            { value: '', title: '-' },
            {
              value: '<sd-icon name="system/image" slot="icon-left"></sd-icon>',
              title: 'system/image'
            }
          ]
        }
      },
      args,
      constants: { type: 'attribute', name: 'style', value: 'width: 300px;' }
    })
};

export const IconSlots = {
  name: 'Icon Slots',
  render: (args: any) => {
    return html`
      ${['lg', 'md', 'sm'].map(size =>
        // We have to compare different types of icons: "square", "wide" and "tall" ones.
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: 'icon-right',
              values: [
                { value: '', title: '–' },
                {
                  value: '<sd-icon name="system/image" slot="icon-right"></sd-icon>',
                  title: 'system/image'
                },
                {
                  value: '<sd-icon name="system/more-functions" slot="icon-right"></sd-icon>',
                  title: 'system/more-functions'
                },
                {
                  value: '<sd-icon name="system/minus" slot="icon-right"></sd-icon>',
                  title: 'system/minus'
                }
              ]
            },
            y: {
              type: 'slot',
              name: 'icon-left',
              values: [
                { value: '', title: '–' },
                {
                  value: '<sd-icon name="system/image" slot="icon-left"></sd-icon>',
                  title: 'system/image'
                },
                {
                  value: '<sd-icon name="system/more-functions" slot="icon-left"></sd-icon>',
                  title: 'system/more-functions'
                },
                {
                  value: '<sd-icon name="system/minus" slot="icon-left"></sd-icon>',
                  title: 'system/minus'
                }
              ]
            }
          },
          constants: [{ type: 'attribute', name: 'size', value: size }],
          args,
          options: { title: `size="${size}"` }
        })
      )}
    `;
  }
};

export const IconOnly = {
  name: 'Icon Only',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'size' }
      },
      constants: {
        type: 'slot',
        name: 'default',
        value: '<sd-icon name="system/image" label="Icon Button"></sd-icon>'
      },
      args
    });
  }
};

export const Multiline = {
  name: 'Multiline',
  render: (args: any) => {
    return html`<div class="flex flex-col gap-2 max-w-md">
      ${generateTemplate({
        axis: {
          x: [{ type: 'attribute', name: 'size', values: ['lg', 'md', 'sm'] }],
          y: {
            type: 'slot',
            name: 'icon-right',
            values: [
              { value: '', title: '-' },
              {
                value: '<sd-icon name="system/image" slot="icon-right"></sd-icon>',
                title: 'icon-right'
              },
              {
                value: '<sd-icon name="system/image" slot="icon-left"></sd-icon>',
                title: 'icon-left'
              },
              {
                value:
                  '<sd-icon name="system/image" slot="icon-right"></sd-icon><sd-icon name="system/image" slot="icon-left"></sd-icon>',
                title: 'both'
              }
            ]
          }
        },
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: 'Lorem ipsum dolor sit amet.'
          }
        ],
        args
      })}
    </div>`;
  }
};

export const Parts = {
  name: 'Parts (Debug)',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-button::part(...){outline: solid 2px red}',
          values: ['base', 'label', 'icon-left', 'icon-right'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-button::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        {
          type: 'slot',
          name: 'icon-right',
          value: '<sd-icon name="system/image" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon name="system/image" slot="icon-left"></sd-icon>'
        }
      ],
      args
    });
  }
};

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    // We have to catch the event as otherwise Storybook will break
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

export const Combination = generateScreenshotStory([
  Default,
  VariantAndSize,
  VariantAndInverted,
  Loading,
  Inverted,
  Disabled,
  IconSlots,
  IconOnly,
  Multiline,
  Parts,
  Mouseless
]);
