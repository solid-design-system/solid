import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Tooltip',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3687-40468&t=ilrs806pHHSfnwKM-4'
    }
  }
};

export const InputWithTooltip = {
  name: 'Input with Tooltip',
  render: () => html`
    <sd-input class="w-[400px]">
      <div slot="label" class="flex items-center gap-1">
        <label>Liquid Assets</label>
        <sd-tooltip size="sm" content="Lorem ipsum" trigger="hover focus"></sd-tooltip>
      </div>
    </sd-input>
  `
};

export const SelectWithTooltip = {
  render: () => html`
    <sd-select
      class="w-[400px] h-[300px]"
      size="lg"
      placement="bottom"
      label="Access Role"
      placeholder="Please Select"
      value=""
    >
      <div slot="label" class="flex items-center">
        <label class="text-black font-bold mr-2">Access Role</label>
        <sd-tooltip content="Lorem ipsum sic semper" placement="top" trigger="hover" size="sm"></sd-tooltip>
      </div>
      <sd-option value="option-1">Viewer</sd-option>
      <sd-option value="option-2">Editor</sd-option>
      <sd-option value="option-3">Owner</sd-option>
    </sd-select>
  `
};
