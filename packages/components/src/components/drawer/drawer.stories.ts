import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-drawer');
const { generateTemplate } = storybookTemplate('sd-drawer');
const { overrideArgs } = storybookHelpers('sd-drawer');

/**
 * A panel that slides out from the side of the screen which contains a set of information or actions.
 */

export default {
  title: 'Components/sd-drawer',
  component: 'sd-drawer',
  tags: ['!dev'],

  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-full">Main slot</div>`
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
  }
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
      <sd-drawer open label="example">
        <div slot="header" class="slot slot--border slot--text h-12">Header slot</div>
        <div class="slot slot--border slot--text h-full">Main slot</div>
        <div slot="footer" class="slot slot--border slot--text h-12">Footer slot</div>
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
        <div slot="header" class="slot slot--border slot--text h-12">Header slot</div>
        <div class="slot slot--border slot--text h-full">Main slot</div>
        <div slot="footer" class="slot slot--border slot--text h-12">Footer slot</div>
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
      <sd-drawer open no-header>
        <div class="slot slot--border slot--text h-full">Main slot</div>
        <div slot="footer" class="slot slot--border slot--text h-12">Footer slot</div>
      </sd-drawer>
    </div>
  `
};
