import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Container',
  component: 'sd-container',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ffdz9zO1CISlr8aHCZ7Bzp/Container?type=design&node-id=0-1&mode=design&t=pa9I1YKCYZQxj9Ob-0'
    }
  }
};

export const Default = {
  render: () =>
    html`<div class="sd-container">
      <div class="slot slot--border slot--text h-12">Default slot</div>
    </div>`
};
/**
 * You can set the color of the triangle cut-out using the `--triangle-background` CSS property. CSS variables can be set either with an inline style: `style="--triangle-background: rgb(var(--sd-color-primary-600, 0 53 142) / 1);"` or a custom class:
 * `.custom-sd-container {
    --triangle-background: rgb(var(--sd-color-primary-600, 0 53 142) / 1);
  }`
 */

export const TriangleColor = {
  name: 'Triangle Color',
  render: () =>
    html`<div class="bg-primary p-4">
      <div
        style="--triangle-background: rgb(var(--sd-color-primary-600, 0 53 142) / 1);"
        class="sd-container sd-container--variant-white sd-container--triangle-top sd-container--padding-"
      >
        <div class="slot slot--border slot--text h-12">Default slot</div>
      </div>
    </div>`
};
