import { LitElement, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import tailwind from '../styles/tailwind.css?inline';
import type { CSSResultGroup } from 'lit';

export default class SolidElement extends LitElement {
  // Make localization attributes reactive
  @property() dir: string;
  @property() lang: string;

  /*
   * 1. Make Tailwind-CSS globally accessible
   *
   * This approach seems to be okay facing the following sentence:
   * "Many modern browsers implement an optimization for <style> tags either cloned from a common
   * node or hat have identical text, to allow them to share a single backing stylesheet.
   * With this optimization the performance of external and internal styles should be similar."
   * (See: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#internal_vs._external_styles)
   */

  static styles: CSSResultGroup = unsafeCSS(tailwind);

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
