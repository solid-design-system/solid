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

/**
 * ### Search Input with Visually Hidden Label
 *
 * Use this pattern when a search input should not show a visible label but still needs to be accessible to screen readers.
 * The label is visually hidden via `::part(form-control-label)` while remaining available in the accessibility tree.
 *
 * __Warning:__ Visually hidden labels are only permitted for search inputs (WCAG Success Criterion 1.3.1). Do not use this pattern for other input types.
 */
export const InputWithVisuallyHiddenLabel = {
  render: () => html`
    <style>
      .input-visually-hidden-label::part(form-control-label) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    </style>
    <div class="w-[250px]">
      <sd-input class="input-visually-hidden-label" type="search" label="Search" placeholder="Search..."></sd-input>
    </div>
  `
};
