import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type SdCheckbox from '../checkbox/checkbox';

/**
 * @summary Checkbox groups are used to group multiple [checkbox](/components/checkbox). It provides only presentational functionality.
 * @documentation https://solid.union-investment.com/[storybook-link]/checkbox-group
 * @status stable
 * @since 1.18.0
 *
 * @slot - The default slot where `<sd-checkbox>` elements are placed.
 * @slot label - The checkbox group's label. Required for proper accessibility. Alternatively, you can use the `label`
 * attribute.
 **/

@customElement('sd-checkbox-group')
export default class SdCheckboxGroup extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, 'label');

  /**
   * The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = '';

  /** The checkbox group's size. This size will be applied to the label, all child checkboxes. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /**
   * The orientation property determines the alignment of the component's content or elements. It accepts two possible
   * values: 'horizontal' and 'vertical'. The default value is 'vertical'.
   * This property allows you to control the visual layout and arrangement of elements within the component, providing
   * flexibility in how the component is displayed based on your specific design needs.
   */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

  private getAllCheckboxes() {
    return [...this.querySelectorAll<SdCheckbox>('sd-checkbox')];
  }

  private async syncCheckboxElements() {
    const checkboxes = this.getAllCheckboxes();

    await Promise.all(
      // Sync the checked state and size
      checkboxes.map(async checkbox => {
        await checkbox.updateComplete;

        checkbox.size = this.size;
      })
    );

    if (!checkboxes.some(checkbox => checkbox.checked)) {
      checkboxes[0].tabIndex = 0;
    }
  }

  private syncCheckboxes() {
    if (customElements.get('sd-checkbox')) {
      this.syncCheckboxElements();
    } else {
      customElements.whenDefined('sd-checkbox').then(() => this.syncCheckboxes());
    }
  }

  @watch('size', { waitUntilFirstUpdate: true })
  handleSizeChange() {
    this.syncCheckboxes();
  }
  @watch('invalid', { waitUntilFirstUpdate: true })
  handleInvalid() {
    this.syncCheckboxes();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasLabel = this.label ? true : hasLabelSlot;
    const defaultSlot = html` <slot @slotchange=${this.syncCheckboxes}></slot> `;

    return html`
      <fieldset
          part="form-control"
          class=${cx(
          'form-control form-control--checkbox-group border-0 p-0 m-0',
          hasLabel && 'form-control--has-label',
          {
            /* sizes, fonts */
            sm: 'text-sm',
            lg: 'text-base'
          }[this.size]
        )}
        role="group"
        aria-labelledby="label"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label mb-2 hidden p-0 font-bold leading-normal text-black"
          aria-hidden=${!hasLabel}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div
          part="form-control-input"
          class=${cx(
            'form-control-input',
            {
              vertical: 'form-control-input--vertical flex flex-col',
              horizontal: 'form-control-input--horizontal flex flex-row'
            }[this.orientation]
          )}
        >
          ${defaultSlot}
        </div>
      </fieldset>
    `;
  }

  /**
   * Inherits Tailwind classes and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        display: block;
      }

      .form-control-input--vertical ::slotted(sd-checkbox) {
        margin-bottom: 8px;
        display: flex;
      }

      .form-control-input--vertical ::slotted(sd-checkbox:last-of-type) {
        margin-bottom: 0;
      }

      .form-control-input--horizontal ::slotted(sd-checkbox) {
        margin-right: 24px;
      }

      .form-control-input--horizontal ::slotted(sd-checkbox:last-of-type) {
        margin-right: 0;
      }

      /* Label */
      .form-control--has-label .form-control__label {
        display: flex;
      }

      :host([required]) .form-control--has-label .form-control__label::after {
        content: '*';
        margin-left: 2px;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-checkbox-group': SdCheckboxGroup;
  }
}
