import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-list');
const { overrideArgs } = storybookHelpers('sd-list');
const { generateTemplate } = storybookTemplate('sd-list');

/**
 *
 */

export default {
  title: 'Styles/sd-list',
  component: 'sd-list',
  parameters: {
    ...parameters,
    backgrounds: {
      default: 'primary-100'
    },
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
  name: 'OrderedList',
  parameters: { controls: { exclude: ['default'] } },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: ` <li>Lorem Ipsum
            <ol>
                <li>Dolor sit
                    <ol>
                        <li>Amet</li>
                    </ol>
                </li>
            </ol>
        </li>
        <li>Lorem Ipsum</li>
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
          colors: ['rgb(var(--sd-color-primary-100, 236 240 249))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ol class="%CLASSES%">%SLOT%</ol>'
      }
    });
  }
};

export const UnorderedList = {
  name: 'UnorderedList',
  parameters: { controls: { exclude: ['default'] } },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: ` <li>Lorem Ipsum
            <ul>
                <li>Dolor sit
                    <ul>
                        <li>Amet</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Lorem Ipsum</li>
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
          colors: ['rgb(var(--sd-color-primary-100, 236 240 249))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ul class="%CLASSES%">%SLOT%</ul>'
      }
    });
  }
};

export const IconList = {
  name: 'IconList',
  parameters: { controls: { exclude: ['default'] } },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: ` <li><div><sd-icon name="content/picture" library="global-resources" />Lorem Ipsum</div>
<!--            <ul>-->
<!--                <li><sd-icon name="content/picture" library="global-resources" />Dolor sit-->
<!--                    <ul>-->
<!--                        <li><sd-icon name="content/picture" library="global-resources" />Amet</li>-->
<!--                    </ul>-->
<!--                </li>-->
<!--            </ul>-->
        </li>
        <li><sd-icon name="content/picture" library="global-resources" />Lorem Ipsum</li>
        <li><sd-icon name="content/picture" library="global-resources" />Lorem Ipsum</li>`
  }),
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] },
        y: {
          type: 'attribute',
          name: 'variants',
          values: ['sd-list--icon', 'sd-list--icon sd-list--horizontal']
        }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['rgb(var(--sd-color-primary-100, 236 240 249))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ul class="%CLASSES%">%SLOT%</ul>'
      }
    });
  }
};
