import '../../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Button with Badge',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hER2N8wZXhiTrdlDXyrdUt/Quote?type=design&node-id=1001-4293&mode=design&t=Xywhix1rQMoatokH-0'
    }
  }
};
/**
 * Here are some examples of sd-button working with sd-badge.
 */
export const Default = {
  render: () => html`
    <section class="flex p-4 gap-10 items-center">
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
  `
};

/**
 * Here are some examples of sd-button working with sd-badge.
 */
export const Inverted = {
  render: () => {
    return html`
      <section class="flex p-4 gap-10 bg-primary items-center">
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
