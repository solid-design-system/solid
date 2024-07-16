/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import cx from 'classix';

const { argTypes, parameters } = storybookDefaults('sd-quickfact');
const { overrideArgs } = storybookHelpers('sd-quickfact');
const { generateTemplate } = storybookTemplate('sd-quickfact');

export default {
  title: 'Components/sd-quickfact',
  component: 'sd-quickfact',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' },
    {
      type: 'slot',
      name: 'summary',
      value: `<div slot="summary"> <p class="text-base font-normal leading-normal  sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
            <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div></div>`
    },
    {
      type: 'slot',
      name: 'icon',
      value: `<sd-icon
      name="content/image"
      color="primary"
      aria-hidden="true"
      library="default"
      slot="icon"
    ></sd-icon>`
    }
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
 * An quickfact item can either be collapsed or open.
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
 * An quickfact item can either be collapsed or open.
 */
export const notInteractive = {
  parameters: { controls: { exclude: 'not-interactive' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'not-interactive' }
      },
      args,
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
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
 * sd-quickfact.custom-icons::part(summary-icon) {
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
          name: 'sd-quickfact::part(...){outline: solid 2px red}',
          values: ['base', 'header', 'summary', 'summary-icon', 'summary-border', 'content', 'content__slot'].map(
            part => {
              const outlineOffset = part === 'summary-border' ? '' : 'outline-offset: -2px';
              return {
                title: part,
                // Added an outline-offset to make the outline visible for content__slot
                value: `<style>#part-${part} sd-quickfact::part(${part}){outline: solid 2px red; ${outlineOffset};}</style><div id="part-${part}">%TEMPLATE%</div>`
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
 * sd-quickfacts are fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-quickfact');
    await waitUntil(() => el?.shadowRoot?.querySelector('header'));
    await userEvent.type(el!.shadowRoot!.querySelector('header')!, '{space}', { pointerEventsCheck: 0 });
  }
};

export const Sample = {
  name: 'Sample: Grouping',
  parameters: { ...parameters, docs: { story: { inline: false, height: '1000px' } } },
  render: () => {
    return html`
      <div>
        <style>
          @media (min-width: 640px) {
            .grouping-sample {
              display: grid;
              grid-template-columns: repeat(auto-fill, 300px);
              gap: 1rem;
              justify-content: space-evenly;
              justify-items: center;
              align-content: space-evenly;
              align-items: center;
            }

            .grouping-sample sd-quickfact::part(content) {
              position: absolute;
              width: 100%;
              left: 0;
              top: 100%;
            }
          }
        </style>
        <div class="grouping-sample relative">
          <sd-quickfact class="first">
            <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

            <div class="slot slot--border slot--text h-12">Quickfact 1</div>

            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">
                Con sectetur adipiscing elit Con sectetur
              </p>
              <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div>
            </div>
          </sd-quickfact>

          <sd-quickfact class="second">
            <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

            <div class="slot slot--border slot--text h-12">Quickfact 2</div>

            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
              <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div>
            </div>
          </sd-quickfact>

          <sd-quickfact class="third">
            <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

            <div class="slot slot--border slot--text h-12">Quickfact 3</div>

            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
              <div class="text-base font-normal leading-normal sm:text-xl">coocoo</div>
            </div>
          </sd-quickfact>
        </div>
        <script type="module">
          // Wait for custom elements to be defined
          await Promise.all([customElements.whenDefined('sd-quickfact')]).then(() => {
            const quickfacts = document.querySelectorAll('sd-quickfact');
            let rows = 0;
            const summaries = [];
            let summaryHeights = [];

            // Closes all other quickfacts when one is opened
            quickfacts.forEach(quickfact => {
              quickfact.addEventListener('sd-show', () => {
                quickfacts.forEach(qf => {
                  if (qf !== quickfact) {
                    qf.hide();
                  }
                });
              });

              // summaries.push(quickfact.shadowRoot.querySelector('[part~="summary"]'));
            });

            const maxHeight = Math.max(...Array.from(summaries).map(summary => summary.clientHeight));
            let summaryHeights = Array.from(summaries).map(summary => summary.clientHeight);


            summaries.forEach(summary => {
              summary.style.height = heightAsString;
            });

            const grid = document.querySelector('.grouping-sample');
            const gridComputedStyle = window.getComputedStyle(grid);

            // get number of grid rows
            const gridRowCount = gridComputedStyle.getPropertyValue('grid-template-rows').split(' ').length;

            // get number of grid columns
            const numberOfColumns = gridComputedStyle.getPropertyValue('grid-template-columns').split(' ').length;

            console.log(gridRowCount, numberOfColumns);



            function getHeadlineHeights(rowLength: number): number[][] {
              let summaryHeights = Array.from(summaries).map(summary => summary.clientHeight);

            return quickfacts
              .map((e) => e.shadowRoot.querySelector('.headline').offsetHeight)
              .reduce((aggr, current, i) => {
                aggr[(i - (i % rowLength)) / rowLength] = [
                  ...(aggr[(i - (i % rowLength)) / rowLength] || []),
                  current,
                ];
                return aggr;
              }, []);
          }


            function getMaxHeadlineHeightForRow(rowIndex: number) {
            return Math.max(getHeadlineHeights(numberOfColumns)[rowIndex]);
          }

            function getRowForQuickfact(quickfact): number {
            return (
              (quickfacts.indexOf(quickfact) -
                (quickfacts.indexOf(quickfact) % numberOfColumns)) / numberOfColumns
            );
          }
          });
        </script>
      </div>
    `;
  }
};
