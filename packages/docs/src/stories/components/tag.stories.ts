import '../../../../components/src/solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-tag');
const { generateTemplate } = storybookTemplate('sd-tag');
const { overrideArgs } = storybookHelpers('sd-tag');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-tag',
  component: 'sd-tag',
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Tag' }),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2106-20479&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the tag size:
 * - `lg` (default)
 * - `sm`
 */

export const Size = {
  render: () => html`
    <div class="flex gap-12">
      <sd-tag size="lg">Large</sd-tag>
      <sd-tag size="sm">Small</sd-tag>
    </div>
  `
};

/**
 * Use the `selected` attribute to enable the selected state.
 *
 * __Accessibility hint__: Use the attribute `toggleable` to reflect the `selected` state on the `aria-pressed` attribute.
 */

export const Selected = {
  render: () => html`
    <div id="tags-selected" class="flex gap-12">
      <sd-tag selected toggleable>Selected</sd-tag>
    </div>

    <script type="module">
      const handleToggle = event => {
        const tag = event.target;
        tag.toggleAttribute('selected');
        const isSelected = tag.hasAttribute('selected');
        tag.innerText = isSelected ? 'Selected' : 'Unselected';
      };

      const tags = document.querySelectorAll('#tags-selected sd-tag');
      tags.forEach(tag => tag.addEventListener('click', handleToggle));
    </script>
  `
};

/**
 * Use the `removable` attribute to include the removability indicator.
 *
 * __Hint:__ Combine the `sd-remove` event and `hide` method to visually hide the tag
 * when the removable button is triggered.
 */

export const Removable = {
  render: () => html`
    <div class="flex gap-12">
      <sd-tag id="removable-tag" size="lg" removable>Removable</sd-tag>
    </div>

    <script type="module">
      const tag = document.querySelector('#removable-tag');

      tag.addEventListener('sd-remove', event => tag.hide());
      tag.addEventListener('sd-after-hide', event => {
        setTimeout(() => {
          event.target.style.opacity = '1';
          event.target.hidden = false;
        }, 2000);
      });
    </script>
  `
};

/**
 * - Use the `href` attribute to render the tag as a link. By default a tag is rendered as a button.
 * - Use the `target` attribute can to specify where to open the link.
 * - Use the `download` attribute to tell the browser to download the linked file as this filename.
 */

export const AsLink = {
  name: 'As link',
  render: () => html`
    <div class="flex gap-12">
      <sd-tag href="https://solid-design-system.fe.union-investment.de/docs/?path=/docs/docs-general-introduction--docs"
        >Link</sd-tag
      ><sd-tag href="https://union-investment.com" target="_blank">New Window</sd-tag
      ><sd-tag href="./placeholders/images/coffeeshop.jpg" download="">Download</sd-tag>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable a tag.
 *
 * __Hint:__ If the href attribute is set i.e. the tag is rendered as a link (`<a>`),
 * the disabled attribute is ignored, as links may not be disabled.
 * To disable the tag in this case the href attribute has to be removed.
 */

export const Disabled = {
  render: () => html`
    <div class="flex gap-12">
      <sd-tag disabled>Disabled</sd-tag>
    </div>
  `
};
