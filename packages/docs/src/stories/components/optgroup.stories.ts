import '../../../../components/src/solid-components';

import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-optgroup');
const { overrideArgs } = storybookHelpers('sd-optgroup');
const { generateTemplate } = storybookTemplate('sd-optgroup');

/**
 * Used to group selectable items within various form controls such as select.
 *
 * **Accessibility Information:**
 * - Use radio buttons instead of selects for a few options. Visible choices are better than hidden ones.
 * - Avoid Long Option Names: Long option names can be difficult to understand and perceive, so it’s best to keep them concise.
 * - Unique Option Text: Ensure that the beginning of each option is unique to avoid confusion, especially for screen reader users.
 * - No Interactive Elements: Avoid including headings or interactive elements like links, buttons, or checkboxes within dropdown options.
 * - Sufficient Touch Target: Ensure options are easily tappable on touch devices.
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
      <sd-combobox>
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
      <sd-combobox>
        <sd-optgroup disabled>
          <span slot="label">Section 1</span>
          <sd-option value="1">Option</sd-option>
          <sd-option value="2">Option</sd-option>
          <sd-option value="3">Option</sd-option>
        </sd-optgroup>
      </sd-combobox>
    </div>
  `
};
