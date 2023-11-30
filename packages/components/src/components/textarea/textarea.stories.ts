import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-textarea');
const { generateTemplate } = storybookTemplate('sd-textarea');
const { overrideArgs } = storybookHelpers('sd-textarea');

export default {
  title: 'Components/sd-textarea',
  component: 'sd-textarea',
  args,
  argTypes: {
    ...argTypes
  },
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/07Bzd23A0QSrSWiXy6w2uM/Text-Area?node-id=1010%3A1736&mode=dev'
    }
  },
  decorators: [withActions] as any
};

/**
 * This shows sd-textarea in its default state.
 */
export const Default = {
  args: overrideArgs([
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'help-text', value: 'help-text' },
  ]),
  render: (args: any) => {
    return html`<div class="w-[250px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * Use the `placeholder` attribute to add a placeholder.
 */

export const Placeholders = {
  args: overrideArgs([
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'placeholder', value: 'Placeholder' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
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
 * Use the disabled attribute to disable a textarea. All interaction is disabled and no events will be fired.
 */
export const Disabled = {
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
 * Use the readonly attribute to render a textarea as readonly.  Interaction is enabled, but the textarea cannot be edited.  Events will be fired.
 */
export const Readonly = {
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
 * This shows sd-textarea in its various sizes.
 */

export const Sizes = {
  parameters: {
    controls: {
      exclude: ['size']
    }
  },
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
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
 * Demonstrates the various validation options extended from the native textarea element in addition to error and success styles.
 */

export const Validation = {
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
              { type: 'attribute', name: 'label', value: 'Required' },
              { type: 'attribute', name: 'name', value: 'required field' },
              { type: 'attribute', name: 'placeholder', value: '.*' },
              { type: 'attribute', name: 'help-text', value: 'textarea must be filled' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true }
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
              { type: 'attribute', name: 'minlength', value: 3 }
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
              { type: 'attribute', name: 'maxlength', value: 3 }
            ],
            args
          })}
        </div>
        <sd-button type="submit">Submit</sd-button>
      </form>
      <script>
        function handleSubmit(event) {
          const form = document.querySelector('#testForm');
          const sdTextarea = Array.from(document.querySelectorAll('sd-textarea'));

          const isValid = sdTextarea => sdTextarea.checkValidity();

          if (sdTextarea.every(isValid)) {
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
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */

export const Slots = {
  parameters: {
    controls: {
      exclude: ['label', 'help-text', 'value']
    }
  },
  render: (args: any) => {
    return html`
      ${['label', 'help-text'].map(slot =>
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
            { type: 'attribute', name: 'value', value: 'value' },
            { type: 'attribute', name: 'label', value: 'Label' },
            { type: 'attribute', name: 'help-text', value: 'help-text' }
          ],
          args
        })
      )}
    `;
  }
};

/**
 * Use the `form-control`, `form-control-label`, `form-control-input`, `form-control-help-text`, `base`, `border`, and `textarea` part selectors to customize the input.
 */

export const Parts = {
  parameters: {
    controls: {
      exclude: ['label', 'help-text', 'value']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-textarea::part(...){outline: solid 2px red}',
          values: [
            'form-control',
            'form-control-label',
            'form-control-input',
            'form-control-help-text',
            'base',
            'border',
            'textarea'
          ].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-textarea::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'attribute', name: 'value', value: 'value' },
        { type: 'attribute', name: 'label', value: 'Label' },
        { type: 'attribute', name: 'help-text', value: 'help-text' }
      ],
      args
    });
  }
};

/**
 * `sd-textarea` is fully accessibile via keyboard.
 */

export const Mouseless = {
  args: overrideArgs([
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
  ]),
  render: (args: any) => {
    return html`<div class="mouseless w-[250px]">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-textarea');
    await waitUntil(() => el?.shadowRoot?.querySelector('textarea'));
    el?.shadowRoot?.querySelector('textarea')!.focus();
  }
};
