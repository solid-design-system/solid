import '../../solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type SdInput from './input';

const { argTypes, args, parameters } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');
const { overrideArgs } = storybookHelpers('sd-input');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-input/Screenshot Tests',
  component: 'sd-input',
  tags: ['!autodocs'],
  args,
  argTypes: {
    ...argTypes,
    'type-attr': {
      name: 'type',
      table: {
        category: 'attributes',
        defaultValue: 'text'
      },
      description:
        'The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. ',
      control: 'select',
      options: ['date', 'datetime-local', 'email', 'number', 'password', 'search', 'tel', 'text', 'time', 'url', 'text']
    },
    'min-attr': {
      name: 'min',
      table: {
        category: 'attributes',
        defaultValue: ''
      },
      description:
        "The input's minimum value. Only applies to date and number input types. String format for date  is yyyy-mm-dd",
      control: 'text'
    },
    'max-attr': {
      name: 'max',
      table: {
        category: 'attributes',
        defaultValue: ''
      },
      description:
        "The input's maximum value. Only applies to date and number input types. String format for date  is yyyy-mm-dd",
      control: 'text'
    }
  },
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xSIeTnyfW2T21Uw5JgdZOg/Input?node-id=0%3A1&mode=dev'
    }
  },
  decorators: [withActions] as any
};

/**
 * This shows sd-input in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div class="w-[250px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.
 */

export const Labels = {
  name: 'Label',
  args: overrideArgs([{ type: 'attribute', name: 'label', value: 'Label' }]),
  render: (args: any) => {
    return html`
      <div class="w-[250px]">
        ${generateTemplate({
          args
        })}
      </div>
    `;
  }
};

/**
 * Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.
 */

export const HelpText = {
  name: 'Help Text',
  args: overrideArgs([
    { type: 'attribute', name: 'label', value: 'Nickname' },
    { type: 'attribute', name: 'help-text', value: 'How would you like to be called?' }
  ]),
  render: (args: any) => {
    return html`
      <div class="w-[250px]">
        ${generateTemplate({
          args
        })}
      </div>
    `;
  }
};

/**
 * Use the `placeholder` attribute to add a placeholder.
 */

export const Placeholders = {
  name: 'Placeholders',
  args: overrideArgs([{ type: 'attribute', name: 'placeholder', value: 'Type something' }]),
  render: (args: any) => {
    return html`
      <div class="w-[250px]">
        ${generateTemplate({
          args
        })}
      </div>
    `;
  }
};

/**
 * Add the `clearable` attribute to add a clear button when the input has content.
 */

export const Clearable = {
  name: 'Clearable',
  args: overrideArgs([{ type: 'attribute', name: 'clearable', value: true }]),
  render: (args: any) => {
    return html`
      <div class="w-[250px]">
        ${generateTemplate({
          args
        })}
      </div>
    `;
  }
};

/**
 * Add the `password-toggle` attribute to add a toggle button that will show the password when activated. Only works with `type="password"`.
 */

export const TogglePassword = {
  name: 'Toggle Password',
  name: 'Toggle Password',
  parameters: {
    controls: {
      exclude: ['password-toggle']
    }
  },
  args: overrideArgs([{ type: 'attribute', name: 'type', value: 'password' }]),
  render: (args: any) => {
    return html`
      <div class="w-[250px]">
        ${generateTemplate({
          args,
          constants: [
            { type: 'attribute', name: 'password-toggle', value: true },
            { type: 'attribute', name: 'label', value: 'Password' }
          ]
        })}
      </div>
    `;
  }
};

/**
 * Use the disabled attribute to disable an input. All interaction is disabled and no events will be fired.
 */

export const Disabled = {
  name: 'Disabled',
  parameters: {
    controls: {
      exclude: ['disabled']
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
  ]),
  render: (args: any) => {
    return html`
      <div class="w-[250px]">
        ${generateTemplate({
          constants: [{ type: 'attribute', name: 'disabled', value: true }],
          args
        })}
      </div>
    `;
  }
};

