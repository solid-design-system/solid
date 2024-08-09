import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { overrideArgs } = storybookHelpers('sd-dialog');
const { argTypes, parameters } = storybookDefaults('sd-dialog');
const { generateTemplate } = storybookTemplate('sd-dialog');

/**
 *
 * Appears over other content. It requires an interaction from the user before they can return to whatever is underneath.
 *
 *  **Related templates**:
 * - [Dialog with scrollable content](?path=/docs/templates-dialog-with-scrollable-content--docs)
 *
 */

export default {
  title: 'Components/sd-dialog',
  component: 'sd-dialog',
  tags: ['!dev'],
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'open',
      value: true
    },
    {
      type: 'slot',
      name: 'default',
      value: `<p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed.</p>`
    },
    {
      type: 'slot',
      name: 'headline',
      value: `<h4 slot="headline" class="sd-headline sd-headline--size-3xl leading-tight">Lorem Ipsum</h4>`
    },
    {
      type: 'slot',
      name: 'footer',
      value: `<sd-button slot="footer" class="w-full">Label</sd-button>`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-dialog in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html` <div style="height: 40vh;">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

/**
 * Use the `open` attribute to show the dialog.
 */

export const Open = {
  name: 'Open',
  render: () => html`
    <div class="flex gap-12 h-[40vh]">
      <div>
        <sd-dialog id="dialog" open>
          <div slot="headline" class="slot slot--border slot--text h-16">Headline slot</div>
          <div class="slot slot--border slot--text h-16">Default slot</div>
        </sd-dialog>
      </div>
    </div>
  `
};

/**
 *  Use the `headline` attribute to set the headline of the dialog. If you need to use custom HTML, use the headline slot instead.
 */

export const Headline = {
  name: 'Headline',
  render: () => html`
    <div class="flex gap-12 h-[40vh]">
      <div>
        <sd-dialog id="dialog" open headline="Headline example">
          <div class="slot slot--border slot--text h-16">Default slot</div>
        </sd-dialog>
      </div>
    </div>
  `
};

/**
 * Use the `no-close-button` attribute to hide the close button in the dialog.
 * However, you should always include a close button to comply with ARIA principles. If the close button is omitted, the close action has to be applied to one button in the footer slot.
 */

export const NoCloseButton = {
  name: 'No Close Button',
  render: () => html`
    <div class="flex gap-12 h-[40vh]">
      <div>
        <sd-dialog id="dialog" open no-close-button>
          <div class="slot slot--border slot--text h-16">Default slot</div>
          <sd-button slot="footer" class="w-full">Close</sd-button>
        </sd-dialog>
      </div>
    </div>
  `
};
