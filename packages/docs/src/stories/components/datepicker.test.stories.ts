import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-datepicker');
const { overrideArgs } = storybookHelpers('sd-datepicker');
const { generateTemplate } = storybookTemplate('sd-datepicker');
const { generateScreenshotStory } = storybookUtilities;

const currentMonth = new Date().getMonth() + 1;
const paddedMonth = String(currentMonth).padStart(2, '0');
const currentYear = new Date().getFullYear();

export default {
  title: 'Components/sd-datepicker/Screenshots: sd-datepicker',
  component: 'sd-datepicker',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([{ type: 'attribute', name: 'label', value: 'Label' }]),
  argTypes
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div class="w-[400px]">${generateTemplate({ args })}</div>`;
  }
};

export const Size = {
  name: 'Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      args
    });
  }
};

export const Required = {
  name: 'Required',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'required', values: [true, false] }
      },
      args
    });
  }
};

export const Placeholder = {
  name: 'Placeholder',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'range', values: [true, false] }
      },
      args
    });
  }
};

export const Disabled = {
  name: 'Disabled',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'disabled', values: [true, false] }
      },
      args
    });
  }
};

export const DisabledWeekends = {
  name: 'Disabled Weekends',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'disabled-weekends', values: [true, false] }
      },
      args
    });
  }
};

export const DisabledDates = {
  name: 'Disabled Dates',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled-dates',
          values: [
            `${currentYear}.${paddedMonth}.03, ${currentYear}.${paddedMonth}.10, ${currentYear}.${paddedMonth}.17`,
            false
          ]
        }
      },
      args: overrideArgs({ type: 'attribute', name: 'value', value: '2025.11.10' }, args)
    });
  }
};

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless w-[250px]">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-datepicker');
    await waitUntil(() => el?.shadowRoot?.querySelector('input'));
    el?.shadowRoot?.querySelector('input')!.focus();
  }
};

export const LocaleAware = {
  name: 'Locale Aware',
  render: () => {
    return html`<div class="flex flex-col gap-4 w-[400px]">
      <sd-datepicker lang="de" locale="de-DE"></sd-datepicker>
      <sd-datepicker lang="de" locale="de-DE" range rangeStart="2025.10.02" rangeEnd="2025.10.12"></sd-datepicker>
    </div>`;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Size,
  Required,
  Placeholder,
  Disabled,
  DisabledWeekends,
  DisabledDates,
  Mouseless,
  LocaleAware
]);
