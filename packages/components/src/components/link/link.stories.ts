/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes } = storybookDefaults('sd-link');
const { generateTemplate } = storybookTemplate('sd-link');
const { overrideArgs } = storybookHelpers('sd-link');

/**
 *
 * This component is used to display links and can also be used to perform actions like downloading files.
 *
 *  **Related templates**:
 * - [Link List](?path=/docs/templates-link-list--docs)
 */

export default {
  tags: ['!dev'],
  title: 'Components/sd-link',
  component: 'sd-link',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Default' },
    { type: 'attribute', name: 'href', value: '#' }
  ]),
  argTypes,
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-link in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to adjust the size of the link. By default it is set to `inherit` to adapt to the surrounding text but can be explicitly changed to `lg` or `sm`.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/">Inherit</sd-link>
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" size="lg">Large</sd-link>
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" size="sm">Small</sd-link>
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
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" inverted>Inverted</sd-link>
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
              <sd-icon library="global-resources" name="system/home" slot="icon-left"></sd-icon>
              Union Investment
            </sd-link>
          </li>
          <li>
            <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" standalone>
              <sd-icon library="global-resources" name="system/pen" slot="icon-left"></sd-icon>
              Solid Design System
            </sd-link>
          </li>
        </ul>

        <p>
          While the list above shows <code>standalone</code> links, we now will link to the
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
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/">Enabled</sd-link>
      <sd-link>Disabled</sd-link>
    </div>
  `
};

/**
 * Use the `href` attribute to enable the link.
 *
 * Use the `target` attribute to specify where to open the link.
 *
 * Use the `download` attribute to tell the browser to download the linked file as this filename.
 */

export const AsLink = {
  name: 'As link',
  render: () => html`
    <div class="flex gap-12">
      <sd-link
        href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
        >Link</sd-link
      ><sd-link href="https://union-investment.com" target="_blank">New Window</sd-link
      ><sd-link href="./placeholders/src/images/collaboration.jpg" download>Download</sd-link>
    </div>
  `
};

/**
 * Use the `icon-left` and `icon-right` slots to add icons to each side of the link. They automatically adapt the size.
 */

export const SlottedIcons = {
  name: 'Slotted Icons',
  render: () => html`
    <div class="flex gap-12">
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" standalone>
        <sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>
        Slotted Icon Left
      </sd-link>

      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" standalone>
        Slotted Icon Right
        <sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>
      </sd-link>
    </div>
  `
};
