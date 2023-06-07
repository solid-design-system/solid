import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { getIconLibrary, unwatchIcon, watchIcon } from './library';
import { requestIcon } from './request';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import SolidElement from '../../internal/solid-element';

let parser: DOMParser;

/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @status stable
 * @since 1.0
 *
 * @event sd-load - Emitted when the icon has loaded.
 * @event sd-error - Emitted when the icon fails to load due to an error.
 */

@customElement('sd-icon')
export default class SdIcon extends SolidElement {
  @state() private svg = '';

  /** The name of the icon to draw. Available names depend on the icon library being used. */
  @property({ reflect: true }) name?: string;

  /**
   * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon,
   * it might make sense to register a custom icon library.
   */
  @property() src?: string;

  /**
   * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
   * ignored by assistive devices.
   */
  @property() label = '';

  /** The name of a registered custom icon library. */
  @property({ reflect: true }) library = 'default';

  /**
   * The color of the icon.
   * "current" refers to currentColor and makes it possible to easily style the icon from outside without any CSS variables.
   */
  @property({ reflect: true }) color: 'currentColor' | 'primary' | 'white' = 'currentColor';

  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }

  firstUpdated() {
    this.setIcon();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }

  private getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    }
    return this.src;
  }

  @watch('label')
  handleLabelChange() {
    const hasLabel = typeof this.label === 'string' && this.label.length > 0;

    if (hasLabel) {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.label);
      this.removeAttribute('aria-hidden');
    } else {
      this.removeAttribute('role');
      this.removeAttribute('aria-label');
      this.setAttribute('aria-hidden', 'true');
    }
  }

  @watch(['name', 'src', 'library'])
  async setIcon() {
    const library = getIconLibrary(this.library);
    const url = this.getUrl();

    // Create an instance of the DOM parser. We do it here instead of top-level to support SSR while maintaining a
    // single parser instance for optimal performance.
    if (!parser) {
      parser = new DOMParser();
    }

    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          // If the url has changed while fetching the icon, ignore this request
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, 'text/html');
          const svgEl = doc.body.querySelector('svg');

          if (svgEl !== null) {
            library?.mutator?.(svgEl);
            this.svg = svgEl.outerHTML;
            this.emit('sd-load');
          } else {
            this.svg = '';
            this.emit('sd-error');
          }
        } else {
          this.svg = '';
          this.emit('sd-error');
        }
      } catch {
        this.emit('sd-error');
      }
    } else if (this.svg.length > 0) {
      // If we can't resolve a URL and an icon was previously set, remove it
      this.svg = '';
    }
  }

  render() {
    return html` ${unsafeSVG(this.svg)} `;
  }

  static styles = [
    css`
      ${componentStyles}
      :host {
        display: inline-block;
        width: 1em;
        height: 1em;
        box-sizing: content-box !important;
      }

      svg {
        display: block;
        height: 100%;
        width: 100%;
      }

      :host([color='primary']) svg {
        color: rgb(var(--sd-color-primary, 0 53 142) / var(--tw-text-opacity, 1)); // text-primary
      }

      :host([color='white']) svg {
        color: rgb(var(--sd-color-white, 255 255 255) / var(--tw-text-opacity, 1)); // text-white
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-icon': SdIcon;
  }
}
