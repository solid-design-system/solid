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

const { argTypes, args, parameters } = storybookDefaults('sd-textarea');
const { generateTemplate } = storybookTemplate('sd-textarea');
const { overrideArgs } = storybookHelpers('sd-textarea');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-textarea/Screenshots: sd-textarea',
  tags: ['!autodocs'],
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
  name: 'Default',
  args: overrideArgs([
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
  ]),
  render: (args: any) => {
    return html`<div class="w-[250px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * Use the `placeholder` attribute to add a placeholder.
 */

export const Placeholders = {
  name: 'Placeholders',
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
 * Use the readonly attribute to render a textarea as readonly.  Interaction is enabled, but the textarea cannot be edited.  Events will be fired.
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
 * This shows sd-textarea in its various sizes.
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
 * Per default the input will indicate an error state when the input is invalid. Use the `style-on-valid` attribute to opt-in the automatic indication of a valid state as well.
 */

export const StyleOnValid = {
  name: 'Style on valid',
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
    const els = canvasElement.querySelectorAll('sd-textarea');

    for (const el of els) {
      await waitUntil(() => el?.shadowRoot?.querySelector('textarea'));
      await userEvent.type(el.shadowRoot!.querySelector('textarea')!, 'e');
    }

    // tab to next element to loose focus
    await userEvent.tab();
  }
};

/**
 * Demonstrates the various validation options extended from the native textarea element in addition to error and success styles.
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
              { type: 'attribute', name: 'label', value: 'Required' },
              { type: 'attribute', name: 'name', value: 'required field' },
              { type: 'attribute', name: 'help-text', value: 'textarea must be filled' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'style-on-valid', value: true }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Min Length' },
              { type: 'attribute', name: 'name', value: 'min length field' },
              { type: 'attribute', name: 'help-text', value: 'value must meet minlength' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'minlength', value: 3 },
              { type: 'attribute', name: 'style-on-valid', value: true }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Max Length' },
              { type: 'attribute', name: 'name', value: 'max length field' },
              { type: 'attribute', name: 'help-text', value: 'value cannot exceed maxlength' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'maxlength', value: 3 },
              { type: 'attribute', name: 'style-on-valid', value: true }
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
        <sd-textarea id="custom-input" label="Input" style-on-valid></sd-textarea>
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
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */

export const Slots = {
  name: 'Slots',
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
  name: 'Parts',
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
 * This shows sd-textarea takes the full height of the parent container.
 */
export const ResponsiveHeight = {
  name: 'Responsive Height',
  args: overrideArgs([
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
  ]),
  render: (args: any) => {
    return html`<div class="w-[250px] h-[500px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * `sd-textarea` is fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
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

export const Combination = generateScreenshotStory([
  Default,
  Placeholders,
  Disabled,
  Readonly,
  Sizes,
  StyleOnValid,
  Validation,
  setCustomValidity,
  Slots,
  Parts,
  Mouseless
]);
