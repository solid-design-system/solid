import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-datepicker');
const { overrideArgs } = storybookHelpers('sd-datepicker');
const { generateTemplate } = storybookTemplate('sd-datepicker');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-datepicker',
  component: 'sd-datepicker',
  args: overrideArgs([{ type: 'attribute', name: 'label', value: 'Label' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  decorators: [
    (story: any) =>
      html`<style>
          #anchor--components-sd-datepicker--size .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--alignment .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--label .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--placeholder .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--visually-disabled .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--range .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--disabled .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--disabled-weekends .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--disabled-days .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--required .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--invalid .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--valid .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--help-text .innerZoomElementWrapper {
            min-height: 500px;
          }
        </style>
        ${story()}`
  ] as unknown
};

export const Default = {
  render: (args: any) => {
    return html`<div class="h-[500px]">${generateTemplate({ args })}</div>`;
  }
};

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-4">
      <sd-datepicker size="lg" placeholder="Large" label="Label"></sd-datepicker>
      <sd-datepicker size="md" placeholder="Medium" label="Label"></sd-datepicker>
      <sd-datepicker size="sm" placeholder="Small" label="Label"></sd-datepicker>
    </div>
  `
};

export const Alignment = {
  render: () => html` <sd-datepicker label="Label" size="lg" alignment="right"></sd-datepicker>`
};

export const Label = {
  render: () => html` <sd-datepicker label="Label"></sd-datepicker> `
};

export const Placeholder = {
  render: () => html` <sd-datepicker label="Label" placeholder="Select date"></sd-datepicker> `
};

export const Disabled = {
  render: () => html` <sd-datepicker label="Label" placeholder="Disabled" disabled></sd-datepicker> `
};

export const VisuallyDisabled = {
  render: () =>
    html` <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
      <sd-datepicker label="Label" placeholder="Visually Disabled" visually-disabled></sd-datepicker>
    </sd-tooltip>`
};

export const HelpText = {
  render: () => html` <sd-datepicker label="Label" help-text="Help text"></sd-datepicker> `
};

export const Required = {
  render: () => html` <sd-datepicker label="Required" required></sd-datepicker> `
};

export const Valid = {
  render: () => html`
    <sd-datepicker id="valid-example" label="Label" value="2025.09.15" style-on-valid=""></sd-datepicker>
    <script type="module">
      var validDatepicker = document.querySelector('#valid-example');
      setTimeout(() => {
        validDatepicker.checkValidity();
        validDatepicker.reportValidity();
        validDatepicker.setCustomValidity('');
      }, 500);
    </script>
  `
};

export const Invalid = {
  render: () => html`
    <sd-datepicker id="invalid-example" label="Label" style-on-valid="" required></sd-datepicker>
    <script type="module">
      var invalidDatepicker = document.querySelector('#invalid-example');
      setTimeout(() => {
        invalidDatepicker.checkValidity();
        invalidDatepicker.reportValidity();
        invalidDatepicker.setCustomValidity('Please enter the date in the format DD.MM.YYYY');
      }, 500);
    </script>
  `
};

export const DisabledWeekends = {
  render: () => html` <sd-datepicker label="Label" disabled-weekends></sd-datepicker> `
};

export const DisabledDays = {
  render: () => html` <sd-datepicker label="Label" disabled-dates="2025.09.03,2025.09.10"></sd-datepicker> `
};

export const Range = {
  render: () => html`
    <sd-datepicker label="Label" range rangeStart="2025.10.02" rangeEnd="2025.10.12"></sd-datepicker>
  `
};
