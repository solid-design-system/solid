/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-button');
const { overrideArgs } = storybookHelpers('sd-button');
const { generateTemplate } = storybookTemplate('sd-button'); // Replace with your custom element tag

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-button',
  component: 'sd-button',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=25-9809&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Button' }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to set the button’s variant:
 *
 * - `primary` (default): Use the primary button for the most important actions in your interface, such as submitting a form, confirming a decision, or progressing to the next step in a process
 * - `secondary`: Not all functions must have primary actions, sometimes the actions are subordinate to the content and all are equally important
 * - `tertiary`: Use tertiary buttons for actions like accessing additional options, providing supplemental information, or performing less critical tasks
 * - `cta` (Call to Action): The call-to-action button is only used once on a page (main conversion of the page)
 */

export const Variants = {
  render: () => {
    return html`
      <div class="flex gap-12">
        <sd-button variant="primary">Primary</sd-button>
        <sd-button variant="secondary">Secondary</sd-button>
        <sd-button variant="tertiary">Tertiary</sd-button>
        <sd-button variant="cta">Call to action</sd-button>
      </div>
    `;
  }
};

/**
 * Use the `size` attribute to change a button’s size:
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
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
 * - Use the `href` attribute to make it a link instead of a button.
 * - Use the `target` attribute to specify where to open the link.
 * - Use the `download` attribute to tell the browser to download the linked file as this filename.
 */

export const AsLink = {
  name: 'As link',
  render: () => html`
    <div class="flex gap-12">
      <sd-button
        href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
        >Link</sd-button
      ><sd-button href="https://union-investment.com" target="_blank">New window</sd-button
      ><sd-button href="./placeholders/src/images/collaboration.jpg" download>Download</sd-button>
    </div>
  `
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
 * Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
 *
 * __Hint:__ When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
 *
 * **Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.
 */
export const VisuallyDisabled = {
  render: () => {
    return html`
      <div class="flex gap-12 h-[100px] mt-12">
        <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
          <sd-button variant="primary" visually-disabled>Visually disabled</sd-button>
        </sd-tooltip>

        <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
          <sd-button variant="secondary" visually-disabled>Visually disabled</sd-button>
        </sd-tooltip>

        <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
          <sd-button variant="tertiary" visually-disabled>Visually disabled</sd-button>
        </sd-tooltip>

        <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
          <sd-button variant="cta" visually-disabled>Visually disabled</sd-button>
        </sd-tooltip>
      </div>
    `;
  }
};

/**
 * Use the `inverted` attribute when displayed on primary background.
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
  globals: {
    backgrounds: { value: 'primary' }
  }
};

/**
 * Use the `icon-left` or `icon-right` slot to add system icons.
 *
 * __Accessibility hint:__ Only use icon-only buttons when the icon meaning is unambiguous. Consider also adding the `title` attribute to describe the icon’s underlying action.
 */

export const Icon = {
  render: () => {
    return html`
      <div class="flex gap-12">
        <sd-button>Icon left<sd-icon name="system/image" slot="icon-left"></sd-icon></sd-button>
        <sd-button>Icon right<sd-icon name="system/image" slot="icon-right"></sd-icon></sd-button>
        <sd-button title="icon only"><sd-icon name="system/image" label="Icon only"></sd-icon></sd-button>
      </div>
    `;
  }
};
