import { LitElement, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';

const css = unsafeCSS;

export default class SolidElement extends LitElement {
  // Make localization attributes reactive
  @property() dir: string;
  @property() lang: string;

  static styles = [
    css`
      /* Import CSS styles once to make them available in every component */
      @import url('../styles/src/typography/interactive.css');
      @import url('../styles/src/typography/paragraph.css');
      @import url('../styles/src/typography/headline.css');

      /* TailwindCSS directives have to come after imports */
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer components {
        /**
          * This is a helper component to quickly add a focus outline to an element.
          * Known issue: Safari renders always square outlines.
          * We could fix this by using box-shadows, but we then would have to use ring-offset-color (https://tailwindcss.com/docs/ring-offset-color) to fake the offset.
          * As we don't know the background color of the focused element, this is not possible. Therefore we're using outlines and wait until Safari gets it fixed.
          */
        .focus-outline {
          @apply outline outline-2 outline-offset-2 outline-primary;
        }

        .focus-outline-inverted {
          @apply outline outline-2 outline-offset-2 outline-white;
        }
      }

      :host {
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
