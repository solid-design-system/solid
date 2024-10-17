import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-tab-group');
const { overrideArgs } = storybookHelpers('sd-tab-group');
const { generateTemplate } = storybookTemplate('sd-tab-group');

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

/**
 * Used to organize content into a container that shows one section at a time.
 *
 * **Related components:**
 * - [sd-tab](?path=/docs/components-sd-tab--docs)
 * - [sd-tab-panel](?path=/docs/components-sd-tab-panel--docs)
 *
 * **Related templates:**
 * - [Tab](?path=/docs/templates-tab--docs)
 */

export default {
  title: 'Components/sd-tab-group',
  tags: ['!dev'],
  component: 'sd-tab-group',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: generateTabsAndPanels(1, 5)
  }),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3060-29110&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
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

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `activation` attribute to define how the tab panel is shown when the user interacts with it:
 *
 * - `auto`: Automatically shows the corresponding tab panel
 * - `manual`: Requires user interaction to show the corresponding tab panel
 */
export const Activation = {
  render: () => html`
    <sd-tab-group activation="auto">
      <sd-tab slot="nav" panel="tab-1" variant="default">Tab 1</sd-tab>
      <sd-tab-panel name="tab-1">
        <div>Auto provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2" variant="default">Tab 2</sd-tab>
      <sd-tab-panel name="tab-2">
        <div>Auto provident illo neque vel ex.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3" variant="default">Tab 3</sd-tab>
      <sd-tab-panel name="tab-3">
        <div>Auto provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-4" variant="default">Tab 4</sd-tab>
      <sd-tab-panel name="tab-4">
        <div>Auto Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-5" variant="default">Tab 5</sd-tab>
      <sd-tab-panel name="tab-5">
        <div>Auto provident nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
    </sd-tab-group>

    <sd-tab-group activation="manual">
      <sd-tab slot="nav" panel="tab-1" variant="default">Tab 1</sd-tab>
      <sd-tab-panel name="tab-1">
        <div>Manual provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2" variant="default">Tab 2</sd-tab>
      <sd-tab-panel name="tab-2">
        <div>Manual provident illo neque vel ex.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3" variant="default">Tab 3</sd-tab>
      <sd-tab-panel name="tab-3">
        <div>Manual provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-4" variant="default">Tab 4</sd-tab>
      <sd-tab-panel name="tab-4">
        <div>Manual Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-5" variant="default">Tab 5</sd-tab>
      <sd-tab-panel name="tab-5">
        <div>Manual provident nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
    </sd-tab-group>
  `
};

/**
 * When there are more tabs than the available horizontal space, the sd-tab-group becomes scrollable.
 */
export const Scrollable = {
  render: () => html`
    <sd-tab-group activation="auto">
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
