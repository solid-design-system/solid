import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/List with Weights',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * Bolded text can be used for more emphasis.
 */
export const Default = {
  render: () =>
    html`<ul class="sd-list">
      <li>
        <b>Unordered list level 1</b>
        <ul>
          <li>
            Unordered list level 2
            <ul>
              <li>Unordered list level 3</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Unordered list level 1</b></li>
      <li><b>Unordered list level 1</b></li>
    </ul>`
};
