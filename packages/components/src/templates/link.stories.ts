import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Link',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2636-24351&t=7RxABd1ABtGBguGB-4'
    }
  }
};

export const Default = {
  name: 'Link with Icon',
  render: () =>
    html`<sd-link href="http://union-investment.com" standalone>
        <sd-icon name="system/home" slot="icon-left"></sd-icon>
        Union Investment
      </sd-link>
      <p class="mt-4">
        While the list above shows standalone links, we now will link to the
        <sd-link href="https://cd.union-investment.de">
          CD Toolbox
          <sd-icon name="system/external-link" slot="icon-right"></sd-icon>
        </sd-link>
        inside a paragraph.
      </p>`
};

export const LinkList = {
  render: () =>
    html` <ul class="link-list">
      <li class="mb-5">
        <sd-link
          href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
          size="lg"
        >
          About us
        </sd-link>
      </li>
      <li class="mb-5">
        <sd-link
          href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
          size="lg"
        >
          Our funds at a glance
        </sd-link>
      </li>
      <li class="mb-5">
        <sd-link
          href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
          size="lg"
        >
          Sustainable Investments
        </sd-link>
      </li>
      <li>
        <sd-link
          href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
          size="lg"
        >
          Latest expert views and analyses
        </sd-link>
      </li>
    </ul>`
};

export const anchorLinkList = {
  render: () => html`
    <div class="flex flex-row gap-4">
      <sd-link href="#" class="font-bold" standalone>
        <sd-icon name="system/anchor-link" slot="icon-left"></sd-icon>
        Assets under management
      </sd-link>
      <sd-link href="#" class="font-bold" standalone>
        <sd-icon name="system/anchor-link" slot="icon-left"></sd-icon>
        Protecting is out priority
      </sd-link>
      <sd-link href="#" class="font-bold" standalone>
        <sd-icon name="system/anchor-link" slot="icon-left"></sd-icon>
        Sustainability
      </sd-link>
    </div>
  `
};
