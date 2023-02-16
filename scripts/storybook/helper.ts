import { getComponentDeclaration } from 'cem-plugin-better-lit-types/storybook';
import customElements from '../../dist/custom-elements.json';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { nothing, TemplateResult } from 'lit';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import { spreadProps } from '@open-wc/lit-helpers';

/**
 * Component helper function to get the slots of a component.
 * @param customElementTag - The tag of the custom element, e. g. `'sd-button'`.
 * @returns An array with the slots of the component
 * @example `['prefix']`
 */

export const getSlots = (customElementTag: string): string[] => {
  return getComponentDeclaration(customElements, customElementTag)
    ?.slots // Get declared attributes from the component's custom element
    ?.map((slot: any) => { return slot.name || 'slot'; });  // If no name is given, 'slot' is used as default
};

const isRequiredSlot = (slotName: string) => {
  const requiredSlots = ['label', '', 'slot', 'summary']; // 'slot' and '' are both the default slot.
  return requiredSlots.includes(slotName);
};

/**
 * Get the placeholder for a slot. If it's the default slot, no placeholder is returned.
 * @param slotName - The name of the slot
 * @returns The placeholder for the slot
 * @example `<span slot="title"></span>`
 */

const getSlotPlaceholder = (slotName: string) => {
  const capitalizeFirstLetter = (string: string) => string[0].toUpperCase() + string.slice(1);

  return slotName
    ? `<span slot="${slotName}">${isRequiredSlot(slotName) ? `${capitalizeFirstLetter(slotName)} Slot` : ''}</span>`
    : 'Default Slot';
};


/**
 * Used to get the slots of a component in an object including the defaults from `lit`
 * @param customElementTag - The tag of the custom element, e. g. `'sd-button'`.
 * @returns An object with the slots as keys and the default values as values
 * @example `{ title: 'Hello World' }`
 **/

export const getSlotsWithDefaults = (customElementTag: string): Record<string, any> => {
  return getComponentDeclaration(customElements, customElementTag)
    // Get declared attributes from the component's custom element
    ?.slots
    // Map each attribute to an object with the name and default value
    ?.map((slot: any) => { return { [slot.name || 'slot']: getSlotPlaceholder(slot.name) }; })
    ?.reduce((key: any, value: any) => ({ ...key, ...value }), {});
};

// Used to spread the slots into the component
export const renderSlotsWithArgs = (customElementTag: string, args: any): Record<string, any> => {
  return getSlots(customElementTag)
    ?.map((slot: any) => {
      console.log(slot, args[slot], getSlotPlaceholder(slot), isRequiredSlot(slot));
      return args[slot] && (isRequiredSlot(slot) || args[slot] !== getSlotPlaceholder(slot)) ? unsafeHTML(args[slot]) : nothing;
    });
};

/**
 * Gets the attributes of a custom element.
 * @param customElementTag - The tag of the custom element, e. g. `'sd-button'`.
 * @returns An array with the attributes of the component. e. g. `['title']`
 * @example `['title']`
 * @example `['title', 'disabled', 'type']`
 **/

export const getProps = (customElementTag: string): string[] => {
  return getComponentDeclaration(customElements, customElementTag)
    ?.attributes // Get declared attributes from the component's custom element
    ?.map((property: any) => { return property.name; });
};

/**
 * Gets attributes with default values from a custom element.
 *
 * @param customElementTag - The tag of the custom element, e. g. `'sd-button'`.
 * @returns An object with the attributes as keys and the default values as values
 * @example `{ title: 'Hello World' }`
 */

export const getPropsWithDefaults = (
  customElementTag: string
): Record<string, any> => {
  return getComponentDeclaration(customElements, customElementTag)
    // Get declared attributes from the component's custom element
    ?.attributes
    // Map each attribute to an object with the name and default value
    ?.map((attribute: any) => { return { [attribute.name]: attribute.default || '' }; })
    ?.reduce((key: any, value: any) => ({ ...key, ...value }), {});
};

/**
 * Used to spread the attributes into the component
 * @param customElementTag - The tag of the custom element, e. g. `'sd-button'`.
 * @param args - The arguments passed to the story per default or by the user
 * @returns An object with the attributes as keys and the values as values
 * @example `{ title: 'Hello World by Storybook' }`
 */

export const renderPropsWithArgs = (customElementTag: string, args: any): Record<string, any> => {
  return spreadProps(getProps(customElementTag)
    ?.map((prop: any) => { return { [prop]: args[prop] }; })
    ?.reduce((key: any, value: any) => ({ ...key, ...value }), {}));
};


export const getCssProperties = (customElementTag: string): string[] => {
  return getComponentDeclaration(customElements, customElementTag)
    ?.cssProperties // Get declared attributes from the component's custom element
    ?.map((slot: any) => { return slot.name || 'slot'; });  // If no name is given, 'slot' is used as default
};

export const getCssPropertiesForArgs = (
  customElementTag: string
): Record<string, any> => {
  return getCssProperties(customElementTag)
    ?.map((property: any) => { return { [property]: '' }; })
    ?.reduce((key: any, value: any) => ({ ...key, ...value }), {});;
};

// Used to spread the slots into the component
export const renderCssProperties = (customElementTag: string, args: any): TemplateResult => {
  const cssPropertiesWithValues = getCssProperties(customElementTag)
    ?.filter((prop: any) => args[prop])
    ?.map((prop: any) => `${[prop]}: ${args[prop]}`);
  return cssPropertiesWithValues?.length > 0
    ? html`<style>
      ${customElementTag}{
        ${cssPropertiesWithValues.join(';')};
      }
    </style>`
    : html``;
};;

export const renderDefaultStory = (customElementTag: string, args: any): any => {
  console.log(renderCssProperties(customElementTag, args));
  const tagName = unsafeStatic(customElementTag);
  return html`
   ${renderCssProperties(customElementTag, args)}
    <${tagName} ${renderPropsWithArgs(customElementTag, args)} >
      ${renderSlotsWithArgs(customElementTag, args)}
    </${tagName}>
  `;
};

export const getDefaultArgs = (customElementTag: string): any => {
  console.log(getCssPropertiesForArgs(customElementTag));
  return {
    ...getPropsWithDefaults(customElementTag),
    ...getSlotsWithDefaults(customElementTag),
    ...getCssPropertiesForArgs(customElementTag)
  };
};
