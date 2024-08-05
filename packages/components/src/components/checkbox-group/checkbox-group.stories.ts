import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-checkbox-group');
const { generateTemplate } = storybookTemplate('sd-checkbox-group');
const { overrideArgs } = storybookHelpers('sd-checkbox-group');

/**
 * Checkbox group allows users to select multiple options from a list of options.
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
      url: 'https://www.figma.com/file/Q7E9GTBET7Gs2HyH1kbpu5/Checkbox-%2F-Checkbox-Group?type=design&node-id=0-1&mode=design&t=DV2yJRUqqYBrskyb-0'
    }
  }
};

/**
 * Default: This shows sd-checkbox-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size of all checkboxes in the group.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <div>
        <div class="flex gap-4">
          <sd-checkbox-group size="lg">
            <sd-checkbox value="1">Option 1</sd-checkbox>
            <sd-checkbox value="2">Option 2</sd-checkbox>
            <sd-checkbox value="3">Option 3</sd-checkbox>
          </sd-checkbox-group>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-4">
          <sd-checkbox-group size="sm">
            <sd-checkbox value="1">Option 1</sd-checkbox>
            <sd-checkbox value="2">Option 2</sd-checkbox>
            <sd-checkbox value="3">Option 3</sd-checkbox>
          </sd-checkbox-group>
        </div>
      </div>
    </div>
  `
};

/**
 * Use the `orientation` attribute to change the layout of the checkboxes.
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex gap-12">
      <div>
        <div class="flex gap-4">
          <sd-checkbox-group orientation="horizontal">
            <sd-checkbox value="1">Option 1</sd-checkbox>
            <sd-checkbox value="2">Option 2</sd-checkbox>
            <sd-checkbox value="3">Option 3</sd-checkbox>
          </sd-checkbox-group>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-4">
          <sd-checkbox-group orientation="vertical">
            <sd-checkbox value="1">Option 1</sd-checkbox>
            <sd-checkbox value="2">Option 2</sd-checkbox>
            <sd-checkbox value="3">Option 3</sd-checkbox>
          </sd-checkbox-group>
        </div>
      </div>
    </div>
  `
};
