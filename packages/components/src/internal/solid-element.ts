import { cssVar, parseDuration } from './animate';
import { CustomAttributesController, customAttributesConverter, type CustomAttributesValue } from './custom-attributes';
import { LitElement, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';

const css = unsafeCSS;

const tokenProcessors: Record<string, (value: string) => string | number> = {
  'sd-duration': (value: string): number => parseDuration(value)
};

export default class SolidElement extends LitElement {
  /** The element's directionality. */
  @property() dir: 'ltr' | 'rtl' | 'auto';

  /** The element's language. */
  @property() lang: string;

  /**
   * Custom attributes to reflect to internal elements.
   * Accepts a JSON object or array of objects with attributes to set.
   * By default, attributes are applied to the element with `part="base"`.
   * Use targeted queries to apply attributes to specific elements.
   *
   * @example
   * ```html
   * <!-- Single attribute -->
   * <sd-button custom-attributes='{"aria-label": "hello"}'></sd-button>
   *
   * <!-- Multiple attributes -->
   * <sd-button custom-attributes='[{"aria-expanded": "false"}, {"aria-haspopup": "true"}]'></sd-button>
   *
   * <!-- Targeted element -->
   * <sd-details custom-attributes='[{"query": "summary", "attributes": [{"aria-label": "toggle"}]}]'></sd-details>
   * ```
   */
  @property({ attribute: 'custom-attributes', converter: customAttributesConverter })
  customAttributes: CustomAttributesValue = null;

  protected onThemeChange?(e: CustomEvent<{ theme: string }>): void;

  connectedCallback(): void {
    super.connectedCallback();

    void new CustomAttributesController(this);

    if (!this.onThemeChange) return;
    this.renderRoot.addEventListener('sd-theme-change', this.onThemeChange.bind(this));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (!this.onThemeChange) return;
    this.renderRoot.removeEventListener('sd-theme-change', this.onThemeChange.bind(this));
  }

  static styles = [
    css`
      @import '../styles/src/modules/interactive.css';
      @import '../styles/src/modules/paragraph.css';
      @import '../styles/src/modules/headline.css';

      :host {
        /* Add default tailwind variables that get lost during compilation */
        --tw-blur: initial;
        --tw-border-style: solid;
        --tw-brightness: initial;
        --tw-contrast: initial;
        --tw-divide-y-reverse: 0;
        --tw-drop-shadow: initial;
        --tw-duration: initial;
        --tw-ease: initial;
        --tw-font-weight: initial;
        --tw-gradient-from-position: 0%;
        --tw-gradient-from: #0000;
        --tw-gradient-position: initial;
        --tw-gradient-stops: initial;
        --tw-gradient-to-position: 100%;
        --tw-gradient-to: #0000;
        --tw-gradient-via-position: 50%;
        --tw-gradient-via-stops: initial;
        --tw-gradient-via: #0000;
        --tw-grayscale: initial;
        --tw-hue-rotate: initial;
        --tw-inset-ring-color: initial;
        --tw-inset-ring-shadow: 0 0 #0000;
        --tw-inset-shadow-color: initial;
        --tw-inset-shadow: 0 0 #0000;
        --tw-invert: initial;
        --tw-opacity: initial;
        --tw-ring-color: initial;
        --tw-ring-inset: initial;
        --tw-ring-offset-color: #fff;
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-offset-width: 0px;
        --tw-ring-shadow: 0 0 #0000;
        --tw-rotate-x: rotateX(0);
        --tw-rotate-y: rotateY(0);
        --tw-rotate-z: rotateZ(0);
        --tw-saturate: initial;
        --tw-sepia: initial;
        --tw-shadow-color: initial;
        --tw-shadow: 0 0 #0000;
        --tw-skew-x: skewX(0);
        --tw-skew-y: skewY(0);
        --tw-space-x-reverse: 0;
        --tw-tracking: initial;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-translate-z: 0;

        box-sizing: border-box;
      }

      :host *,
      :host *::before,
      :host *::after {
        box-sizing: inherit;
      }

      [hidden] {
        display: none !important;
      }
    `
  ];

  /** Emits a custom event with more convenient defaults. */
  emit(name: string, options?: CustomEventInit) {
    const event = new CustomEvent(name, {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {},
      ...options
    });

    this.dispatchEvent(event);

    return event;
  }

  /** Retrieves the value of a css variable token. */
  token<T>(name: string, fallback: T): T {
    const value = cssVar(`var(${name})`, this);

    if (value === null) {
      return fallback;
    }

    const processor = Object.keys(tokenProcessors).find(token => name.startsWith(token));
    return (tokenProcessors[processor ?? name]?.(value) as T) ?? (value as T) ?? fallback;
  }

  /**
   * Sets custom attributes programmatically.
   * This is an alternative to setting the `custom-attributes` attribute directly.
   *
   * @example
   * ```js
   * const button = document.querySelector('sd-button');
   * button.setCustomAttributes({ 'aria-label': 'hello' });
   *
   * // Or with multiple attributes
   * button.setCustomAttributes([{ 'aria-expanded': 'false' }, { 'aria-haspopup': 'true' }]);
   *
   * // Or with targeted queries
   * details.setCustomAttributes([
   *   { 'aria-role': 'switch' },
   *   { query: 'summary', attributes: [{ 'aria-label': 'toggle' }] }
   * ]);
   * ```
   */
  setCustomAttributes(value: CustomAttributesValue): void {
    this.customAttributes = value;
  }
}

export interface SolidFormControl extends SolidElement {
  // Standard form attributes
  name: string;
  value: unknown;
  disabled?: boolean;
  defaultValue?: unknown;
  defaultChecked?: boolean;
  form?: string;

  // Standard validation attributes
  pattern?: string;
  min?: number | Date | string;
  max?: number | Date | string;
  step?: number | 'any';
  required?: boolean;
  minlength?: number;
  maxlength?: number;

  // Form validation properties
  readonly validity?: ValidityState;
  readonly validationMessage?: string;

  // Validation methods
  checkValidity: () => boolean;
  reportValidity: () => boolean;
  setCustomValidity: (message: string) => void;

  // Validation styles
  showValidStyle?: boolean;
  showInvalidStyle?: boolean;
}
