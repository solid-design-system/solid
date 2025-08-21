import { cssVar, parseDuration } from './animate';
import { LitElement, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
// @ts-expect-error Typescript doesn't like importing .css files directly
import style from './solid-element.css?inline';

const css = unsafeCSS;

const tokenProcessors: Record<string, (value: string) => string | number> = {
  'sd-duration': (value: string): number => parseDuration(value)
};

export default class SolidElement extends LitElement {
  /** The element's directionality. */
  @property() dir: 'ltr' | 'rtl' | 'auto';

  /** The element's language. */
  @property() lang: string;

  static styles = [css(style)];

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
    const value = cssVar(`var(--${name})`, this);

    if (value === null) {
      return fallback;
    }

    const processor = Object.keys(tokenProcessors).find(token => name.startsWith(token));
    return (tokenProcessors[processor ?? name]?.(value) as T) ?? (value as T) ?? fallback;
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
