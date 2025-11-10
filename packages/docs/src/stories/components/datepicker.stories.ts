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
    return html`<div class="h-[500px] w-[370px]">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `size` attribute to change the size:
 *
 * - `lg`(default)
 * - `md`
 * - `sm`
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-4 w-[370px]">
      <sd-datepicker size="lg" placeholder="Large" label="Label"></sd-datepicker>
      <sd-datepicker size="md" placeholder="Medium" label="Label"></sd-datepicker>
      <sd-datepicker size="sm" placeholder="Small" label="Label"></sd-datepicker>
    </div>
  `
};

/**
 * Use the `alignment` attribute to define where the flyout should appear:
 *
 * - `left` (default)
 * - `right`
 */

export const Alignment = {
  render: () =>
    html` <div class="w-[370px]">
      <sd-datepicker label="Label" size="lg" alignment="right" value="2023.11.06"></sd-datepicker>
    </div>`
};

/**
 * Use the `label` attribute to give the datepicker an accessible label.
 *
 * For labels that contain HTML, use the `label` slot instead.
 */

export const Label = {
  render: () =>
    html`<div class="flex gap-12 h-[500px]">
      <sd-datepicker label="Label attribute"></sd-datepicker>
      <sd-datepicker>
        <div slot="label">Label slot</div>
      </sd-datepicker>
    </div>`
};

/**
 * Use the `placeholder` attribute to add a placeholder text.
 */

export const Placeholder = {
  render: () =>
    html`<div class="w-[370px]">
      <sd-datepicker label="Label" placeholder="Select date"></sd-datepicker>
    </div>`
};

/**
 * Use the `disabled` attribute to disable the datepicker.
 *
 * __Hint__: Clicks will be suppressed until the disabled state is removed.
 */

export const Disabled = {
  render: () =>
    html`<div class="w-[370px]">
      <sd-datepicker label="Label" placeholder="Disabled" disabled></sd-datepicker>
    </div>`
};

/**
 * Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
 *
 * __Hint:__ When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
 *
 * __Accessibility Hint:__ Disabling elements is not recommended for accessibility reasons.
 */

export const VisuallyDisabled = {
  render: () =>
    html` <div class="w-[370px]">
      <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
        <sd-datepicker label="Label" placeholder="Visually disabled" visually-disabled></sd-datepicker>
      </sd-tooltip>
    </div>`
};

/**
 * Use the `help-text` attribute to add a descriptive “help text”.
 *
 * For help texts that contain HTML, use the `help-text` slot instead.
 */
export const HelpText = {
  render: () =>
    html`<div class="flex gap-12 h-[500px] w-[370px]">
      <sd-datepicker label="Label" help-text="Help text attribute"></sd-datepicker>
      <sd-datepicker label="Label">
        <div slot="help-text">Help text slot</div>
      </sd-datepicker>
    </div>`
};

/**
 * Use the `required` attribute to mark the element as required.
 */
export const Required = {
  render: () =>
    html` <div class="w-[370px]">
      <sd-datepicker label="Label" required></sd-datepicker>
    </div>`
};

/**
 * The component gets `valid` state when the datepicker is valid.
 *
 * Use the `style-on-valid` attribute to automatically indicate and show a valid state.
 */

export const Valid = {
  render: () => html`
    <div class="w-[370px]">
      <sd-datepicker id="valid-example" label="Label" value="2025.09.15" style-on-valid=""></sd-datepicker>
    </div>
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

/**
 * The component gets `invalid` state when the datepicker is not valid.
 */
export const Invalid = {
  render: () => html`
    <div class="w-[370px]">
      <sd-datepicker id="invalid-example" label="Label" style-on-valid="" required></sd-datepicker>
    </div>
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

/**
 * Use the `disabled-weekends` attribute to manually disable days in your datepicker.
 */
export const DisabledWeekends = {
  render: () =>
    html` <div class="w-[370px]">
      <sd-datepicker label="Label" disabled-weekends></sd-datepicker>
    </div>`
};

/**
 * Use the `disable-days` attribute to manually disable days in your datepicker. If this attribute is active the range selection will not be possible.
 */
export const DisabledDays = {
  render: () => html`
    <div class="w-[370px]">
      <sd-datepicker
        label="Label"
        value="2025.11.03"
        disabled-dates="2025.10.31,2025.11.11,2025.11.19,2025.11.20,2025.11.24"
      ></sd-datepicker>
    </div>
  `
};

/**
 * Use the `range` attribute to enable range selection.
 */
export const Range = {
  render: () => html`
    <div class="w-[370px]">
      <sd-datepicker label="Label" range rangeStart="2025.10.02" rangeEnd="2025.10.12"></sd-datepicker>
    </div>
  `
};
