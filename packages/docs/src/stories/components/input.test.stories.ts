import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from 'storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');
const { overrideArgs } = storybookHelpers('sd-input');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-input/Screenshots: sd-input',
  component: 'sd-input',
  tags: ['!autodocs'],
  args: overrideArgs([{ type: 'attribute', name: 'label', value: 'Label' }]),
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
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xSIeTnyfW2T21Uw5JgdZOg/Input?node-id=0%3A1&mode=dev'
    }
  }
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
  name: 'Toggle password',
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
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'Help-text' }
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
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'Help-text' }
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
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'Help-text' },
    { type: 'attribute', name: 'clearable', value: true },
    {
      type: 'slot',
      name: 'right',
      value: '<sd-icon slot="right" name="system/image"></sd-icon>'
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
  name: 'Style on valid',
  args: overrideArgs([
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'Help-text' },
    { type: 'attribute', name: 'clearable', value: true },
    {
      type: 'slot',
      name: 'right',
      value: '<sd-icon slot="right" name="system/image"></sd-icon>'
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
  render: (args: any) => {
    return html`
      <div class="w-[370px]">
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'date' },
              { type: 'attribute', name: 'label', value: 'Date' },
              { type: 'attribute', name: 'placeholder', value: 'name@example.com' },
              { type: 'attribute', name: 'help-text', value: 'Value is restricted to date format' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'datetime-local' },
              { type: 'attribute', name: 'label', value: 'Date Time' },
              { type: 'attribute', name: 'placeholder', value: 'name@example.com' },
              { type: 'attribute', name: 'help-text', value: 'Value is restricted to datetime format' }
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
              { type: 'attribute', name: 'help-text', value: 'Validate with email address format' }
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
              { type: 'attribute', name: 'help-text', value: 'Value is restricted to numbers' }
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
              { type: 'attribute', name: 'help-text', value: 'Use password display format' }
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
              { type: 'attribute', name: 'help-text', value: 'Use search format' }
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
              { type: 'attribute', name: 'help-text', value: 'Default type' }
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
              { type: 'attribute', name: 'help-text', value: 'Value is restricted to time format' }
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
              { type: 'attribute', name: 'help-text', value: 'Validate with url format' }
            ],
            args
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'number' },
              { type: 'attribute', name: 'label', value: 'Spin Buttons' },
              { type: 'attribute', name: 'min', value: 0 },
              { type: 'attribute', name: 'max', value: 100 },
              { type: 'attribute', name: 'spin-buttons', value: 'true' }
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
  render: (args: any) => {
    return html`
      <form action="" method="get" id="testForm" name="testForm" class="w-[370px]">
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Indicate Valid State' },
              { type: 'attribute', name: 'name', value: 'valid-field' },
              { type: 'attribute', name: 'placeholder', value: '' },
              { type: 'attribute', name: 'help-text', value: '' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'style-on-valid', value: true }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Required' },
              { type: 'attribute', name: 'name', value: 'required-field' },
              { type: 'attribute', name: 'placeholder', value: '' },
              { type: 'attribute', name: 'help-text', value: '' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Pattern' },
              { type: 'attribute', name: 'name', value: 'pattern-field' },
              { type: 'attribute', name: 'placeholder', value: '' },
              { type: 'attribute', name: 'help-text', value: 'Please use the pattern [A-Za-z]{3,}' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'pattern', value: '[A-Za-z]{3,}' }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'label', value: 'Min Length' },
              { type: 'attribute', name: 'name', value: 'minlength-field' },
              { type: 'attribute', name: 'placeholder', value: '' },
              { type: 'attribute', name: 'help-text', value: 'Please type in at least 3 characters' },
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
              { type: 'attribute', name: 'name', value: 'maxlength-field' },
              { type: 'attribute', name: 'placeholder', value: '{8}' },
              { type: 'attribute', name: 'help-text', value: 'Max. 3 Characters are allowed' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'maxlength', value: 3 }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'number' },
              { type: 'attribute', name: 'label', value: 'Min' },
              { type: 'attribute', name: 'name', value: 'min-field' },
              { type: 'attribute', name: 'placeholder', value: '' },
              { type: 'attribute', name: 'help-text', value: 'The number must be greater than or equal to 3' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'min', value: 3 }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'number' },
              { type: 'attribute', name: 'label', value: 'Max' },
              { type: 'attribute', name: 'name', value: 'max-field' },
              { type: 'attribute', name: 'placeholder', value: '3' },
              { type: 'attribute', name: 'help-text', value: 'The number must be smaller than or equal to 3' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true },
              { type: 'attribute', name: 'max', value: 3 }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'email' },
              { type: 'attribute', name: 'label', value: 'Email' },
              { type: 'attribute', name: 'name', value: 'email-field' },
              { type: 'attribute', name: 'placeholder', value: 'name@example.com' },
              { type: 'attribute', name: 'help-text', value: 'Please use the format name@example.com' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'date' },
              { type: 'attribute', name: 'label', value: 'Date' },
              { type: 'attribute', name: 'name', value: 'date-field' },
              { type: 'attribute', name: 'placeholder', value: 'tt.mm.jjjj' },
              { type: 'attribute', name: 'help-text', value: 'Please use the format tt.mm.jjjj' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'datetime-local' },
              { type: 'attribute', name: 'label', value: 'Date time' },
              { type: 'attribute', name: 'name', value: 'datetime-field' },
              { type: 'attribute', name: 'placeholder', value: 'tt.mm.jjjj, hh:mm' },
              { type: 'attribute', name: 'help-text', value: 'Please use the format tt.mm.jjjj, hh:mm' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'time' },
              { type: 'attribute', name: 'label', value: 'Time' },
              { type: 'attribute', name: 'name', value: 'time-field' },
              { type: 'attribute', name: 'placeholder', value: 'hh:mm' },
              { type: 'attribute', name: 'help-text', value: 'Please use the format hh:mm' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true }
            ],
            args
          })}
        </div>

        <div class="mb-2">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'type', value: 'url' },
              { type: 'attribute', name: 'label', value: 'URL' },
              { type: 'attribute', name: 'name', value: 'url-field' },
              { type: 'attribute', name: 'placeholder', value: 'https://www.union-investment.de/' },
              { type: 'attribute', name: 'help-text', value: 'Please use the format https://www.example.de/' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'required', value: true }
            ],
            args
          })}
        </div>

        <sd-button type="submit">Submit</sd-button>
      </form>

      <script type="module">
        await Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-button')]);

        const form = document.querySelector('#testForm');
        const fields = Array.from(form.querySelectorAll('sd-input')).map(el => ({
          el,
          native: el.shadowRoot.querySelector('input')
        }));

        let formSubmitted = false;

        function getMessage(name) {
          switch (name) {
            case 'valid-field':
            case 'required-field':
              return 'Please correct your input.';
            case 'pattern-field':
              return 'The input does not meet the required format. Please correct your input.';
            case 'minlength-field':
              return 'At least 3 characters are needed. Please correct your input.';
            case 'maxlength-field':
              return 'Maximum 3 characters are allowed. Please correct your input.';
            case 'min-field':
              return 'Enter a number 3 or greater.';
            case 'max-field':
              return 'Enter a number 3 or less.';
            case 'email-field':
              return 'Enter a valid email address (e.g., name@example.com).';
            case 'date-field':
              return 'Enter a valid date (tt.mm.jjjj).';
            case 'datetime-field':
              return 'Enter a valid date and time (tt.mm.jjjj, hh:mm).';
            case 'time-field':
              return 'Enter a valid time (hh:mm).';
            case 'url-field':
              return 'Enter a valid URL (e.g., https://www.example.de/).';
            default:
              return 'Please correct your input.';
          }
        }

        // Always prevent validation while typing
        form.addEventListener(
          'sd-input',
          ev => {
            ev.stopImmediatePropagation();
            fields.forEach(({ el, native }) => {
              el.setCustomValidity('');
              native.setCustomValidity('');
              el.removeAttribute('data-user-invalid');
            });
          },
          { capture: true }
        );

        // Always block native invalid events
        form.addEventListener('invalid', e => e.preventDefault(), { capture: true });

        // Set custom messages BEFORE form validation runs
        form.addEventListener(
          'submit',
          () => {
            fields.forEach(({ el, native }) => {
              el.setCustomValidity('');
              native.setCustomValidity('');
              if (!native.validity.valid) {
                const msg = getMessage(el.getAttribute('name'));
                native.setCustomValidity(msg);
                el.setCustomValidity(msg);
              }
            });
          },
          { capture: true }
        );

        // Handle submit
        form.addEventListener('submit', e => {
          e.preventDefault();
          formSubmitted = true;
          if (form.checkValidity()) {
            alert(
              'Form submitted with the following values: ' +
                JSON.stringify(Object.fromEntries(new FormData(form)), null, 2)
            );
          }
        });
      </script>
    `;
  }
};

/**
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */

export const Slots = {
  name: 'Slots',
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
                  value: `<div slot='${slot}'
                   class="slot slot--border slot--background h-6 ${
                     slot === 'label' || slot === 'help-text' ? 'w-20' : 'w-6'
                   }">${slot === 'label' ? 'Label' : ''}</div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
            { type: 'attribute', name: 'clearable', value: true },
            { type: 'attribute', name: 'value', value: 'Value' },
            { type: 'attribute', name: 'label', value: 'Label' },
            { type: 'attribute', name: 'help-text', value: 'Help-text' },
            {
              type: 'slot',
              name: 'left',
              value: '<sd-icon slot="left" name="system/image"></sd-icon>'
            },
            {
              type: 'slot',
              name: 'right',
              value: '<sd-icon slot="right" name="system/image"></sd-icon>'
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
        { type: 'attribute', name: 'value', value: 'Value' },
        { type: 'attribute', name: 'label', value: 'Label' },
        { type: 'attribute', name: 'help-text', value: 'Help-text' },
        {
          type: 'slot',
          name: 'left',
          value: '<sd-icon slot="left" name="system/image"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'right',
          value: '<sd-icon slot="right" name="system/image"></sd-icon>'
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
            const errorMessage = \`This is an initial custom error.\`;
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
  Mouseless
]);
