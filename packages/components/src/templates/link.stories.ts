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

/**
 * ### Link List
 *
 * This example shows a list of links inside a container.
 */

export const LinkList = {
  name: 'Link List',
  render: () =>
    html`<div class="bg-primary-100 p-8">
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
    </div>`
};
