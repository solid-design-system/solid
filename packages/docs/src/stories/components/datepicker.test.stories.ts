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
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false
          }
        ]
      }
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

/**
 * Use the `label` attribute to give the datepicker an accessible label. For labels that contain HTML, use the `label` slot instead.
 */
export const Labels = {
  name: 'Label',
  args: {
    label: 'Label'
  },
  render: (args: any) => {
    return html`<div class="w-[400px]">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `floating-label` attribute to enable a floating label on the datepicker.
 */
export const FloatingLabel = {
  name: 'Floating Label',
  args: {
    'floating-label': true
  },
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
          values: [`2025-11-03, 2025-11-11, 2025-11-17`, false]
        }
      },
      args: overrideArgs({ type: 'attribute', name: 'value', value: '2025-11-10' }, args)
    });
  }
};

export const MinAndMax = {
  name: 'Min and Max',
  render: () => {
    return html`<div class="w-[370px] h-[500px]">
      <sd-datepicker label="Label" value="2025-12-10" min="2025-12-02" max="2025-12-12"></sd-datepicker>
    </div>`;
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
  Labels,
  FloatingLabel,
  Size,
  Required,
  Placeholder,
  Disabled,
  DisabledWeekends,
  DisabledDates,
  MinAndMax,
  Mouseless,
  LocaleAware
]);
