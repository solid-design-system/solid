import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Tab',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3687-40468&t=ilrs806pHHSfnwKM-4'
    }
  }
};

/**
 * Example of `sd-tab-group` with different variants.
 */
export const Default = {
  name: 'Tabs Variants',
  render: () =>
    html`<div class="grid grid-cols-2 gap-12">
      <sd-tab-group activation="">
        <sd-tab slot="nav" panel="tab-1" variant="default">Tab 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="default">Tab 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Provident illo neque vel ex.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="default">Tab 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-4" variant="default">Tab 4</sd-tab>
        <sd-tab-panel name="tab-4">
          <div>Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-5" variant="default">Tab 5</sd-tab>
        <sd-tab-panel name="tab-5">
          <div>Provident nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
      </sd-tab-group>

      <sd-tab-group activation="">
        <sd-tab slot="nav" panel="tab-1" variant="container">Tab 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>Provident inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="container">Tab 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="container">Tab 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-4" variant="container">Tab 4</sd-tab>
        <sd-tab-panel name="tab-4">
          <div>Delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-5" variant="container">Tab 5</sd-tab>
        <sd-tab-panel name="tab-5">
          <div>Vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
      </sd-tab-group>
    </div>`
};

/**
 * Example of a centered tab group.
 * To implement this sample, adjust the tabs CSS part as follows:
 *
 * ```css
 * sd-tab-group::part(tabs) {
    justify-content: center;
  }
 * ```
 */
export const Centered = {
  name: 'Centered',
  render: () =>
    html` <style>
        sd-tab-group::part(tabs) {
          justify-content: center;
        }
      </style>
      <sd-tab-group activation="">
        <sd-tab slot="nav" panel="tab-1" variant="default">Tab 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="default">Tab 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Provident illo perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="default">Tab 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-4" variant="default">Tab 4</sd-tab>
        <sd-tab-panel name="tab-4">
          <div>Delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-5" variant="default">Tab 5</sd-tab>
        <sd-tab-panel name="tab-5">
          <div>Nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
      </sd-tab-group>`
};
