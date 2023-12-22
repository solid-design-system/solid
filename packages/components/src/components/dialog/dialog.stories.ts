import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { overrideArgs } = storybookHelpers('sd-dialog');
const { argTypes, parameters } = storybookDefaults('sd-dialog');
const { generateTemplate } = storybookTemplate('sd-dialog');

export default {
  title: 'Components/sd-dialog',
  component: 'sd-dialog',
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
      value: `<h4 slot="headline" class="sd-headline sd-headline--size-3xl">Lorem Ipsum</h4>`
    },
    {
      type: 'slot',
      name: 'footer',
      value: `<sd-button slot="footer" class="w-full">Label</sd-button>`
    }
  ]),
  argTypes,
  parameters: { ...parameters, docs: { story: { inline: false, height: '500px' } } },
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
 * This shows sd-dialog without a close button. However, you should always include a close button to comply with ARIA principles. If the close button is omitted, the close action has to be applied to one button in the footer slot.
 */

export const NoCloseButton = {
  render: (args: any) => {
    return html` <div style="height: 40vh;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'attribute',
            name: 'no-close-button',
            value: true
          },
          {
            type: 'slot',
            name: 'footer',
            value: `<sd-button slot="footer" class="w-full">Close</sd-button>
            <script>
                var dialog = document.querySelector('sd-dialog');
                var closeButton = dialog.querySelector('sd-button[slot="footer"]');
      
                closeButton.addEventListener('click', () => dialog.hide());
          </script>`
          }
        ]
      })}
    </div>`;
  }
};

/**
 * This shows sd-dialog’s height will never exceed that of the viewport. As such, sd-dialogs will not scroll with the page ensuring the contents are always accessible to the user.
 */

export const Scrolling = {
  render: (args: any) => {
    return html` <div style="height: 40vh;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `<div class="slot slot--border slot--text" style="height:150vh; width: 100%; padding: 0 1rem; justify-content:start;">Scroll down and give it a try! 👇</div>`
          }
        ]
      })}
    </div>`;
  }
};

/**
 *  This sample displays `sd-dialog` with two `sd-button` components in the footer slot. When incorporating multiple `sd-buttons`, it is recommended to use distinct button variants for clarity and consistency in user interactions.
 */

export const ExtendedFooter = {
  name: 'Sample: Extended Footer',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    return html`
      <sd-dialog open="" id="extended-footer"
        ><p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed.
        </p>
        <h4 slot="headline" class="sd-headline sd-headline--size-3xl">Lorem Ipsum</h4>
        <sd-button slot="footer" class="w-full">Label</sd-button>
        <sd-button variant="secondary" slot="footer" class="w-full">Label</sd-button></sd-dialog
      >
    `;
  }
};

/**
 *  This sample displays `sd-dialog` with smaller headline sizes using the <span> tag instead of headings (eg: h2, h3, etc.).
 */

export const SmallHeadline = {
  name: 'Sample: Small Headline',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    return html`
      <sd-dialog open="" id="small-headline"
        ><p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed.
        </p>
        <span slot="headline" class="font-bold">Lorem Ipsum</span>
        <sd-button slot="footer" class="w-full">Label</sd-button></sd-dialog
      >
    `;
  }
};

/**
 *  This shows an `sd-dialog` that prevents closing when the overlay is clicked, but allows the close button or `Escape` to dismiss it. This is useful for instances when data loss will occur.
 *
 *  To keep the dialog open in such cases, cancel the `sd-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user’s attention to it.
 *  Use `event.detail.source` to specify a closing trigger.
 */

export const PreventClosing = {
  name: 'Sample: Prevening Closing',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    return html`
      <sd-dialog open="" id="prevent-closing"
        ><p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed.
        </p>
        <h4 slot="headline" class="sd-headline sd-headline--size-3xl">Lorem Ipsum</h4>
        <sd-button slot="footer" class="w-full" id="close-button">Close</sd-button></sd-dialog
      >

      <script>
        var dialog = document.querySelector('#prevent-closing');
        var closeButton = dialog.querySelector('#close-button');

        closeButton.addEventListener('click', () => dialog.hide());

        // Prevent the dialog from closing when the user clicks on the overlay
        dialog.addEventListener('sd-request-close', event => {
          if (event.detail.source === 'overlay') {
            event.preventDefault();
          }
        });
      </script>
    `;
  }
};
