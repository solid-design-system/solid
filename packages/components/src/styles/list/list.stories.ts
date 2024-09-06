import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-list');
const { overrideArgs } = storybookHelpers('sd-list');
const { generateTemplate } = storybookTemplate('sd-list');

/**
 * Used to make blocks of text easier to read and to divide information into manageable sections.
 *
 * Text lists can be numbered, have bullet points, or be supplemented by content symbols. Text can be bolded or linked.
 */

export default {
  title: 'Styles/sd-list',
  tags: ['!dev'],
  component: 'sd-list',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/DDSyYvf2q99RhiyDjy03s5/List?type=design&node-id=971-4578&mode=design&t=2UZo6NW6ErMA2G5X-0'
    }
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: `<ul class="sd-list">
        <li>Unordered list level 1
          <ul>
            <li>Unordered list level 2
              <ul>
               <li>Unordered list level 3</li>
              </ul>
            </li>
          </ul>
        </li><li>Unordered list level 1</li>
        <li>Unordered list level 1</li>
      </ul>`
  }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use `sd-list` modifiers for alternative appearances.
 *
 * - `Unordered list group`: use the class `sd-list` when there is no specific sequence or order to the items
 * - `Ordered list group`: use the class `sd-list` when the items have a specific sequence or count
 * - `Icon list group`: use the class `sd-list--icon` when more illustration is needed
 */

export const Variants = {
  render: () =>
    html`<div class="grid grid-cols-3 gap-12">
      <ul class="sd-list">
        <li>Unordered list</li>
        <li>Unordered list</li>
        <li>Unordered list</li>
      </ul>
      <ol class="sd-list">
        <li>Ordered list</li>
        <li>Ordered list</li>
        <li>Ordered list</li>
      </ol>
      <ul class="sd-list--icon sd-list">
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Icon list
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Icon list
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Icon list
        </li>
      </ul>
    </div>`
};

/**
 * List items can be nested up to 3 levels.
 */
export const Levels = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-12">
      <ul class="sd-list">
        <li>
          Unordered list level 1
          <ul>
            <li>
              Unordered list level 2
              <ul>
                <li>Unordered list level 3</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Unordered list level 1</li>
        <li>Unordered list level 1</li>
      </ul>
      <ol class="sd-list">
        <li>
          Ordered list level 1
          <ol>
            <li>
              Ordered list level 2
              <ol>
                <li>Ordered list level 3</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>Ordered list level 1</li>
        <li>Ordered list level 1</li>
      </ol>
      <ul class="sd-list--icon sd-list">
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Unordered list level 1
          <ul class="sd-list--icon sd-list">
            <li>
              <sd-icon name="content/picture" library="global-resources"></sd-icon>
              Unordered list level 2
              <ul class="sd-list--icon sd-list">
                <li>
                  <sd-icon name="content/picture" library="global-resources"></sd-icon>
                  Unordered list level 3
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Unordered list level 1
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Unordered list level 1
        </li>
      </ul>
    </div>`
};

/**
 * Use `sd-list--horizontal` modifiers to set horizontal orientations for Icon list groups.
 */
export const Orientation = {
  render: () =>
    html`<div class="flex flex-row justify-around items-center">
      <ul class="sd-list--icon sd-list">
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Vertical list
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Vertical list
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Vertical list
        </li>
      </ul>
      <ul class="sd-list--icon sd-list--horizontal sd-list">
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Horizontal list
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Horizontal list
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Horizontal list
        </li>
      </ul>
    </div>`
};

export const Weights = {
  render: () =>
    html`<ul class="sd-list">
      <li>
        <b>Unordered list level 1</b>
        <ul>
          <li>
            Unordered list level 2
            <ul>
              <li>Unordered list level 3</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Unordered list level 1</b></li>
      <li><b>Unordered list level 1</b></li>
    </ul>`
};

/**
 * Use the `&--inverted` class when displayed on primary background.
 */
export const Inverted = {
  render: () =>
    html`<div class="bg-primary p-4">
      <ul class="sd-list--icon sd-list sd-list--inverted">
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Icon list inverted
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Icon list inverted
        </li>
        <li>
          <sd-icon name="content/picture" library="global-resources"></sd-icon>
          Icon list inverted
        </li>
      </ul>
    </div>`
};
