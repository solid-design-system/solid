/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
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
 * Use the `size` attribute to adjust the size of the link. By default it is set to `inherit` but can be changed to `lg` or `sm`.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
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
 * Link list example.
 */

export const Sample = {
  name: 'Sample',
  render: () => html`
    <div class="bg-primary-100 p-8">
      <h2 class="sd-headline sd-headline--size-lg mb-8">You might be interested in this:</h2>
      <ul class="link-list">
        <li class="mb-5">
          <sd-link
            href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
            size="lg"
            standalone
          >
            Corporate bonds
            <sd-icon library="system" name="chevron-up" class="rotate-90" slot="icon-left"></sd-icon>
          </sd-link>
        </li>
        <li class="mb-5">
          <sd-link
            href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
            size="lg"
            standalone
          >
            Covered Bonds
            <sd-icon library="system" name="chevron-up" class="rotate-90" slot="icon-left"></sd-icon>
          </sd-link>
        </li>
        <li>
          <sd-link
            href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
            size="lg"
            standalone
          >
            Careful selection is crucial for success
            <sd-icon library="system" name="chevron-up" class="rotate-90" slot="icon-left"></sd-icon>
          </sd-link>
        </li>
      </ul>
    </div>
  `
};
