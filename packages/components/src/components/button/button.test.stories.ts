/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
const { argTypes, parameters } = storybookDefaults('sd-button');
const { overrideArgs } = storybookHelpers('sd-button');
const { generateTemplate } = storybookTemplate('sd-button'); // Replace with your custom element tag
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-button/Test',
  component: 'sd-button',
  tags: ['!autodocs'],
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes,
  parameters: {
    ...parameters,
    controls: { include: [] }
  },
  decorators: [withActions] as any
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
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
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
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
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
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
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
      options: { templateBackground: 'rgb(var(--sd-color-primary, 0 53 142))' },
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
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      }
    });
  }
};

export const IconSlots = {
  name: 'Icon Slots',
  render: (args: any) => {
    return html`
      ${['sm', 'md', 'lg'].map(size =>
        // We have to compare different types of icons: "square", "wide" and "tall" ones.
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: 'icon-right',
              values: [
                { value: '', title: '–' },
                {
                  value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
                  title: 'system/picture'
                },
                {
                  value:
                    '<sd-icon library="global-resources" name="system/multi-functions" slot="icon-right"></sd-icon>',
                  title: 'system/multi-functions'
                },
                {
                  value: '<sd-icon library="global-resources" name="system/minus" slot="icon-right"></sd-icon>',
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
                  value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',
                  title: 'system/picture'
                },
                {
                  value:
                    '<sd-icon library="global-resources" name="system/multi-functions" slot="icon-left"></sd-icon>',
                  title: 'system/multi-functions'
                },
                {
                  value: '<sd-icon library="global-resources" name="system/minus" slot="icon-left"></sd-icon>',
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
        value: '<sd-icon library="global-resources" name="system/picture"></sd-icon>'
      },
      args
    });
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
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'
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

export const Screenshots = generateScreenshotStory([
  Default,
  VariantAndSize,
  VariantAndInverted,
  Loading,
  Inverted,
  Disabled,
  IconSlots,
  IconOnly,
  Parts,
  Mouseless
]);
