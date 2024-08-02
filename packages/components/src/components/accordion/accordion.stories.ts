/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-accordion');
const { overrideArgs } = storybookHelpers('sd-accordion');
const { generateTemplate } = storybookTemplate('sd-accordion');

/**
 *
 * Accordions show a brief summary and expand to display additional content.
 *
 *  **Related templates**:
 * - [Accordion Group](?path=/docs/templates-accordion-group--docs)
 *
 */

export default {
  title: 'Components/sd-accordion',
  component: 'sd-accordion',
  tags: ['!dev'],
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
 * Use the attribute `open` to set the state of the accordion.
 */

export const Open = {
  name: 'Open',
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-accordion open summary="Open"
        ><div class="slot slot--border slot--background slot--text h-16">Default slot</div></sd-accordion
      >
      <sd-accordion summary="Closed"
        ><div class="slot slot--border slot--background slot--text h-16">Default slot</div></sd-accordion
      >
    </div>
  `
};

/**
 * Use `summary` to provide the text in the accordion header.
 *
 * __Hint:__ The `summary` slot allows you to use custom html in the summary.
 */

export const Summary = {
  name: 'Summary',
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-accordion summary="Default"
        ><div class="slot slot--border slot--background slot--text h-16">Default slot</div></sd-accordion
      >

      <sd-accordion>
        <div slot="summary">
          <h4>I don't have a telephone number with a German area code. Can I still register?</h4>
        </div>
        <div class="slot slot--border slot--background slot--text h-16">Default slot</div>
      </sd-accordion>
    </div>
  `
};
