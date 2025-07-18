import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';

const { overrideArgs } = storybookHelpers('sd-dialog');
const { argTypes, parameters } = storybookDefaults('sd-dialog');
const { generateTemplate } = storybookTemplate('sd-dialog');

/**
 * **Disclaimer** : Input-based controls for `sd-dialog` are unavailable on this Docs page due to a [Storybook bug](https://github.com/solid-design-system/solid/issues/702). Please use the individual feature stories to access these controls.
 */

export default {
  title: 'Components/sd-dialog/Screenshots: sd-dialog',
  tags: ['!autodocs'],
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
      type: 'attribute',
      name: 'headline',
      value: `Lorem Ipsum`
    },
    {
      type: 'slot',
      name: 'footer',
      value: `<sd-button slot="footer" class="w-full">Button</sd-button>`
    }
  ]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

/**
 * Default: This shows sd-dialog in its default state.
 */

export const Default = {
  name: 'Default',
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
  name: 'No Close Button',
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
                const dialog = document.querySelector('sd-dialog');
                const footer = dialog.querySelector('sd-button[slot="footer"]');

                footer.addEventListener('click', () => dialog.hide());
          </script>`
          }
        ]
      })}
    </div>`;
  }
};

/**
 * This shows sd-dialog’s height will never exceed that of the viewport. As such, sd-dialogs will not scroll with the page ensuring the contents are always accessible to the user. It is recomended to use `sd-scrollable` with an enabled shadow property for scrolling content in the `default` slot.
 */

export const Scrolling = {
  name: 'Scrolling',
  render: (args: any) => {
    return html` <div style="height: 100vh;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `<sd-scrollable orientation='vertical' shadows class="w-full"><div class="slot slot--border slot--background slot--text" style="height:150vh; width: 100%; padding: 1rem; justify-content:start;">Scroll down and give it a try!</div></sd-scrollable>`
          }
        ]
      })}
    </div>`;
  }
};

/**
 *  This sample displays `sd-dialog` with two `sd-button` components in the footer slot. When incorporating multiple `sd-buttons`, it is recommended to use distinct button variants for clarity and consistency in user interactions.
 *
 * You can use the CSS part `sd-dialog::part(footer)` to customize button layout based on your requirements. For instance, you may opt for columns instead of rows for mobile devices, and so on. To achieve that we used the additional style:
 *
 * ```css
 *
 *   @media (max-width: 414px) {
          sd-dialog::part(footer){
            flex-direction: column;
 *   }
 * }

 * ```
 *
 *
 */

export const ExtendedFooter = {
  name: 'Sample: Extended Footer',
  render: () => {
    return html`
      <style>
        @media (max-width: 414px) {
          sd-dialog::part(footer) {
            flex-direction: column;
          }
        }
      </style>

      <div style="height: 40vh;">
        <sd-dialog open="" id="extended-footer"
          ><p class="sd-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
            phasellus dui vel id. Velit in sed.
          </p>
          <span slot="headline" class="sd-headline sd-headline--size-3xl">Lorem Ipsum</span>
          <sd-button variant="secondary" slot="footer" class="w-full">Button</sd-button>
          <sd-button slot="footer" class="w-full">Button</sd-button>
        </sd-dialog>
      </div>
    `;
  }
};

/**
 *  This sample displays `sd-dialog` with smaller headline sizes using the <span> tag instead of headings (eg: h2, h3, etc.).
 */

export const SmallHeadline = {
  name: 'Sample: Small Headline',
  render: () => {
    return html`
      <div style="height: 40vh;">
        <sd-dialog open="" id="small-headline">
          <p class="sd-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
            phasellus dui vel id. Velit in sed.
          </p>
          <span slot="headline" class="font-bold">Lorem Ipsum</span>
          <sd-button slot="footer" class="w-full">Button</sd-button>
        </sd-dialog>
      </div>
    `;
  }
};

/**
 * sd-dialog is fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless" style="height: 40vh;">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-dialog');
    await waitUntil(() => el?.shadowRoot?.querySelector('sd-button'));

    el?.shadowRoot?.querySelector<HTMLElement>('sd-button')!.focus();
  }
};

// TODO: add combination of all features
