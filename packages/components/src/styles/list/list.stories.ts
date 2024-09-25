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
 *
 * **Related templates**:
 * - [List](?path=/docs/templates-list--docs)
 * - [Link list](?path=/docs/templates-link--docs#link-list)
 */

export default {
  title: 'Styles/sd-list',
  tags: ['!dev'],
  component: 'sd-list',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3249-11293&t=4wQWPA7fIC0v9u7i-4'
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
 * Use `sd-list` modifiers for alternative appearances:
 *
 * - `ul` standard html list element to create an unordered list
 * - `ol` standard html list element to create a ordered list
 * - `sd-list--icon` class to create an icon list
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
 * Use the `sd-list--horizontal` class to set the axis of the list displaying content icons to horizontal.
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

/**
 * Use the `sd-list--inverted` class when displayed on primary background.
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