/**
 * Use the readonly attribute to render an input as readonly.  Interaction is enabled, but the input cannot be edited.  Events will be fired.
 */

export const Readonly = {
  name: 'Readonly',
  parameters: {
    controls: {
      exclude: ['readonly']
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
  ]),
  render: (args: any) => {
    return html`
      <div class="w-[250px]">
        ${generateTemplate({
          constants: [{ type: 'attribute', name: 'readonly', value: true }],
          args
        })}
      </div>
    `;
  }
};

/**
 * This shows sd-input in its various sizes.
 */

export const Sizes = {
  name: 'Sizes',
  parameters: {
    controls: {
      exclude: ['size']
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'help-text' },
    { type: 'attribute', name: 'clearable', value: true },
    {
      type: 'slot',
      name: 'right',
      value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
    }
  ]),
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * Per default the input will indicate an error state when the input is invalid. Use the `style-on-valid` attribute to indicate a valid state as well.
 */

export const StyleOnValid = {
  name: 'Style on Valid',
  parameters: {
    controls: {
      exclude: ['style-on-valid']
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'valu' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'help-text' },
    { type: 'attribute', name: 'clearable', value: true },
    {
      type: 'slot',
      name: 'right',
      value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
    }
  ]),
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'style-on-valid' }
      },
      args
    });
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const els = canvasElement.querySelectorAll('sd-input');

    for (const el of els) {
      await waitUntil(() => el?.shadowRoot?.querySelector('input'));
      await userEvent.type(el.shadowRoot!.querySelector('input')!, 'e');
    }

    // tab to next element to loose focus
    await userEvent.tab();
  }
};

/**
 * Demonstrates the allowed input types.
 */

export const Types = {
  name: 'Types',
  parameters: {
    controls: {
      include: ['size', 'disabled', 'clearable', 'readonly']
    }
  },
  render: (args: any) => {
    return html`
      <div class="w-[370px]">
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'date' },
              { type: 'attribute', name: 'label', value: 'Date' },
              { type: 'attribute', name: 'placeholder', value: 'someone@example.com' },
              { type: 'attribute', name: 'help-text', value: 'value is restricted to date format' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'datetime-local' },
              { type: 'attribute', name: 'label', value: 'Date Time' },
              { type: 'attribute', name: 'placeholder', value: 'someone@example.com' },
              { type: 'attribute', name: 'help-text', value: 'value is restricted to datetime format' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'email' },
              { type: 'attribute', name: 'label', value: 'Email' },
              { type: 'attribute', name: 'placeholder', value: 'someone@example.com' },
              { type: 'attribute', name: 'help-text', value: 'validate with email address format' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'number' },
              { type: 'attribute', name: 'label', value: 'Number' },
              { type: 'attribute', name: 'placeholder', value: '^d{1,3}$' },
              { type: 'attribute', name: 'help-text', value: 'value is restricted to numbers' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'password' },
              { type: 'attribute', name: 'label', value: 'Password' },
              { type: 'attribute', name: 'password-toggle', value: true },
              { type: 'attribute', name: 'placeholder', value: '.*' },
              { type: 'attribute', name: 'help-text', value: 'use password display format' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'search' },
              { type: 'attribute', name: 'label', value: 'Search' },
              { type: 'attribute', name: 'placeholder', value: '^d{1,3}$' },
              { type: 'attribute', name: 'help-text', value: 'use search format' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'tel' },
              { type: 'attribute', name: 'label', value: 'Tel' },
              { type: 'attribute', name: 'placeholder', value: '+49 1234 567891' },
              { type: 'attribute', name: 'help-text', value: 'Shows optimized keyboard on touch devices or similar' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'text' },
              { type: 'attribute', name: 'label', value: 'Text' },
              { type: 'attribute', name: 'placeholder', value: '.*' },
              { type: 'attribute', name: 'help-text', value: 'default type' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'time' },
              { type: 'attribute', name: 'label', value: 'Time' },
              { type: 'attribute', name: 'placeholder', value: '' },
              { type: 'attribute', name: 'help-text', value: 'value is restricted to time format' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'url' },
              { type: 'attribute', name: 'label', value: 'URL' },
              { type: 'attribute', name: 'name', value: 'url field' },
              { type: 'attribute', name: 'placeholder', value: 'https://www.union-investment.de/' },
              { type: 'attribute', name: 'help-text', value: 'validate with url format' }
            ],
            args
          })}
        </div>
      </div>
    `;
  }
};

