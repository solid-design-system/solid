import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tab');
const { overrideArgs } = storybookHelpers('sd-tab');
const { generateTemplate } = storybookTemplate('sd-tab');

export default {
  title: 'Components/sd-tab',
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
 * Use the `active` attribute to toggle the active state. Styling to indicate the active state is applied in the `sd-tab-group` component.
 */

export const Active = {
  parameters: { controls: { exclude: ['active'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'active' }
      },
      args
    });
  }
};

/**
 * Use the variant attribute to alternate between the `default` and `container` styles.
 */

export const Variant = {
  parameters: { controls: { exclude: ['variant'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' },
        x: { type: 'attribute', name: 'active', values: [false, true] }
      },
      args,
      constants: { type: 'attribute', name: 'active', value: true }
    });
  }
};

/**
 * Use the `disabled` attribute to toggle the disabled state.
 */

export const Disabled = {
  parameters: { controls: { exclude: ['disabled'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'disabled' }
      },
      args
    });
  }
};

/**
 * Use the `left` slot to optionally include an element (eg. icon) positioned to the left of the label.
 */

export const Sample = {
  parameters: { controls: { include: [] } },
  name: 'Sample: Icon',
  render: () => {
    return html`
      <style>
        sd-tab-group::part(tabs) {
          border-bottom: none;
        }
      </style>
      <div class="p-4 mb-6 bg-neutral-200 text-left font-bold text-sm w-full box-border">Default Variant</div>

      <sd-tab-group>
        <sd-tab slot="nav">
          <sd-icon slot="left" name="system/picture" library="global-resources" class="text-primary"></sd-icon>
          Tab
        </sd-tab>

        <sd-tab slot="nav">
          <div class="relative">
            <sd-icon slot="left" name="system/picture" library="global-resources" class="text-primary"></sd-icon>
            <sd-badge class="absolute -top-0.5 -right-0.5" tabindex="-1" size="sm"></sd-badge>
          </div>
          Tab
        </sd-tab>
      </sd-tab-group>

      <div class="p-4 mb-6 bg-neutral-200 text-left font-bold text-sm w-full box-border">Container Variant</div>

      <sd-tab-group>
        <sd-tab slot="nav" variant="container" panel="tab-1">
          <sd-icon slot="left" name="system/picture" library="global-resources" class="text-primary"></sd-icon>
          Tab
        </sd-tab>

        <sd-tab slot="nav" variant="container" panel="tab-2">
          <div class="relative">
            <sd-icon slot="left" name="system/picture" library="global-resources" class="text-primary"></sd-icon>
            <sd-badge class="absolute -top-0.5 -right-0.5" tabindex="-1" size="sm"></sd-badge>
          </div>
          Tab
        </sd-tab>

        <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border">Tab panel 1</div></sd-tab-panel>
        <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Tab panel 2</div></sd-tab-panel>
      </sd-tab-group>
    `;
  }
};
