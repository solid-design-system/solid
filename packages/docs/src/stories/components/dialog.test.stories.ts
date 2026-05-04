import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';

const { overrideArgs } = storybookHelpers('sd-dialog');
const { argTypes, parameters } = storybookDefaults('sd-dialog');
const { generateTemplate } = storybookTemplate('sd-dialog');

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
