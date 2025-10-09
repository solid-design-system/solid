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

/**
 * Use the `size` attribute to change the size:
 *
 * - `lg`(default)
 * - `md`
 * - `sm`
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-4">
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
  render: () => html` <sd-datepicker label="Label" size="lg" alignment="right" value="2023.11.06"></sd-datepicker>`
};

/**
 * Use the `label` attribute to give the datepicker an accessible label.
 *
 * For labels that contain HTML, use the `label` slot instead.
 */

export const Label = {
  render: () => html` <sd-datepicker label="Label"></sd-datepicker> `
};

/**
 * Use the `placeholder` attribute to add a placeholder text.
 */

export const Placeholder = {
  render: () => html` <sd-datepicker label="Label" placeholder="Select date"></sd-datepicker> `
};

/**
 * Use the `disabled` attribute to disable the datepicker.
 *
 * __Hint__: Clicks will be suppressed until the disabled state is removed.
 */

export const Disabled = {
  render: () => html` <sd-datepicker label="Label" placeholder="Disabled" disabled></sd-datepicker> `
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
    html` <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
      <sd-datepicker label="Label" placeholder="Visually disabled" visually-disabled></sd-datepicker>
    </sd-tooltip>`
};

/**
 * Use the `help-text` attribute to add a descriptive “help text”.
 */
export const HelpText = {
  render: () => html` <sd-datepicker label="Label" help-text="Help text"></sd-datepicker> `
};

/**
 * Use the `required` attribute to mark the element as required.
 */
export const Required = {
  render: () => html` <sd-datepicker label="Required" required></sd-datepicker> `
};

/**
 * Use the `style-on-valid` attribute to automatically indicate and show a valid state.
 */

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

/**
 * The component gets `invalid`` state when the datepicker is not valid.
 */
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

/**
 * Use the `disabled-weekends` attribute to manually disable days in your datepicker.
 */
export const DisabledWeekends = {
  render: () => html` <sd-datepicker label="Label" disabled-weekends></sd-datepicker> `
};

/**
 * Use the `disable-days` attribute to manually disable days in your datepicker. If this attribute is active the range selection will not be possible.
 */
export const DisabledDays = {
  render: () => html`
    <sd-datepicker
      label="Label"
      value="2025.11.03"
      disabled-dates="2025.10.31,2025.11.11,2025.11.19,2025.11.20,2025.11.24"
    ></sd-datepicker>
  `
};

/**
 * Use the `range` attribute to enable range selection.
 */
export const Range = {
  render: () => html`
    <sd-datepicker label="Label" range rangeStart="2025.10.02" rangeEnd="2025.10.12"></sd-datepicker>
  `
};
