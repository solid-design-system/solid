import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-checkbox-group');
const { generateTemplate } = storybookTemplate('sd-checkbox-group');
const { overrideArgs } = storybookHelpers('sd-checkbox-group');

/**
 * Used to select multiple options from a list of options.
 *
 * **Related components:**
 * - [sd-checkbox](?path=/docs/components-sd-checkbox--docs)
 *
 * **Related templates:**
 * - [Checkbox Group](?path=/docs/templates-checkbox-group--docs)
 */

export default {
  title: 'Components/sd-checkbox-group',
  component: 'sd-checkbox-group',
  tags: ['!dev'],
  args: overrideArgs([
    { type: 'slot', name: 'label', value: `<label slot="label">Group Label</label>` },
    {
      type: 'slot',
      name: 'default',
      value: `<sd-checkbox name="checkbox" value="1">Checkbox 1</sd-checkbox><sd-checkbox name="checkbox" value="2">Checkbox 2</sd-checkbox><sd-checkbox name="checkbox" value="3">Checkbox 3</sd-checkbox>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2216-25185&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size:
 *
 * - `lg` (default)
 * - `sm`
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox-group size="lg">
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>

      <sd-checkbox-group size="sm">
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>
    </div>
  `
};

/**
 * Use the `orientation` attribute to set the axis of the checkboxes:
 *
 * - `vertical` (default)
 * - `horizontal`
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox-group orientation="vertical">
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>
      <sd-checkbox-group orientation="horizontal">
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>
    </div>
  `
};

/**
 * Use the `label` attribute to add a label on top.
 */

export const Label = {
  name: 'Label',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox-group orientation="vertical">
        <label slot="label">Group Label</label>
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>
    </div>
  `
};
