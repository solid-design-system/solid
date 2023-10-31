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
 * Default: This shows sd-input in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Dev: Temporary Dev story
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
        { type: 'attribute', name: 'message', value: 'message' },
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
        <div class="w-1/2">
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
