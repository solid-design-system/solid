import '../../../../components/src/solid-components';
import { html } from 'lit';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Input',
  parameters: {
    relatedLinks: ['components/sd-input'],
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2700-7262&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 *
 * Example of how to configure a text input for currency entry with an appropriate label.
 * Use this pattern for straightforward monetary fields such as a savings amount, where no stepping controls are needed.
 */
export const InputWithCurrency = {
  render: () => html`
    <div class="max-w-[300px]">
      <sd-input label="Monthly savings" id="currencyInput" type="number" value="100">
        <span slot="right" class="text-sm inline-flex items-center text-primary"> EUR </span>
      </sd-input>
    </div>
  `
};

/**
 *
 * Example of how to use a numeric input with a stepper control for currency values, formatted to two decimal places.
 * This variant suits cases where users may want to increment or decrement the amount in precise steps rather than typing freely.
 */
export const InputWithCurrencyStepper = {
  render: () =>
    html`<div class="max-w-[300px]">
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

/**
 * Example of how to use a floating label that transitions from placeholder to a small label above the value once the field is filled.
 */
export const InputWithFloatingLabel = {
  render: () =>
    html`<div class="max-w-[300px]">
      <sd-input type="email" placeholder="someone@example.com" label="Email" spellcheck floating-label></sd-input>
    </div> `
};

/**
 *
 * In these use cases, the surrounding elements work together to reinforce the field's
 * purpose visually — but WCAG 2.2 compliance itself rests on the hidden label being
 * implemented correctly.
 */
export const InputWithVisuallyHiddenLabel = {
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'label-title-only',
            enabled: false
          }
        ]
      }
    }
  },
  render: () => html`
    <div class="flex flex-col gap-8">
      <section>
        <h3 class="text-base font-bold mb-4">Search input</h3>

        <p class="text-sm mb-8 max-w-[620px]">
          This example relies visually on the heading, search icon, and placeholder to communicate purpose, and the
          hidden label “Search transactions” for accessibility.
        </p>

        <h4 class="text-primary font-bold text-xl mb-4">Transactions</h4>

        <div class="max-w-[520px]">
          <sd-input type="search" placeholder="Search by merchant, amount, or reference">
            <span slot="label" class="sr-only">Search transactions</span>
          </sd-input>
        </div>
      </section>

      <section>
        <h3 class="text-base font-bold mb-4">Input in a clear context</h3>

        <p class="text-sm mb-8 max-w-[620px]">
          This example relies visually on the surrounding subscription content to communicate purpose and the hidden
          label “Email address” for accessibility.
        </p>

        <div class="flex flex-col gap-4">
          <div class="sd-container sd-container--variant-primary-100">
            <div class="flex flex-col gap-16 lg:flex-row lg:items-center">
              <div class="flex flex-col items-start gap-4 lg:flex-1 lg:flex-row">
                <sd-icon name="content/newsletter" color="primary" class="h-24 w-24 shrink-0"></sd-icon>

                <h4 class="sd-headline sd-headline--size-3xl">
                  More Solid. More perks. Don't miss out and subscribe today!
                </h4>
              </div>

              <div class="flex w-full flex-col items-start gap-4 lg:flex-1">
                <sd-input class="w-full" type="email" placeholder="Email address">
                  <span slot="label" class="sr-only">Email address</span>
                </sd-input>

                <sd-button variant="cta" size="sm">Subscribe to newsletter</sd-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};
