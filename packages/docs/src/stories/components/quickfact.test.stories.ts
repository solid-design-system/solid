/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import '../../../../components/src/components/quickfact/quickfact';
import { html } from 'lit-html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../../components/scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import cx from 'classix';

const { argTypes, parameters } = storybookDefaults('sd-quickfact');
const { overrideArgs } = storybookHelpers('sd-quickfact');
const { generateTemplate } = storybookTemplate('sd-quickfact');
const { generateScreenshotStory } = storybookUtilities;

/**
 *
 *  **Disclaimer:** Due to a bug with Storybook Controls, the `expandable` attribute controls might not behave as expected. Please refresh the page if you wish to reset the controls.
 *
 *  You can follow this issue here: https://github.com/storybookjs/storybook/issues/28634
 */
export default {
  title: 'Components/sd-quickfact/Screenshots: sd-quickfact',
  tags: ['!autodocs'],
  component: 'sd-quickfact',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' },
    {
      type: 'slot',
      name: 'summary',
      value: `<div slot="summary" class="flex flex-col sm:gap-4"> <p class="text-base font-normal leading-normal  sm:text-4xl sm:leading-tight">Lorem Ipsum</p>
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

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * A quickfact item can either be collapsed or open.
 */
export const States = {
  name: 'States',
  parameters: { controls: { exclude: 'open' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'open' }
      },
      args,
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'attribute', name: 'expandable', value: 'true' }
      ]
    });
  }
};

/**
 * A quickfact item can either be collapsed or open.
 */
export const Expandable = {
  name: 'Expandable',
  parameters: { controls: { exclude: 'expandable' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'expandable' }
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
  name: 'Mobile',
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: { type: 'attribute', name: 'expandable', value: 'true' }
    });
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
  name: 'Summary Length',
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
  name: 'Slots',
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
            { type: 'attribute', name: 'open', value: slot === 'collapse-icon' || slot === 'default' ? true : false },
            { type: 'attribute', name: 'expandable', value: 'true' }
          ],
          args: overrideArgs({ type: 'slot', name: 'default', value: '' }, args)
        })
      )}
    `;
  }
};

export const Parts = {
  name: 'Parts',
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
        { type: 'attribute', name: 'open', value: true },
        { type: 'attribute', name: 'expandable', value: 'true' }
      ],
      args
    });
  }
};

/**
 * sd-quickfacts are fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({ args, constants: { type: 'attribute', name: 'expandable', value: 'true' } })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-quickfact');
    await waitUntil(() => el?.shadowRoot?.querySelector('header'));
    await userEvent.type(el!.shadowRoot!.querySelector('header')!, '{space}', { pointerEventsCheck: 0 });
  }
};

/**
 * This is a sample of how to group sd-quickfacts in a grid layout. Additional JavaScript is used to enable closing all other quickfacts when one is opened and to equalize the height of all summaries in a row. Open the "Show code" section to see the detailed implementation.
 */
