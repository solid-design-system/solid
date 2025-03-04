import '../../../../components/src/solid-components';

import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-optgroup');
const { overrideArgs } = storybookHelpers('sd-optgroup');
const { generateTemplate } = storybookTemplate('sd-optgroup');

/**
 * Used to group selectable items within various form controls such as select.
 *
 * **Related Components**:
 * - [sd-combobox](?path=/docs/components-sd-combobox--docs)
 * - [sd-select](?path=/docs/components-sd-select--docs)
 *
 * **Related templates**:
 * - [Autocomplete](?path=/docs/templates-autocomplete--docs)
 */

export default {
  title: 'Components/sd-optgroup',
  tags: ['!dev'],
  component: 'sd-optgroup',
  args: overrideArgs([
    {
      name: 'default',
      type: 'slot',
      value: `
        <sd-option value="1">Option 1</sd-option>
        <sd-option value="2">Option 2</sd-option>
        <sd-option value="3">Option 3</sd-option>
      `
    },
    {
      name: 'label',
      type: 'attribute',
      value: 'Section 1'
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/W0LTcrsplIFyHJonYNyqsG/Solid-DS-%E2%80%93-Component-Library?m=auto&node-id=29654-2771&t=Do65Udn4cACM7ww3-1'
    }
  }
};

/**
 * Use <sd-optgroup> to group listbox items visually.
 */

export const Default = {
  parameters: {
    controls: {
      disable: false
    }
  },
  render: (args: unknown) => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox label="Label">
        ${generateTemplate({ args })}
        <sd-optgroup>
          <span slot="label">Section 2</span>
          <sd-option value="4">Option 4</sd-option>
        </sd-optgroup>
      </sd-combobox>
    </div>
  `
};

/**
 * Use the disabled attribute in the <sd-optgroup> to disable the section and prevent it from being selected.
 */

export const Disabled = {
  render: () => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox label="Label">
        <sd-optgroup label="Section 1" disabled>
          <sd-option value="1">Option</sd-option>
          <sd-option value="2">Option</sd-option>
          <sd-option value="3">Option</sd-option>
        </sd-optgroup>
      </sd-combobox>
    </div>
  `
};
