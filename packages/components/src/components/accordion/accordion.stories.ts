/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import cx from 'classix';

const { argTypes, parameters } = storybookDefaults('sd-accordion');
const { overrideArgs } = storybookHelpers('sd-accordion');
const { generateTemplate } = storybookTemplate('sd-accordion');

export default {
  title: 'Components/sd-accordion',
  component: 'sd-accordion',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' },
    { type: 'attribute', name: 'summary', value: 'Accordion' }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Accordion shows a brief summary and expands to show additional content.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * An accordion item can either be collapsed or open.
 */
export const States = {
  parameters: { controls: { exclude: 'open' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'open' }
      },
      args,
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
    });
  }
};

/**
 * The summary can have multiple lines.
 */
export const SummaryLength = {
  parameters: { controls: { exclude: 'summary' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'slot',
          name: 'summary',
          values: [
            { value: '<slot slot="summary">Lorem ipsum.</slot>', title: 'short' },
            {
              value:
                '<slot slot="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</slot>',
              title: 'long'
            }
          ]
        }
      },
      args,
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'slot', name: 'summary', value: '<div slot="summary" class="slot slot--text">Test</div>`' }
      ]
    });
  }
};

/**
 * Use the expand-icon and collapse-icon slots to change the expand and collapse icons, respectively.
 * To disable the animation, override the rotate property on the summary-icon part as shown below:
 *
 * ```
 * sd-accordion.custom-icons::part(summary-icon) {
 *   rotate: none;
 * }
 * ```
 */

export const Slots = {
  parameters: {
    controls: { exclude: ['expand-icon', 'collapse-icon', 'default', 'summary'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'summary', 'expand-icon', 'collapse-icon'].map(slot =>
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
                      ? `<div class="slot slot--border slot--background slot--text h-16">Default slot</div>`
                      : `<div slot='${slot}' class="${cx(
                          'slot slot--border slot--background h-6',
                          slot === 'summary' ? 'w-[100%]' : 'w-6'
                        )}"></div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
            { type: 'attribute', name: 'open', value: slot === 'collapse-icon' || slot === 'default' ? true : false }
          ],
          args: overrideArgs({ type: 'slot', name: 'default', value: '' }, args)
        })
      )}
    `;
  }
};

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'header', 'summary', 'summary-icon', 'summary-border', 'content', 'content__slot'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-accordion::part(...){outline: solid 2px red}',
          values: ['base', 'header', 'summary', 'summary-icon', 'summary-border', 'content', 'content__slot'].map(
            part => {
              const outlineOffset = part === 'summary-border' ? '' : 'outline-offset: -2px';
              return {
                title: part,
                // Added an outline-offset to make the outline visible for content__slot
                value: `<style>#part-${part} sd-accordion::part(${part}){outline: solid 2px red; ${outlineOffset};}</style><div id="part-${part}">%TEMPLATE%</div>`
              };
            }
          )
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'attribute', name: 'open', value: true }
      ],
      args
    });
  }
};

/**
 * sd-accordions are fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-accordion');
    await waitUntil(() => el?.shadowRoot?.querySelector('header'));
    await userEvent.type(el!.shadowRoot!.querySelector('header')!, '{space}', { pointerEventsCheck: 0 });
  }
};
