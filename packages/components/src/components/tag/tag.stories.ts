import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-tag');
const { generateTemplate } = storybookTemplate('sd-tag');
const { overrideArgs } = storybookHelpers('sd-tag');

/**
 *
 *  Tags are used to categorize or label content. They can be used to filter or search for content.
 *
 */

export default {
  tags: ['!dev'],
  title: 'Components/sd-tag',
  component: 'sd-tag',
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Tag' }),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Default: This shows sd-tag in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the tag size. The default size is `lg`.
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
 */

export const Selected = {
  render: () => html`
    <div class="flex gap-12">
      <sd-tag selected>Selected</sd-tag>
    </div>
  `
};

/**
 * Use the `removable` attribute to include the removability indicator and make the tag removable from the UI.
 */

export const Removable = {
  render: () => html`
    <div class="flex gap-12">
      <sd-tag removable>Removable</sd-tag>
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

/**
 * Use the `href` attribute to render the tag as a link. By default a tag is rendered as a button.
 *
 * The `target` attribute can be used to specify where to open the link.
 */

export const WithALink = {
  name: 'With a link',
  render: () => html`
    <div class="flex gap-12">
      <sd-tag>Default</sd-tag>
      <sd-tag
        href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
        target="_blank"
        >Link</sd-tag
      >
    </div>
  `
};

/**
 * Use the `download` attribute to tell the browser to download the linked file as this filename. Only used when href is present.
 */

export const Download = {
  render: () => html`
    <div class="flex gap-12">
      <sd-tag
        href="./placeholders/src/images/collaboration.jpg"
        download
        >Download</sd-tag
      >
    </div>
  `
};
