import '../../../../components/src/solid-components';
import { html } from 'lit';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-interactive');
const { overrideArgs } = storybookHelpers('sd-interactive');
const { generateTemplate } = storybookTemplate('sd-interactive');

export default {
  title: 'Styles/sd-interactive',
  tags: ['!dev', 'autodocs', 'skip-a11y-[color-contrast]'],
  component: 'sd-interactive',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3173-12771&t=yS054qhxgjorbMDv-4'
    }
  },
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Lorem Ipsum' },
    { type: 'attribute', name: 'sd-interactive--reset', value: true }
  ]),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<button class="%CLASSES%" title="Action name">%SLOT%</button>' },
      args
    });
  }
};

/**
 * Use the `sd-interactive--inverted` class when displayed on primary background.
 */

export const Inverted = {
  render: () => html`
    <div class="bg-primary p-4">
      <button class="sd-interactive sd-interactive--inverted sd-interactive--reset" title="Action name">
        Inverted
      </button>
    </div>
  `
};

/**
 * Use the `sd-interactive--disabled` class to disable an interactive element.
 *
 * This works as well when setting an `disabled` attribute on the element.
 */

export const Disabled = {
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          selector: '.sd-interactive--disabled',
          enabled: false
        }
      ]
    }
  },
  render: () => html`
    <button class="sd-interactive sd-interactive--disabled sd-interactive--reset" title="Disabled button">
      Disabled
    </button>
  `
};

/**
 * Use the `sd-interactive--reset` class to reset the default browser styles of e. g. a button.
 */

export const Reset = {
  render: () => html`
    <style>
      button.sd-interactive:not(.sd-interactive--reset) {
        background-color: rgb(239, 239, 239);
        border: 1px solid rgb(204, 204, 204);
        border-radius: 4px;
        color: rgb(51, 51, 51);
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        padding: 8px 16px;
      }
      button.sd-interactive:not(.sd-interactive--reset):hover {
        background-color: rgb(230, 230, 230);
        border-color: rgb(204, 204, 204);
        color: rgb(51, 51, 51) !important;
      }
      button.sd-interactive:not(.sd-interactive--reset):active {
        background-color: rgb(204, 204, 204);
      }
    </style>
    <div class="flex flex-row gap-8">
      <button class="sd-interactive" title="Action name">Default</button>
      <button class="sd-interactive sd-interactive--reset" title="Action name">Reset</button>
    </div>
  `
};