export const Sample = {
  name: 'Sample: Grouping',
  parameters: { ...parameters, docs: { story: { inline: false, height: '800px' } } },
  render: () => {
    return html`
      <div>
        <style>
          @media (min-width: 640px) {
            .grouping-sample {
              display: grid;
              grid-template-columns: repeat(auto-fit, 300px);
              grid-auto-flow: dense;
              gap: 1rem;
              justify-content: space-around;
              justify-items: center;
              align-content: space-around;
              align-items: center;
              width: 100%;
            }

            .grouping-sample sd-quickfact::part(content) {
              position: absolute;
              width: 100%;
              left: 0;
            }
          }
        </style>
        <div class="grouping-sample relative">
          <sd-quickfact expandable class="first">
            <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

            <div class="slot slot--border slot--text h-12">Quickfact 1</div>

            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Sed do eiusmod</p>
              <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div>
            </div>
          </sd-quickfact>

          <sd-quickfact expandable class="second">
            <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

            <div class="slot slot--border slot--text h-12">Quickfact 2</div>

            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
              <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur</div>
            </div>
          </sd-quickfact>

          <sd-quickfact expandable class="third">
            <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

            <div class="slot slot--border slot--text h-12">Quickfact 3</div>

            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
              <div class="text-base font-normal leading-normal sm:text-xl">Ut enim ad</div>
            </div>
          </sd-quickfact>
          <sd-quickfact expandable class="fourth">
            <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

            <div class="slot slot--border slot--text h-12">Quickfact 4</div>

            <div slot="summary">
              <p class="text-base font-normal leading-normal sm:text-3xl sm:leading-tight">Ut labore et</p>
              <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur</div>
            </div>
          </sd-quickfact>
        </div>
        <script type="module">
          // Wait for custom elements to be defined
          await Promise.all([customElements.whenDefined('sd-quickfact')]).then(() => {
            const quickfacts = document.querySelectorAll('sd-quickfact');
            let activeRow = null;

            // Closes all other quickfacts when one is opened
            quickfacts.forEach((quickfact, index) => {
              quickfact.addEventListener('sd-show', () => {
                quickfacts.forEach(qf => {
                  if (qf !== quickfact) {
                    qf.hide();
                  }
                });

                activeRow = getRow(quickfact);

                const height = getQuickfactContentHeight(quickfact);

                quickfacts.forEach(qf => {
                  if (getRow(qf) === activeRow) {
                    qf.style.marginBottom = height + 'px';
                  }
                });
              });

              quickfact.addEventListener('sd-hide', () => {
                quickfacts.forEach(qf => {
                  if (getRow(qf) === getRow(quickfact) && getRow(qf) !== activeRow) {
                    qf.style.marginBottom = '0px';
                  }
                });
              });
            });

            function getQuickfactContentHeight(quickfact) {
              const content = quickfact.shadowRoot.querySelector('[part~="content"]');

              // store original styles
              const originalStyles = {
                visibility: content.style.getPropertyValue('visibility'),
                display: content.style.getPropertyValue('display'),
                position: content.style.getPropertyValue('position'),
                height: content.style.getPropertyValue('height')
              };

              content.style.setProperty('visibility', 'hidden');
              content.style.setProperty('display', 'block');
              content.style.setProperty('position', 'absolute');
              content.style.setProperty('height', 'auto');

              const height = content.clientHeight;

              // restore original styles
              content.style.setProperty('visibility', originalStyles.visibility);
              content.style.setProperty('display', originalStyles.display);
              content.style.setProperty('position', originalStyles.position);
              content.style.setProperty('height', originalStyles.height);

              return height;
            }

            function getPositions() {
              const grid = document.querySelector('.grouping-sample');
              const gridComputedStyle = window.getComputedStyle(grid);

              const numberOfRows = gridComputedStyle.getPropertyValue('grid-template-rows').split(' ').length;

              const numberOfColumns = gridComputedStyle.getPropertyValue('grid-template-columns').split(' ').length;
              const positions = [];

              for (let row = 1; row <= numberOfRows; row++) {
                for (let col = 1; col <= numberOfColumns; col++) {
                  positions.push({ row, column: col });
                }
              }

              return { numberOfRows, numberOfColumns, positions };
            }

            // Create a grid map with quickfact and position
            function createGridMap() {
              const gridMap = {};

              const { numberOfRows, numberOfColumns, positions } = getPositions();

              quickfacts.forEach((quickfact, index) => {
                gridMap[index] = { quickfact: quickfact, position: positions[index] };
              });

              return { gridMap, numberOfRows, numberOfColumns };
            }

            // Take a quickfact as input and return the row of the quickfact in the grid
            function getRow(quickfact) {
              const { gridMap, numberOfRows, numberOfColumns } = createGridMap();

              for (const [key, value] of Object.entries(gridMap)) {
                if (value.quickfact === quickfact) {
                  return value.position.row;
                }
              }
            }

            // Resets the height of all summaries to auto. This is useful when the window is resized to mobile view.
            function resetHeights() {
              quickfacts.forEach(quickfact => {
                quickfact.shadowRoot.querySelector('[part~="summary"]').style.setProperty('height', 'auto');
              });
            }

            function equalizeHeights() {
              if (window.innerWidth < 640) {
                resetHeights();
                return;
              }
              const { gridMap, numberOfRows, numberOfColumns } = createGridMap();

              // Equalize heights of summaries on the same row
              for (let x = 1; x <= numberOfRows; x++) {
                const summariesOnRow = [];

                for (const value of Object.values(gridMap)) {
                  if (value.position.row === x) {
                    summariesOnRow.push(value.quickfact.shadowRoot.querySelector('[part~="summary"]'));
                  }
                }

                // Reset height to auto to get the actual height of the element
                summariesOnRow.forEach(summary => {
                  summary.style.setProperty('height', 'auto');
                });

                const maxHeight = Math.max(...Array.from(summariesOnRow).map(summary => summary.clientHeight));

                summariesOnRow.forEach((summary, index) => {
                  summary.style.setProperty('height', maxHeight + 'px');
                });
              }
            }

            equalizeHeights();

            window.addEventListener('resize', equalizeHeights);
          });
        </script>
      </div>
    `;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  States,
  Expandable,
  Mobile,
  SummaryLength,
  Slots,
  Parts,
  Mouseless,
  Sample
]);