/**
 * Demonstrates the various validation options extended from the native input element in addition to error and success styles.
 */

export const Validation = {
  name: 'Validation',
  parameters: {
    controls: {
      include: ['clearable', 'disabled']
    }
  },
  render: (args: any) => {
    return html`
      <form action="" method="get" id="testForm" name="testForm" class="w-[370px]">
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Indicate Valid State' },
              { type: 'attribute', name: 'name', value: 'required field' },
              { type: 'attribute', name: 'placeholder', value: '.*' },
              { type: 'attribute', name: 'help-text', value: 'indicate on valid' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'style-on-valid', value: true },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Required' },
              { type: 'attribute', name: 'name', value: 'required field' },
              { type: 'attribute', name: 'placeholder', value: '.*' },
              { type: 'attribute', name: 'help-text', value: 'input must be filled' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Pattern' },
              { type: 'attribute', name: 'name', value: 'pattern field' },
              { type: 'attribute', name: 'placeholder', value: '[A-Za-z]{3,}' },
              { type: 'attribute', name: 'help-text', value: 'input must match pattern' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'pattern', value: '[A-Za-z]{3,}' },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Min Length' },
              { type: 'attribute', name: 'name', value: 'min length field' },
              { type: 'attribute', name: 'placeholder', value: '^.{3,}$' },
              { type: 'attribute', name: 'help-text', value: 'value must meet minlength' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'minlength', value: 3 },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Max Length' },
              { type: 'attribute', name: 'name', value: 'max length field' },
              { type: 'attribute', name: 'placeholder', value: '^.{0,3}$' },
              { type: 'attribute', name: 'help-text', value: 'value cannot exceed maxlength' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'maxlength', value: 3 },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'number' },
              { type: 'attribute', name: 'label', value: 'Min' },
              { type: 'attribute', name: 'name', value: 'min field' },
              { type: 'attribute', name: 'placeholder', value: '^d{1,3}$' },
              { type: 'attribute', name: 'help-text', value: 'numeric value must be greater than min' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'min', value: 3 },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'number' },
              { type: 'attribute', name: 'label', value: 'Max' },
              { type: 'attribute', name: 'name', value: 'max field' },
              { type: 'attribute', name: 'placeholder', value: '^d{1,3}$' },
              { type: 'attribute', name: 'help-text', value: 'numeric value must not exceed max' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'max', value: 3 },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'email' },
              { type: 'attribute', name: 'label', value: 'Email' },
              { type: 'attribute', name: 'name', value: 'email field' },
              { type: 'attribute', name: 'placeholder', value: 'someone@example.com' },
              { type: 'attribute', name: 'help-text', value: 'value must match email address format' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'date' },
              { type: 'attribute', name: 'label', value: 'Date' },
              { type: 'attribute', name: 'name', value: 'date field' },
              { type: 'attribute', name: 'placeholder', value: 'someone@example.com' },
              { type: 'attribute', name: 'help-text', value: 'value is restricted to date format' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'datetime-local' },
              { type: 'attribute', name: 'label', value: 'Date Time' },
              { type: 'attribute', name: 'name', value: 'datetime field' },
              { type: 'attribute', name: 'placeholder', value: 'someone@example.com' },
              { type: 'attribute', name: 'help-text', value: 'value is restricted to datetime format' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'time' },
              { type: 'attribute', name: 'label', value: 'Time' },
              { type: 'attribute', name: 'name', value: 'time field' },
              { type: 'attribute', name: 'placeholder', value: '' },
              { type: 'attribute', name: 'help-text', value: 'value is restricted to time format' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'url' },
              { type: 'attribute', name: 'label', value: 'URL' },
              { type: 'attribute', name: 'name', value: 'url field' },
              { type: 'attribute', name: 'placeholder', value: 'https://www.union-investment.de/' },
              { type: 'attribute', name: 'help-text', value: 'value must match url format' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              {
                type: 'slot',
                name: 'right',
                value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
              }
            ],
            args
          })}
        </div>
        <sd-button type="submit">Submit</sd-button>
      </form>
      <script>
        function handleSubmit(event) {
          const form = document.querySelector('#testForm');

          const formData = new FormData(form);
          const formValues = Object.fromEntries(formData);

          if (form.reportValidity()) {
            event.preventDefault(); // Prevent the default form submission behavior
            alert('Form submitted with the following values: ' + JSON.stringify(formValues, null, 2));
          }
        }

        document.querySelector('#testForm').addEventListener('submit', handleSubmit);
      </script>
    `;
  }
};

