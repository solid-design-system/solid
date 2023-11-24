import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-select');
const { generateTemplate } = storybookTemplate('sd-select');
const { overrideArgs } = storybookHelpers('sd-select');

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value:
        '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions, (story: any) => html`<div>${story()}</div>`] as unknown
};

/**
 * This shows sd-select in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div class="h-[240px]">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.
 */

export const Label = {
  parameters: {
    controls: {
      exclude: ['label']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[240px]">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'label',
            value: 'Label'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the help-text slot instead.
 */

export const HelpText = {
  name: 'Help Text',
  parameters: {
    controls: {
      exclude: ['help-text']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[240px]">
      ${generateTemplate({
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<sd-option value="novice">Novice</sd-option><sd-option value="intermediate">Intermediate</sd-option><sd-option value="advanced">Advanced</sd-option>'
          },
          {
            type: 'attribute',
            name: 'help-text',
            value: 'Please tell us your skill level.'
          },
          {
            type: 'attribute',
            name: 'label',
            value: 'Experience'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Use the `placeholder` attribute to add a placeholder.  We use the localized string "Please select" by default.
 */

export const Placeholder = {
  parameters: {
    controls: {
      include: ['placeholder']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[240px]">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'placeholder',
            value: 'Placeholder'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.
 */

export const Clearable = {
  parameters: {
    controls: {
      exclude: ['clearable']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[240px]">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'clearable',
            value: true
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Use the `disabled` attribute to disable a select.
 */

export const Disabled = {
  parameters: {
    controls: {
      exclude: ['disabled']
    }
  },
  render: (args: any) => {
    return html`<div>
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'disabled',
            value: true
          },
          {
            type: 'slot',
            name: 'prefix',
            value: '<sd-icon slot="prefix" library="global-resources" name="system/picture"></sd-icon>'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Use the `size` attribute to change a select’s size. Note that `size` does not apply to listbox options.
 */

export const Sizes = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    return html`<div class="h-[340px]">
      ${generateTemplate({
        axis: {
          x: {
            type: 'attribute',
            name: 'size'
          }
        },
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
          }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * The preferred placement of the select’s listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.
 */

export const Placement = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    return html`<div class="h-[340px]">
      ${generateTemplate({
        axis: {
          x: {
            type: 'attribute',
            name: 'placement',
            values: ['bottom', 'top']
          }
        },
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option>'
          }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * Use `<sl-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won’t be announced by most assistive devices.
 */

export const GroupingOptions = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    return html`<div class="h-[290px]">
      ${generateTemplate({
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<small>Odd Options</small><sd-option value="option-1">Option 1</sd-option><sd-option value="option-3">Option 3</sd-option><sd-divider class="mb-2"></sd-divider><small>Even Options</small><sd-option value="option-2">Option 2</sd-option>'
          }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * Dev: Temporary development story
 */

export const Dev = {
  render: (args: any) => {
    return html`<div>
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'clearable',
            value: true
          },
          {
            type: 'attribute',
            name: 'multiple',
            value: true
          },
          {
            type: 'slot',
            name: 'prefix',
            value: '<sd-icon slot="prefix" library="global-resources" name="system/picture"></sd-icon>'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Dev: Temporary development story
 */

export const Dev2 = {
  render: (args: any) => {
    return html`<div class="max-w-[500px]">
      <sd-select>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
      <sd-select>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-select>
      <span class="text-2xl">Hello</span>
    </div>`;
  }
};
