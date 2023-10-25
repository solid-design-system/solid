import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import SolidElement from '../../internal/solid-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SdCheckbox from '../checkbox/checkbox';
import { watch } from '../../internal/watch';

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

  /**
   * The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = '';

  /** The checkbox group's error text. Use to display an error message below the component. */
  @property({ attribute: 'error-text' }) errorText = '';

  /** The checkbox group's size. This size will be applied to the label, all child checkboxes. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /**  A Boolean attribute which, if present, marks the checkbox-group valid or invalid  */
  @property({ type: Boolean, reflect: true }) invalid = false;

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
          checkbox.invalid = this.invalid;
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
  handleInvalid () {
    this.syncCheckboxes();
  }

  render() {
    const defaultSlot = html`
      <slot @slotchange=${this.syncCheckboxes}></slot>
    `;

    return html`
      <fieldset
        class=${cx(
          {
            /* sizes, fonts */
            sm: 'text-sm',
            lg: 'text-base'
          }[this.size]
        )}
        role="group"
        aria-labelledby="label"
        aria-describedby="error-text"
        aria-errormessage="error-message"
      >
        <legend
          part="form-control-label"
          id="label"
          class="form-control__label mb-2 p-0 font-bold leading-normal text-black"
        >
          <slot name="label">${this.label}</slot>
        </legend>

        <div
          part="form-control-input"
          class=${cx(
            'form-control-input',
            this.invalid && 'form-control-input--invalid text-error',
            {
              vertical: 'form-control-input--vertical flex flex-col',
              horizontal: 'form-control-input--horizontal flex flex-row'
            }[this.orientation]
          )}
        >
          ${defaultSlot}
        </div>

        <div
          part="form-control-error-text"
          id="error-text"
          class=${cx(
            'form-control__error-text mt-2 text-error leading-normal',
            {
              /* sizes, fonts */
              sm: 'text-sm',
              lg: 'text-base'
            }[this.size]
          )}
        >
          <slot name="error-text">${this.errorText}</slot>
        </div>
      </fieldset>
    `;
  }

  /**
   * Inherits Tailwind classes and includes additional styling.
   */
  static styles = [SolidElement.styles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-checkbox-group': SdCheckboxGroup;
  }
}
