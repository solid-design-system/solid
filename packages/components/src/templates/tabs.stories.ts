import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Tabs',
  parameters: {
    chromatic: { disableSnapshot: true }
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
 * Example of a scrollable tab group.
 * The `sd-tab-group` becomes scrollable when the tabs exceed the width of the container.
 */
export const Scrollable = {
  name: 'Tabs Scrollable',
  render: () => html`
    <sd-tab-group activation="">
      <sd-tab slot="nav" panel="tab-1" variant="default">Tab 1</sd-tab>
      <sd-tab-panel name="tab-1">
        <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2" variant="default">Tab 2</sd-tab>
      <sd-tab-panel name="tab-2">
        <div>Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3" variant="default">Tab 3</sd-tab>
      <sd-tab-panel name="tab-3">
        <div>Delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-4" variant="default">Tab 4</sd-tab>
      <sd-tab-panel name="tab-4">
        <div>Neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-5" variant="default">Tab 5</sd-tab>
      <sd-tab-panel name="tab-5">
        <div>Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-6" variant="default">Tab 6</sd-tab>
      <sd-tab-panel name="tab-6">
        <div>Doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-7" variant="default">Tab 7</sd-tab>
      <sd-tab-panel name="tab-7">
        <div>Illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-8" variant="default">Tab 8</sd-tab>
      <sd-tab-panel name="tab-8">
        <div>Delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-9" variant="default">Tab 9</sd-tab>
      <sd-tab-panel name="tab-9">
        <div>Perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-10" variant="default">Tab 10</sd-tab>
      <sd-tab-panel name="tab-10">
        <div>Ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-11" variant="default">Tab 11</sd-tab>
      <sd-tab-panel name="tab-11">
        <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-12" variant="default">Tab 12</sd-tab>
      <sd-tab-panel name="tab-12">
        <div>Provident vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-13" variant="default">Tab 13</sd-tab>
      <sd-tab-panel name="tab-13">
        <div>Provident illo inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-14" variant="default">Tab 14</sd-tab>
      <sd-tab-panel name="tab-14">
        <div>Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-15" variant="default">Tab 15</sd-tab>
      <sd-tab-panel name="tab-15">
        <div>Inventore delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
    </sd-tab-group>
  `
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
