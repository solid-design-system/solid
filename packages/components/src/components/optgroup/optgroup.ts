/* eslint-disable @typescript-eslint/unbound-method */
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import SdDivider from '../divider/divider';
import SolidElement from '../../internal/solid-element';
import styles from './optgroup.styles.js';
import type { CSSResultGroup } from 'lit';
import type SdOption from '../option/option';

/**
 * @summary The <sd-optgroup> element creates a grouping for <sd-option>s within a <sd-select>.
 * @documentation https://synergy-design-system.github.io/?path=/docs/components-sd-optgroup--docs
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
  static styles: CSSResultGroup = styles;

  static dependencies = {
    'sd-divider': SdDivider
  };

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix', 'label');

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
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    return html`
      <div
        class=${classMap({
          optgroup: true,
          'optgroup--has-label': hasLabel,
          'optgroup--has-prefix': this.hasSlotController.test('prefix'),
          'optgroup--has-suffix': this.hasSlotController.test('suffix'),
          'optgroup--is-disabled': this.disabled
        })}
        role="${disabled ? 'presentation' : 'group'}"
        part="base"
      >
        <sd-divider class="optgroup__divider" part="divider"></sd-divider>
        <div class="optgroup__label-container" part="label-container">
          <slot name="prefix" part="prefix" class="optgroup__prefix"></slot>
          <slot name="label" part="label" class="optgroup__label">
            <span class="optgroup__label-content"> ${this.label} </span>
          </slot>
          <slot name="suffix" part="suffix" class="optgroup__suffix"></slot>
        </div>
        <div class="optgroup__options" role="group" part="options">
          <slot @slotchange=${this.handleDisableOptions}></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-optgroup': SdOptgroup;
  }
}