/**
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */

export const Slots = {
  name: 'Slots',
  parameters: {
    controls: {
      exclude: ['label', 'left', 'right', 'clear-icon', 'help-text', 'clearable', 'value']
    }
  },
  render: (args: any) => {
    return html`
      ${['label', 'left', 'right', 'clear-icon', 'help-text'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=...',
              values: [
                {
                  value: `<div slot='${slot}' class="slot slot--border slot--background h-6 ${
                    slot === 'label' || slot === 'help-text' ? 'w-20' : 'w-6'
                  }"></div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
            { type: 'attribute', name: 'clearable', value: true },
            { type: 'attribute', name: 'value', value: 'value' },
            { type: 'attribute', name: 'label', value: 'Label' },
            { type: 'attribute', name: 'help-text', value: 'help-text' },
            {
              type: 'slot',
              name: 'left',
              value: '<sd-icon slot="left" library="global-resources" name="system/picture"></sd-icon>'
            },
            {
              type: 'slot',
              name: 'right',
              value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
            }
          ],
          args
        })
      )}
    `;
  }
};

/**
 * Use the `form-control`, `form-control-label`, `form-control-input`, `form-control-help-text`, `base`, `border`, `input`, `left`, `clear-button`, and `right` part selectors to customize the input.
 */

export const Parts = {
  name: 'Parts',
  parameters: {
    controls: {
      exclude: ['label', 'left', 'right', 'clear-icon', 'help-text', 'clearable', 'value']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-input::part(...){outline: solid 2px red}',
          values: [
            'form-control',
            'form-control-label',
            'form-control-input',
            'form-control-help-text',
            'base',
            'border',
            'input',
            'left',
            'clear-button',
            'right'
          ].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-input::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'attribute', name: 'clearable', value: true },
        { type: 'attribute', name: 'value', value: 'value' },
        { type: 'attribute', name: 'label', value: 'Label' },
        { type: 'attribute', name: 'help-text', value: 'help-text' },
        {
          type: 'slot',
          name: 'left',
          value: '<sd-icon slot="left" library="global-resources" name="system/picture"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'right',
          value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
        }
      ],
      args
    });
  }
};

/**
 * 1. You can use the `setCustomValidity` method to set a custom validation message. This will override any native validation messages.
 * 2. Set an empty string to clear the custom validity and make the input valid.
 * 3. To show the validation message, call the `reportValidity` method. Originally this would show a native validation bubble, but we show the error messages inline.
 */

export const setCustomValidity = {
  name: 'setCustomValidity',
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: () => {
    return html`
      <!-- block submit and show alert instead -->
      <form id="validationForm" class="flex flex-col gap-2">
        <sd-input id="custom-input" label="Input" style-on-valid></sd-input>
        <div>
          <sd-button type="submit">Submit</sd-button>
          <sd-button id="error-button" variant="secondary">Set custom error</sd-button>
          <sd-button id="success-button" variant="secondary">Set success</sd-button>
          <sd-button type="reset" variant="secondary">Reset</sd-button>
        </div>
      </form>
      <script type="module">
        // Wait for custom elements to be defined
        await Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-button')]).then(
          () => {
            const form = document.getElementById('validationForm');
            const input = document.getElementById('custom-input');
            const setErrorButton = document.getElementById('error-button');
            const setSuccessButton = document.getElementById('success-button');

            // Initial error
            const errorMessage = \`This is an initial custom error (\${new Date().toLocaleTimeString()})\`;
            input.setCustomValidity(errorMessage);
            input.reportValidity();

            // Show error message
            setErrorButton.addEventListener('click', () => {
              const errorMessage = \`This is a new custom error (\${new Date().toLocaleTimeString()})\`;
              input.setCustomValidity(errorMessage);
              input.reportValidity();
            });

            // Show success message
            setSuccessButton.addEventListener('click', () => {
              input.setCustomValidity(''); // Clear custom validity
              input.reportValidity();
            });

            form.addEventListener('submit', event => {
              event.preventDefault();
              alert('All fields are valid!');
            });
          }
        );
      </script>
    `;
  }
};

