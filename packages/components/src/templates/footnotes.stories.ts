import '../solid-components';
import { html } from 'lit-html';

/**
 * Use the html `start` attribute to set the starting number of the list. The default value is '1'.
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Footnotes',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * ```
 * ```
 */
export const FootnotesSetStart = {
  render: () => html`
    <ol start="50" class="sd-footnotes">
      <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
      <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
      <li>Dolore magna aliq erat, sed diam voluptua.</li>
    </ol>
    <ol start="150" class="sd-footnotes">
      <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
      <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
      <li>Dolore magna aliq erat, sed diam voluptua.</li>
    </ol>
    <ol class="sd-footnotes">
      <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
      <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
      <li>Dolore magna aliq erat, sed diam voluptua.</li>
    </ol>
  `
};
