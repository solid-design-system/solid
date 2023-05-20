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
     *
     */

    getSuffixFromType: (type: 'attribute' | 'property' | 'slot' | 'cssPart' | 'cssProperty'): string => {
      return {
        attribute: '-attr',
        property: '-prop',
        slot: '-slot',
        cssPart: '-part',
        cssProperty: ''
      }[type];
    },

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
        attributes?: { [k: string]: any };
        properties?: { [k: string]: any };
        slots?: { [k: string]: any };
        cssParts?: { [k: string]: any };
        cssProperties?: { [k: string]: any };
      },
      original?: { [k: string]: any }
    ) => {
      const args = original || getWcStorybookHelpers(customElementTag).args;
      const suffixes = {
        attributes: storybookHelpers(customElementTag).getSuffixFromType('attribute'),
        properties: storybookHelpers(customElementTag).getSuffixFromType('property'),
        slots: storybookHelpers(customElementTag).getSuffixFromType('slot'),
        cssParts: storybookHelpers(customElementTag).getSuffixFromType('cssPart'),
        cssProperties: storybookHelpers(customElementTag).getSuffixFromType('cssProperty')
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

/**
 * Templates to create stories
 */

export const storybookTemplate = (customElementTag: string) => {
  const { template, args: defaultArgs } = getWcStorybookHelpers(customElementTag);
  const { getValuesFromAttribute } = storybookHelpers(customElementTag);

  const generateTemplate = ({
    axis,
    constants = [],
    args = defaultArgs
  }: {
    axis?: {
      x?: AxisDefinition | AxisDefinition[];
      y?: AxisDefinition | AxisDefinition[];
    };
    constants?: ConstantDefinition | ConstantDefinition[];
    args?: any;
  }) => {
    const constantDefinitions = (Array.isArray(constants) ? constants : [constants]).reduce(
      (acc, curr) => ({
        ...acc,
        [`${curr.name}${storybookHelpers(customElementTag).getSuffixFromType(curr.type as any)}`]: curr.value
      }),
      {}
    );

    if (!axis?.x && !axis?.y) {
      return html`${template({
        ...args,
        ...constantDefinitions
      })}`;
    }

    const { x, y } = axis;

    const xAxes = Array.isArray(x)
      ? x.map(xItem => ({
          ...xItem,
          values: xItem.type === 'attribute' ? getValuesFromAttribute(xItem.name) : xItem.values
        }))
      : x
      ? [
          {
            ...x,
            values: x.type === 'attribute' ? getValuesFromAttribute(x.name) : x.values
          }
        ]
      : [{}];

    const yAxes = Array.isArray(y)
      ? y.map(yItem => ({
          ...yItem,
          values: yItem.type === 'attribute' ? getValuesFromAttribute(yItem.name) : yItem.values
        }))
      : y
      ? [
          {
            ...y,
            values: y.type === 'attribute' ? getValuesFromAttribute(y.name) : y.values
          }
        ]
      : [{}];

    return html`
      <style>
        table + table {
          margin-top: 48px;
        }
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
      ${xAxes.map((xAxis: any) => {
        return html` ${yAxes.map((yAxis: any) => {
          let firstRow = true;
          return html`
            <table>
              <thead>
                ${xAxis &&
                html`
                  <tr>
                    <td></td>
                    <td></td>
                    <th>${xAxes.length > 1 || (xAxis.values && yAxis.values) ? xAxis.name : ''}</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    ${xAxis.values.map((xValue: any) => html`<td>${xAxis.type !== 'slot' ? xValue : ''}</td>`)}
                  </tr>
                `}
              </thead>
              <tbody>
                ${(yAxis?.values || ['']).map((yValue: any) => {
                  const row = html`
                    <tr>
                      <th>${firstRow && ((xAxis && yAxis) || yAxes.length > 1) ? yAxis.name : ''}</th>
                      <td>${yAxis.type !== 'slot' ? yValue : ''}</td>
                      ${(xAxis?.values || ['']).map((xValue: any) => {
                        return html`
                          <td><div>
                            ${template({
                              ...args,
                              ...constantDefinitions,
                              ...(xAxis && {
                                [`${xAxis.name}${storybookHelpers(customElementTag).getSuffixFromType(xAxis.type)}`]:
                                  xValue
                              }),
                              ...(yAxis && {
                                [`${yAxis.name}${storybookHelpers(customElementTag).getSuffixFromType(yAxis.type)}`]:
                                  yValue
                              })
                            })}
                          </td></div>
                        `;
                      })}
                    </tr>
                  `;
                  firstRow = false;
                  return row;
                })}
              </tbody>
            </table>
          `;
        })}`;
      })}
    `;
  };

  return { generateTemplate };
};
