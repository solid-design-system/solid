import { customElement, property } from 'lit/decorators.js';
import { css, html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import SolidElement from '../../internal/solid-element';
import cx from 'classix';

/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://solid.union-investment.com/[storybook-link]/spinner
 * @status stable
 * @since 2.0
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-spinner')
export default class SdSpinner extends SolidElement {
  // static styles: CSSResultGroup = styles;

  /** The size of the spinner.
   */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'large';

  /** The color variant of the spinner.
  */
  @property({ reflect: true }) variant: 'primary' | 'secondary' | 'tertiary' | 'cta' | 'disabled' = 'primary';

  private readonly localize = new LocalizeController(this);

  // TODO: clarify with design as neutral-200 only exists on background values and not on border values
  // TODO: clarify with design as border with cannot be calculated as defined in Figma (no .5px values allowed)
  // TODO: clarify the color variants for the button with design

  render() {
    return html`
      <div
        part="base"
        class=${cx('spinner block rounded-full animate-spin',
      {
        /* variants */
        primary: 'border-white',
        secondary: 'border-neutral-300',
        tertiary: 'border-neutral-300',
        cta: 'border-white',
        disabled: 'border-white',
      }[this.variant],
      {
        /* variants */
        primary: 'border-t-primary',
        secondary: 'border-t-primary',
        tertiary: 'border-t-primary',
        cta: 'border-t-accent',
        disabled: 'border-t-neutral-500',
      }[this.variant],
    )}
        role="progressbar"
        aria-valuetext=${this.localize.term('loading')}
      ></div>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
  */
  static styles = [
    ...SolidElement.styles,
    css`
    :host([size="large"]){
      --size-denominator: 1;
    }
    :host([size="medium"]){
      --size-denominator: 0.75;
    }
    :host([size="small"]){
      --size-denominator: 0.375;
    }

    :host {
      display: inline-block;
    }

    .spinner {
      width: calc(64px * var(--size-denominator));
      height: calc(64px * var(--size-denominator));
      border-width: calc(6px * var(--size-denominator));
    }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-spinner': SdSpinner;
  }
}
