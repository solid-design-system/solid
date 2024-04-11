import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-tab-group');
const { overrideArgs } = storybookHelpers('sd-tab-group');
const { generateTemplate } = storybookTemplate('sd-tab-group');
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';

function generateTabsAndPanels(
  startIndex: number,
  endIndex: number,
  variant: 'default' | 'container' = 'default'
): string {
  let result = '';
  for (let i = startIndex; i <= endIndex; i++) {
    result += `
      <sd-tab slot="nav" panel="tab-${i}" variant=${variant}>Tab ${i}</sd-tab>
      <sd-tab-panel name="tab-${i}"><div class="slot slot--text slot--border"> Tab panel ${i}</div></sd-tab-panel>`;
  }
  return result;
}

export default {
  title: 'Components/sd-tab-group',
  component: 'sd-tab-group',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: generateTabsAndPanels(1, 5)
  }),
  argTypes,
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          display: block !important;
          width: 500px;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * Default: This shows sd-tab-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The sd-tab-group shows an alternative style when tabs are of the `container` variant.
 */
export const TabVariants = {
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          y: {
            type: 'slot',
            title: 'sd-tab[variant="..."]',
            name: 'default',
            values: [
              { title: 'default', value: generateTabsAndPanels(1, 5) },
              { title: 'container', value: generateTabsAndPanels(1, 5, 'container') }
            ]
          }
        },
        args
      })}
    `;
  }
};

/**
 * The sd-tab-group becomes scrollable when there are more tabs than horizontal space allows.
 */

export const Scrollable = {
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          y: {
            type: 'slot',
            name: 'default',
            values: [
              { title: 'default', value: generateTabsAndPanels(1, 10) },
              { title: 'container', value: generateTabsAndPanels(1, 10, 'container') }
            ]
          }
        },
        args
      })}
    `;
  }
};

export const Parts = {
  parameters: {
    controls: {
      exclude: ['base', 'nav', 'tabs', 'separation', 'body', 'scroll-button--start', 'scroll-button--end']
    }
  },
  render: (args: any) => {
    return html`
      ${['base', 'nav', 'tabs', 'separation', 'body', 'scroll-button--start', 'scroll-button--end'].map(part =>
        generateTemplate({
          axis: {
            x: {
              type: 'template',
              name: 'sd-tab-group::part(...){outline: solid 2px red}',
              values: [
                {
                  title: part,
                  value: `<style>#part-${part} sd-tab-group::part(${part}){outline: solid 2px red; ${
                    part === 'tabs' && 'outline-offset:-2px;'
                  }}</style><div id="part-${part}">%TEMPLATE%</div>`
                }
              ]
            }
          },
          constants: [
            {
              type: 'template',
              name: 'width',
              value: `
                <div style="width: 600px; position: relative;">%TEMPLATE%
                </div>
              `
            },
            {
              type: 'slot',
              name: 'default',
              value: generateTabsAndPanels(1, 30)
            }
          ],
          args
        })
      )}
    `;
  }
};

/**
 * `sd-tab-group` is fully accessibile via keyboard.
 */

export const Mouseless = {
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: generateTabsAndPanels(1, 50)
  }),
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-tab-group');

    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    // We have to catch the event as otherwise Storybook will break
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

/**
 * As an option, users can justify the `sd-tab-group` to the center. To implement this sample, adjust the `tabs` CSS part as follows:
 * 
 * ```css
 * 
 *   sd-tab-group::part(tabs) {
          justify-content: center;
        }

  * ```
 */

export const SampleCentered = {
  parameters: { ...parameters, docs: { story: { inline: false, height: '550px' } } },
  name: 'Sample: Centered',
  render: () => {
    return html`
      <style>
        sd-tab-group::part(tabs) {
          justify-content: center;
        }
      </style>
      <div class="p-4 my-6 bg-neutral-200 text-left font-bold text-sm w-full box-border">Default Variant</div>
      <sd-tab-group>
        <sd-tab slot="nav" panel="tab-1">Tab 1</sd-tab>
        <sd-tab slot="nav" panel="tab-2">Tab 2</sd-tab>
        <sd-tab slot="nav" panel="tab-3" disabled>Tab 3</sd-tab>
        <sd-tab slot="nav" panel="tab-4">Tab 4</sd-tab>
        <sd-tab slot="nav" panel="tab-5">Tab 5</sd-tab>
        <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border">Tab panel 1</div></sd-tab-panel>
        <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div></sd-tab-panel>
        <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border">Tab panel 3</div></sd-tab-panel>
        <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border">Tab panel 4</div></sd-tab-panel>
        <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border">Tab panel 5</div></sd-tab-panel>
      </sd-tab-group>

      <div class="p-4 mb-6 bg-neutral-200 text-left font-bold text-sm w-full box-border">Container Variant</div>

      <sd-tab-group>
        <sd-tab slot="nav" variant="container" panel="tab-1">Tab 1</sd-tab>
        <sd-tab slot="nav" variant="container" panel="tab-2">Tab 2</sd-tab>
        <sd-tab slot="nav" variant="container" panel="tab-3" disabled>Tab 3</sd-tab>
        <sd-tab slot="nav" variant="container" panel="tab-4">Tab 4</sd-tab>
        <sd-tab slot="nav" variant="container" panel="tab-5">Tab 5</sd-tab>
        <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border">Tab panel 1</div></sd-tab-panel>
        <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div></sd-tab-panel>
        <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border">Tab panel 3</div></sd-tab-panel>
        <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border">Tab panel 4</div></sd-tab-panel>
        <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border">Tab panel 5</div></sd-tab-panel>
      </sd-tab-group>
    `;
  }
};

