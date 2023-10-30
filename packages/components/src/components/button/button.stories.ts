/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
const { argTypes, parameters } = storybookDefaults('sd-button');
const { overrideArgs } = storybookHelpers('sd-button');
const { generateTemplate } = storybookTemplate('sd-button'); // Replace with your custom element tag

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fPGhgNZv98U4H69Gu2tlWi/Button?type=design&node-id=13-18&t=jDLqFEdY7ZlOJurc-4'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes,
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The button in all possible combinations of `variant` and `size`.
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
 * The button in all possible combinations of `variant` and `inverted`.
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
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      }
    });
  }
};

/**
 * Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.
 */

export const Loading = {
  parameters: { controls: { exclude: ['variant', 'size', 'disabled', 'loading', 'inverted'] } },
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

/**
 * Use the `inverted` attribute to make a button with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['variant', 'disabled', 'loading'] } },
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

/**
 * Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.
 */

export const Disabled = {
  parameters: { controls: { exclude: ['variant', 'size', 'disabled', 'loading', 'inverted'] } },
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

/**
 * Use the `icon-left` and `icon-right` slots to add icons.
 */

export const IconSlots = {
  parameters: { controls: { exclude: ['size', 'default', 'icon-left', 'icon-right'] } },
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

/**
 * When inserting an `<sd-icon>` into the default slot, the button will be rendered as an icon-only button.
 */

export const IconOnly = {
  name: 'Icon Only',
  parameters: { controls: { exclude: ['size', 'inverted'] } },
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

/**
 * Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.
 */

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'label', 'icon-left', 'icon-right'] }
  },
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

/**
 * sd-buttons are fully accessibile via keyboard.
 */

export const Mouseless = {
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

/**
 * Here are some examples of sd-button working with sd-badge.
 */
export const Samples = {
  render: () => {
    const iconLeft = html`<sd-icon slot="icon-left" library="global-resources" name="system/picture"></sd-icon>`;
    const iconOnly = html`<sd-icon library="global-resources" name="system/picture"></sd-icon>`;

    return html`
      <style>
        .story-wrapper {
          display: inline-block;
          max-width: 1200px;
        }
        .headline {
          padding: 16px;
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
          font-weight: bold;
          width: 100%;
          box-sizing: border-box;
        }
        div:not(:first-of-type).headline {
          margin-top: 72px;
        }
      </style>
      <div class="story-wrapper">
        <div class="headline">sd-button with sd-badge</div>
        <div class="flex flex-col justify-around gap-8 h-40 w-min m-4">
          <section class="flex p-4 gap-10 items-center">
            <sd-button>Label <sd-badge>8</sd-badge></sd-button>
            <sd-button>Label <sd-badge variant="success">999+</sd-badge></sd-button>
            <sd-button variant="secondary" size="md"> ${iconLeft}Label<sd-badge>8</sd-badge></sd-button>
            <sd-button variant="secondary" size="md"
              >${iconOnly}<sd-badge variant="success" size="md">8</sd-badge></sd-button
            >

            <sd-button variant="tertiary" size="md">
              ${iconOnly}
              <sd-badge class="mt-2.5 mr-2.5" variant="error" size="md">8</sd-badge>
            </sd-button>

            <sd-button variant="tertiary" size="md">
              ${iconOnly}
              <sd-badge class="mt-[0.75rem] mr-[0.75rem]" size="sm"></sd-badge>
            </sd-button>
          </section>

          <section class="flex p-4 gap-10 bg-primary items-center">
            <sd-button inverted>Label <sd-badge inverted>8</sd-badge></sd-button>
            <sd-button inverted>Label <sd-badge inverted variant="success">999+</sd-badge></sd-button>
            <sd-button inverted variant="secondary" size="md">
              ${iconLeft}Label<sd-badge inverted>8</sd-badge></sd-button
            >
            <sd-button inverted variant="secondary" size="md"
              >${iconOnly}<sd-badge inverted variant="success" size="md">8</sd-badge></sd-button
            >

            <sd-button inverted variant="tertiary" size="md">
              ${iconOnly}
              <sd-badge inverted class="mt-2.5 mr-2.5" variant="error" size="md">8</sd-badge>
            </sd-button>

            <sd-button inverted variant="tertiary" size="md">
              ${iconOnly}
              <sd-badge inverted class="mt-[0.75rem] mr-[0.75rem]" size="sm"></sd-badge>
            </sd-button>
          </section>
        </div>
      </div>
    `;
  }
};
