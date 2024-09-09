import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Select Grouping',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * Example of a `sd-select` with grouping options.
 *
 * ```
 * ```
 */

export const Default = {
  name: 'Grouping Options',
  render: () =>
    html`<div class="h-[500px] flex gap-12">
      <sd-select size="lg" placement="bottom" label="City/Region" placeholder="Please Select" max-options-visible="3">
        <div class="text-black px-4 font-bold">Australia</div>
        <sd-option value="option-1">Brisbane (Queensland)</sd-option>
        <sd-option value="option-2">Sydney (Victoria)</sd-option>
        <sd-divider class="mb-2"></sd-divider>
        <div class="text-black px-4 font-bold">Austria</div>
        <sd-option value="option-3">Graz (Styria)</sd-option>
        <sd-option value="option-4">Hartberg (Styria)</sd-option>
      </sd-select>

      <sd-select size="lg" placement="bottom" label="Country" placeholder="Please Select" max-options-visible="3">
        <div class="text-black px-4 font-bold">Asia</div>
        <sd-option value="option-1">Japan</sd-option>
        <sd-option value="option-2">South Korea</sd-option>
        <sd-option value="option-3">Turkey</sd-option>
        <sd-divider class="mb-2"></sd-divider>
        <div class="text-black px-4 font-bold">Australia</div>
        <sd-option value="option-4">Australia</sd-option>
      </sd-select>
    </div>`
};
