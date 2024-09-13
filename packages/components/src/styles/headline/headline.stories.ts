import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-headline');
const { overrideArgs } = storybookHelpers('sd-headline');
const { generateTemplate } = storybookTemplate('sd-headline');

/**
 * Used as a crucial element for displaying content hierarchy and to enhance accessibility.
 *
 * **Related templates**:
 * - [Headline with Mark](?path=/docs/templates-mark--docs)
 */

export default {
  title: 'Styles/sd-headline',
  tags: ['!dev'],
  component: 'sd-headline',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3162-7669&t=ohgrgpEVGgKzqMzU-4'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Nisi eu excepteur anim esse' }),
  argTypes,
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          text-align: left !important;
        }
      </style>
      ${story()}
    `
  ]
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<h4 class="%CLASSES%">%SLOT%</h4>' },
      args
    });
  }
};

/**
 * Use the `&--size-*` classes for alternative appearances.
 *
 * - `sd-headline--size-4xl` (default)
 * - `sd-headline--size-3xl`
 * - `sd-headline--size-xl`
 * - `sd-headline--size-lg`
 * - `sd-headline--size-base`
 */
export const Sizes = {
  render: () => html`
    <div class="flex flex-col gap-12">
      <p class="sd-headline sd-headline--size-4xl">Lorem ipsum sic semper</p>
      <p class="sd-headline sd-headline--size-3xl">Lorem ipsum sic semper</p>
      <p class="sd-headline sd-headline--size-xl">Lorem ipsum sic semper</p>
      <p class="sd-headline sd-headline--size-lg">Lorem ipsum sic semper</p>
      <p class="sd-headline sd-headline--size-base">Lorem ipsum sic semper</p>
    </div>
  `
};

/**
 * Use the `&--inverted` class when displayed on primary background.
 */
export const Inverted = {
  render: () =>
    html` <div class="bg-primary p-4">
      <h4 class="sd-headline sd-headline--inverted">Nisi eu excepteur anim esse</h4>
    </div>`
};

/**
 * Use the `&--inline` class to maintain inline positioning when used together with an icon or other components.
 */
export const Inline = {
  render: () => html`
    <div class="flex flex-col gap-12">
      <h4 class="sd-headline">
        <sd-icon name="content/picture" library="global-resources"></sd-icon>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.
      </h4>
      <h4 class="sd-headline sd-headline--inline">
        <sd-icon name="content/picture" library="global-resources"></sd-icon>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua.
      </h4>
    </div>
  `
};
