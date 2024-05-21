import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-list');
const { overrideArgs } = storybookHelpers('sd-list');
const { generateTemplate } = storybookTemplate('sd-list');

/**
 * Use lists to make blocks of text easier to read and to divide information into manageable sections. <br>
 * Text lists can be numbered, have bullet points, or be supplemented by content symbols. Text can be bolded or linked.
 * <br>
 * <b>Variants</b><br>
 * <li>Unordered list group is used when there is no specific sequence or order to the items.</li>
 * <li>Ordered list group is used when the items have a specific sequence or count.</li>
 * <li>Icon list group is used when more illustration is needed.</li>
 */

export default {
  title: 'Styles/sd-list',
  component: 'sd-list',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/DDSyYvf2q99RhiyDjy03s5/List?type=design&node-id=971-4578&mode=design&t=2UZo6NW6ErMA2G5X-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

export const Default = {
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: ` <li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ul>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </li>
            </ul>
        </li>`
  }),
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<ul class="%CLASSES%">%SLOT%</ul>' },
      args
    });
  }
};

export const OrderedList = {
  name: 'Ordered List',
  parameters: { controls: { exclude: ['default'] } },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: ` <li>Lorem Ipsum
            <ol>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
            </ol>
        </li>
        <li>Lorem Ipsum
            <ol>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
            </ol>
        </li>
        <li>Lorem Ipsum</li>`
  }),
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['rgb(var(--sd-color-white, 255 255 255))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ol class="%CLASSES%">%SLOT%</ol><ol class="%CLASSES%">%SLOT%</ol>'
      }
    });
  }
};

export const UnorderedList = {
  name: 'Unordered List',
  parameters: { controls: { exclude: ['default'] } },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: ` <li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ul>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </li>
            </ul>
        </li><li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ul>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Lorem Ipsum</li>`
  }),
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['rgb(var(--sd-color-white, 255 255 255))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ul class="%CLASSES%">%SLOT%</ul>'
      }
    });
  }
};

/**
 * If using the icon list, you need to provide an icon within each list item. <br>
 * Either the first <sd-icon> or the first element with the class 'sd-list--icon__icon' within the list item will be used as the icon.
 */
export const IconList = {
  name: 'Icon List',
  parameters: { controls: { exclude: ['default'] } },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: ` <li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Lorem Ipsum
            <ul>
                <li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Dolor sit
                    <ul>
                        <li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Amet</li>
                        <li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Lorem Ipsum</li>
        <li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Lorem Ipsum</li>`
  }),
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['rgb(var(--sd-color-white, 255 255 255))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ul class="sd-list--icon %CLASSES%">%SLOT%</ul>'
      }
    });
  }
};

/**
 * If using the horizontal icon list, you need to provide an icon within each list item. The horizontal list only supports one level of nesting. <br>
 * Either the first <sd-icon> or the first element with the class 'sd-list--icon__icon' within the list item will be used as the icon.
 */
export const HorizontalIconList = {
  name: 'Horizontal Icon List',
  parameters: { controls: { exclude: ['default'] } },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: `<li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Lorem</li>
        <li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Lorem</li>
        <li><sd-icon name="content/picture" library="global-resources" ></sd-icon>Lorem</li>`
  }),
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['rgb(var(--sd-color-white, 255 255 255))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ul class="sd-list--icon sd-list--horizontal %CLASSES%">%SLOT%</ul>'
      }
    });
  }
};

/**
 * MISSING
 */
export const MixedLists = {
  name: 'Mixed Lists',
  parameters: { controls: { exclude: ['default'] } },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: `<li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ul>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </li>
            </ul>
        </li>`
  }),
  render: (args: any) => {
    return generateTemplate({
      args,
      options: {
        templateContent: `
        <h2 class="sd-headline">Ordered List</h2>
        <ol class="%CLASSES%">
          <li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ul>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </li>
              </ul>
          </li>
          <li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
              </ul>
          </li>
        </ol>
        <h2 class="sd-headline">Unordered List</h2>
        <ul class="%CLASSES%">
          <li>Lorem Ipsum
            <ol>
                <li>Dolor sit
                    <ul>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </li>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
              </ol>
          </li>
          <li>Lorem Ipsum
            <ol>
                <li>Dolor sit
                    <ul>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </li>
              </ol>
          </li>
          <li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
              </ul>
          </li>
          <li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ol>
                </li>
              </ul>
          </li>
        </ul>`
      }
    });
  }
};
