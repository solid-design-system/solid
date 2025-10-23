import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Datepicker',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3039-8274&t=JCsisVFNkWSlhSSN-4'
    }
  },
  decorators: [
    (story: any) =>
      html`<style>
          #anchor--templates-datepicker--unavailable-weekends .innerZoomElementWrapper,
          #anchor--templates-datepicker--unavailable-dates .innerZoomElementWrapper,
          #anchor--templates-datepicker--selected-range .innerZoomElementWrapper {
            min-height: 500px;
          }
        </style>
        ${story()}`
  ] as unknown
};

export const UnavailableWeekends = {
  name: 'Datepicker with a Selected Date and Unavailable Weekends',
  render: () =>
    html` <sd-datepicker value="2025.11.21" disabled-weekends alignment="right" label="Appointment"></sd-datepicker>`
};

export const UnavailableDates = {
  name: 'Datepicker with a Selected Date and Unavailable Dates',
  render: () =>
    html` <sd-datepicker
      value="2025.11.21"
      disabled-dates="2025.11.04,2025.11.12,2025.11.18,2025.11.26"
      disabled-weekends
      alignment="right"
      label="Appointment"
    ></sd-datepicker>`
};

export const SelectedRange = {
  name: 'Datepicker with a Selected Range',
  render: () =>
    html` <sd-datepicker
      value="2025.11.21"
      range
      rangeStart="2025.11.21"
      rangeEnd="2025.11.28"
      alignment="right"
      label="Time period"
    ></sd-datepicker>`
};
