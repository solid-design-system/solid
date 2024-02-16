import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-tab-group');
const { overrideArgs } = storybookHelpers('sd-tab-group');
const { generateTemplate } = storybookTemplate('sd-tab-group');
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

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
  parameters: { ...parameters, docs: { story: { inline: false, height: '275px' } } },
  decorators: [withActions] as any
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
 * The sd-tab-group becomes scrollable when there are more tabs than horizontal space allows.
 */

export const Scrollable = {
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: generateTabsAndPanels(1, 30, 'container')
  }),
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Parts = {
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: generateTabsAndPanels(1, 30)
  }),
  parameters: {
    controls: {
      exclude: ['base', 'nav', 'tabs', 'body', 'scroll-button--start', 'scroll-button--end', 'scroll-button--base']
    },
    docs: { story: { inline: false, height: '3200px' } }
  },
  render: (args: any) => {
    return html`
      ${['base', 'nav', 'tabs', 'body', 'scroll-button--start', 'scroll-button--end', 'scroll-button--base'].map(part =>
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
    value: generateTabsAndPanels(1, 30, 'container')
  }),
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-tab-group');

    await waitUntil(() => el?.shadowRoot?.querySelector('button'));

    el?.shadowRoot?.querySelector('button')?.focus();
  }
};

/**
 * As an option, users can justify the `sd-tab-group` to the center.
 */

export const SampleCentered = {
  name: 'Sample: Centered',
  render: () => {
    return html`
      <style>
        sd-tab-group::part(tabs) {
          justify-content: center;
        }
      </style>

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
    `;
  }
};

/**
 * As an option, users can remove the line separating the tablist and the `sd-panel`.
 */

export const SampleNoLine = {
  name: 'Sample: No Line',
  render: () => {
    return html`
      <style>
        sd-tab-group::part(tabs),
        sd-tab-group::part(scroll-button) {
          border-bottom: none;
        }
      </style>

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
    `;
  }
};

/**
 * Text can be bolded according to the users needs.
 */

export const SampleBold = {
  name: 'Sample: Bold',
  render: () => {
    return html`
      <style>
        sd-tab::part(base) {
          font-weight: bold;
        }
      </style>

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
