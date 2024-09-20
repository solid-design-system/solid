import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/List',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3498-5634&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * ### List with Bolded Text
 */
export const ListWithBoldedText = {
  render: () =>
    html`<ul class="sd-list">
      <li>
        <b>Unordered Bold list</b>
        <ul>
          <li>
            Unordered Normal list
            <ul>
              <li>Unordered Normal list</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Unordered Bold list</b></li>
      <li><b>Unordered Bold list</b></li>
    </ul>`
};
