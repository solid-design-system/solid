import '../solid-components';
import { html } from 'lit-html';

/**
 * __Accessibility Hint:__
 * For the green accent color in the mark, ensure a minimum font size of 18.67 pixels when bolded and 24 pixels when in regular weight.
 */
export default {
  tags: ['!dev'],
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
  render: () => html` <p class="sd-display">Lorem <mark class="sd-mark">Ipsum</mark></p> `
};

export const LeadtextWithMark = {
  render: () => html`
    <p class="sd-leadtext sd-leadtext--size-lg">
      We are an active German asset manager based in Frankfurt/Main, offering a comprehensive range of investment
      solutions across various asset classes and regions.
      <mark class="sd-mark">Union Investment was founded in 1956.</mark>
    </p>
  `
};
