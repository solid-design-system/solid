import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');
const { overrideArgs } = storybookHelpers('sd-input');

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
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
  render: (args: any) => {
    return html`<div class="w-[231px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * Use the disabled attribute to disable an input. All interaction is disabled and no events will be fired.
 */

export const Disabled = {
  parameters: {
    controls: {
      exclude: ['disabled']
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'label' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
  ]),
  render: (args: any) => {
    return html`
      <div class="w-[231px]">
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
  parameters: {
    controls: {
      exclude: ['readonly']
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'label' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
  ]),
  render: (args: any) => {
    return html`
      <div class="w-[231px]">
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
  parameters: {
    controls: {
      exclude: ['size']
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'label' },
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
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */

export const Slots = {
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
                    slot === 'label' || slot === 'help-text' ? 'w-18' : 'w-6'
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
            { type: 'attribute', name: 'label', value: 'label' },
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
        { type: 'attribute', name: 'label', value: 'label' },
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
 * Demonstrates the various validation options extended from the native input element in addition to error and success styles.
 */

export const Validation = {
  parameters: {
    controls: {
      exclude: [
        'title',
        'type',
        'size',
        'inputmode',
        'value',
        'placeholder',
        'label',
        'help-text',
        'message',
        'clearable',
        'disabled',
        'readonly',
        'password-toggle',
        'password-visible',
        'no-spin-buttons',
        'minlength',
        'maxlength',
        'min',
        'max',
        'form',
        'name',
        'required',
        'pattern',
        'step'
      ]
    }
  },
  render: (args: any) => {
    return html`
      <form action="" method="get" id="testForm" name="testForm" class="w-[370px]">
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Required' },
              { type: 'attribute', name: 'name', value: 'required field' },
              { type: 'attribute', name: 'placeholder', value: '.*' },
              { type: 'attribute', name: 'help-text', value: 'input must be filled' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'clearable', value: true },
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
              { type: 'attribute', name: 'clearable', value: true },
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
              { type: 'attribute', name: 'clearable', value: true },
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
              { type: 'attribute', name: 'clearable', value: true },
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
          const sdInputs = Array.from(document.querySelectorAll('sd-input'));

          const isValid = sdInput => sdInput.checkValidity();

          if (sdInputs.every(isValid)) {
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData);

            alert('Form submitted successfully with the following values: ' + JSON.stringify(formValues, null, 2));
          }
        }

        document.querySelector('#testForm').addEventListener('submit', handleSubmit);
      </script>
    `;
  }
};

/**
 * `sd-input` is fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless w-[231px]">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-input');
    await waitUntil(() => el?.shadowRoot?.querySelector('input'));
    el?.shadowRoot?.querySelector('input')!.focus();
  }
};
