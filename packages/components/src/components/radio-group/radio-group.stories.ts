import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-radio-group');
const { generateTemplate } = storybookTemplate('sd-radio-group');
const { overrideArgs } = storybookHelpers('sd-radio-group');

/**
 * Used to group multiple input radio or radio buttons so they function as a single form control.
 *
 *  **Related components**:
 * - [sd-radio](?path=/docs/components-sd-radio--docs)
 * - [sd-radio-button](?path=/docs/components-sd-radio-button--docs)
 */

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
  tags: ['!dev'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LP6fOKJjWupBBAL0rylL7H/Radio-%2F-Radio-Group?type=design&node-id=0-1&mode=design&t=ksZl4QS9N7UeLysz-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'label',
      value: `<label slot="label">Group Label</label>`
    },
    {
      type: 'slot',
      name: 'default',
      value: `<sd-radio value="1">Radio 1</sd-radio><sd-radio value="2">Radio 2</sd-radio><sd-radio value="3">Radio 3</sd-radio>`
    },
    { type: 'attribute', name: 'name', value: 'radio-group' },
    { type: 'attribute', name: 'value', value: '2' },
    { type: 'attribute', name: 'boldLabel', value: true }
  ]),
  argTypes
};

/**
 * Default: This shows sd-radio-group in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to set the size of the radio buttons.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group name="radio-group" size="lg">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Large</label>
      </sd-radio-group>

      <sd-radio-group name="radio-group" size="sm">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Small</label>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the element as required.
 */

export const Required = {
  name: 'Required',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group name="radio-group" required>
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Group</label>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `orientation` attribute to set the orientation of the radio buttons.
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group name="radio-group" orientation="vertical">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Group</label>
      </sd-radio-group>

      <sd-radio-group name="radio-group" orientation="horizontal">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Group</label>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `boldlabel` attribute to set the group label to bold.
 */

export const BoldLabel = {
  name: 'Bold Label',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group name="radio-group" boldlabel>
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Group Label</label>
      </sd-radio-group>
    </div>
  `
};
