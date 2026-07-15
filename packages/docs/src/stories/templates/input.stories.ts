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
 *
 * Uses `type="formatted-number"` with `style: "currency"` and `spin-buttons` for a locale-aware
 * currency input without any manual formatting script.
 */
export const InputWithCurrencyStepper = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input
        label="Betrag"
        type="formatted-number"
        lang="de"
        value="0"
        step="1"
        min="0"
        spin-buttons
        number-format-options='{"style": "currency", "currency": "EUR"}'
        help-text="Mindestbetrag: 0 €"
      ></sd-input>
    </div>`
};

/**
 * ### Formatted Number Inputs in a Form
 *
 * A realistic investment form combining a currency amount, a percentage allocation and a plain
 * integer quantity \u2014 all using `type="formatted-number"` for consistent locale-aware formatting.
 */
export const FormattedNumberForm = {
  render: () =>
    html`<form class="flex flex-col gap-6 w-[340px]" id="investment-form">
        <sd-input
          label="Anlagebetrag"
          type="formatted-number"
          lang="de"
          value="10000"
          min="0"
          number-format-options='{"style": "currency", "currency": "EUR"}'
          help-text="Geben Sie den gewünschten Anlagebetrag ein."
        ></sd-input>

        <sd-input
          label="Aktienanteil"
          type="formatted-number"
          lang="de"
          value="75"
          min="0"
          max="100"
          step="1"
          spin-buttons
          number-format-options='{"maximumFractionDigits": 0}'
          help-text="Anteil zwischen 0 und 100"
        >
          <span slot="right" class="text-sm text-neutral-700">%</span>
        </sd-input>

        <sd-input
          label="Anzahl Anteile"
          type="formatted-number"
          lang="de"
          value="42"
          min="1"
          step="1"
          number-format-options='{"maximumFractionDigits": 0}'
          help-text="Ganzzahl, mindestens 1"
        ></sd-input>

        <sd-button type="submit" variant="primary">Berechnen</sd-button>
      </form>

      <script type="module">
        document.getElementById('investment-form').addEventListener('submit', e => {
          e.preventDefault();
        });
      </script>`
};
