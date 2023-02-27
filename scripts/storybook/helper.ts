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
};

export const renderDefaultStory = (customElementTag: string, args: any): any => {
  const tagName = unsafeStatic(customElementTag);
  return html`
${renderCssProperties(customElementTag, args)}
<${tagName} ${renderPropsWithArgs(customElementTag, args)} >
  ${renderSlotsWithArgs(customElementTag, args)}
</${tagName}>
  `;
};

export const renderInlineVariationsStory = ({
  customElementTag,
  args,
  variation,
  alternativeTitle
}: {
  customElementTag: string,
  args: any,
  variation?: { arg: string, values: any[]; },
  alternativeTitle?: string;
}): any => {
  return html`
  <div style="">
  ${alternativeTitle !== '' ?
      html`<h3 style="font-size: 16px; margin-bottom: 12px; margin-top: 24px">${alternativeTitle || variation?.arg}</h3>` : ''}
  ${variation?.values?.map((value: any) => {
        return html`<div style="margin-bottom: 16px; display: inline-block; margin-right: 16px">
      <p style="font-size: 12px; margin-bottom: 8px; margin-top: 0px;">
        ${value}
      </p>
      ${renderDefaultStory(customElementTag, { ...args, [variation.arg]: value })}
    </div>`;
      })}
  </div>
  `;
};

export const renderStoryFromAttributes = ({
  customElementTag,
  args,
  attributes,
  alternativeTitle
}: {
  customElementTag: string,
  args: any,
  attributes: string[];
  alternativeTitle?: string;
}): any => {
  return html`
  ${getValuesFromAttributes(
    customElementTag,
    attributes
  ).map((attribute: any) => {
    return renderInlineVariationsStory(
      {
        customElementTag,
        args,
        variation: {
          arg: attribute.name,
          values: getValuesFromAttribute(customElementTag, attribute.name),
        },
        alternativeTitle: alternativeTitle === '' || alternativeTitle ? alternativeTitle : attribute.name,
      }
    );
  })}
  `;
};

export const renderTableVariationsStory = ({
  customElementTag,
  args,
  variationA,
  variationB,
  alternativeTitle
}: {
  customElementTag: string,
  args: { [k: string]: any; },
  variationA: { arg: string, values: any[]; },
  variationB: { arg: string, values: any[]; };
  alternativeTitle?: string;
}): any => {
  let firstRow = true;
  return html`
  <table>
    <thead>
      <style>
        th { text-align: left; font-size: 16px; }
        td { font-size: 12px; }
        th, td { padding: 16px; }
      </style>
      <tr>
        <td></td><td></td><th>${alternativeTitle || variationA.arg}</th>
      </tr>
      <tr>
        <td></td><td></td>${variationA.values.map((value: any) => html`<td>${value}</td>`)}
      </tr>
    </thead>
    <tbody>
        ${variationB.values.map((value: any) => {
    const row = html`<tr><th>${firstRow ? variationB.arg : ''}</th><td>${value}</td>
            ${variationA.values.map((valueA: any) =>
      html`<td> ${renderDefaultStory(customElementTag, { ...args, [variationA.arg]: valueA, [variationB.arg]: value })} </td>`
    )
      }
</tr>`;
    firstRow = false;
    return row;
  }
  )}
</tbody>
  </table>`;
};

export const renderTableStoryFromAttributes = ({
  customElementTag,
  args,
  attributeA,
  attributeB,
}: {
  customElementTag: string,
  args: any,
  attributeA: string,
  attributeB: string,
}): any => {
  return html`
  ${renderTableVariationsStory({
    customElementTag,
    args,
    variationA: {
      arg: attributeA,
      values: getValuesFromAttribute(customElementTag, attributeA),
    },
    variationB: {
      arg: attributeB,
      values: getValuesFromAttribute(customElementTag, attributeB),
    }
  }
  )}
  `;
};

export const getValuesFromAttribute = (customElementTag: string, attribute: string): any => {
  const component = getComponentDeclaration(customElements, customElementTag);
  const values = component.attributes.find(
    (attr: any) => attribute?.includes(attr.name)
  );
  return values.enum ? values.enum : values.type === 'boolean' ? [true, false] : [];
};

export const getValuesFromAttributes = (customElementTag: string, attributes: string[]): any => {
  return attributes.map((attribute: string) => {
    return {
      name: attribute,
      values: getValuesFromAttribute(customElementTag, attribute),
    };
  });
};


export const getDefaultArgs = (customElementTag: string): any => {
  return {
    ...getPropsWithDefaults(customElementTag),
    ...getSlotsWithDefaults(customElementTag),
    ...getCssPropertiesForArgs(customElementTag)
  };
};;
