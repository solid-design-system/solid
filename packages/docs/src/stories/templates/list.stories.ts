import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
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
 * Example of how to structure a multi-level unordered list with bold top-level items acting as category headings. Nested sub-items provide supporting detail beneath each heading, making the hierarchy clear at a glance.
 */
export const ListWithBoldedText = {
  render: () =>
    html`<ul class="sd-list">
      <li>
        <b>Unordered bold list</b>
        <ul>
          <li>
            Unordered normal list
            <ul>
              <li>Unordered normal list</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Unordered bold list</b></li>
      <li><b>Unordered bold list</b></li>
    </ul>`
};
