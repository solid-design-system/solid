import '../../../../components/src/solid-components';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-list');
const { overrideArgs } = storybookHelpers('sd-list');
const { generateTemplate } = storybookTemplate('sd-list');
const { generateScreenshotStory } = storybookUtilities;

// HTML helper to get syntax highlighting and formatting in the template string
const html = String.raw;

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
  title: 'Styles/sd-list/Screenshots: sd-list',
  tags: ['!autodocs'],
  component: 'sd-list',
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/DDSyYvf2q99RhiyDjy03s5/List?type=design&node-id=971-4578&mode=design&t=2UZo6NW6ErMA2G5X-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: '<li>Lorem Ipsum</li>' }),
  argTypes
};

export const Default = {
  name: 'Default',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: html`<li>
      Lorem Ipsum
      <ul>
        <li>
          Dolor sit
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
      options: {
        templateContent: html`<ul class="%CLASSES%">
          %SLOT%
        </ul>`
      },
      args
    });
  }
};

export const OrderedList = {
  name: 'Ordered List',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['transparent', 'var(--sd-color-primary)']
        },
        templateContent: html`<ol class="%CLASSES%">
          <li>
            Lorem Ipsum
            <ol>
              <li>
                Dolor sit
                <ol>
                  <li>Amet</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                </ol>
              </li>
              <li>
                Dolor sit
                <ol>
                  <li>Amet</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            Lorem Ipsum
            <ol>
              <li>
                Dolor sit
                <ol>
                  <li>Amet</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>Lorem Ipsum</li>
        </ol>`
      }
    });
  }
};

export const UnorderedList = {
  name: 'Unordered List',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['transparent', 'var(--sd-color-primary)']
        },
        templateContent: html`<ul class="%CLASSES%">
          <li>
            Lorem Ipsum
            <ul>
              <li>
                Dulor sit
                <ul>
                  <li>Amet</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                </ul>
              </li>
              <li>
                Dulor sit
                <ul>
                  <li>Amet</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Lorem Ipsum
            <ul>
              <li>
                Dulor sit
                <ul>
                  <li>Amet</li>
                  <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Lorem Ipsum</li>
        </ul>`
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
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['transparent', 'var(--sd-color-primary)']
        },
        templateRenderer: ({ attributes }) =>
          html`<ul class="sd-list--icon ${attributes.classes}">
            <li>
              <sd-icon name="content/image"></sd-icon>Lorem Ipsum
              <ul>
                <li>
                  <sd-icon name="content/image"></sd-icon>Dolor sit
                  <ul>
                    <li><sd-icon name="content/image"></sd-icon>Amet</li>
                    <li><sd-icon name="content/image"></sd-icon>Ut enim ad minim veniam, quis nostrud exercitation</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><sd-icon name="content/image"></sd-icon>Lorem Ipsum</li>
            <li><sd-icon name="content/image"></sd-icon>Lorem Ipsum</li>
          </ul>`
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
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-list--inverted', values: ['', 'sd-list--inverted'] }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['transparent', 'var(--sd-color-primary)']
        },
        templateRenderer: ({ attributes }) =>
          html` <ul class="sd-list--icon sd-list--horizontal ${attributes.classes}">
            <li><sd-icon name="content/image"></sd-icon>Lorem</li>
            <li><sd-icon name="content/image"></sd-icon>Lorem</li>
            <li><sd-icon name="content/image"></sd-icon>Lorem</li>
          </ul>`
      }
    });
  }
};

/**
 * This example shows a mixed list of ordered and unordered lists with multiple levels of nesting.
 */
export const MixedLists = {
  name: 'Mixed Lists',
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  tags: ['!dev', 'autodocs'],
  render: (args: any) => {
    const preset = (type: string) =>
      html`<preset-type class="sd-list">
        <li>
          Lorem Ipsum
          <ol>
            <li>
              Dolor sit
              <ul>
                <li>Amet</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
              </ul>
            </li>
            <li>
              Dolor sit
              <ol>
                <li>Amet</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
              </ol>
            </li>
            <li>
              Dolor sit
              <ol>
                <li>Amet</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                <li>Quis nostrud exercitation</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          Lorem Ipsum
          <ol>
            <li>
              Dolor sit
              <ul>
                <li>Amet</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
              </ul>
            </li>
            <li>
              Dolor sit
              <ul>
                <li>Amet</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          Lorem Ipsum
          <ul>
            <li>
              Dolor sit
              <ol>
                <li>Amet</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                <li>Duis amet cupidatat incididunt ipsum veniam sunt esse et et</li>
                <li>
                  Dolor sit
                  <ol>
                    <li>Amet</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    <li>
                      Dolor sit
                      <ol>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                        <li>Quis nostrud exercitation</li>
                      </ol>
                    </li>
                    <li>Quis nostrud exercitation</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Dolor sit
              <ol>
                <li>Amet</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>
          Lorem Ipsum
          <ul>
            <li>
              Dolor sit
              <ul>
                <li>Amet</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
              </ul>
            </li>
            <li>
              Dolor sit
              <ol>
                <li>Amet</li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation
                  <ul>
                    <li>
                      Dolor sit
                      <ul>
                        <li>Amet</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
              </ol>
            </li>
          </ul>
        </li>
      </preset-type>`.replaceAll('preset-type', type);
    return generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'default',
          values: [
            { title: 'ul', value: preset('ul') },
            { title: 'ol', value: preset('ol') }
          ]
        }
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, OrderedList, UnorderedList, IconList, HorizontalIconList]);
