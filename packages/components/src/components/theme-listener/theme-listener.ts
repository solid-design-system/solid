import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Theme listener is a utility that listens to theme changes and triggers an event.
 * @status experimental
 * @since 1.0
 *
 * @event sd-theme-change - Emitted when the sd-theme changes.
 *
 */
@customElement('sd-theme-listener')
export default class SdThemeListener extends SolidElement {
  protected onThemeChange(theme: string): void {
    this.emit('sd-theme-change', { detail: { theme } });
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply sr-only;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-theme-listener': SdThemeListener;
  }
}
