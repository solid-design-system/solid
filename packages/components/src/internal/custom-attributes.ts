import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Represents a single attribute to set on an element.
 */
export interface CustomAttribute {
  [key: string]: string;
}

/**
 * Represents a targeted attribute configuration for a specific element.
 */
export interface TargetedCustomAttributes {
  query: string;
  attributes: CustomAttribute[];
}

/**
 * The value type for the custom-attributes property.
 * Can be:
 * - A single object: `{"aria-label": "hello"}`
 * - An array of objects: `[{"aria-role": "switch"}, {"aria-checked": "true"}]`
 * - An array with targeted queries: `[{"aria-role": "switch"}, {"query": "summary", "attributes": [{"aria-label": "hello"}]}]`
 */
export type CustomAttributesValue = CustomAttribute | (CustomAttribute | TargetedCustomAttributes)[] | null;

/**
 * Type guard to check if an item is a targeted custom attributes configuration.
 */
function isTargetedCustomAttributes(
  item: CustomAttribute | TargetedCustomAttributes
): item is TargetedCustomAttributes {
  return 'query' in item && 'attributes' in item && Array.isArray((item as TargetedCustomAttributes).attributes);
}

/**
 * Custom converter for the custom-attributes property.
 * Handles JSON parsing and validation.
 */
export const customAttributesConverter = {
  fromAttribute(value: string | null): CustomAttributesValue {
    if (!value) return null;
    try {
      return JSON.parse(value) as CustomAttributesValue;
    } catch (error) {
      console.error('Error parsing custom-attributes:', error);
      return null;
    }
  },
  toAttribute(value: CustomAttributesValue): string | null {
    if (!value) return null;
    return JSON.stringify(value);
  }
};

/**
 * This controller handles reflecting custom attributes to elements inside the shadow DOM.
 *
 * It works by parsing the `custom-attributes` property which should be a JSON value containing
 * attributes to set on internal elements. By default, attributes are set on the element with
 * `part="base"`. Targeted queries can be used to set attributes on specific elements.
 *
 * @example
 * ```html
 * <!-- Set aria-label on the base element -->
 * <sd-button custom-attributes='{"aria-label": "hello"}'></sd-button>
 *
 * <!-- Set multiple attributes on the base element -->
 * <sd-button custom-attributes='[{"aria-role": "switch"}, {"aria-checked": "true"}]'></sd-button>
 *
 * <!-- Set attributes on specific elements using queries -->
 * <sd-details custom-attributes='[
 *   {"aria-role": "switch"},
 *   {"query": "summary", "attributes": [{"aria-label": "toggle"}]}
 * ]'></sd-details>
 * ```
 */
export class CustomAttributesController implements ReactiveController {
  host: ReactiveControllerHost & HTMLElement;
  private _appliedAttributes: Map<Element, Set<string>> = new Map();

  constructor(host: ReactiveControllerHost & HTMLElement) {
    this.host = host;
    host.addController(this);
  }

  hostConnected(): void {
    // Initial application will happen after first render via hostUpdated
  }

  hostUpdated(): void {
    this.applyCustomAttributes();
  }

  hostDisconnected(): void {
    this.clearAllAttributes();
  }

  /**
   * Gets the current custom-attributes value from the host.
   */
  private getCustomAttributesValue(): CustomAttributesValue {
    // Access the property directly from the host
    return (this.host as unknown as { customAttributes: CustomAttributesValue }).customAttributes;
  }

  /**
   * Applies custom attributes to the appropriate elements in the shadow DOM.
   */
  applyCustomAttributes(): void {
    const value = this.getCustomAttributesValue();

    // Clear previously applied attributes first
    this.clearAllAttributes();

    if (!value) return;

    const shadowRoot = this.host.shadowRoot;
    if (!shadowRoot) return;

    // Normalize to array format
    const items: (CustomAttribute | TargetedCustomAttributes)[] = Array.isArray(value) ? value : [value];

    // Separate base attributes and targeted attributes
    const baseAttributes: CustomAttribute[] = [];
    const targetedConfigs: TargetedCustomAttributes[] = [];

    for (const item of items) {
      if (isTargetedCustomAttributes(item)) {
        targetedConfigs.push(item);
      } else {
        baseAttributes.push(item);
      }
    }

    // Apply base attributes to part="base" element
    if (baseAttributes.length > 0) {
      const baseElement = shadowRoot.querySelector('[part~="base"]');
      if (baseElement) {
        this.applyAttributesToElement(baseElement, baseAttributes);
      }
    }

    // Apply targeted attributes
    for (const config of targetedConfigs) {
      // Support both part names and CSS selectors
      let targetElement = shadowRoot.querySelector(`[part~="${config.query}"]`);
      if (!targetElement) {
        targetElement = shadowRoot.querySelector(config.query);
      }
      if (targetElement) {
        this.applyAttributesToElement(targetElement, config.attributes);
      }
    }
  }

  /**
   * Applies a list of attribute objects to an element.
   */
  private applyAttributesToElement(element: Element, attributes: CustomAttribute[]): void {
    const appliedSet = this._appliedAttributes.get(element) || new Set();

    for (const attrObj of attributes) {
      for (const [name, value] of Object.entries(attrObj)) {
        element.setAttribute(name, value);
        appliedSet.add(name);
      }
    }

    this._appliedAttributes.set(element, appliedSet);
  }

  /**
   * Clears all previously applied attributes.
   */
  private clearAllAttributes(): void {
    for (const [element, attributes] of this._appliedAttributes) {
      for (const attr of attributes) {
        element.removeAttribute(attr);
      }
    }
    this._appliedAttributes.clear();
  }
}
