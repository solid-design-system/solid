/* eslint-disable @typescript-eslint/unbound-method */
import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { html } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles';
import SdDivider from '../divider/divider';
import SolidElement from '../../internal/solid-element';
import type { CSSResultGroup } from 'lit';
import type SdOption from '../option/option';

/**
 * @summary The <sd-optgroup> element creates a grouping for <sd-option>s within a <sd-combobox>.
 * @documentation @documentation https://solid.union-investment.com/[storybook-link]/components-sd-optgroup
 * @status development
 * @since 1.3.0
 *
 * @dependency sd-divider
 *
 * @slot - The given options. Must be `<sd-option>` elements.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot label - The label for the optgroup
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label-container - The container that wraps prefix, label and base
 * @csspart divider - The divider that is displayed above the content
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart options - The container that wraps the <sd-option> elements.
 *
 * @cssproperty --display-divider - Display property of the divider. Defaults to "block"
 */

@customElement('sd-optgroup')
export default class SdOptgroup extends SolidElement {
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
        // eslint-disable-next-line no-param-reassign
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
  @property() label = '';

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.handleDisableOptions();
  }

  render() {
    const { disabled } = this;
    return html`
      <div role="${disabled ? 'presentation' : 'group'}" part="base">
        <sd-divider id="divider" class="mb-2" part="divider"></sd-divider>
        <div part="label-container">
          <slot name="label" part="label">
            <div class="text-black px-4 font-bold">${this.label}</div>
          </slot>
        </div>
        <div role="group" part="options">
          <slot @slotchange=${this.handleDisableOptions}></slot>
        </div>
      </div>
    `;
  }
  static styles: CSSResultGroup = [
    componentStyles,
    SolidElement.styles,
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