/**
 * As an option, users can remove the line separating the tablist and the `sd-panel`. To implement this sample, apply the following adjustments to the `separation`, `base`, `scroll-button--start` and `scroll-button--end` CSS parts:
 * 
 * ```css
 * 
 * sd-tab-group::part(separation) {
          display: none;
        }

        sd-tab-group::part(scroll-button--start),
        sd-tab-group::part(scroll-button--end) {
          border-bottom: none;
        }

         sd-tab::part(bottom-border) {
          border-bottom: none;
        }

  * ```
 */

export const SampleNoLine = {
  parameters: { ...parameters, docs: { story: { inline: false, height: '250px' } } },
  name: 'Sample: No Line',
  render: () => {
    return html`
      <style>
        sd-tab-group::part(separation) {
          display: none;
        }

        sd-tab-group::part(scroll-button--start),
        sd-tab-group::part(scroll-button--end) {
          border-bottom: none;
        }

        sd-tab::part(bottom-border) {
          border-bottom: none;
        }
      </style>

      ${generateTemplate({
        args: overrideArgs({
          type: 'slot',
          name: 'default',
          value: generateTabsAndPanels(1, 5)
        })
      })}
    `;
  }
};

/**
 * Text can be bolded according to the users needs. To implement this sample, adjust the `base` CSS part as follows:
 *   
 * ```css
        sd-tab::part(base) {
          font-weight: bold;
        }
 * ```
 */

export const SampleBold = {
  parameters: { ...parameters, docs: { story: { inline: false, height: '550px' } } },
  name: 'Sample: Bold',
  render: () => {
    return html`
      <style>
        sd-tab::part(base) {
          font-weight: bold;
        }
      </style>

      <div class="p-4 my-6 bg-neutral-200 text-left font-bold text-sm w-full box-border">Default Variant</div>

      <sd-tab-group>
        <sd-tab slot="nav" panel="tab-1">Tab 1</sd-tab>
        <sd-tab slot="nav" panel="tab-2">Tab 2</sd-tab>
        <sd-tab slot="nav" panel="tab-3">Tab 3</sd-tab>
        <sd-tab slot="nav" panel="tab-4">Tab 4</sd-tab>
        <sd-tab slot="nav" panel="tab-5">Tab 5</sd-tab>

        <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border">Tab panel 1</div></sd-tab-panel>
        <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div></sd-tab-panel>
        <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border">Tab panel 3</div></sd-tab-panel>
        <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border">Tab panel 4</div></sd-tab-panel>
        <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border">Tab panel 5</div></sd-tab-panel>
      </sd-tab-group>

      <div class="p-4 mb-6 bg-neutral-200 text-left font-bold text-sm w-full box-border">Container Variant</div>

      <sd-tab-group>
        <sd-tab slot="nav" variant="container" panel="tab-1">Tab 1</sd-tab>
        <sd-tab slot="nav" variant="container" panel="tab-2">Tab 2</sd-tab>
        <sd-tab slot="nav" variant="container" panel="tab-3" disabled>Tab 3</sd-tab>
        <sd-tab slot="nav" variant="container" panel="tab-4">Tab 4</sd-tab>
        <sd-tab slot="nav" variant="container" panel="tab-5">Tab 5</sd-tab>
        <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border">Tab panel 1</div></sd-tab-panel>
        <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div></sd-tab-panel>
        <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border">Tab panel 3</div></sd-tab-panel>
        <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border">Tab panel 4</div></sd-tab-panel>
        <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border">Tab panel 5</div></sd-tab-panel>
      </sd-tab-group>
    `;
  }
};

/**
 * Users can set-up buttons to open a specific tab from outside the `sd-tab-group`.
 */

export const SampleDeepLink = {
  name: 'Sample: Deep Link',
  render: () => {
    return html`
      <sd-tab-group id="deep-link-tab-group">
        <sd-tab slot="nav" panel="tab-1">Tab 1</sd-tab>
        <sd-tab slot="nav" panel="tab-2">Tab 2</sd-tab>
        <sd-tab slot="nav" panel="tab-3">Tab 3</sd-tab>
        <sd-tab slot="nav" panel="tab-4">Tab 4</sd-tab>
        <sd-tab slot="nav" panel="tab-5">Tab 5</sd-tab>

        <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border">Tab panel 1</div></sd-tab-panel>
        <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div></sd-tab-panel>
        <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border">Tab panel 3</div></sd-tab-panel>
        <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border">Tab panel 4</div></sd-tab-panel>
        <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border">Tab panel 5</div></sd-tab-panel>
      </sd-tab-group>

      <sd-button id="deep-link-btn"> Open Panel 5 </sd-button>

      <script type="module">
        const btn = document.getElementById('deep-link-btn');
        const sdTabGroup = document.getElementById('deep-link-tab-group');

        const nextActivePanel = document.querySelector('sd-tab[panel="tab-5"]');

        btn.addEventListener('click', () => {
          sdTabGroup.setActiveTab(nextActivePanel);
        });
      </script>
    `;
  }
};
