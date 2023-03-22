import '../../solid-components';
import { getDefaultArgs, renderDefaultStory, renderTableStoryFromAttributes, renderStoryFromAttributes } from '../../../scripts/storybook/helper';
import { html } from 'lit-html';

export default {
  title: 'Patterns/sd-button',
  component: 'sd-button',
  args: getDefaultArgs('sd-button'),
  parameters: {
    controls: { include: [] },
    docs: {
      page: null,
    },
  },
};


/**
 * Drop a `caret` in the suffix slot, to create a dropdown indicator when a button will trigger a dropdown, menu, or popover.
 */

export const Caret = {
  name: 'Caret (Dropdown)',

  render: (args: any) => {
    return html` <sd-button>
  Button with Caret
  <sd-icon class="h-auto" slot="suffix" library="system" name="caret"></sd-icon>
</sd-button>
    `;
  }
};
