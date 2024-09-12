import '../solid-components';
import { html } from 'lit-html';
import type SdInput from '../components/input/input';

/**
 * Use the html `start` attribute to set the starting number of the list. The default value is '1'.
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Input with Currency Stepper',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

export const Default = {
  render: () =>
    html`<div class="w-[250px]">
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
    </div> `
};
