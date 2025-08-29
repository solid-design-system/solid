import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-datepicker');
const { generateTemplate } = storybookTemplate('sd-datepicker');
const { overrideArgs } = storybookHelpers('sd-datepicker');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-datepicker',
  component: 'sd-datepicker',
  args: overrideArgs([
    { type: 'attribute', name: 'range', value: true },
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'help-text', value: 'Help text' }
  ]),
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
          #anchor--components-sd-datepicker--default .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--single-date .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--size .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--label .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--required .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--help-text .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--alignment .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--no-weekends .innerZoomElementWrapper,
          #anchor--components-sd-datepicker--disabled-days .innerZoomElementWrapper {
            min-height: 500px;
          }
        </style>
        ${story()}`
  ] as unknown
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `first example` to describe a feature.
 */
export const SingleDate = {
  render: () => html` <sd-datepicker label="Label"></sd-datepicker> `
};

export const Alignment = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-12">
      <sd-datepicker label="Label"></sd-datepicker>
      <sd-datepicker label="Label" alignment="right"></sd-datepicker>
    </div>`
};

/**
 * Use the `size` attribute to change the size:
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
 */

export const Size = {
  render: () =>
    html`<div class="grid grid-cols-3 gap-4">
      <sd-datepicker label="Large"></sd-datepicker>
      <sd-datepicker label="Medium" size="md"></sd-datepicker>
      <sd-datepicker label="Small" size="sm"></sd-datepicker>
    </div>`
};

/**
 * Use the `label` attribute to give the datepicker an accessible label.
 */

export const Label = {
  render: () => html`<sd-datepicker label="Label"></sd-datepicker>`
};

/**
 * Use the `disabled` attribute to disable the datepicker.
 */

export const Disabled = {
  render: () => html`<sd-datepicker label="Label" disabled></sd-datepicker>`
};

/**
 * Use the `help-text` attribute to add a descriptive “help text”.
 */
export const HelpText = {
  render: () => html`<sd-datepicker label="Label" help-text="Help text"></sd-datepicker>`
};

/**
 * Use the `help-text` attribute to add a descriptive “help text”.
 */
export const Required = {
  render: () => html`<sd-datepicker label="Label" help-text="Help text" required></sd-datepicker>`
};

/**
 * Use the `no-weekends` attribute to give the datepicker an accessible label.
 */

export const NoWeekends = {
  render: () => html`<sd-datepicker label="Label" no-weekends></sd-datepicker>`
};

/**
 * Use the `disabled-dates` attribute to give the datepicker an accessible label.
 */

export const DisabledDays = {
  render: () =>
    html`<sd-datepicker
      label="Label"
      .disabledDays=${[
        new Date(Date.UTC(2025, 7, 7)),
        new Date(Date.UTC(2025, 7, 14)),
        new Date(Date.UTC(2025, 7, 21)),
        new Date(Date.UTC(2025, 7, 28)),
        new Date(Date.UTC(2025, 7, 19))
      ]}
    ></sd-datepicker>`
};
