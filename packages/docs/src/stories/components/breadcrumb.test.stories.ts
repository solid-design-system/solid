import { html } from 'lit-html';
import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb');
const { overrideArgs } = storybookHelpers('sd-breadcrumb');
const { generateTemplate } = storybookTemplate('sd-breadcrumb');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-breadcrumb/Screenshots: sd-breadcrumb',
  component: 'sd-breadcrumb',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=15550-3896&t=xZeI50k4O0CnwRwc-4'
    }
  },
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'label',
      value: 'Breadcrumbs'
    },
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-breadcrumb-item href="#">First level</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#">Second level</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#">Third level</sd-breadcrumb-item>
        <sd-breadcrumb-item current>Current</sd-breadcrumb-item>
      `
    }
  ]),
  argTypes
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Truncated = {
  name: 'Truncated',
  render: (args: any) => {
    return html`<div style="width: 100px;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'attribute',
            name: 'label',
            value: 'Truncated breadcrumbs'
          }
        ]
      })}
    </div>`;
  }
};

export const Mobile = {
  name: 'Mobile',
  globals: {
    viewport: { value: 'mobile1' }
  },
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Separators must keep their spacing when the surrounding page ships a CSS reset.
 * The scoped rules below mirror the parts of Tailwind Preflight that reset pseudo-elements.
 */
export const PreflightReset = {
  name: 'Preflight Reset',
  render: (args: any) => {
    return html`<div class="preflight-reset">
      <style>
        .preflight-reset *,
        .preflight-reset ::before,
        .preflight-reset ::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          border: 0 solid;
        }
      </style>
      ${generateTemplate({ args })}
    </div>`;
  }
};

export const Combination = generateScreenshotStory([Default, Truncated, PreflightReset]);
