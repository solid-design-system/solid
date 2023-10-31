import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
  args,
  argTypes,
  parameters: { ...parameters },
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
  render: (args: any) => {
    return html`
      <div class="w-[231px]">
        ${generateTemplate({
          constants: [
            { type: 'attribute', name: 'value', value: 'value' },
            { type: 'attribute', name: 'label', value: 'label' },
            { type: 'attribute', name: 'help-text', value: 'help-text' },
            { type: 'attribute', name: 'disabled', value: true },
            {
              type: 'slot',
              name: 'right',
              value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
            }
          ],
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
  render: (args: any) => {
    return html`
      <div class="w-[231px]">
        ${generateTemplate({
          constants: [
            { type: 'attribute', name: 'value', value: 'value' },
            { type: 'attribute', name: 'label', value: 'label' },
            { type: 'attribute', name: 'help-text', value: 'help-text' },
            { type: 'attribute', name: 'readonly', value: true },
            {
              type: 'slot',
              name: 'right',
              value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
            }
          ],
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
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'size' }
      },
      constants: [
        { type: 'attribute', name: 'placeholder', value: 'placeholder' },
        { type: 'attribute', name: 'label', value: 'label' },
        { type: 'attribute', name: 'help-text', value: 'help-text' },
        { type: 'attribute', name: 'clearable', value: true },
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

export const Form = {
  render: (args: any) => {
    return html`
      <form action="" method="get" id="testForm" name="testForm">
        <div class="">
          ${generateTemplate({
            constants: [
              { type: 'attribute', name: 'required', value: false },
              { type: 'attribute', name: 'pattern', value: '[A-Za-z]{3}' },
              { type: 'attribute', name: 'form', value: 'testForm' },
              { type: 'attribute', name: 'name', value: 'testField' },
              { type: 'attribute', name: 'placeholder', value: 'placeholder' },
              { type: 'attribute', name: 'label', value: 'label' },
              { type: 'attribute', name: 'help-text', value: 'help-text' },
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
        <sd-button type="submit">Submit</sd-button>
      </form>
      <script>
        const form = document.querySelector('#testForm');
        const sdinput = document.querySelector('sd-input');

        function handleSubmit(event) {
          if (sdinput.checkValidity()) {
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData);
            alert('Form submitted successfully with the following values:' + JSON.stringify(formValues));
          }
        }

        form.addEventListener('submit', handleSubmit);
      </script>
    `;
  }
};

/**
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */

export const Slots = {
  parameters: {
    controls: { exclude: [] }
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
            { type: 'slot', name: 'label', value: 'label' },
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
