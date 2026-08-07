import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-file-selector');
const { overrideArgs } = storybookHelpers('sd-file-selector');
const { generateTemplate } = storybookTemplate('sd-file-selector');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-file-selector/Screenshots: sd-file-selector',
  component: 'sd-file-selector',
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
    return generateTemplate({ args });
  }
};

export const Variant = {
  name: 'Variant',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'drop-area', values: [false, true] }
      },
      args
    });
  }
};

export const Size = {
  name: 'Size',
  render: (args: any) => {
    return html`
      <div>Default</div>
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'size', values: ['lg', 'md', 'sm'] }
        },
        args
      })}
      <br />
      <div>Drop-area</div>
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'size', values: ['lg'] }
        },
        constants: [{ type: 'attribute', name: 'drop-area', value: true }],
        args
      })}
    `;
  }
};

export const ShowLabel = {
  name: 'Show Label',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'drop-area', values: [false, true] },
        y: { type: 'attribute', name: 'show-label', values: [false, true] }
      },
      args
    });
  }
};

export const HelpText = {
  name: 'Help Text',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'drop-area', values: [false, true] }
      },
      constants: [
        {
          type: 'attribute',
          name: 'help-text',
          value: 'Max file size is 3 MB. Only PDF, JPG and PNG files are supported.'
        }
      ],
      args
    });
  }
};

export const Disabled = {
  name: 'Disabled',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'drop-area', values: [false, true] },
        y: { type: 'attribute', name: 'disabled', values: [false, true] }
      },
      args
    });
  }
};

export const Multiple = {
  name: 'Multiple',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'drop-area', values: [false, true] }
      },
      constants: [{ type: 'attribute', name: 'multiple', value: true }],
      args
    });
  }
};

export const HideValue = {
  name: 'Hide Value',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'drop-area', values: [false, true] }
      },
      constants: [{ type: 'attribute', name: 'hide-value', value: true }],
      args
    });
  }
};

export const Required = {
  name: 'Required',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'drop-area', values: [false, true] },
        y: { type: 'attribute', name: 'required', values: [false, true] }
      },
      constants: [{ type: 'attribute', name: 'show-label', value: true }],
      args
    });
  }
};

export const Directory = {
  name: 'Directory',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'drop-area', values: [false, true] }
      },
      constants: [{ type: 'attribute', name: 'webkitdirectory', value: true }],
      args
    });
  }
};

export const Invalid = {
  name: 'Invalid',
  render: (args: any) => {
    return html`
      <form id="invalid-form">
        ${generateTemplate({
          axis: {
            y: { type: 'attribute', name: 'drop-area', values: [false, true] }
          },
          constants: [
            { type: 'attribute', name: 'show-label', value: true },
            { type: 'attribute', name: 'id', value: 'invalid-file-selector' }
          ],
          args
        })}
      </form>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await waitUntil(() => canvasElement.querySelectorAll('sd-file-selector').length > 0);
    const selectors = canvasElement.querySelectorAll('sd-file-selector');
    selectors.forEach(selector => {
      (selector as any).setCustomValidity('Error text');
      (selector as any).reportValidity();
    });
  }
};

export const Slots = {
  name: 'Slots',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'slot',
          name: 'label',
          values: [
            {
              title: 'label',
              value: '<div slot="label" class="text-lg">Label slot</div>'
            },
            {
              title: 'help-text',
              value: '<div slot="help-text" class="text-lg">Help text slot</div>'
            }
          ]
        }
      },
      constants: [{ type: 'attribute', name: 'show-label', value: true }],
      args
    });
  }
};

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-file-selector::part(...){outline: solid 2px red}',
          values: [
            'form-control',
            'form-control-label',
            'form-control-input',
            'form-control-help-text',
            'button-wrapper',
            'button',
            'value',
            'invalid-icon-message',
            'invalid-icon',
            'invalid-message'
          ].map(part => ({
            title: part,
            value: `
              <style>
                #part-${part} sd-file-selector::part(${part}) { outline: solid 2px red }
                .hidden { display: none }
              </style>
              <div id="part-${part}">
                <sd-file-selector label="Label" show-label help-text="Help text"></sd-file-selector>
              </div>
              <div class="hidden">%TEMPLATE%</div>
            `
          }))
        }
      },
      args
    });
  }
};

export const DropareaParts = {
  name: 'Parts (drop-area)',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-file-selector[drop-area]::part(...){outline: solid 2px red}',
          values: ['droparea', 'droparea-background', 'droparea-icon', 'droparea-value'].map(part => ({
            title: part,
            value: `
              <style>
                #part-${part} sd-file-selector::part(${part}) { outline: solid 2px red }
                .hidden { display: none }
              </style>
              <div id="part-${part}">
                <sd-file-selector drop-area label="Label" show-label></sd-file-selector>
              </div>
              <div class="hidden">%TEMPLATE%</div>
            `
          }))
        }
      },
      args
    });
  }
};

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`
      <div>Default</div>
      <br />
      <div class="mouseless mouseless-default">${generateTemplate({ args })}</div>
      <br />
      <br />
      <div>Drop-area</div>
      <br />
      <div class="mouseless mouseless-droparea">
        ${generateTemplate({
          constants: [{ type: 'attribute', name: 'drop-area', value: true }],
          args
        })}
      </div>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const defaultEl = canvasElement.querySelector<HTMLElement>('.mouseless-default sd-file-selector');
    await waitUntil(() => defaultEl?.shadowRoot?.querySelector('sd-button'));
    defaultEl?.focus();

    const dropareaEl = canvasElement.querySelector<HTMLElement>('.mouseless-droparea sd-file-selector');
    await waitUntil(() => dropareaEl?.shadowRoot?.querySelector('[part~="droparea"]'));
    dropareaEl?.focus();
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Variant,
  Size,
  ShowLabel,
  HelpText,
  Disabled,
  Multiple,
  HideValue,
  Required,
  Directory,
  Invalid,
  Slots,
  Parts,
  DropareaParts,
  Mouseless
]);
