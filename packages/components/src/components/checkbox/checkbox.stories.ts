import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
const { argTypes, parameters } = storybookDefaults('sd-checkbox');
const { generateTemplate } = storybookTemplate('sd-checkbox');
const { overrideArgs } = storybookHelpers('sd-checkbox');

export default {
  title: 'Components/sd-checkbox',
  component: 'sd-checkbox',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
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
 * Default: This shows sd-checkbox in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the disabled attribute to disable an input checkbox. Clicks will be suppressed until the disabled state is removed
 */

export const DisabledAndSize = {
  name: 'Disabled × Size',
  parameters: { controls: { exclude: ['disabled', 'size', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        },
        y: [
          {
            type: 'attribute',
            name: 'size',
            values: ['lg', 'sm']
          }
        ]
      },
      constants: { type: 'attribute', name: 'disabled', value: true },
      args
    });
  }
};

/**
 * Use the `size` attribute to change the size of the input checkbox. This attribute affects the font-size within the element, while the element itself remains the same size.
 */

export const Size = {
  parameters: { controls: { exclude: ['size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'sm']
        }
      },
      args
    });
  }
};

export const MultipleLines = {
  parameters: { controls: { exclude: ['size'] } },
  render: () => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'sm']
        }
      },
      args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot<br />Second Line' }])
    });
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
        x: [{ type: 'attribute', name: 'size', values: ['lg', 'sm'] }],
        y: { type: 'attribute', name: 'required' }
      },
      args
    });
  }
};

export const Checked = {
  parameters: { controls: { exclude: ['checked'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        },
        y: [
          {
            type: 'attribute',
            name: 'size',
            values: ['lg', 'sm']
          }
        ]
      },
      constants: { type: 'attribute', name: 'checked', value: true },
      args
    });
  }
};

export const Indeterminate = {
  parameters: { controls: { exclude: ['indeterminate'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        },
        y: [
          {
            type: 'attribute',
            name: 'size',
            values: ['lg', 'sm']
          }
        ]
      },
      constants: { type: 'attribute', name: 'indeterminate', value: true },
      args
    });
  }
};

/**
 * Test invalid state inside a form.
 */

export const Invalid = {
  parameters: { controls: { exclude: ['required'] } },
  render: (args: any) => {
    return html`
      <form>
        ${generateTemplate({
          args,
          constants: [{ type: 'attribute', name: 'required', value: true }]
        })}
        <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
      </form>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('sd-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

export const IndeterminateInvalid = {
  parameters: { controls: { exclude: ['required', 'indeterminate'] } },
  render: (args: any) => {
    return html`
      <form>
        ${generateTemplate({
          args,
          constants: [
            { type: 'attribute', name: 'required', value: true },
            { type: 'attribute', name: 'indeterminate', value: true }
          ]
        })}
        <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
      </form>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('sd-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

/**
 * Use the `base`, `control--unchecked`, `control--checked`, `checked` and `label` part selectors to customize the checkbox.
 */
export const Parts = {
  parameters: {
    controls: {
      exclude: [
        'base',
        'control',
        'control--unchecked',
        'control--checked',
        'checked-icon',
        'control--indeterminate',
        'indeterminate-icon',
        'label',
        'title',
        'name',
        'value',
        'size',
        'disabled',
        'checked',
        'indeterminate',
        'form',
        'required',
        'default'
      ]
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-checkbox::part(...){outline: solid 2px red}',
          values: [
            'base',
            'control',
            'control--unchecked',
            'control--checked',
            'checked-icon',
            'control--indeterminate',
            'indeterminate-icon',
            'label'
          ].map(part => {
            return {
              title: part,
              value: `
                <style>
                    #part-${part} sd-checkbox::part(${part}){outline: solid 2px red};
                    .hidden {display: none}
                </style>
                <div id="part-${part}">${checkboxTemplate(part)}</div>
                <div class="hidden">%TEMPLATE%</div>
              `
            };
          })
        }
      },
      args
    });
  }
};

const checkboxTemplate = (part: string) => {
  switch (part) {
    case 'control--checked':
      return `<sd-checkbox checked>Default Slot</sd-checkbox>`;
    case 'checked-icon':
      return `<sd-checkbox checked>Default Slot</sd-checkbox>`;
    case 'control--indeterminate':
      return `<sd-checkbox indeterminate>Default Slot</sd-checkbox>`;
    case 'indeterminate-icon':
      return `<sd-checkbox indeterminate>Default Slot</sd-checkbox>`;
    case 'form-control-error-text':
      return `<sd-checkbox error-text="Error message" invalid>Default Slot</sd-checkbox>`;
    default:
      return `<sd-checkbox>Default Slot</sd-checkbox>`;
  }
};

/**
 * 1. You can use the `setCustomValidity` method to set a custom validation message. This will override any native validation messages.
 * 2. Set an empty string to clear the custom validity and make the input valid.
 * 3. To show the validation message, call the `reportValidity` method. Originally this would show a native validation bubble, but we show the error messages inline.
 */

export const setCustomValidity = {
  chromatic: { disableSnapshot: true },
  render: () => {
    return html`
      <!-- block submit and show alert instead -->
      <form id="validationForm" class="flex flex-col gap-2">
        <sd-checkbox id="custom-input">Checkbox</sd-checkbox>
        <div>
          <sd-button type="submit">Submit</sd-button>
          <sd-button id="error-button" variant="secondary">Set custom error</sd-button>
          <sd-button id="success-button" variant="secondary">Set success</sd-button>
          <sd-button type="reset" variant="secondary">Reset</sd-button>
        </div>
      </form>
      <script type="module">
        // Wait for custom elements to be defined
        await Promise.all([customElements.whenDefined('sd-checkbox'), customElements.whenDefined('sd-button')]).then(
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
