import '../../solid-components';

import {storybookDefaults, storybookHelpers, storybookTemplate} from '../../../scripts/storybook/helper';

const {argTypes, parameters} = storybookDefaults('sd-list');
const {overrideArgs} = storybookHelpers('sd-list');
const {generateTemplate} = storybookTemplate('sd-list');

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
  args: overrideArgs({type: 'slot', name: 'default', value: 'Lorem Ipsum'}),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: {templateContent: '<ul class="%CLASSES%"><li>%SLOT%</li><li>%SLOT%</li><li>%SLOT%</li></ul>'},
      args
    });
  }
};

export const OrderedList = {
  name: 'OrderedList',
  parameters: {controls: {exclude: ['default']}},
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted']},
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['rgb(var(--sd-color-primary-100, 236 240 249))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ol class="%CLASSES%">\n' +
          '    <li>%SLOT%' +
          '        <ol>\n' +
          '            <li>%SLOT%' +
          '                <ol>\n' +
          '                    <li>%SLOT%</li>\n' +
          '                </ol>\n' +
          '            </li>\n' +
          '        </ol>\n' +
          '    </li>\n' +
          '    <li>%SLOT%</li>\n' +
          '    <li>%SLOT% </li>\n' +
          '</ol>'
      }
    });
  }
};

export const UnorderedList = {
  name: 'UnorderedList',
  parameters: {controls: {exclude: ['default']}},
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted']},
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['rgb(var(--sd-color-primary-100, 236 240 249))', 'rgb(var(--sd-color-primary, 0 53 142))']
        },
        templateContent: '<ul class="%CLASSES%">\n' +
          '    <li>%SLOT%' +
          '        <ul>\n' +
          '            <li>%SLOT%' +
          '                <ul>\n' +
          '                    <li>%SLOT%</li>\n' +
          '                </ul>\n' +
          '            </li>\n' +
          '        </ul>\n' +
          '    </li>\n' +
          '    <li>%SLOT%</li>\n' +
          '    <li>%SLOT% </li>\n' +
          '</ul>'
      }
    });
  }
};


export const IconList = {
  name: 'IconList',
  parameters: {controls: {exclude: ['default']}},
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted']},
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
        templateContent: '<ul class="%CLASSES%">\n' +
          '    <li><sd-icon name="content/picture" library="global-resources" color="primary"/>%SLOT%</li>\n' +
          '    <li><sd-icon name="content/picture" library="global-resources" color="primary"/>%SLOT%</li>\n' +
          '    <li><sd-icon name="content/picture" library="global-resources" color="primary"/>%SLOT% </li>\n' +
          '</ul>'
      }
    });
  }
};
