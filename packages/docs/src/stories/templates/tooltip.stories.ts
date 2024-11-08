import '../../../../components/src/solid-components';
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
    <sd-input class="w-[400px] py-6">
      <span slot="right" class="text-sm inline-flex items-center">
        <span class="text-neutral-700">EUR</span>
      </span>

      <label slot="label">Liquid assets</label>
      <sd-tooltip slot="tooltip" placement="top-start" size="sm" content="Available cash assets"></sd-tooltip>
    </sd-input>
  `
};

export const SelectWithTooltip = {
  name: 'Select with Tooltip',
  render: () => html`
    <sd-select class="w-[400px] h-[300px] py-6" size="lg" placement="top" placeholder="Please select" value="">
      <div slot="label">Access role</div>
      <sd-tooltip slot="tooltip" content="Select the level of access for this user" size="sm" hoist></sd-tooltip>

      <sd-option value="option-1">Viewer</sd-option>
      <sd-option value="option-2">Editor</sd-option>
      <sd-option value="option-3">Owner</sd-option>
    </sd-select>
  `
};

export const TextAreaWithTooltip = {
  name: 'Textarea with Tooltip',
  render: () => html`
    <sd-textarea
      class="w-[540px] py-4"
      value="A solid design system is more than a collection of components; it’s a living document that aligns teams, maintains consistency, and supports scalability. Here, you can capture the reasoning behind design choices, specific use cases, and any nuances that will aid other team members in understanding how to implement this component effectively."
    >
      <div slot="label">Project description</div>
      <sd-tooltip slot="tooltip" content="Explain your project in clear terms" size="sm"></sd-tooltip>
    </sd-textarea>
  `
};

export const RadioGroupWithTooltip = {
  name: 'Radio Group with Tooltip',
  render: () => html`
    <sd-radio-group class="w-[400px] py-6" boldLabel>
      <div slot="label">Choose your Subscription Plan</div>
      <sd-tooltip slot="tooltip" content="Select the plan that best meets your needs" size="sm"></sd-tooltip>

      <sd-radio value="basic">Basic Plan</sd-radio>
      <sd-radio value="standard">Standard Plan</sd-radio>
      <sd-radio value="premium">Premium Plan</sd-radio>
    </sd-radio-group>
  `
};

export const CheckboxGroupWithTooltip = {
  name: 'Checkbox Group with Tooltip',
  render: () => html`
    <sd-checkbox-group class="w-[400px] py-6">
      <div slot="label">Select your Interests</div>
      <sd-tooltip slot="tooltip" content="Choose all that apply to you" size="sm"></sd-tooltip>

      <sd-checkbox value="newsletters">Subscribe to our Newsletters</sd-checkbox>
      <sd-checkbox value="promotions">Receive our Promotions</sd-checkbox>
      <sd-checkbox value="updates">Get our Product Updates</sd-checkbox>
    </sd-checkbox-group>
  `
};

export const TooltipWithBoldedText = {
  name: 'Tooltip with Bolded Text',
  render: () => html`
    <div class="h-40 flex items-center pl-20">
      <sd-tooltip placement="top-start"
        ><span slot="content" class="sd-prose sd-prose--inverted"
          ><h5>Guidelines</h5>
          Document design standards and usage</span
        ></sd-tooltip
      >
    </div>
  `
};
