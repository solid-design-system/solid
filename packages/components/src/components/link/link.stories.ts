/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html, render } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes } = storybookDefaults('sd-link');
const { generateTemplate } = storybookTemplate('sd-link');
const { overrideArgs } = storybookHelpers('sd-link');

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
 * The `size` attribute can be used to adjust the size of the link. By default it is set to `inherit` but can be changed to `lg` or `sm`.
 */

export const Sizes = {
  name: 'Sizes',
  render: () => html`
    <div class="flex gap-12">
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" size="lg">Large</sd-link>
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" size="sm">Small</sd-link>
    </div>
  `
};

/**
 * The `inverted` attribute can be used to invert the link's colors and use it in dark backgrounds.
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
 * The `disabled` attribute can be used to disable the link.
 * To disable the link, the `href` attribute has to be removed.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="flex gap-12">
      <sd-link disabled>Disabled</sd-link>
    </div>
  `
};

/**
 * The `standalone` attribute can be used to control the layout of the icon and text within the component.
 * If true, the icon and text will be displayed side by side, each occupying its own column.
 * If false or not provided, the icon will be displayed inline within the text.
 */

export const Standalone = {
  name: 'Standalone',
  render: () => html`
    <div class="flex gap-12">
      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/" standalone>
        <sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>
        Standalone
      </sd-link>

      <sd-link href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/">
        <sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>
        Without Standalone
      </sd-link>
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

/**
 * Example of a combination of attributes (`size`, `standalone`, `href`) and slots (`icon-right` and `icon-left`) rendered in a list.
 */

export const LinksInList = {
  name: 'Links in List',
  render: () => html`
    <div class="bg-primary-100 p-8">
      <h2 class="sd-headline sd-headline--size-2xl mb-8">You might be interested in this:</h2>
      <ul class="link-list">
        <li class="mb-5">
          <sd-link
            href="https://institutional.union-investment.de/startseite-de/reporting/Rund-um-unsere-Fonds/Fonds-im-Ueberblick/downloads.html?action=viewFondsDownloadOf&isin=LU0249047092&kundenkreis=1&legalcheck_9eae9aca-e270-4ab2-a21e-8468081acb69=3f8f3069-86d9-4c6e-baf4-ed746380e81f"
            size="lg"
            standalone
          >
            Commodities-Invest
            <sd-icon library="system" name="chevron-up" class="rotate-90" slot="icon-left"></sd-icon>
          </sd-link>
        </li>
        <li>
          <sd-link
            href="https://institutional.union-investment.de/themen-und-analysen/rohstoffmaerkte-werden-gruen"
            size="lg"
            standalone
          >
            Rohstoffmärkte werden grün
            <sd-icon library="system" name="chevron-up" class="rotate-90" slot="icon-left"></sd-icon>
          </sd-link>
        </li>
      </ul>
    </div>
  `
};
