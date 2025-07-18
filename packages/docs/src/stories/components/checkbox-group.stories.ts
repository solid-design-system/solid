import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-checkbox-group');
const { generateTemplate } = storybookTemplate('sd-checkbox-group');
const { overrideArgs } = storybookHelpers('sd-checkbox-group');

export default {
  title: 'Components/sd-checkbox-group',
  component: 'sd-checkbox-group',
  tags: ['!dev', 'autodocs'],
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'label',
      value: 'Group label'
    },
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
 * Use the `size` attribute to change the size (`md` equals `lg` but added for consistency reason on input elements):
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
 */
export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox-group size="lg" label="Group label">
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>

      <sd-checkbox-group size="sm" label="Group label">
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
      <sd-checkbox-group orientation="vertical" label="Group label">
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>
      <sd-checkbox-group orientation="horizontal" label="Group label">
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
    <sd-checkbox-group orientation="vertical">
      <label slot="label">Group label</label>
      <sd-checkbox value="1">Checkbox 1</sd-checkbox>
      <sd-checkbox value="2">Checkbox 2</sd-checkbox>
      <sd-checkbox value="3">Checkbox 3</sd-checkbox>
    </sd-checkbox-group>
  `
};

/**
 * Use the `help-text` attribute to add a descriptive “help text”.
 *
 * For help texts that contain HTML, use the `help-text` slot instead.
 */
export const HelpText = {
  name: 'Help Text',
  render: () => html`
    <div class="flex gap-12">
      <sd-checkbox-group orientation="vertical" help-text="Help text">
        <label slot="label">Group label</label>
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>
    </div>
  `
};
