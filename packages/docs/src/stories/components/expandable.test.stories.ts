import '../../../../components/src/solid-components';
import { html } from 'lit';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../../components/scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-expandable');
const { overrideArgs } = storybookHelpers('sd-expandable');
const { generateTemplate } = storybookTemplate('sd-expandable');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-expandable/Screenshots: sd-expandable',
  tags: ['!autodocs'],
  component: 'sd-expandable',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Used to show a brief summary and expands to show additional content
 */
export const Default = {
  name: 'Default',
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
  name: 'Inverted',
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
 * Use the `default`, `toggle-open` and `toggle-closed` slots to add content to the expandable.
 */
export const Slots = {
  name: 'Slots',
  parameters: {
    controls: { exclude: ['default', 'toggle-open', 'toggle-closed'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'toggle-open', 'toggle-closed'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=...',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--border slot--background slot--text h-full">Default slot</div>`
                      : `<div slot='${slot}' class="slot slot--border slot--background slot--text h-12"></div>`,
                  title: slot
                }
              ]
            }
          },
          args
        })
      )}
    `;
  }
};

/**
 * Use the `content`, `toggle`, `summary` and `details` parts to style the expandable.
 */
export const Parts = {
  name: 'Parts',
  parameters: {
    controls: {
      exclude: ['open', 'content', 'toggle', 'summary', 'details']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-expandable::part(...){outline: solid 2px red}',
          values: ['content', 'toggle', 'summary', 'details'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-expandable::part(${part}){outline: solid 2px red; outline-offset: -2px;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args
    });
  }
};

/**
 * sd-expandable is fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-expandable');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

/**
 * Expandable can be used with background options of white, neutral-100 and primary-100. When using these options, use the `--gradient-color-start` and `--gradient-color-end` CSS variables to align the gradient colors.
 *
 * The inverted attribute can be used when the background is primary. The default slot can be used with 2 variants for alternate expandable experiences: lead text and paragraph.
 */
export const Samples = {
  name: 'Samples',
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

export const Combination = generateScreenshotStory([Default, Inverted, Slots, Parts, Samples, Mouseless]);
