import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Dialog with scrollable content',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

/**
 * This shows sd-dialog’s height will never exceed that of the viewport. As such, sd-dialogs will not scroll with the page ensuring the contents are always accessible to the user. It is recomended to use `sd-scrollable` with an enabled shadow property for scrolling content in the `default` slot.
 *
 * ```
 * ```
 */

export const Default = {
  render: () => html`
    <div class="flex gap-12 h-[100vh]">
      <div>
        <sd-dialog id="dialog" open>
          <div slot="headline" class="slot slot--border slot--text h-16">Headline slot</div>
          <sd-scrollable orientation="vertical" shadows class="w-full"
            ><div
              class="slot slot--border slot--background slot--text"
              style="height:150vh; width: 100%; padding: 1rem; justify-content:start;"
            >
              Scroll down and give it a try!
            </div></sd-scrollable
          >
        </sd-dialog>
      </div>
    </div>
  `
};
