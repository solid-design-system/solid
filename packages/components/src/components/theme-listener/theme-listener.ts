import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { observeTheme, readTheme } from '../../internal/theme-observer';
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
  private stopListening?: () => void;

  protected handleThemeChange(theme: string): void {
    this.emit('sd-theme-change', { detail: { theme }, bubbles: true });
  }

  connectedCallback(): void {
    super.connectedCallback();

    // The listener is an explicit utility, so it reads its theme right away to report changes from the first frame on.
    this.stopListening = observeTheme(this, this.handleThemeChange.bind(this), readTheme(this));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.stopListening?.();
    this.stopListening = undefined;
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
