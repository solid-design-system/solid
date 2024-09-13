import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-drawer');
const { generateTemplate } = storybookTemplate('sd-drawer');
const { overrideArgs } = storybookHelpers('sd-drawer');

/**
 * Used as a panel that slides out from the side of the screen which contains a set of information or actions.
 *
 * **Related templates:**
 * - [Drawer with navigation](?path=/docs/templates-drawer-with-navigation--docs)
 */

export default {
  title: 'Components/sd-drawer',
  component: 'sd-drawer',
  tags: ['!dev'],
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-full">Default slot</div>`
    },
    {
      type: 'slot',
      name: 'header',
      value: `<div slot='header' class="slot slot--border slot--text h-12 w-[140px]">Header slot</div>`
    },
    {
      type: 'slot',
      name: 'footer',
      value: `<div slot='footer' class="slot slot--border slot--text h-12">Footer slot</div>`
    },
    { type: 'attribute', name: 'open', value: true },
    { type: 'attribute', name: 'contained', value: true }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    controls: { exclude: ['contained'] }
  },
  decorators: [
    (story: any) => html`
      <style>
        sd-drawer::part(overlay) {
          background-color: #051530;
          opacity: 0.9;
        }
      </style>
      ${story()}
    `
  ] as unknown
};

/**
 * Default: This shows sd-drawer in its default state.
 */
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html` <div style="width: auto; height: 40vh; position: relative;">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

/**
 * Use the `open` attribute to set the state of the drawer to open.
 */
export const Open = {
  name: 'Open',
  render: () => html`
    <div style="width: auto; height: 40vh; position: relative;">
      <sd-drawer open label="example" placement="start">
        <sd-button slot="header" variant="tertiary">
          <sd-icon slot="icon-left" name="system/arrow-left"></sd-icon>
          Back
        </sd-button>
        <div class="slot slot--border slot--text h-full">Default slot</div>
        <div slot="footer" class="flex flex-col w-full gap-4">
          <sd-button variant="primary">Primary Action</sd-button>
          <sd-button variant="secondary">Secondary Action</sd-button>
        </div>
      </sd-drawer>
    </div>
  `
};

/**
 * Use the `placement` attribute to change the position of the drawer.
 *
 * - `start`: The drawer will be positioned on the left side of the screen.
 * - `end`: The drawer will be positioned on the right side of the screen.
 */
export const Placement = {
  name: 'Placement',
  render: () => html`
    <div style="width: auto; height: 40vh; position: relative;">
      <sd-drawer open placement="start">
        <sd-input slot="header" type="search" size="lg" placeholder="Search"></sd-input>
        <div class="slot slot--border slot--text h-full">Default slot</div>
        <div slot="footer" class="flex flex-col w-full gap-4">
          <sd-button variant="primary">Primary Action</sd-button>
          <sd-button variant="secondary">Secondary Action</sd-button>
        </div>
      </sd-drawer>
    </div>
  `
};

/**
 * Use the `no-header` attribute to remove the header from the drawer.
 */
export const NoHeader = {
  name: 'No Header',
  render: () => html`
    <div style="width: auto; height: 40vh; position: relative;">
      <sd-drawer open no-header placement="start">
        <div class="slot slot--border slot--text h-full">Default slot</div>
        <div slot="footer" class="slot slot--border slot--text h-full">Footer slot</div>
      </sd-drawer>
    </div>
  `
};
