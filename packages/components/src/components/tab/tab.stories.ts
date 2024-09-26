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
 * - [Tab](?path=/docs/templates-tab--docs)
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
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3074-37925&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};

/**
 * Use the `variant` attribute to display to change the appearance:
 *
 * - `default`: Can be used independently or within components, often for full-page content
 * - `container`: Highlighted tab and content linked to a background container, typically for specific sections like sub-pages or teasers
 */

export const Variant = {
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-tab-group>
        <sd-tab slot="nav" panel="tab-1" variant="default">Default 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="default">Default 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Provident illo neque vel ex.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="default">Default 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
      </sd-tab-group>

      <sd-tab-group activation="">
        <sd-tab slot="nav" panel="tab-1" variant="container">Container 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>Provident inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="container">Container 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="container">Container 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
      </sd-tab-group>
    </div>
  `
};

/**
 * Use the `active` attribute to toggle the active state.
 */

export const Active = {
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-tab-group>
        <sd-tab slot="nav" panel="tab-1" variant="default" active>Default 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>Tab panel 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="default">Default 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="default">Default 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Tab panel 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
        </sd-tab-panel>
      </sd-tab-group>

      <sd-tab-group>
        <sd-tab slot="nav" panel="tab-1" variant="container" active>Container 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>Tab panel 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="container">Container 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="container">Container 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Tab panel 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
        </sd-tab-panel>
      </sd-tab-group>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable a tab.
 */

export const Disabled = {
  render: () => html`
    <sd-tab-group>
      <sd-tab slot="nav" panel="tab-1" variant="default">Label</sd-tab>
      <sd-tab-panel name="tab-1">
        <div>Tab panel 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2" variant="default" disabled>Disabled</sd-tab>
      <sd-tab-panel name="tab-2">
        <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3" variant="default">Label</sd-tab>
      <sd-tab-panel name="tab-3">
        <div>Tab panel 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
      </sd-tab-panel>
    </sd-tab-group>
  `
};

/**
 * Use the `left` slot to add system icons.
 */

export const Icon = {
  render: () => html`
    <sd-tab-group>
      <sd-tab slot="nav" panel="tab-1">
        <sd-icon slot="left" name="system/picture" library="global-resources" class="pr-2"></sd-icon>
        Label
      </sd-tab>
      <sd-tab-panel name="tab-1">
        <div>Tab panel 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2">
        <sd-icon slot="left" name="system/picture" library="global-resources" class="pr-2"></sd-icon>
        Label
      </sd-tab>
      <sd-tab-panel name="tab-2">
        <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3">
        <sd-icon slot="left" name="system/picture" library="global-resources" class="pr-2"></sd-icon>
        Label
      </sd-tab>
      <sd-tab-panel name="tab-3">
        <div>Tab panel 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.</div>
      </sd-tab-panel>
    </sd-tab-group>
  `
};
