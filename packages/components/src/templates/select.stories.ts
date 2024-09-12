import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Select',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 *
 * - Label: Additionally a label can be shown for each option group.
 * - Divider: Use `sd-divider` to group option items visually.
 * - Accessibility hint: group labels will be neglected by most assistive devices.
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

export const SelectWithTooltip = {
  render: () =>
    html`<div class="w-[400px] h-[500px] flex gap-12 mt-12">
      <sd-select size="lg" placement="bottom" label="Access Role" placeholder="Please Select" value="">
        <div slot="label" class="flex items-center">
          <label class="text-black font-bold mr-2">Access Role</label>
          <sd-tooltip content="Lorem ipsum sic semper" placement="top" trigger="hover" size="sm"></sd-tooltip>
        </div>
        <sd-option value="option-1">Viewer</sd-option>
        <sd-option value="option-2">Editor</sd-option>
        <sd-option value="option-3">Owner</sd-option>
      </sd-select>
    </div>`
};
