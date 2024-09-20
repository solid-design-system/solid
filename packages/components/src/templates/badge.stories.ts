import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Badge',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3783-5107&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * ### Button with Badge
 *
 * Examples of sd-button working with sd-badge:
 */
export const ButtonWithBadge = {
  render: () => html`
    <div class="flex flex-col">
      <section class="flex p-8 gap-10 items-center">
        <sd-button>Label <sd-badge>8</sd-badge></sd-button>
        <sd-button>Label <sd-badge variant="success">999+</sd-badge></sd-button>
        <sd-button variant="secondary" size="md">
          <sd-icon slot="icon-left" name="system/image"></sd-icon>
          Label
          <sd-badge>8</sd-badge>
        </sd-button>
        <sd-button variant="secondary" size="md">
          <sd-icon name="system/image"></sd-icon>
          <sd-badge variant="success" size="md">8</sd-badge>
        </sd-button>
        <sd-button variant="tertiary" size="md">
          <sd-icon name="system/image"></sd-icon>
          <sd-badge class="mt-2.5 mr-2.5" variant="error" size="md">8</sd-badge>
        </sd-button>
        <sd-button variant="tertiary" size="md">
          <sd-icon name="system/image"></sd-icon>
          <sd-badge class="mt-[0.75rem] mr-[0.75rem]" size="sm"></sd-badge>
        </sd-button>
      </section>
      <section class="flex p-8 gap-10 bg-primary items-center">
        <sd-button inverted>Label <sd-badge inverted>8</sd-badge></sd-button>
        <sd-button inverted>Label <sd-badge inverted variant="success">999+</sd-badge></sd-button>
        <sd-button inverted variant="secondary" size="md">
          <sd-icon slot="icon-left" name="system/image"></sd-icon>
          Label
          <sd-badge inverted>8</sd-badge>
        </sd-button>
        <sd-button inverted variant="secondary" size="md">
          <sd-icon name="system/image"></sd-icon>
          <sd-badge variant="success" size="md">8</sd-badge>
        </sd-button>
        <sd-button inverted variant="tertiary" size="md">
          <sd-icon name="system/image"></sd-icon>
          <sd-badge inverted class="mt-2.5 mr-2.5" variant="error" size="md">8</sd-badge>
        </sd-button>
        <sd-button inverted variant="tertiary" size="md">
          <sd-icon name="system/image"></sd-icon>
          <sd-badge inverted class="mt-[0.75rem] mr-[0.75rem]" size="sm"></sd-badge>
        </sd-button>
      </section>
    </div>
  `
};
