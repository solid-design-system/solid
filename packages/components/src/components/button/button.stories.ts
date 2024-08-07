/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';
const { argTypes, parameters } = storybookDefaults('sd-button');
const { overrideArgs } = storybookHelpers('sd-button');
const { generateTemplate } = storybookTemplate('sd-button'); // Replace with your custom element tag

/**
 * **Allows users to perform actions with a single click.**
 *
 * Buttons perform various functions (e.g. download, link) or activate other functions (e.g. filter). All buttons can be displayed with or without an icon. On small devices, the buttons are streched to full width.
 *
 * **Related templates**:
 * - [Button with Badge](?path=/docs/templates-button-with-badge--docs)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-button',
  component: 'sd-button',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fPGhgNZv98U4H69Gu2tlWi/Button?type=design&node-id=13-18&t=jDLqFEdY7ZlOJurc-4'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes,
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to set the button’s variant. Be sure to select the right one for the action you want to make available.
 *
 * - `primary` (default): Use the primary button for the most important actions in your interface, such as submitting a form, confirming a decision, or progressing to the next step in a process.
 * - `secondary`: Not all functions must have primary actions, sometimes the actions are subordinate to the content and all are equally important.
 * - `tertiary`: Use tertiary buttons for actions like accessing additional options, providing supplemental information, or performing less critical tasks.
 * - `cta` (Call to Action): The call-to-action button is only used once on a page (main conversion of the page).
 */

export const Variants = {
  render: () => {
    return html`
      <div class="flex gap-12">
        <sd-button variant="primary">Primary</sd-button>
        <sd-button variant="secondary">Secondary</sd-button>
        <sd-button variant="tertiary">Tertiary</sd-button>
        <sd-button variant="cta">CTA</sd-button>
      </div>
    `;
  }
};

/**
 * Use the `size` attribute to change a button’s size. The default is `lg`. In tight spaces, consider using `md` or even `sm`.
 */
export const Size = {
  render: () => {
    return html`
      <div class="flex gap-12">
        <sd-button size="lg">Large</sd-button>
        <sd-button size="md">Medium</sd-button>
        <sd-button size="sm">Small</sd-button>
      </div>
    `;
  }
};

/**
 * Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.
 */

export const Loading = {
  render: () => {
    return html`
      <div class="flex gap-12">
        <sd-button variant="primary" loading>Loading</sd-button>
        <sd-button variant="secondary" loading>Loading</sd-button>
        <sd-button variant="tertiary" loading>Loading</sd-button>
        <sd-button variant="cta" loading>Loading</sd-button>
      </div>
    `;
  }
};

/**
 * Use the `disabled` attribute to disable buttons.
 */

export const Disabled = {
  render: () => {
    return html`
      <div class="flex gap-12">
        <sd-button variant="primary" disabled>Disabled</sd-button>
        <sd-button variant="secondary" disabled>Disabled</sd-button>
        <sd-button variant="tertiary" disabled>Disabled</sd-button>
        <sd-button variant="cta" disabled>Disabled</sd-button>
      </div>
    `;
  }
};

/**
 * Use the `inverted` attribute when buttons are used on primary background.
 */

export const Inverted = {
  render: () => {
    return html`
      <div class="flex gap-12">
        <sd-button variant="primary" inverted>Inverted</sd-button>
        <sd-button variant="secondary" inverted>Inverted</sd-button>
        <sd-button variant="tertiary" inverted>Inverted</sd-button>
        <sd-button variant="cta" inverted>Inverted</sd-button>
      </div>
    `;
  },
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: 'rgb(var(--sd-color-primary, 0 53 142))'
        }
      ]
    }
  }
};

/**
 * Use the `icon-left` or `icon-right` slot to add system icons.
 */

export const Icon = {
  render: () => {
    return html`
      <div class="flex gap-12">
        <sd-button>Icon left<sd-icon name="system/image" slot="icon-left"></sd-icon></sd-button>
        <sd-button>Icon right<sd-icon name="system/image" slot="icon-right"></sd-icon></sd-button>
        <sd-button><sd-icon name="system/image"></sd-icon></sd-button>
      </div>
    `;
  }
};
