import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
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
    <sd-input class="w-[400px] py-6">
      <div slot="label" class="flex items-center gap-1">
        <label>Liquid Assets</label>
        <sd-tooltip size="sm" content="Lorem ipsum"></sd-tooltip>
      </div>
    </sd-input>
  `
};

export const SelectWithTooltip = {
  render: () => html`
    <sd-select class="w-[400px] py-6" size="lg" placement="top" placeholder="Please Select" value="">
      <div slot="label" class="flex flex-row items-center gap-1">
        Label Slot <sd-tooltip content="Lorem ipsum sic semper" size="sm" hoist></sd-tooltip>
      </div>

      <sd-option value="option-1">Viewer</sd-option>
      <sd-option value="option-2">Editor</sd-option>
      <sd-option value="option-3">Owner</sd-option>
    </sd-select>
  `
};

export const TextAreaWithTooltip = {
  render: () => html`
    <sd-textarea
      class="w-full py-4"
      value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te."
    >
      <div slot="label" class="flex items-center gap-1">
        Description <sd-tooltip content="Lorem ipsum sic semper" size="sm"></sd-tooltip>
      </div>
    </sd-textarea>
  `
};

export const TooltipWithBoldedText = {
  render: () => html`
    <div class="h-40 flex items-center pl-20">
      <sd-tooltip
        ><span slot="content" class="sd-prose sd-prose--inverted"
          ><h5>Headline</h5>
          Lorem ipsum sic semper</span
        ></sd-tooltip
      >
    </div>
  `
};