/**
 * `sd-input` is fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless w-[250px]">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-input');
    await waitUntil(() => el?.shadowRoot?.querySelector('input'));
    el?.shadowRoot?.querySelector('input')!.focus();
  }
};

/**
 * Sample implementation of a currency stepper.
 */

export const Samples = {
  name: 'Sample: Currency Stepper',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    return html`
      <div class="w-[250px]">
        <sd-input label="Currency Stepper" id="stepperSampleInput" type="number" min="0"
          ><span slot="right" class="text-sm inline-flex items-center"
            ><span class="text-neutral-700">EUR</span>
            <button
              disabled
              id="stepDownButton"
              @click=${() => {
                const inputEl: SdInput = document.querySelector('#stepperSampleInput')!;
                const stepDownButton: HTMLButtonElement = document.querySelector('#stepDownButton')!;
                const numericValue = parseInt(inputEl.value, 10);
                const stepDownValue = numericValue - 1;

                if (stepDownValue <= 0) {
                  stepDownButton.disabled = true;
                  inputEl.value = '0.00';
                } else {
                  inputEl.stepDown();
                  // Adjust input value to 2 decimals (currency)
                  inputEl.value = String(parseInt(inputEl.value, 10).toFixed(2));
                }
              }}
              class="ml-4 scale-[1.714] inline-flex items-center sd-interactive"
            >
              <sd-icon library="global-resources" name="system/minus-round"></sd-icon>
            </button>
            <button
              id="stepUpButton"
              @click=${() => {
                const inputEl: SdInput = document.querySelector('#stepperSampleInput')!;
                const stepDownButton: HTMLButtonElement = document.querySelector('#stepDownButton')!;
                stepDownButton.disabled = false;
                inputEl.stepUp();
                // Adjust input value to 2 decimals (currency)
                inputEl.value = String(parseInt(inputEl.value, 10).toFixed(2));
              }}
              class="ml-4 scale-[1.714] inline-flex items-center sd-interactive"
            >
              <sd-icon library="global-resources" name="system/plus-round"></sd-icon></button
          ></span>
        </sd-input>
      </div>
    `;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Labels,
  HelpText,
  Placeholders,
  Clearable,
  TogglePassword,
  Disabled,
  Readonly,
  Sizes,
  StyleOnValid,
  Types,
  Validation,
  Slots,
  Parts,
  setCustomValidity,
  Mouseless,
  Samples
]);
