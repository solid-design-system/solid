import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-quickfact');
const { overrideArgs } = storybookHelpers('sd-quickfact');
const { generateTemplate } = storybookTemplate('sd-quickfact');
import '../../styles/display/display.css';
import '../../styles/leadtext/leadtext.css';
import '../../styles/paragraph/paragraph.css';
import { html } from 'lit';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Components/sd-quickfact',
  component: 'sd-quickfact',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Default slot</div>`
    },
    {
      type: 'slot',
      name: 'summary',
      value: `<div slot="summary"> <p class="text-base font-normal leading-normal  sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
            <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div></div>`
    }
  ]),

  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};
/**
 * This shows sd-quickfact in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * This shows sd-quickfact is displayed differently depending on whether or not the default slot is filled.
 */

export const OpenXContent = {
  name: 'Open x Content',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'slot',
          name: 'default',
          values: [
            {
              title: 'with content',
              value: `<div class="slot slot--border slot--text h-12">Default slot</div>`
            },
            {
              title: 'without content',
              value: ''
            }
          ]
        },
        x: {
          type: 'attribute',
          name: 'open',
          values: [false, true]
        }
      },
      args
    });
  }
};

/**
 * This shows sd-quickfact in a mobile view. **Please navigate to the `Mobile` story** (you are now on the `Docs` page) to accurately view this behavior.
 */

export const Mobile = {
  render: (args: any) => {
    return generateTemplate({ args });
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6'
    }
  }
};

/**
 * Use the 'base', 'summary-container', 'content', and 'button' parts to style the sd-quickfact component.
 */
export const Parts = {
  parameters: {
    controls: {
      exclude: ['base', 'summary-container', 'content', 'button']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-quickfact::part(...){outline: solid 2px red}',
          values: ['base', 'summary-container', 'content', 'button'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-quickfact::part(${part}){outline: solid 2px red; outline-offset: -2px;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: [
        {
          type: 'attribute',
          name: 'open',
          value: true
        }
      ]
    });
  }
};

/**
 * Use the `default`, `icon`, `summary`, `expand-icon` and `collapse-icon` slots to add content to the step..
 */

export const Slots = {
  parameters: {
    controls: { exclude: ['default', 'icon', 'summary', 'expand-icon', 'collapse-icon'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'icon', 'summary', 'expand-icon', 'collapse-icon'].map(slot =>
        generateTemplate({
          axis: {
            y: {
              type: 'slot',
              name: slot,
              title: 'slot=..',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--border slot--background h-12"></div>`
                      : `<div slot='${slot}' class="slot slot--border slot--background min-w-6 h-12"></div>`,
                  title: slot
                }
              ]
            }
          },
          args,
          constants: [
            {
              type: 'attribute',
              name: 'open',
              value: true
            }
          ]
        })
      )}
    `;
  }
};

/**
 * sd-quickfacts are fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-quickfact');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    // We have to catch the event as otherwise Storybook will break
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

/**
 * This sample shows how to group sd-quickfacts together. It also includes a script that closes all other quickfacts when one is opened. Additionally, it uses the `content` CSS part to position the default slot to cover the entire width of the group.
 */

export const Sample = {
  name: 'Sample: Grouping',
  render: () => {
    return html`
      <div>
        <style>
          .grouping-sample sd-quickfact::part(content) {
            position: absolute;
            width: 100%;
            left: 0;
          }
        </style>

        <div class="grouping-sample w-full flex relative justify-between">
          <sd-quickfact class="first">
            <div class="slot slot--border slot--text h-12">Quickfact 1</div>
            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
              <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div>
            </div>
          </sd-quickfact>

          <sd-quickfact class="second">
            <div class="slot slot--border slot--text h-12">Quickfact 2</div>
            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
              <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div>
            </div>
          </sd-quickfact>

          <sd-quickfact class="third">
            <div class="slot slot--border slot--text h-12">Quickfact 3</div>
            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
              <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div>
            </div>
          </sd-quickfact>
        </div>
        <script type="module">
          // Closes all other quickfacts when one is opened
          const quickfacts = document.querySelectorAll('sd-quickfact');

          quickfacts.forEach(quickfact => {
            quickfact.addEventListener('sd-show', () => {
              quickfacts.forEach(qf => {
                if (qf !== quickfact) {
                  qf.hide();
                }
              });
            });
          });
        </script>
      </div>
    `;
  }
};
