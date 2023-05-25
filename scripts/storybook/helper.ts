import { html } from 'lit/static-html.js';
import { getWcStorybookHelpers } from '@mariohamann/wc-storybook-helpers';

type ArgTypesDefinition = 'attribute' | 'property' | 'slot' | 'cssPart' | 'cssProperty';

type AxisDefinition = {
  type: ArgTypesDefinition;
  name: string;
  values?: any[];
  title?: string;
};

type ConstantDefinition = {
  type: ArgTypesDefinition;
  name: string;
  value: any;
  title?: string;
};

/**
 * Returns default arguments, events, and argument types for a given custom element tag.
 *
 * @param {string} customElementTag - The custom element tag for which the defaults are to be fetched.
 * @returns {any} - An object containing default arguments, events, and argument types.
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
 * Returns helper functions for working with the stories of a given custom element tag.
 *
 * @param {string} customElementTag - The custom element tag for which the helpers are to be fetched.
 * @returns {Object} - An object containing several helper functions for working with the stories.
 */
export const storybookHelpers = (customElementTag: string) => {
  return {
    /**
     * Returns a suffix string based on the type of argument.
     *
     * @param {ArgTypesDefinition} type - The type of the argument.
     * @returns {string} - The suffix string.
     */
    getSuffixFromType: (type: ArgTypesDefinition): string => {
      return {
        attribute: '-attr',
        property: '-prop',
        slot: '-slot',
        cssPart: '-part',
        cssProperty: ''
      }[type];
    },

    /**
     * Returns the possible values for an attribute for a given custom element tag.
     *
     * @param {string} attribute - The attribute for which the values are to be fetched.
     * @returns {any} - The possible values for the attribute.
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
     * Returns the possible values for a list of attributes for a given custom element tag.
     *
     * @param {string[]} attributes - The attributes for which the values are to be fetched.
     * @returns {any} - The possible values for the attributes.
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
     * Returns an arguments object that has been overridden with the specified overrides.
     *
     * @param {ConstantDefinition | ConstantDefinition[]} overrides - The overrides for the arguments.
     * @param {Object} original - The original arguments object that is to be overridden.
     * @returns {Object} - The arguments object with the overrides applied.
     */
    overrideArgs: (overrides: ConstantDefinition | ConstantDefinition[], original?: { [k: string]: any }) => {
      const args = original || getWcStorybookHelpers(customElementTag).args;
      const overridesArray = Array.isArray(overrides) ? overrides : [overrides];
      for (const override of overridesArray) {
        const suffix = storybookHelpers(customElementTag).getSuffixFromType(override.type as any);
        args[`${override.name}${suffix}`] = override.value;
      }

      return args;
    }
  };
};

/**
 * Returns a template function for creating stories for a given custom element tag.
 *
 * @param {string} customElementTag - The custom element tag for which the story template is to be generated.
 * @returns {Object} - An object containing a function that generates a story template.
 */
