import { html } from 'lit/static-html.js';
import { getWcStorybookHelpers } from '@mariohamann/wc-storybook-helpers';

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
    /**
     * This function is used to get the values from an attribute.
     * It automatically adds the suffixes to the keys as needed for Storybook.
     * It also handles boolean attributes.
     */
    getValuesFromAttribute: (attribute: string): any => {
      if (!attribute.endsWith('-attr')) {
        attribute = `${attribute}-attr`;
      }
      const { argTypes } = getWcStorybookHelpers(customElementTag);
      if (argTypes[attribute]?.control?.type === 'boolean') {
        return [true, false];
      } else {
        return argTypes[attribute].options;
      }
    },
    /**
     * This function is used to get the values from a list of attributes.
     * It automatically adds the suffixes to the keys as needed for Storybook.
     * It also handles boolean attributes.
     */
    getValuesFromAttributes: (attributes: string[]): any => {
      return attributes?.map((attribute: string) => {
        if (!attribute.endsWith('-attr')) {
          attribute = `${attribute}-attr`;
        }
        return {
          name: attribute,
          values: storybookHelpers(customElementTag).getValuesFromAttribute(attribute)
        };
      });
    },
    /**
     * This function is used to override the default args.
     * It automatically adds the suffixes to the keys as needed for Storybook.
     */
    overrideArgs: (
      overrides: {
        attributes?: { [k: string]: any; };
        properties?: { [k: string]: any; };
        slots?: { [k: string]: any; };
        cssParts?: { [k: string]: any; };
        cssProperties?: { [k: string]: any; };
      },
      original?: { [k: string]: any; }
    ) => {
      const args = original || getWcStorybookHelpers(customElementTag).args;
      const suffixes = {
        attributes: '-attr',
        properties: '-prop',
        slots: '-slot',
        cssParts: '-part',
        cssProperties: ''
      };

      for (const [category, suffix] of Object.entries(suffixes)) {
        const items = overrides[category as keyof typeof overrides];
        if (items) {
          for (const [key, value] of Object.entries(items)) {
            if (!key.endsWith(suffix)) {
              args[`${key}${suffix}`] = value;
            } else {
              args[key] = value;
            }
          }
        }
      }

      return args;
    }
  };
};

/**
 * Templates to create stories
 * Dev note: We had to extract the types to a separate interface to get correct type checking
 */

type StorybookTemplates = {
  defaultTemplate: (args: { [k: string]: any; }) => any;
  attributesTemplate: ({
    args,
    attributes,
    alternativeTitle,
    vertical
  }: {
    args: any;
    attributes: string[];
    alternativeTitle?: string;
    vertical?: boolean;
  }) => any;
  inlineVariationsTemplate: ({
    args,
    variation,
    alternativeTitle,
    vertical
  }: {
    args: any;
    variation?: { arg: string; values: any[]; };
    alternativeTitle?: string;
    vertical?: boolean;
  }) => any;
  variationsToTableTemplate: ({
    args,
    variationA,
    variationB,
    alternativeTitle
  }: {
    args: { [k: string]: any; };
    variationA: { arg: string; values: any[]; };
    variationB: { arg: string; values: any[]; };
    alternativeTitle?: string;
  }) => any;
  attributeToTableTemplate: ({
    args,
    attributeA,
    attributeB
  }: {
    args: { [k: string]: any; };
    attributeA: string;
    attributeB: string;
  }) => any;
};

/**
 * Pre-defined templates to create stories
 */

