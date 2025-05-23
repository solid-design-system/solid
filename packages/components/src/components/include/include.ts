import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import { requestInclude } from './request';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Includes give you the power to embed external HTML files into the page.
 * @documentation https://solid.union-investment.com/[storybook-link]/include
 * @status stable
 * @since 1.0
 *
 * @event sd-load - Emitted when the included file is loaded.
 * @event {{ status: number }} sd-error - Emitted when the included file fails to load due to an error.
 */
@customElement('sd-include')
export default class SdInclude extends SolidElement {
  /**
   * The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
   * code and can result in XSS attacks.
   */
  @property({ reflect: true }) src: string;

  /** The fetch mode to use. */
  @property({ type: String, reflect: true }) mode: 'cors' | 'no-cors' | 'same-origin' = 'cors';

  /**
   * Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
   * code and can result in XSS attacks.
   */
  @property({ attribute: 'allow-scripts', type: Boolean, reflect: true }) allowScripts = false;

  private executeScript(script: HTMLScriptElement) {
    // Create a copy of the script and swap it out so the browser executes it
    const newScript = document.createElement('script');
    [...script.attributes].forEach(attr => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode!.replaceChild(newScript, script);
  }

  @watch('src')
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);

      // If the src changed since the request started do nothing, otherwise we risk overwriting a subsequent response
      if (src !== this.src) {
        return;
      }

      if (!file.ok) {
        this.emit('sd-error', { detail: { status: file.status } });
        return;
      }

      this.innerHTML = file.html;

      if (this.allowScripts) {
        [...this.querySelectorAll('script')].forEach(script => this.executeScript(script));
      }

      this.emit('sd-load');
    } catch {
      this.emit('sd-error', { detail: { status: -1 } });
    }
  }

  render() {
    return html`<slot></slot>`;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-include': SdInclude;
  }
}
