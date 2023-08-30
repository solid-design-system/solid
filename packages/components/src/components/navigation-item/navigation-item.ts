import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Short summary of the component's intended use.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-example
 *
 * @event sd-event-name - Emitted as an example.
 *
 * @slot - The navigation item's label.
 * @slot main - Main slot used to set additional content like badges. Available for horizontal and vertical orientations.
 * @slot description - Slot used to provide a description for the navigation item. Only available for horizontal orientation.
 * @slot children - Slot used to provide nested child navigation elements. If present, the chevron property will be set to true.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sd-navigation-item')
export default class SdNavigationItem extends SolidElement {
  private readonly localize = new LocalizeController(this);

  /** The navigation item's href target. If provided, the navigation item will use an anchor tag, otherwise it will use a button tag. */
  @property({ reflect: true }) href = '';

  /** Indicates that the navigation item is currently selected. Aria-current should be added if true */
  @property({ type: Boolean, reflect: true }) current = false;

  /** Disables the navigation item. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The navigation item's font size. */
  @property({ reflect: true }) size: 'base' | 'larger' | 'smaller' = 'base';

  /** The navigation item's orientation. If true, properties below this point are not used. */
  @property({ type: Boolean, reflect: true }) horizontal = false;

  /** *Vertical Only: Appends a chevron to the right side of a navigation item. */
  @property({ type: Boolean, reflect: true }) chevron = false;

  /** *Vertical Only: Adds additional padding to navigation item's left side. */
  @property({ type: Boolean, reflect: true }) indented = false;

  /** *Vertical Only: Adds additional padding to navigation item's left and right sides. */
  @property({ type: Boolean, reflect: true }) relaxed = false;

  /** *Vertical Only: Adds additional padding to navigation item's left and right sides. */
  @property({ type: Boolean, reflect: true }) divider = false;

  @watch('someProperty')
  doSomething() {
    // Example event
    this.emit('sd-event-name');
  }

  render() {
    const rootClasses = cx(
      'relative min-h-[48px] px-4 pt-3 pb-2 hover:bg-neutral-200 border-b-4 transition-all',
      this.current ? 'border-accent' : 'border-transparent',
      { base: 'text-base', larger: 'text-lg', smaller: 'text-[14px]' }[this.size]
    );

    // Slot Elements
    const iconLeftSlot = html`<slot name="icon-left" part="icon-left">L</slot>`; // icon left of label
    const defaultSlot = html`<slot part="label">label</slot>`; // navigation item label
    const iconRightSlot = html`<slot name="icon-right" part="icon-right">R</slot>`; // icon right of label
    const mainSlot = html`<slot name="main" part="main">main</slot>`; // used for adornments like badges
    const childrenSlot = html`<slot name="children" part="children">Children</slot>`; // if childrenSlot is used, chevron should be displayed

    // Additional Elements
    const chevron = html`<sd-icon name="chevron-down" library="system" color="currentColor"></sd-icon>`;

    // Composed Elements
    const body = html`${iconLeftSlot}${defaultSlot}${iconRightSlot}${mainSlot}${chevron}`;
    const root = this.href
      ? html`<a class=${rootClasses} href=${this.href}>${body}</a>`
      : html`<button class=${rootClasses}>${body}</button>`;

    // TODO: render details and summary ONLY if children slot is used
    return html`<details>
      <summary>${root}</summary>
      ${childrenSlot}
    </details> `;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [
    SolidElement.styles,
    css`
      :host {
        display: inline-block;
        box-sizing: border-box;
      }

      summary::marker {
        content: none;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-navigation-item': SdNavigationItem;
  }
}
