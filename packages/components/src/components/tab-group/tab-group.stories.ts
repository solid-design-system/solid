import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes } = storybookDefaults('sd-tab-group');
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
 *
 * **Related templates:**
 * - [Tabs](?path=/docs/templates-tabs--docs)
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
 * Use the `activation` attribute to define how the tab panel is shown when the user interacts with it.
 *
 * - `auto`: Automatically shows the corresponding tab panel.
 * - `manual`: Requires user interaction to show the corresponding tab panel.
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
