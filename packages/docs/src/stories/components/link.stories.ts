/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-link');
const { generateTemplate } = storybookTemplate('sd-link');
const { overrideArgs } = storybookHelpers('sd-link');

export default {
  tags: ['!dev'],
  title: 'Components/sd-link',
  component: 'sd-link',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Link' },
    { type: 'attribute', name: 'href', value: '#' }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2009-2177&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to adjust the size of the link:
 *
 * - `inherit`(default): to adapt to the surrounding text
 * - `lg`
 * - `sm`
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-link href="https://solid-design-system.fe.union-investment.de/docs/">Inherit</sd-link>
      <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" size="lg">Large</sd-link>
      <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" size="sm">Small</sd-link>
    </div>
  `
};

/**
 * - Use the `href` attribute to make it a link instead of a button.
 * - Use the `target` attribute to specify where to open the link.
 * - Use the `download` attribute to tell the browser to download the linked file as this filename.
 */

export const AsLink = {
  name: 'As link',
  render: () => html`
    <div class="flex gap-12">
      <sd-link
        href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
        >Link</sd-link
      ><sd-link href="https://union-investment.com" target="_blank">New Window</sd-link
      ><sd-link href="./placeholders/src/images/collaboration.jpg" download>Download</sd-link>
    </div>
  `
};

/**
 * Use the `icon-left` and `icon-right` slots to add system icons to each side of the link. They automatically adapt the size.
 */

export const Icon = {
  name: 'Icon',
  render: () => html`
    <div class="flex gap-12">
      <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" standalone>
        <sd-icon name="system/image" slot="icon-left"></sd-icon>
        Icon Left
      </sd-link>
      <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" standalone>
        Icon Right
        <sd-icon name="system/image" slot="icon-right"></sd-icon>
      </sd-link>
    </div>
  `
};

/**
 * Use the `standalone` attribute to control the layout of the icon and text within the component.
 * If true, the icon and text will be displayed side by side, each occupying its own column.
 * If false or not provided, the icon will be displayed inline within the text.
 */
export const Standalone = {
  name: 'Standalone',
  render: () => html`
    <div class="flex gap-12">
      <div class="sd-prose">
        <ul>
          <li>
            <sd-link href="http://union-investment.com" standalone>
              <sd-icon name="system/home" slot="icon-left"></sd-icon>
              Union Investment
            </sd-link>
          </li>
          <li>
            <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" standalone>
              <sd-icon name="system/pen" slot="icon-left"></sd-icon>
              Solid Design System
            </sd-link>
          </li>
        </ul>

        <p>
          While the list above shows standalone links, we now will link to the
          <sd-link href="https://cd.union-investment.de">CD Toolbox</sd-link> inside a paragraph.
        </p>
      </div>
    </div>
  `
};

/**
 * Remove the `href` to disable the link.
 */
export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="flex gap-12">
      <sd-link>Disabled</sd-link>
    </div>
  `
};

/**
 * Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
 *
 * __Hint:__ When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
 *
 * **Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.
 */
export const VisuallyDisabled = {
  name: 'Visually Disabled',
  render: () => html`
    <div class="flex gap-12 h-[100px] pt-12">
      <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm">
        <sd-link
          size="lg"
          href="https://solid-design-system.fe.union-investment.de/docs/"
          visually-disabled
          class="visually-disabled-link"
          >Visually Disabled</sd-link
        >
      </sd-tooltip>
    </div>
  `
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */
export const Inverted = {
  name: 'Inverted',
  render: () => html`
    <div class="flex gap-12 bg-primary p-4">
      <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" inverted>Inverted</sd-link>
    </div>
  `
};
