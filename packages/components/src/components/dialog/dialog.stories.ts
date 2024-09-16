import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { overrideArgs } = storybookHelpers('sd-dialog');
const { argTypes, parameters } = storybookDefaults('sd-dialog');
const { generateTemplate } = storybookTemplate('sd-dialog');

/**
 *
 * Used over other content. It requires an interaction from the user before they can return to whatever is underneath.
 *
 * - Use the `headline` slot to add a headline.
 * - Use the `default` slot to add main content. <br /> Default slot is always scrollable.
 * - Use the `footer` slot to add action elements. <br /> Footer slot is always fixed.
 *
 *
 *  **Related templates**:
 * - [Dialog](?path=/docs/templates-dialog--docs)
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
      value: `<div class="slot slot--border slot--text h-16 w-full">Default slot</div>`
    },
    {
      type: 'slot',
      name: 'headline',
      value: `<div slot="headline" class="slot slot--border slot--text h-16">Headline slot</div>`
    },
    {
      type: 'slot',
      name: 'footer',
      value: `<div slot="footer" class="slot slot--border slot--text h-16 w-full">Footer slot</div>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2216-42723&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
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
    <div class="h-[40vh]">
      <sd-dialog open>
        <h4 slot="headline" class="sd-headline sd-headline-3xl">Lorem ipsum</h4>
        <p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
        </p>
        <sd-button slot="footer">Button</sd-button>
      </sd-dialog>
    </div>
  `
};

/**
 *  Use the `headline` attribute to set the headline of the dialog. If you need to use custom HTML, use the headline slot instead.
 */

export const Headline = {
  name: 'Headline',
  render: () => html`
    <div class="h-[40vh]">
      <sd-dialog open headline="Headline">
        <p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
        </p>
        <sd-button slot="footer">Button</sd-button>
      </sd-dialog>
    </div>
  `
};

/**
 * Use the `no-close-button` attribute to hide the close button in the dialog.
 *
 * You should always include an action button that allows users to close the dialog.
 */

export const NoCloseButton = {
  name: 'No Close Button',
  render: () => html`
    <div class="h-[40vh]">
      <sd-dialog id="dialog" headline="Headline" open no-close-button>
        <p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
        </p>
        <sd-button class="close-button" slot="footer" variant="primary">Button</sd-button>
      </sd-dialog>
    </div>

    <script>
      var dialog = document.getElementById('dialog');
      var button = dialog.querySelector('.close-button');

      button.addEventListener('click', () => {
        dialog.hide();
        setTimeout(() => {
          dialog.show();
        }, 2000);
      });
    </script>
  `
};
