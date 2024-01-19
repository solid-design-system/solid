import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-radio-group');
const { generateTemplate } = storybookTemplate('sd-radio-group');
const { overrideArgs } = storybookHelpers('sd-radio-group');

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
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
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The sd-radio in all possible combinations of `orientation` and `size`.
 */

export const Orientation = {
  parameters: { controls: { exclude: ['orientation', 'size', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'orientation' },
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * Use the disabled attribute to disable a input radio. Clicks will be suppressed until the disabled state is removed
 */

export const Disabled = {
  name: 'Disabled x Size',
  parameters: { controls: { exclude: ['size', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          {
            type: 'slot',
            name: 'default',
            title: 'disabled',
            values: [
              {
                value:
                  '<sd-radio value="1" disabled>Option 1</sd-radio><sd-radio value="2">Option 2</sd-radio><sd-radio value="3">Option 3</sd-radio>',
                title: 'true'
              },
              {
                value:
                  '<sd-radio value="1">Option 1</sd-radio><sd-radio value="2">Option 2</sd-radio><sd-radio value="3">Option 3</sd-radio>',
                title: 'false'
              }
            ]
          }
        ],
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * Use the `invalid` attribute to mark the element is not in a format or a value the application will accept.
 */

export const Invalid = {
  parameters: { controls: { exclude: ['size', 'value', 'required', 'invalid'] } },
  render: (args: any) => {
    return html`<form>
      ${generateTemplate({
        constants: [
          { type: 'attribute', name: 'required', value: true },
          { type: 'attribute', name: 'value', value: '' }
        ],
        args
      })}
      <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
    </form>`;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('sd-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */

export const Required = {
  parameters: { controls: { exclude: ['required'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [{ type: 'attribute', name: 'size' }],
        y: { type: 'attribute', name: 'required' }
      },
      args
    });
  }
};

/**
 * Use the `form-control`, `form-control-label` and `form-control-input` part selectors to customize the radio-group.
 */
export const Parts = {
  parameters: {
    controls: { exclude: ['form-control', 'form-control-label', 'form-control-input'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-radio-group::part(...){outline: solid 2px red}',
          values: ['form-control', 'form-control-label', 'form-control-input'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-radio-group::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [{ type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }],
      args
    });
  }
};

/**
 * sd-radio-group are fully accessibile via keyboard.
 */
export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-radio-group');
    await waitUntil(() => el?.shadowRoot?.querySelector('label'));

    if (el?.shadowRoot) {
      const label = el.shadowRoot.querySelector('label');
      if (label) {
        await userEvent.type(label, '{space}', { pointerEventsCheck: 0 });
      }
    }
  }
};

/**
 * This shows `sd-radio-group` using multiple `sd-radio-buttons` in it's default state.
 */

export const RadioButtons = {
  parameters: { controls: { exclude: ['default', 'size', 'value', 'required', 'invalid', 'label', 'orientation'] } },
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [
        {
          type: 'slot',
          name: 'default',
          value:
            '<sd-radio-button value="1" showLabel><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon><div>Label</div></sd-radio-button><sd-radio-button value="2" showLabel><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon><div>Label</div></sd-radio-button><sd-radio-button value="3" showLabel><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon><div>Label</div></sd-radio-button>'
        },
        {
          type: 'slot',
          name: 'label',
          value: ``
        }
      ]
    });
  }
};

/**
 * `sd-radio-group` with multiple `sd-radio-buttons` is fully accessibile via keyboard.
 */

export const MouselessWithRadioButtons = {
  parameters: { controls: { exclude: ['default', 'size', 'value', 'required', 'invalid', 'label', 'orientation'] } },
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<sd-radio-button value="1"><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon></sd-radio-button><sd-radio-button value="2"><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-icon></sd-radio-button><sd-radio-button value="3"><sd-icon library="global-resources" name="system/picture" slot="icon"></sd-radio-button>'
          },
          {
            type: 'attribute',
            name: 'value',
            value: `2`
          },
          {
            type: 'slot',
            name: 'label',
            value: ``
          }
        ]
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelectorAll('.mouseless sd-radio-button')[1];
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    el?.shadowRoot?.querySelector('button')!.focus();
  }
};

/**
 * 1. You can use the `setCustomValidity` method to set a custom validation message. This will override any native validation messages.
 * 2. Set an empty string to clear the custom validity and make the input valid.
 * 3. To show the validation message, call the `reportValidity` method. Originally this would show a native validation bubble, but we show the error messages inline.
 */

export const setCustomValidity = {
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: () => {
    return html`
      <!-- block submit and show alert instead -->
      <form id="validationForm" class="flex flex-col gap-2">
        <sd-radio-group id="custom-input">
          <sd-radio id="radio-1" name="a" value="1">1</sd-radio>
          <sd-radio id="radio-2" name="a" value="2">2</sd-radio>
        </sd-radio-group>
        <div>
          <sd-button type="submit">Submit</sd-button>
          <sd-button id="error-button" variant="secondary">Set custom error</sd-button>
          <sd-button id="success-button" variant="secondary">Set success</sd-button>
          <sd-button type="reset" variant="secondary">Reset</sd-button>
        </div>
      </form>
      <script type="module">
        // Wait for custom elements to be defined
        await Promise.all([
          customElements.whenDefined('sd-radio-group'),
          customElements.whenDefined('sd-button'),
          customElements.whenDefined('sd-radio')
        ]).then(() => {
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
        });
      </script>
    `;
  }
};