export const storybookTemplate = (customElementTag: string) => {
  const { template, args: defaultArgs } = getWcStorybookHelpers(customElementTag);
  const { getValuesFromAttribute } = storybookHelpers(customElementTag);

  /**
   * Returns a Lit template function that creates a story based on provided configuration.
   * This function takes a configuration object that specifies the axes, constants, title, and arguments to be used in the story.
   *
   * The `axis` object defines the x-axis and y-axis. Each axis is an `AxisDefinition` object
   * which consists of a type, name, values, and title. Type is the argument type which can be
   * 'attribute', 'property', 'slot', 'cssPart', or 'cssProperty'. Name is the argument name.
   * Values is an array of possible values for the argument. Title is the label of the axis in the story.
   *
   * The `constants` array defines the constant arguments to be used in the story.
   * Each constant is a `ConstantDefinition` object which consists of a type, name, value, and title.
   * Type is the argument type which can be 'attribute', 'property', 'slot', 'cssPart', or 'cssProperty'.
   * Name is the argument name. Value is the constant value of the argument. Title is the label of the constant in the story.
   *
   * The `title` string is the title of the story. If a title is specified, it will be displayed as a heading in the story.
   *
   * The `args` object is the default arguments for the story. If specified, these arguments will be used as defaults
   * for the story. If a constant or an axis with the same argument name is specified, the value from the constant
   * or axis will override the default value from `args`.
   *
   * The template function returned by `generateTemplate` generates a Lit template for the story based on
   * the provided configuration. The template displays a table showing all possible combinations of
   * argument values, with one row for each y-axis value and one column for each x-axis value.
   * Each cell in the table is filled with the custom element in the corresponding state.
   *
   * @param {Object} config - The configuration object for generating the story template.
   * @param {Object} [config.axis] - The object defining the x-axis and y-axis for the story.
   * @param {AxisDefinition | AxisDefinition[]} [config.axis.x] - The x-axis definition(s).
   * @param {AxisDefinition | AxisDefinition[]} [config.axis.y] - The y-axis definition(s).
   * @param {ConstantDefinition | ConstantDefinition[]} [config.constants] - The constant argument(s) for the story.
   * @param {string} [config.title] - The title of the story.
   * @param {Object} [config.args] - The default arguments for the story.
   * @returns {Object} - The Lit template function for the story.
   */
  const generateTemplate = ({
    axis,
    constants = [],
    options,
    args = defaultArgs
  }: {
    axis?: {
      x?: AxisDefinition | AxisDefinition[];
      y?: AxisDefinition | AxisDefinition[];
    };
    constants?: ConstantDefinition | ConstantDefinition[];
    options?: {
      title?: string;
      templateBackground?: string;
      templateBackgrounds?: { alternate: 'x' | 'y'; colors: string[] };
    };
    args: any;
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
          values: item.values || getValuesFromAttribute(item.name)
        }));
      } else {
        return [
          {
            ...axis,
            values: axis.values || getValuesFromAttribute(axis.name)
          }
        ];
      }
    };

    const xAxes = generateAxes(x);
    const yAxes = generateAxes(y);

    const uuid = `uuid-${crypto.randomUUID()}`;

    return html`
      <style>
        table:not(:first-of-type).story-template {
          margin-top: 72px;
        }
        .story-template th {
          text-align: left;
        }
        .story-template td {
          text-align: center;
        }
        .story-template th,
        .story-template td {
          padding: 16px;
          font-size: 12px;
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
        .story-template tbody tr th {
          font-weight: normal;
          text-align: center;
        }
        .story-template tbody tr th[rowspan] {
          text-align: center;
          padding-left: 0;
          border-right: 1px solid #e0e0e0;
          font-weight: bold;
        }
        .story-template tbody tr th span {
          display: block;
          transform: rotate(270deg);
        }

        ${options?.templateBackground &&
        `
          .${uuid}.story-template tbody tr.template-row td.template {
            background: ${options?.templateBackground};
          }
        `}

        ${options?.templateBackgrounds?.colors.map((color, index) => {
          const calculateNth = (index: number) => {
            return `${options?.templateBackgrounds?.colors.length}n + ${index + 1}`;
          };
          return options?.templateBackgrounds?.alternate === 'y'
            ? `
                .${uuid}.story-template tbody tr.template-row:nth-of-type(${calculateNth(index)}) td.template {
                  background: ${color};
                }
              `
            : `
                .${uuid}.story-template tbody tr.template-row td.template:nth-of-type(${calculateNth(index)}) {
                  background: ${color};
                }
              `;
        })}
      </style>
      ${xAxes.map((xAxis: any) => {
        return html` ${yAxes.map((yAxis: any) => {
          let firstRow = true;
          const showXLabel = xAxes.length > 1 || xAxis.values;
          const showYLabel = ((xAxis && yAxis) || yAxes.length > 1) && yAxis?.values;
          return html`
            <table class="story-template ${uuid}">
              <thead>
                ${options?.title &&
                html`<tr>
                  <th class="title" colspan=${xAxis.values?.length + 3}><code>${options?.title}</code></th>
                </tr>`}
                ${xAxis &&
                xAxis.values &&
                html`
                  <tr>
                    ${showYLabel ? html`<td></td>` : ''} ${yAxis.type !== 'slot' ? html` <td></td>` : ''}
                    ${
                      showXLabel &&
                      html`<th colspan=${xAxis.values?.length}><code>${xAxis.title || xAxis.name}</code></th>`
                    }
                    </tr>
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
                    <tr class="template-row">
                      ${firstRow && showYLabel
                        ? html`<th rowspan="${yAxis?.values?.length}">
                            <span><code>${yAxis.title || yAxis.name}</code></span>
                          </th>`
                        : ''}
                      ${yAxis.type !== 'slot' ? html` <th><code>${yValue}</th></code>` : ''}
                      ${(xAxis?.values || ['']).map((xValue: any) => {
                        return html`
                          <td class="template"><div>
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
