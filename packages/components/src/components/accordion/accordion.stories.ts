/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-accordion');
const { overrideArgs } = storybookHelpers('sd-accordion');
const { generateTemplate } = storybookTemplate('sd-accordion');

export default {
  title: 'Components/sd-accordion',
  component: 'sd-accordion',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' },
    { type: 'attribute', name: 'summary', value: 'Default' }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Accordion shows a brief summary and expands to show additional content.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * The attribute `open` can be used to set the initial state of the accordion.
 */

export const Open = {
  name: 'Open',
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-accordion open summary="Open">Accordion starts open</sd-accordion>
      <sd-accordion summary="Closed"> Accordion starts closed </sd-accordion>
    </div>
  `
};

/**
 * The `summary` can be used to provide the text in the accordion header.
 */

export const Summary = {
  name: 'Summary',
  render: () => html`
    <div class="grid grid-cols-2">
      <sd-accordion summary="Summary">Content for summary example</sd-accordion>
    </div>
  `
};

/**
 * If you need to use custom html in the summary, you should use the `summary` slot.
 */

export const SlottedSummary = {
  name: 'Slotted Summary',
  render: () => html`
    <div class="grid grid-cols-2">
      <sd-accordion>
        <div slot="summary"><h4>Custom summary</h4></div>
        Content for custom summary example
      </sd-accordion>
    </div>
  `
};

/**
 * Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively.
 *
 * To disable the animation, override the rotate property on the `summary-icon` part as shown below:
 *
 * ```
 * sd-accordion.custom-icons::part(summary-icon) {
 *   rotate: none;
 * }
 * ```
 */

export const SlottedIcons = {
  name: 'Slotted Icons',
  render: () => html`
    <div class="grid grid-cols-2">
      <sd-accordion summary="Slotted icons summary">
        <sd-icon slot="expand-icon" library="system" name="eye"></sd-icon>
        <sd-icon slot="collapse-icon" library="system" name="eye-crossed-out"></sd-icon>
        Content for custom icons example
      </sd-accordion>
    </div>
  `
};
