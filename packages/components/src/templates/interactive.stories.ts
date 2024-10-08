import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Interactive',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3387-10058&t=7RxABd1ABtGBguGB-4'
    }
  }
};

/**
 * Examples of the `sd-interactive` class:
 *
 * - Label only
 * - Icon only
 * - Left icon with label
 * - Label with right icon
 */
export const Examples = {
  render: () => html`
    <div class="flex flex-col gap-12">
      <button class="sd-interactive sd-interactive--reset">Text</button>
      <button class="sd-interactive sd-interactive--reset">
        <sd-icon library="global-resources" name="system/picture"></sd-icon>
      </button>
      <button class="sd-interactive sd-interactive--reset flex flex-row items-center gap-2">
        <sd-icon library="global-resources" name="system/picture"></sd-icon>
        <span>Text</span>
      </button>
      <button class="sd-interactive sd-interactive--reset flex flex-row items-center gap-2">
        <span>Text</span>
        <sd-icon library="global-resources" name="system/picture"></sd-icon>
      </button>
    </div>
  `
};
