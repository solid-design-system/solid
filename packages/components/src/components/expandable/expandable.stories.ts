import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-expandable');
const { overrideArgs } = storybookHelpers('sd-expandable');
const { generateTemplate } = storybookTemplate('sd-expandable');

export default {
  title: 'Components/sd-expandable',
  component: 'sd-expandable',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Expandable shows a brief summary and expands to show additional content.
 */
export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the inverted attribute to make an expandable with inverted colors.
 */
export const Inverted = {
  parameters: { controls: { exclude: 'inverted' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'inverted' }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['rgb(var(--sd-color-primary, 0 53 142))', 'white'] }
      }
    });
  }
};

/**
 * Expandable can be used with background options of white, neutral-100 and primary-100. When using these options, use the `--gradient-color-start` and `--gradient-color-end` CSS variables to align the gradient colors.
 *
 * The inverted attribute can be used when the background is primary. The default slot can be used with 2 variants for alternate expandable experiences: lead text and paragraph.
 */
export const Samples = {
  render: (args: any) => {
    return html`
      <style>
        .background-sample {
          padding: 16px;
          margin-bottom: 32px;
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <div class="p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">Background white</div>
      <div class="background-sample">
        ${generateTemplate({
          args: { ...args }
        })}
      </div>
      <div class="w-full p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">
        Background neutral-100
      </div>
      <div class="background-sample bg-neutral-100">
        ${generateTemplate({
          args: { ...args },
          constants: [
            {
              type: 'cssProperty',
              name: '--gradient-color-start',
              value: 'rgba(246, 246, 246, 0)'
            },
            {
              type: 'cssProperty',
              name: '--gradient-color-end',
              value: 'rgba(246, 246, 246, 1)'
            }
          ]
        })}
      </div>
      <div class="w-full p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">
        Background primary-100
      </div>
      <div class="background-sample bg-primary-100">
        ${generateTemplate({
          args: { ...args },
          constants: [
            {
              type: 'cssProperty',
              name: '--gradient-color-start',
              value: 'rgba(236, 240, 249, 0)'
            },
            {
              type: 'cssProperty',
              name: '--gradient-color-end',
              value: 'rgba(236, 240, 249, 1)'
            }
          ]
        })}
      </div>
      <div class="w-full p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">
        Background primary, inverted
      </div>
      <div class="background-sample bg-primary">
        ${generateTemplate({
          args: { ...args, inverted: true }
        })}
      </div>
      <div class="w-full p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">Lead Text Example</div>
      <div class="background-sample bg-neutral-100 ">
        ${generateTemplate({
          args: overrideArgs([
            {
              type: 'slot',
              name: 'default',
              value:
                '<div class="sd-leadtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.</div>'
            },
            {
              type: 'attribute',
              name: 'variant',
              value: 'leadtext'
            },
            {
              type: 'cssProperty',
              name: '--gradient-color-start',
              value: 'rgba(246, 246, 246, 0)'
            },
            {
              type: 'cssProperty',
              name: '--gradient-color-end',
              value: 'rgba(246, 246, 246, 1)'
            }
          ])
        })}
      </div>
      <div class="w-full p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">Paragraph Example</div>
      <div class="background-sample bg-neutral-100 ">
        ${generateTemplate({
          args: overrideArgs([
            {
              type: 'slot',
              name: 'default',
              value:
                '<div class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.</div>'
            },
            {
              type: 'cssProperty',
              name: '--gradient-color-start',
              value: 'rgba(246, 246, 246, 0)'
            },
            {
              type: 'cssProperty',
              name: '--gradient-color-end',
              value: 'rgba(246, 246, 246, 1)'
            }
          ])
        })}
      </div>
    `;
  }
};

/**
 * sd-expandable is fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-expandable');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};
