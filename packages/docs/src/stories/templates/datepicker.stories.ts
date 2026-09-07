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

/**
 * Example of how to restrict the datepicker to weekdays only by disabling all Saturday and Sunday entries. The selected date is highlighted and weekend days are visually greyed out and non-interactive, guiding users to pick only valid business days.
 */

export const UnavailableWeekends = {
  name: 'Datepicker with a Selected Date and Unavailable Weekends',
  render: () =>
    html`<div class="max-w-[370px]">
      <sd-datepicker value="2025.11.21" disabled-weekends alignment="right" label="Appointment"></sd-datepicker>
    </div>`
};

/**
 * Example of how to block out specific individual dates in the datepicker. Unavailable dates are greyed out and cannot be selected, while the rest of the calendar remains fully interactive — useful for excluding holidays or already-booked dates.
 */

export const UnavailableDates = {
  name: 'Datepicker with a Selected Date and Unavailable Dates',
  render: () =>
    html` <div class="max-w-[370px]">
      <sd-datepicker
        value="2025.11.21"
        disabled-dates="2025.11.04,2025.11.12,2025.11.18,2025.11.26"
        disabled-weekends
        alignment="right"
        label="Appointment"
      ></sd-datepicker>
    </div>`
};

/**
 * Example of how to use the datepicker to select a start and end date, highlighting the full range in between. Use this variant when users need to define a time period, such as a booking window or report interval.
 */

export const SelectedRange = {
  name: 'Datepicker with a Selected Range',
  render: () =>
    html` <div class="max-w-[370px]">
      <sd-datepicker
        value="2025.11.21"
        range
        rangeStart="2025.11.21"
        rangeEnd="2025.11.28"
        alignment="right"
        label="Time period"
      ></sd-datepicker>
    </div>`
};
