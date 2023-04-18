import { html } from 'lit/static-html.js';
import { getWcStorybookHelpers } from "@mariohamann/wc-storybook-helpers";

/**
 * Defaults you can use in your stories
 */

export const storybookDefaults = (customElementTag: string): any => {
  const { args, events, argTypes } = getWcStorybookHelpers(customElementTag);
  return {
    args,
    events,
    argTypes
  };
};

/**
 * Small helper functions to create stories
 */

export const storybookHelpers = (customElementTag: string) => {
  return {
    getValuesFromAttribute: (attribute: string): any => {
      if (!attribute.endsWith('-attr')) {
        attribute = `${attribute}-attr`;
      }
      const { argTypes } = getWcStorybookHelpers(customElementTag);
      if (argTypes[attribute]?.control?.type === 'boolean') {
        console.log('boolean');
        return [true, false];
      }
      else {
        return argTypes[attribute].options;
      }
    },
    getValuesFromAttributes: (attributes: string[]): any => {
      return attributes?.map((attribute: string) => {
        if (!attribute.endsWith('-attr')) {
          attribute = `${attribute}-attr`;
        }
        return {
          name: attribute,
          values: storybookHelpers(customElementTag).getValuesFromAttribute(attribute),
        };
      });
    },
  };
};


/**
 * Templates to create stories
 * Dev note: We had to extract the types to a separate interface to get correct type checking
 */

type StorybookTemplates = {
  defaultTemplate: (args: { [k: string]: any; }) => any,
  attributesTemplate: ({
    args,
    attributes,
    alternativeTitle,
    vertical
  }: {
    args: any,
    attributes: string[];
    alternativeTitle?: string;
    vertical?: boolean;
  }) => any,
  inlineVariationsTemplate: ({
    args,
    variation,
    alternativeTitle,
    vertical
  }: {
    args: any,
    variation?: { arg: string, values: any[]; },
    alternativeTitle?: string;
    vertical?: boolean;
  }) => any,
  variationsToTableTemplate: ({
    args,
    variationA,
    variationB,
    alternativeTitle,
  }: {
    args: { [k: string]: any; };
    variationA: { arg: string; values: any[]; };
    variationB: { arg: string; values: any[]; };
    alternativeTitle?: string;
  }) => any;
  attributeToTableTemplate: ({
    args,
    attributeA,
    attributeB,
  }: {
    args: { [k: string]: any; };
    attributeA: string,
    attributeB: string,
  }) => any;
};

/**
 * Pre-defined templates to create stories
 */

export const storybookTemplates = (customElementTag: string): StorybookTemplates => {
  const { template, args } = getWcStorybookHelpers(customElementTag);
  const { getValuesFromAttribute, getValuesFromAttributes } = storybookHelpers(customElementTag);
  return {
    defaultTemplate: (individualArgs) => template(individualArgs || args),
    attributesTemplate: ({
      args,
      attributes,
      alternativeTitle,
      vertical
    }) => {
      const { inlineVariationsTemplate } = storybookTemplates(customElementTag);
      return html`
  ${getValuesFromAttributes(attributes)
          .map((attribute: any) => {
            return inlineVariationsTemplate(
              {
                args,
                variation: {
                  arg: attribute.name,
                  values: getValuesFromAttribute(attribute.name),
                },
                alternativeTitle: alternativeTitle === '' || alternativeTitle ? alternativeTitle : attribute.name,
                vertical
              }
            );
          })}
  `;
    },
    inlineVariationsTemplate: ({
      args,
      variation,
      alternativeTitle,
      vertical
    }) => {
      return html`
  <div style="">
  ${alternativeTitle !== '' ?
          html`<h3 style="font-size: 16px; margin-bottom: 12px; margin-top: 24px">${(alternativeTitle || variation?.arg).replace('-attr', '')}</h3>` : ''}
  ${variation?.values?.map((value: any) => {
            return html`<div style="margin-bottom: 16px; display: ${vertical ? 'block' : 'inline-block'}; margin-right: 16px">
      <p style="font-size: 12px; margin-bottom: 8px; margin-top: 0px;">
        ${value}
      </p>
      ${template({ ...args, [variation.arg]: value })}
    </div>`;
          })}
  </div>
  `;
    },
    variationsToTableTemplate: ({
      args,
      variationA,
      variationB,
      // TODO: alternativeTitle should be part of the variation object
      alternativeTitle
    }) => {
      let firstRow = true;
      return html`
  <table>
    <thead>
      <style> th { text-align: left; font-size: 16px; } td { font-size: 12px; } th, td { padding: 16px; } </style>
      <tr> <td></td><td></td><th>${alternativeTitle || variationA.arg.replace('-attr', '')}</th> </tr>
      <tr> <td></td><td></td>${variationA.values.map((value: any) => html`<td>${value}</td>`)} </tr>
    </thead>
    <tbody>
        ${variationB.values.map((value: any) => {
        const row = html`<tr><th>${firstRow ? variationB.arg.replace('-attr', '') : ''}</th><td>${value}</td>
            ${variationA.values.map((valueA: any) =>
          html`<td> ${template({ ...args, [variationA.arg]: valueA, [variationB.arg]: value })} </td>`
        )
          }
</tr>`;
        firstRow = false;
        return row;
      }
      )}
</tbody>
  </table>`;
    },
    attributeToTableTemplate: ({
      args,
      attributeA,
      attributeB,
    }) => {
      const { variationsToTableTemplate } = storybookTemplates(customElementTag);

      return html`${variationsToTableTemplate({
        args,
        variationA: {
          arg: attributeA,
          values: getValuesFromAttribute(attributeA),
        },
        variationB: {
          arg: attributeB,
          values: getValuesFromAttribute(attributeB),
        }
      }
      )} `;
    },
  };
};
