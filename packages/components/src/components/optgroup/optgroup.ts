import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { html } from 'lit/static-html.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import cx from 'classix';
import SdDivider from '../divider/divider';
import SolidElement from '../../internal/solid-element';
import type SdOption from '../option/option';

/**
 * @summary The <sd-optgroup> element creates a grouping for <sd-option>s within a <sd-combobox>.
 * @documentation @documentation https://solid.union-investment.com/[storybook-link]/components-sd-optgroup
 * @status experimental
 * @since 3.23.0
 *
 * @dependency sd-divider
 *
 * @slot - The given options. Must be `<sd-option>` elements.
 * @slot label - The label for the optgroup
 *
 * @csspart base - The component's base wrapper.
 * @csspart label-container - The container that wraps prefix, label and base
 * @csspart divider - The divider that is displayed above the content
 * @csspart options - The container that wraps the <sd-option> elements.
 *
 * @cssproperty --display-divider - Display property of the divider. Defaults to "block"
 */

@customElement('sd-optgroup')
export default class SdOptgroup extends SolidElement {
  private readonly localize = new LocalizeController(this);

  static dependencies = {
    'sd-divider': SdDivider
  };

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  /**
   * Syncs the disabled prop for all slotted sd-options when it is triggered
   */
  private handleDisableOptions() {
    const { disabled } = this;
    this.defaultSlot
      .assignedElements()
      .filter(opt => opt.tagName.toLowerCase() === 'sd-option')
      .forEach((opt: SdOption) => {
        opt.disabled = disabled;
      });
  }

  /**
   * Disables all options in the optgroup.
   */
  @property({ reflect: true, type: Boolean }) disabled = false;

  /**
   * The optgroups label. If you need to display HTML, use the `label` slot instead.
   */
  @property({ type: String, reflect: true }) label = '';

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.handleDisableOptions();
  }

  render() {
    const { disabled } = this;
    return html`
      <div
        role="${disabled ? 'presentation' : 'group'}"
        class="${cx(this.disabled ? 'text-neutral-500' : '')}"
        part="base"
        aria-labelledby="group-label"
      >
        <sd-divider id="divider" class="pt-2 pb-4" part="divider"></sd-divider>
        <div
          part="label-container"
          class="${cx(this.disabled ? 'text-neutral-500' : 'text-black')} px-4 font-bold text-left"
          role="presentation"
          id="group-label"
        >
          <slot name="label">
            <span>${this.label}</span>
          </slot>
        </div>
        <div role="listbox" part="options" aria-label="${this.localize.term('optionGroup')}">
          <slot @slotchange=${this.handleDisableOptions}></slot>
        </div>
      </div>
    `;
  }
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        --display-divider: block;
      }

      #divider {
        display: var(--display-divider);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-optgroup': SdOptgroup;
  }
}
