import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-radio-button');
const { overrideArgs } = storybookHelpers('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-radio-button/Screenshots: sd-radio-button',
  tags: ['!autodocs'],
  component: 'sd-radio-button',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'icon',
      value: '<sd-icon name="system/image" slot="icon" label="Label"></sd-icon>'
    },
    {
      type: 'attribute',
      name: 'checked',
      value: true
    }
  ]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Size = {
  name: 'Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

export const LabelAndSize = {
  name: 'Label × Size',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      args,
      constants: [{ type: 'slot', name: 'default', value: '<div>Label</div>' }]
    });
  }
};

export const LabelOnly = {
  name: 'Label only',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'size',
          values: ['lg', 'md', 'sm']
        }
      },
      constants: [
        { type: 'slot', name: 'default', value: '<div>Label</div>' },
        {
          type: 'slot',
          name: 'icon',
          value: ''
        }
      ],
      args
    });
  }
};

export const DisabledAndChecked = {
  name: 'Disabled × Checked',
  render: () => {
    return html`
      <div class="flex flex-col gap-4 w-[260px] p-4">
        <sd-radio-button showLabel>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          <slot>Default</slot>
        </sd-radio-button>
        <sd-radio-button disabled showLabel>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          <slot>Disabled</slot>
        </sd-radio-button>
        <sd-radio-button checked showLabel>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          <slot>Checked</slot>
        </sd-radio-button>
        <sd-radio-button checked disabled showLabel>
          <sd-icon name="system/image" slot="icon"></sd-icon>
          <slot class="whitespace-nowrap">Disabled and checked</slot>
        </sd-radio-button>
      </div>
    `;
  }
};

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-radio-button::part(...){outline: solid 2px red,}',
          values: ['base', 'button', 'button--checked', 'icon', 'label'].map(part => {
            return {
              title: part,
              value: `
              <style>#part-${part} sd-radio-button::part(${part}){outline: solid 2px red}</style>
              <div id="part-${part}">
                %TEMPLATE%
                ${
                  part === 'button--checked'
                    ? `<script>document.querySelector("#part-${part} sd-radio-button").checked = true;</script>`
                    : ''
                }
              </div>
            `
            };
          })
        }
      },
      args,
      constants: [{ type: 'slot', name: 'default', value: '<div>Label</div>' }]
    });
  }
};

export const Combination = generateScreenshotStory([Default, Size, LabelAndSize, LabelOnly, DisabledAndChecked, Parts]);
