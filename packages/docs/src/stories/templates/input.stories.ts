import '../../../../components/src/solid-components';
import { html } from 'lit';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Input',
  parameters: {
    relatedLinks: ['components/sd-input'],
    chromatic: { disableSnapshot: true },
    docs: {
      toc: {
        ignoreSelector: '.docs-story *, .skip-toc, #search-input, #input-in-a-clear-context'
      }
    },
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
  name: 'Input with Currency',
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
  name: 'Input with Currency Stepper',
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
  name: 'Input with Floating Label',
  render: () =>
    html`<div class="max-w-[300px]">
      <sd-input type="email" placeholder="someone@example.com" label="Email" spellcheck floating-label></sd-input>
    </div> `
};

/**
 *
 * In these use cases, the surrounding elements work together to reinforce the field's purpose visually – but WCAG 2.2 compliance itself rests on the hidden label being implemented correctly.
 *
 * ### Search Input
 *
 * This example relies visually on the heading, search icon, and placeholder to communicate purpose, and the hidden label "Search transactions" for accessibility.
 */
export const InputWithVisuallyHiddenLabel = {
  name: 'Input with Visually Hidden Label',
  render: () => html`
    <h4 class="text-primary font-bold text-xl mb-4">Transactions</h4>

    <div class="max-w-[520px]">
      <sd-input type="search" placeholder="Search by merchant, amount, or reference">
        <span slot="label" class="sr-only">Search transactions</span>
      </sd-input>
    </div>
  `
};

/**
 *
 * This example relies visually on the surrounding subscription content to communicate purpose and the hidden label "Email address" for accessibility.
 */
export const InputInClearContext = {
  name: 'Input in a clear context',
  render: () => html`
    <div class="sd-container sd-container--variant-primary-100 px-4 py-16 lg:px-10 lg:py-24">
      <div class="flex flex-col gap-16 lg:flex-row lg:items-center">
        <div class="flex flex-col items-start gap-4 lg:flex-1 lg:flex-row">
          <sd-icon name="content/newsletter" color="primary" class="h-24 w-24 shrink-0"></sd-icon>

          <h4 class="sd-headline sd-headline--size-3xl">More Solid. More perks. Don't miss out and subscribe today!</h4>
        </div>

        <div class="flex w-full flex-col items-start gap-4 lg:flex-1">
          <sd-input class="w-full" type="email" placeholder="Email address">
            <span slot="label" class="sr-only">Email address</span>
          </sd-input>

          <sd-button variant="cta" size="sm">Subscribe to newsletter</sd-button>
        </div>
      </div>
    </div>
  `
};