export const storybookTemplates = (customElementTag: string): StorybookTemplates => {
  const { template, args } = getWcStorybookHelpers(customElementTag);
  const { getValuesFromAttribute, getValuesFromAttributes } = storybookHelpers(customElementTag);
  return {
    defaultTemplate: individualArgs => template(individualArgs || args),
    /**
     * This template is used to create a list with variations of multiple attributes.
     */
    attributesTemplate: ({ args, attributes, alternativeTitle, vertical }) => {
      const { inlineVariationsTemplate } = storybookTemplates(customElementTag);
      return html`
        ${getValuesFromAttributes(attributes).map((attribute: any) => {
        return inlineVariationsTemplate({
          args,
          variation: {
            arg: attribute.name,
            values: getValuesFromAttribute(attribute.name)
          },
          alternativeTitle: alternativeTitle === '' || alternativeTitle ? alternativeTitle : attribute.name,
          vertical
        });
      })}
      `;
    },
    /**
     * This template is used to create a a list with variations of a single attribute.
     */
    inlineVariationsTemplate: ({ args, variation, alternativeTitle, vertical }) => {
      return html`
        <div style="">
          ${alternativeTitle?.length
          ? html`<h3 style="font-size: 16px; margin-bottom: 12px; margin-top: 24px">
                ${(alternativeTitle || variation?.arg)?.replace('-attr', '')}
              </h3>`
          : ''}
          ${variation?.values?.map((value: any) => {
            return html`<div
              style="margin-bottom: 16px; display: ${vertical ? 'block' : 'inline-block'}; margin-right: 16px"
            >
              <p style="font-size: 12px; margin-bottom: 8px; margin-top: 0px;">${value}</p>
              ${template({ ...args, [variation.arg]: value })}
            </div>`;
          })}
        </div>
      `;
    },
    /**
     * This template is used to create a table with variations of an attribute and an array.
     */
    variationsToTableTemplate: ({
      args,
      variationA,
      variationB,
      // TODO: alternativeTitle should be part of the variation object
      alternativeTitle
    }) => {
      let firstRow = true;
      return html` <table>
        <thead>
          <style>
            th {
              text-align: left;
              font-size: 16px;
            }
            td {
              font-size: 12px;
            }
            th,
            td {
              padding: 16px;
            }
          </style>
          <tr>
            <td></td>
            <td></td>
            <th>${alternativeTitle || variationA.arg.replace('-attr', '')}</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            ${variationA.values.map((value: any) => html`<td>${value}</td>`)}
          </tr>
        </thead>
        <tbody>
          ${variationB.values.map((value: any) => {
        const row = html`<tr>
              <th>${firstRow ? variationB.arg.replace('-attr', '') : ''}</th>
              <td>${value}</td>
              ${variationA.values.map(
          (valueA: any) =>
            html`<td>${template({ ...args, [variationA.arg]: valueA, [variationB.arg]: value })}</td>`
        )}
            </tr>`;
        firstRow = false;
        return row;
      })}
        </tbody>
      </table>`;
    },
    /**
     * This template is used to create a table with variations of two attributes.
     */
    attributeToTableTemplate: ({ args, attributeA, attributeB }) => {
      const { variationsToTableTemplate } = storybookTemplates(customElementTag);

      return html`${variationsToTableTemplate({
        args,
        variationA: {
          arg: attributeA,
          values: getValuesFromAttribute(attributeA)
        },
        variationB: {
          arg: attributeB,
          values: getValuesFromAttribute(attributeB)
        }
      })} `;
    }
  };
};

type AxisDefinition = {
  type: string;
  name: string;
  values?: any[];
  title?: string;
};

type ConstantDefinition = {
  type: string;
  name: string;
  value: any;
  title?: string;
};

export const storybookTemplate = (customElementTag: string) => {
  const { template, args: defaultArgs } = getWcStorybookHelpers(customElementTag);
  const { getValuesFromAttribute } = storybookHelpers(customElementTag);

  const generateStory = ({
    axis,
    constants = [],
    args = defaultArgs,
  }: {
    axis: {
      x?: AxisDefinition;
      y?: AxisDefinition;
    };
    constants?: ConstantDefinition[];
    args?: any;
  }) => {
    const { x, y } = axis;

    const xAxis = x && {
      ...x,
      values: x.type === 'attribute' ? getValuesFromAttribute(x.name) : x.values
    };

    const yAxis = y && {
      ...y,
      values: y.type === 'attribute' ? getValuesFromAttribute(y.name) : y.values
    };

    let firstRow = true;
    return html`
      <table>
        <thead>
          <style>
            th {
              text-align: left;
              font-size: 16px;
            }
            td {
              font-size: 12px;
            }
            th,
            td {
              padding: 16px;
            }
          </style>
          ${xAxis && html`
            <tr>
              <td></td>
              <td></td>
              <th>${(xAxis && yAxis) ? xAxis.name : ''}</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              ${xAxis.values.map((value: any) => html`<td>${value}</td>`)}
            </tr>
          `}
        </thead>
        <tbody>
          ${(yAxis?.values || ['']).map((yValue: any) => {
      const row = html`
              <tr>
                <th>${firstRow && (xAxis && yAxis) ? xAxis.name : ''}</th>
                <td>${yValue}</td>
                ${(xAxis?.values || ['']).map((xValue: any) => {
        // Create constant definitions from the array
        const constantDefinitions = constants.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {});
        return html`
                    <td>
                      ${template({
          ...args,
          ...constantDefinitions,
          ...xAxis && { [xAxis.name]: xValue },
          ...yAxis && { [yAxis.name]: yValue }
        })}
                    </td>
                  `;
      })}
              </tr>
            `;
      firstRow = false;
      return row;
    })}
       ;
        </tbody>
      </table>
    `;
  };

  return { generateStory };
};
