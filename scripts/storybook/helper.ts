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
    title,
    args = defaultArgs
  }: {
    axis?: {
      x?: AxisDefinition | AxisDefinition[];
      y?: AxisDefinition | AxisDefinition[];
    };
    constants?: ConstantDefinition | ConstantDefinition[];
    title?: string;
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

    const generateAxes = (axis: any): AxisDefinition[] => {
      if (!axis) return [{} as AxisDefinition];
      if (Array.isArray(axis)) {
        return axis.map(item => ({
          ...item,
          values: item.type === 'attribute' ? getValuesFromAttribute(item.name) : item.values
        }));
      } else {
        return [
          {
            ...axis,
            values: axis.type === 'attribute' ? getValuesFromAttribute(axis.name) : axis.values
          }
        ];
      }
    };

    const xAxes = generateAxes(x);
    const yAxes = generateAxes(y);

    return html`
      <style>
        table:not(:first-of-type).story-template {
          margin-top: 72px;
        }
        .story-template th {
          text-align: left;
          font-size: 12px;
        }
        .story-template td {
          font-size: 12px;
        }
        .story-template th, .story-template td, .story-template tr: {
          border: none;
        }
        .story-template th,
        .story-template td {
          padding: 16px;
        }
        .story-template thead tr th {
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }
        .story-template thead th.title {
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
        }
        .story-template tr td {
          text-align: center;
        }
        .story-template tbody tr th {
          text-align: center;
          padding-left: 0;
          border-right: 1px solid #e0e0e0;
        }
        .story-template tbody tr th span {
          display: block;
          transform: rotate(270deg);
        }
      </style>
      ${xAxes.map((xAxis: any) => {
        return html` ${yAxes.map((yAxis: any) => {
          let firstRow = true;
          const showXLabel = xAxes.length > 1 || xAxis.values;
          const showYLabel = ((xAxis && yAxis) || yAxes.length > 1) && yAxis?.values;
          return html`
            <table class="story-template">
              <thead>
                ${title &&
                html`<tr>
                  <th class="title" colspan=${xAxis.values?.length + 3}><code>${title}</code></th>
                </tr>`}
                ${xAxis &&
                xAxis.values &&
                html`
                  <tr>
                    ${showYLabel ? html`<td></td>` : ''} ${yAxis.type !== 'slot' ? html` <td></td>` : ''}
                    ${showXLabel && html`<th colspan=${xAxis.values?.length}><code>${xAxis.name}</code></th>`}
                    </th>
                  </tr>
                  ${
                    xAxis.type !== 'slot'
                      ? html`
                          <tr>
                            ${showYLabel ? html`<td></td>` : ''} ${yAxis.type !== 'slot' ? html` <td></td>` : ''}
                            ${xAxis?.values?.map(
                              (xValue: any) => xAxis.type !== 'slot' && html`<td><code>${xValue}</code></td>`
                            )}
                          </tr>
                        `
                      : ''
                  }
                `}
              </thead>
              <tbody>
                ${(yAxis?.values || ['']).map((yValue: any) => {
                  const row = html`
                    <tr>
                      ${firstRow && showYLabel
                        ? html`<th rowspan="${yAxis?.values?.length}">
                            <span><code>${yAxis.name}</code></span>
                          </th>`
                        : ''}
                      ${yAxis.type !== 'slot' ? html` <td><code>${yValue}</td></code>` : ''}
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
