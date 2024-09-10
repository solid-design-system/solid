import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tab');
const { overrideArgs } = storybookHelpers('sd-tab');
const { generateTemplate } = storybookTemplate('sd-tab');

/**
 * Used inside `sd-tab-group` to represent and activate tab panels.
 *
 * **Related components:**
 * - [sd-tab-group](?path=/docs/components-sd-tab-group--docs)
 * - [sd-tab-panel](?path=/docs/components-sd-tab-panel--docs)
 *
 * **Related templates:**
 * - [Tabs](?path=/docs/templates-tabs--docs)
 */

export default {
  title: 'Components/sd-tab',
  tags: ['!dev'],
  component: 'sd-tab',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `Tab`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-tab in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};

/**
 * Use the `variant` attribute to display to change the appearance.
 *
 * - `default`: Can be used independently or within components, often for full-page content.
 * - `container`: Highlighted tab and content linked to a background container, typically for specific sections like sub-pages or teasers.
 */

export const Variant = {
  render: () => html`
    <div class="flex gap-12">
      <sd-tab variant="default">Default</sd-tab>
      <sd-tab variant="container">Container</sd-tab>
    </div>
  `
};

/**
 * Use the `active` attribute to toggle the active state.
 */

export const Active = {
  render: () => html`
    <div class="flex gap-12">
      <sd-tab active>Default</sd-tab>
      <sd-tab variant="container" active>Container</sd-tab>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable a tab.
 */
export const Disabled = {
  render: () => html` <sd-tab disabled>Disabled</sd-tab> `
};

/**
 * Use the `left` slot to add system icons.
 */
export const Icon = {
  render: () => html`
    <sd-tab>
      <sd-icon slot="left" name="system/picture" library="global-resources"></sd-icon>
      Default
    </sd-tab>
  `
};
