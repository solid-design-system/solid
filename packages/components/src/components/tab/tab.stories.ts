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
    return html`<sd-tab-group>${generateTemplate({ args })}</sd-tab-group>`;
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
  name: 'Sample: Icon',
  render: () => {
    return html`
      <style>
        sd-tab-group::part(tabs) {
          border-bottom: none;
        }
      </style>
      <sd-tab-group>
        <sd-tab slot="nav">
          <sd-icon slot="left" name="system/picture" library="global-resources" class="text-primary"></sd-icon>
          Tab
        </sd-tab>

        <sd-tab slot="nav">
          <div class="relative">
            <sd-icon slot="left" name="system/picture" library="global-resources" class="text-primary"></sd-icon>
            <sd-badge class="absolute -top-0.5 -right-0.5" size="sm"></sd-badge>
          </div>
          Tab
        </sd-tab>
      </sd-tab-group>
    `;
  }
};
