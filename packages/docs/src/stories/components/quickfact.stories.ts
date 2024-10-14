/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import './quickfact';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-quickfact');
const { overrideArgs } = storybookHelpers('sd-quickfact');
const { generateTemplate } = storybookTemplate('sd-quickfact');

/**
 * Used to present information in an expandable and more dynamic way.
 *
 * **Related templates:**
 * - [Quickfact](?path=/docs/templates-quickfact--docs)
 *
 *
 * **Disclaimer:** Due to a bug with Storybook Controls, the `expandable` attribute controls might not behave as expected. Please refresh the page if you wish to reset the controls.
 *
 * You can follow this issue here: https://github.com/storybookjs/storybook/issues/28634
 */
export default {
  title: 'Components/sd-quickfact',
  component: 'sd-quickfact',
  tags: ['!dev'],
  args: overrideArgs([
    {
      type: 'slot',
      name: 'summary',
      value: `<div slot="summary" class="flex flex-col sm:gap-4"> <p class="text-base font-normal leading-normal sm:text-4xl sm:leading-tight">Lorem Ipsum</p>
      <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div></div>`
    },
    {
      type: 'slot',
      name: 'icon',
      value: `<sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2592-3469&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `expandable` attribute to make the quickfact item expandable.
 */
export const Expandable = {
  render: () => html`
    <sd-quickfact expandable="" summary="Lorem Ipsum">
      <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>
      <div class="slot slot--border slot--text h-16">Default slot</div>
    </sd-quickfact>
  `
};

/**
 * Use the `open` attribute to set the state of the quickfact.
 */
export const Open = {
  render: () => html`
    <div class="flex flex-col gap-12">
      <sd-quickfact expandable="" open summary="Open">
        <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>
        <div class="slot slot--border slot--text h-16">Default slot</div>
      </sd-quickfact>

      <sd-quickfact expandable="" summary="Closed">
        <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>
        <div class="slot slot--border slot--text h-16">Default slot</div>
      </sd-quickfact>
    </div>
  `
};

/**
 * Use the `summary` attribute to provide the text in the quickfact.
 *
 * For summaries that contain HTML, use the summary slot instead.
 */
export const Summary = {
  render: () => html`
    <sd-quickfact>
      <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>
      <div slot="summary" class="flex flex-col sm:gap-4">
        <p class="text-base font-normal leading-normal sm:text-4xl sm:leading-tight">Summary</p>
        <div class="text-base font-normal leading-normal sm:text-xl">Description</div>
      </div>
      <div class="slot slot--border slot--text h-16">Default slot</div>
    </sd-quickfact>
  `
};
