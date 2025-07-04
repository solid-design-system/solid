import '../../../../components/src/solid-components';
import { html } from 'lit';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Input',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2700-7262&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * ### Input with Currency Stepper
 */
export const InputWithCurrencyStepper = {
  render: () =>
    html`<div class="w-[250px]">
        <sd-input label="Currency stepper" id="stepperSampleInput" type="number" spin-buttons min="0" value="0.00">
          <span slot="right" class="text-sm inline-flex items-center">
            <span class="text-neutral-700">EUR</span>
          </span>
        </sd-input>
      </div>
      <script type="module">
        const stepper = document.getElementById('stepperSampleInput');

        stepper.addEventListener('sd-change', event => {
          stepper.value = String(parseInt(event.target.value, 10).toFixed(2));
        });
      </script> `
};
