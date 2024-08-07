import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-radio-button');
const { overrideArgs } = storybookHelpers('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');

/**
 * It's a type of a radio-group-item similar to `sd-radio` which can be slotted inside of an `sd-radio-group`. Provides a button-style control for users to select one option from a group. Unlike `sd-radio`, `sd-radio-button` does not have an invalid state and should always have a pre-selected option (default value).
 */

export default {
  title: 'Components/sd-radio-button',
  tags: ['!dev'],
  component: 'sd-radio-button',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'icon',
      value: '<sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>'
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-radio-button in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size of the input radio.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-button size="lg">
        <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
      </sd-radio-button>
      <sd-radio-button size="md">
        <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
      </sd-radio-button>
      <sd-radio-button size="sm">
        <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
      </sd-radio-button>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable an input radio.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-button disabled>
        <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
      </sd-radio-button>
      <sd-radio-button showLabel disabled>
        <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
        <div>Label</div>
      </sd-radio-button>
    </div>
  `
};

/**
 * Use the `checked` attribute to set the state of the radio button to checked.
 */

export const Checked = {
  name: 'Checked',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-button checked>
        <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
      </sd-radio-button>
      <sd-radio-button showLabel checked>
        <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
        <div>Label</div>
      </sd-radio-button>
    </div>
  `
};

/**
 * Use the `show-label` attribute to display the label of the radio button.
 */

export const Label = {
  name: 'Label',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-button showLabel>
        <div>Label</div>
      </sd-radio-button>

      <sd-radio-button showLabel>
        <sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon>
        <div>Label</div>
      </sd-radio-button>
    </div>
  `
};
