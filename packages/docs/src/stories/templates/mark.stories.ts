import '../../../../components/src/solid-components';
import { html } from 'lit-html';

/**
 * __Accessibility Hint:__
 * For the green accent color in the mark, ensure a minimum font size of 18.67 pixels when bolded and 24 pixels when in regular weight.
 */
export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Mark',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3607-5390&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

export const HeadlineWithMark = {
  name: 'Headline with Mark',
  render: () =>
    html`<div class="flex flex-col gap-8">
      <h4 class="sd-headline">
        <sd-icon name="content/skyscrapers" color="primary" aria-hidden="true" library="default"></sd-icon>
        <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
      </h4>
      <h4 class="sd-headline">
        <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
      </h4>
      <h4 class="sd-headline sd-headline--size-3xl">
        <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
      </h4>
      <h4 class="sd-headline sd-headline--size-xl">
        <sd-icon name="content/skyscrapers" color="primary" aria-hidden="true" library="default"></sd-icon>
        <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
      </h4>
    </div>`
};

export const DisplayWithMark = {
  name: 'Display with Mark',
  render: () => html` <p class="sd-display"><mark class="sd-mark">Union Investment</mark> at a glance</p> `
};
