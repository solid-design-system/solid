import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-tab');
const { overrideArgs } = storybookHelpers('sd-tab');
const { generateTemplate } = storybookTemplate('sd-tab');

export default {
  title: 'Components/sd-tab',
  tags: ['!dev', 'autodocs', 'skip-a11y-[aria-required-parent]'],
  component: 'sd-tab',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `Tab`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3074-37925&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};

/**
 * Use the `variant` attribute to display to change the appearance:
 *
 * - `default`: Can be used independently or within components, often for full-page content
 * - `container`: Highlighted tab and content linked to a background container, typically for specific sections like sub-pages or teasers
 */

export const Variant = {
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-tab-group>
        <sd-tab slot="nav" panel="tab-1" variant="default">Default 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>
            Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
          </div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="default">Default 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="default">Default 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
      </sd-tab-group>

      <sd-tab-group>
        <sd-tab slot="nav" panel="tab-1" variant="container">Container 1</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>
            Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
          </div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="container">Container 2</sd-tab>
        <sd-tab-panel name="tab-2">
          <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="container">Container 3</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
      </sd-tab-group>
    </div>
  `
};

/**
 * Use the `active` attribute to toggle the active state.
 */
export const Active = {
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-tab-group activation="auto" id="active">
        <sd-tab slot="nav" panel="tab-1" variant="default">Default 1</sd-tab>
        <sd-tab-panel name="tab-1">
          Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="default">Default 2</sd-tab>
        <sd-tab-panel name="tab-2">
          Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="default">Default 3</sd-tab>
        <sd-tab-panel name="tab-3">
          Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.
        </sd-tab-panel>
      </sd-tab-group>
      <sd-tab-group activation="auto" id="active-container">
        <sd-tab slot="nav" panel="tab-1" variant="container">Container 1</sd-tab>
        <sd-tab-panel name="tab-1">
          Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="container">Container 2</sd-tab>
        <sd-tab-panel name="tab-2">
          Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="container">Container 3</sd-tab>
        <sd-tab-panel name="tab-3">
          Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.
        </sd-tab-panel>
      </sd-tab-group>
    </div>
    <script type="module">
      const tabGroups = document.querySelectorAll('sd-tab-group#active, sd-tab-group#active-container');
      // Wait for controls to be defined before attaching form listeners
      Promise.all([
        customElements.whenDefined('sd-tab-group'),
        customElements.whenDefined('sd-tab'),
        customElements.whenDefined('sd-tab-panel')
      ]).then(() => {
        setTimeout(() => {
          // To make this more robust and reduce race conditions use setTimeout
          tabGroups.forEach(tab => tab.show('tab-2'));
        }, 1);
      });
    </script>
  `
};

/**
 * Use the `disabled` attribute to disable a tab.
 */

export const Disabled = {
  render: () => html`
    <sd-tab-group>
      <sd-tab slot="nav" panel="tab-1" variant="default">Label</sd-tab>
      <sd-tab-panel name="tab-1">
        <div>
          Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
        </div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2" variant="default" disabled>Disabled</sd-tab>
      <sd-tab-panel name="tab-2">
        <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3" variant="default">Label</sd-tab>
      <sd-tab-panel name="tab-3">
        <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
    </sd-tab-group>
  `
};

/**
 * Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
 *
 * __Hint:__ When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
 *
 * **Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.
 */
export const VisuallyDisabled = {
  render: () => {
    return html`
      <sd-tab-group>
        <sd-tab slot="nav" panel="tab-1" variant="default">Label</sd-tab>
        <sd-tab-panel name="tab-1">
          <div>
            Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
          </div>
        </sd-tab-panel>
        <sd-tooltip slot="nav" content="Visually Disabled" trigger="hover focus" size="sm" placement="top" hoist>
          <sd-tab panel="tab-2" variant="default" visually-disabled>Visually disabled</sd-tab>
        </sd-tooltip>
        <sd-tab-panel name="tab-2">
          <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3" variant="default">Label</sd-tab>
        <sd-tab-panel name="tab-3">
          <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
        </sd-tab-panel>
      </sd-tab-group>
    `;
  }
};

/**
 * Use the `left` slot to add system icons.
 */

export const Icon = {
  render: () => html`
    <sd-tab-group>
      <sd-tab slot="nav" panel="tab-1">
        <sd-icon slot="left" name="system/image"></sd-icon>
        Label 1
      </sd-tab>
      <sd-tab-panel name="tab-1">
        <div>
          Tab panel 1 - Provident illo neque vel ex. Inventore perspiciatis delectus nisi doloremque soluta inventore.
        </div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2">
        <sd-icon slot="left" name="system/image"></sd-icon>
        Label 2
      </sd-tab>
      <sd-tab-panel name="tab-2">
        <div>Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3">
        <sd-icon slot="left" name="system/image"></sd-icon>
        Label 3
      </sd-tab>
      <sd-tab-panel name="tab-3">
        <div>Tab panel 3 - Inventore perspiciatis delectus nisi doloremque soluta inventore.</div>
      </sd-tab-panel>
    </sd-tab-group>
  `
};
