import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-tab-group');
const { overrideArgs } = storybookHelpers('sd-tab-group');
const { generateTemplate } = storybookTemplate('sd-tab-group');
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Components/sd-tab-group',
  component: 'sd-tab-group',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: `
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
            `
  }),
  argTypes,
  parameters: { ...parameters },
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
 * Use the variant attribute to alternate between the `default` and `container` styles.
 */

export const Variant = {
  parameters: { controls: { exclude: 'variant' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' }
      },
      args
    });
  }
};

/**
 * The sd-tab-group becomes scrollable when there are more tabs than horizontal space allows.
 */

export const Scrollable = {
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: `
    <sd-tab slot="nav" panel="tab-1">Tab 1</sd-tab>
    <sd-tab slot="nav" panel="tab-2">Tab 2</sd-tab>
    <sd-tab slot="nav" panel="tab-3">Tab 3</sd-tab>
    <sd-tab slot="nav" panel="tab-4">Tab 4</sd-tab>
    <sd-tab slot="nav" panel="tab-5">Tab 5</sd-tab>
    <sd-tab slot="nav" panel="tab-6">Tab 6</sd-tab>
    <sd-tab slot="nav" panel="tab-7">Tab 7</sd-tab>
    <sd-tab slot="nav" panel="tab-8">Tab 8</sd-tab>
    <sd-tab slot="nav" panel="tab-9">Tab 9</sd-tab>
    <sd-tab slot="nav" panel="tab-10">Tab 10</sd-tab>
    <sd-tab slot="nav" panel="tab-11">Tab 11</sd-tab>
    <sd-tab slot="nav" panel="tab-12">Tab 12</sd-tab>
    <sd-tab slot="nav" panel="tab-13">Tab 13</sd-tab>
    <sd-tab slot="nav" panel="tab-14">Tab 14</sd-tab>
    <sd-tab slot="nav" panel="tab-15">Tab 15</sd-tab>
    <sd-tab slot="nav" panel="tab-16">Tab 16</sd-tab>
    <sd-tab slot="nav" panel="tab-17">Tab 17</sd-tab>
    <sd-tab slot="nav" panel="tab-18">Tab 18</sd-tab>
    <sd-tab slot="nav" panel="tab-19">Tab 19</sd-tab>
    <sd-tab slot="nav" panel="tab-20">Tab 20</sd-tab>
    <sd-tab slot="nav" panel="tab-21">Tab 21</sd-tab>
    <sd-tab slot="nav" panel="tab-22">Tab 22</sd-tab>
    <sd-tab slot="nav" panel="tab-23">Tab 23</sd-tab>
    <sd-tab slot="nav" panel="tab-24">Tab 24</sd-tab>
    <sd-tab slot="nav" panel="tab-25">Tab 25</sd-tab>
  
    <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border"> Tab panel 1</div></sd-tab-panel>
    <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div> </sd-tab-panel>
    <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border"> Tab panel 3</div></sd-tab-panel>
    <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border"> Tab panel 4</div></sd-tab-panel>
    <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border"> Tab panel 5</div></sd-tab-panel>
    <sd-tab-panel name="tab-6"><div class="slot slot--text slot--border"> Tab panel 6</div></sd-tab-panel>
    <sd-tab-panel name="tab-7"><div class="slot slot--text slot--border"> Tab panel 7</div></sd-tab-panel>
    <sd-tab-panel name="tab-8"><div class="slot slot--text slot--border"> Tab panel 8</div></sd-tab-panel>
    <sd-tab-panel name="tab-9"><div class="slot slot--text slot--border"> Tab panel 9</div></sd-tab-panel>
    <sd-tab-panel name="tab-10"><div class="slot slot--text slot--border"> Tab panel 10</div></sd-tab-panel>
    <sd-tab-panel name="tab-11"><div class="slot slot--text slot--border"> Tab panel 11</div></sd-tab-panel>
    <sd-tab-panel name="tab-12"><div class="slot slot--text slot--border"> Tab panel 12</div></sd-tab-panel>
    <sd-tab-panel name="tab-13"><div class="slot slot--text slot--border"> Tab panel 13</div></sd-tab-panel>
    <sd-tab-panel name="tab-14"><div class="slot slot--text slot--border"> Tab panel 14</div></sd-tab-panel>
    <sd-tab-panel name="tab-15"><div class="slot slot--text slot--border"> Tab panel 15</div></sd-tab-panel>
    <sd-tab-panel name="tab-16"><div class="slot slot--text slot--border"> Tab panel 16</div></sd-tab-panel>
    <sd-tab-panel name="tab-17"><div class="slot slot--text slot--border"> Tab panel 17</div></sd-tab-panel>
    <sd-tab-panel name="tab-18"><div class="slot slot--text slot--border"> Tab panel 18</div></sd-tab-panel>
    <sd-tab-panel name="tab-19"><div class="slot slot--text slot--border"> Tab panel 19</div></sd-tab-panel>
    <sd-tab-panel name="tab-20"><div class="slot slot--text slot--border"> Tab panel 20</div></sd-tab-panel>
    <sd-tab-panel name="tab-21"><div class="slot slot--text slot--border"> Tab panel 21</div></sd-tab-panel>
    <sd-tab-panel name="tab-22"><div class="slot slot--text slot--border"> Tab panel 22</div></sd-tab-panel>
    <sd-tab-panel name="tab-23"><div class="slot slot--text slot--border"> Tab panel 23</div></sd-tab-panel>
    <sd-tab-panel name="tab-24"><div class="slot slot--text slot--border"> Tab panel 24</div></sd-tab-panel>
    <sd-tab-panel name="tab-25"><div class="slot slot--text slot--border"> Tab panel 25</div></sd-tab-panel>
    `
  }),
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Parts = {
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: `
    <sd-tab slot="nav" panel="tab-1">Tab 1</sd-tab>
    <sd-tab slot="nav" panel="tab-2">Tab 2</sd-tab>
    <sd-tab slot="nav" panel="tab-3">Tab 3</sd-tab>
    <sd-tab slot="nav" panel="tab-4">Tab 4</sd-tab>
    <sd-tab slot="nav" panel="tab-5">Tab 5</sd-tab>
    <sd-tab slot="nav" panel="tab-6">Tab 6</sd-tab>
    <sd-tab slot="nav" panel="tab-7">Tab 7</sd-tab>
    <sd-tab slot="nav" panel="tab-8">Tab 8</sd-tab>
    <sd-tab slot="nav" panel="tab-9">Tab 9</sd-tab>
    <sd-tab slot="nav" panel="tab-10">Tab 10</sd-tab>
    <sd-tab slot="nav" panel="tab-11">Tab 11</sd-tab>
    <sd-tab slot="nav" panel="tab-12">Tab 12</sd-tab>
    <sd-tab slot="nav" panel="tab-13">Tab 13</sd-tab>
    <sd-tab slot="nav" panel="tab-14">Tab 14</sd-tab>
    <sd-tab slot="nav" panel="tab-15">Tab 15</sd-tab>
    <sd-tab slot="nav" panel="tab-16">Tab 16</sd-tab>
    <sd-tab slot="nav" panel="tab-17">Tab 17</sd-tab>
    <sd-tab slot="nav" panel="tab-18">Tab 18</sd-tab>
    <sd-tab slot="nav" panel="tab-19">Tab 19</sd-tab>
    <sd-tab slot="nav" panel="tab-20">Tab 20</sd-tab>
    <sd-tab slot="nav" panel="tab-21">Tab 21</sd-tab>
    <sd-tab slot="nav" panel="tab-22">Tab 22</sd-tab>
    <sd-tab slot="nav" panel="tab-23">Tab 23</sd-tab>
    <sd-tab slot="nav" panel="tab-24">Tab 24</sd-tab>
    <sd-tab slot="nav" panel="tab-25">Tab 25</sd-tab>
  
    <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border"> Tab panel 1</div></sd-tab-panel>
    <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div> </sd-tab-panel>
    <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border"> Tab panel 3</div></sd-tab-panel>
    <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border"> Tab panel 4</div></sd-tab-panel>
    <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border"> Tab panel 5</div></sd-tab-panel>
    <sd-tab-panel name="tab-6"><div class="slot slot--text slot--border"> Tab panel 6</div></sd-tab-panel>
    <sd-tab-panel name="tab-7"><div class="slot slot--text slot--border"> Tab panel 7</div></sd-tab-panel>
    <sd-tab-panel name="tab-8"><div class="slot slot--text slot--border"> Tab panel 8</div></sd-tab-panel>
    <sd-tab-panel name="tab-9"><div class="slot slot--text slot--border"> Tab panel 9</div></sd-tab-panel>
    <sd-tab-panel name="tab-10"><div class="slot slot--text slot--border"> Tab panel 10</div></sd-tab-panel>
    <sd-tab-panel name="tab-11"><div class="slot slot--text slot--border"> Tab panel 11</div></sd-tab-panel>
    <sd-tab-panel name="tab-12"><div class="slot slot--text slot--border"> Tab panel 12</div></sd-tab-panel>
    <sd-tab-panel name="tab-13"><div class="slot slot--text slot--border"> Tab panel 13</div></sd-tab-panel>
    <sd-tab-panel name="tab-14"><div class="slot slot--text slot--border"> Tab panel 14</div></sd-tab-panel>
    <sd-tab-panel name="tab-15"><div class="slot slot--text slot--border"> Tab panel 15</div></sd-tab-panel>
    <sd-tab-panel name="tab-16"><div class="slot slot--text slot--border"> Tab panel 16</div></sd-tab-panel>
    <sd-tab-panel name="tab-17"><div class="slot slot--text slot--border"> Tab panel 17</div></sd-tab-panel>
    <sd-tab-panel name="tab-18"><div class="slot slot--text slot--border"> Tab panel 18</div></sd-tab-panel>
    <sd-tab-panel name="tab-19"><div class="slot slot--text slot--border"> Tab panel 19</div></sd-tab-panel>
    <sd-tab-panel name="tab-20"><div class="slot slot--text slot--border"> Tab panel 20</div></sd-tab-panel>
    <sd-tab-panel name="tab-21"><div class="slot slot--text slot--border"> Tab panel 21</div></sd-tab-panel>
    <sd-tab-panel name="tab-22"><div class="slot slot--text slot--border"> Tab panel 22</div></sd-tab-panel>
    <sd-tab-panel name="tab-23"><div class="slot slot--text slot--border"> Tab panel 23</div></sd-tab-panel>
    <sd-tab-panel name="tab-24"><div class="slot slot--text slot--border"> Tab panel 24</div></sd-tab-panel>
    <sd-tab-panel name="tab-25"><div class="slot slot--text slot--border"> Tab panel 25</div></sd-tab-panel>
    `
  }),
  parameters: {
    controls: {
      exclude: [
        'base',
        'overlay',
        'panel',
        'header',
        'header-content',
        'title',
        'close-button',
        'body',
        'footer',
        '--width',
        'contained'
      ]
    }
  },
  render: (args: any) => {
    return html`
      ${[
        'base',
        'nav',
        'tabs',
        'active-tab-indicator',
        'scroll-button',
        'scroll-button--start',
        'scroll-button--end',
        'scroll-button__base'
      ].map(part =>
        generateTemplate({
          axis: {
            x: {
              type: 'template',
              name: 'sd-tab-group::part(...){outline: solid 2px red}',
              values: [
                {
                  title: part,
                  value: `<style>#part-${part} sd-tab-group::part(${part}){outline: solid 2px red; ${
                    part === 'base' ? '' : 'outline-offset: -2px'
                  };}</style><div id="part-${part}">%TEMPLATE%</div>`
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
    value: `
    <sd-tab slot="nav" panel="tab-1">Tab 1</sd-tab>
    <sd-tab slot="nav" panel="tab-2">Tab 2</sd-tab>
    <sd-tab slot="nav" panel="tab-3">Tab 3</sd-tab>
    <sd-tab slot="nav" panel="tab-4">Tab 4</sd-tab>
    <sd-tab slot="nav" panel="tab-5">Tab 5</sd-tab>
    <sd-tab slot="nav" panel="tab-6">Tab 6</sd-tab>
    <sd-tab slot="nav" panel="tab-7">Tab 7</sd-tab>
    <sd-tab slot="nav" panel="tab-8">Tab 8</sd-tab>
    <sd-tab slot="nav" panel="tab-9">Tab 9</sd-tab>
    <sd-tab slot="nav" panel="tab-10">Tab 10</sd-tab>
    <sd-tab slot="nav" panel="tab-11">Tab 11</sd-tab>
    <sd-tab slot="nav" panel="tab-12">Tab 12</sd-tab>
    <sd-tab slot="nav" panel="tab-13">Tab 13</sd-tab>
    <sd-tab slot="nav" panel="tab-14">Tab 14</sd-tab>
    <sd-tab slot="nav" panel="tab-15">Tab 15</sd-tab>
    <sd-tab slot="nav" panel="tab-16">Tab 16</sd-tab>
    <sd-tab slot="nav" panel="tab-17">Tab 17</sd-tab>
    <sd-tab slot="nav" panel="tab-18">Tab 18</sd-tab>
    <sd-tab slot="nav" panel="tab-19">Tab 19</sd-tab>
    <sd-tab slot="nav" panel="tab-20">Tab 20</sd-tab>
    <sd-tab slot="nav" panel="tab-21">Tab 21</sd-tab>
    <sd-tab slot="nav" panel="tab-22">Tab 22</sd-tab>
    <sd-tab slot="nav" panel="tab-23">Tab 23</sd-tab>
    <sd-tab slot="nav" panel="tab-24">Tab 24</sd-tab>
    <sd-tab slot="nav" panel="tab-25">Tab 25</sd-tab>
  
    <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border"> Tab panel 1</div></sd-tab-panel>
    <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div> </sd-tab-panel>
    <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border"> Tab panel 3</div></sd-tab-panel>
    <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border"> Tab panel 4</div></sd-tab-panel>
    <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border"> Tab panel 5</div></sd-tab-panel>
    <sd-tab-panel name="tab-6"><div class="slot slot--text slot--border"> Tab panel 6</div></sd-tab-panel>
    <sd-tab-panel name="tab-7"><div class="slot slot--text slot--border"> Tab panel 7</div></sd-tab-panel>
    <sd-tab-panel name="tab-8"><div class="slot slot--text slot--border"> Tab panel 8</div></sd-tab-panel>
    <sd-tab-panel name="tab-9"><div class="slot slot--text slot--border"> Tab panel 9</div></sd-tab-panel>
    <sd-tab-panel name="tab-10"><div class="slot slot--text slot--border"> Tab panel 10</div></sd-tab-panel>
    <sd-tab-panel name="tab-11"><div class="slot slot--text slot--border"> Tab panel 11</div></sd-tab-panel>
    <sd-tab-panel name="tab-12"><div class="slot slot--text slot--border"> Tab panel 12</div></sd-tab-panel>
    <sd-tab-panel name="tab-13"><div class="slot slot--text slot--border"> Tab panel 13</div></sd-tab-panel>
    <sd-tab-panel name="tab-14"><div class="slot slot--text slot--border"> Tab panel 14</div></sd-tab-panel>
    <sd-tab-panel name="tab-15"><div class="slot slot--text slot--border"> Tab panel 15</div></sd-tab-panel>
    <sd-tab-panel name="tab-16"><div class="slot slot--text slot--border"> Tab panel 16</div></sd-tab-panel>
    <sd-tab-panel name="tab-17"><div class="slot slot--text slot--border"> Tab panel 17</div></sd-tab-panel>
    <sd-tab-panel name="tab-18"><div class="slot slot--text slot--border"> Tab panel 18</div></sd-tab-panel>
    <sd-tab-panel name="tab-19"><div class="slot slot--text slot--border"> Tab panel 19</div></sd-tab-panel>
    <sd-tab-panel name="tab-20"><div class="slot slot--text slot--border"> Tab panel 20</div></sd-tab-panel>
    <sd-tab-panel name="tab-21"><div class="slot slot--text slot--border"> Tab panel 21</div></sd-tab-panel>
    <sd-tab-panel name="tab-22"><div class="slot slot--text slot--border"> Tab panel 22</div></sd-tab-panel>
    <sd-tab-panel name="tab-23"><div class="slot slot--text slot--border"> Tab panel 23</div></sd-tab-panel>
    <sd-tab-panel name="tab-24"><div class="slot slot--text slot--border"> Tab panel 24</div></sd-tab-panel>
    <sd-tab-panel name="tab-25"><div class="slot slot--text slot--border"> Tab panel 25</div></sd-tab-panel>
    `
  }),
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-tab-group');
    await waitUntil(() => el?.shadowRoot?.querySelector('button')?.focus());
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
