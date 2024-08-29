import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-radio');
const { generateTemplate } = storybookTemplate('sd-radio');
const { overrideArgs } = storybookHelpers('sd-radio');

/**
 * Allows the user to select a single option from a group.
 */

export default {
  title: 'Components/sd-radio',
  tags: ['!dev'],
  component: 'sd-radio',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Radio' }]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Default: This shows sd-radio in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`
      <sd-radio-group label="Group Label" boldLabel value="1">
        ${generateTemplate({
          args: overrideArgs(
            [
              { type: 'attribute', name: 'value', value: 1 },
              { type: 'slot', name: 'default', value: 'Radio 1' }
            ],
            args
          )
        })}
        ${generateTemplate({
          args: overrideArgs(
            [
              { type: 'attribute', name: 'value', value: 2 },
              { type: 'slot', name: 'default', value: 'Radio 2' }
            ],
            args
          )
        })}
        ${generateTemplate({
          args: overrideArgs(
            [
              { type: 'attribute', name: 'value', value: 3 },
              { type: 'slot', name: 'default', value: 'Radio 3' }
            ],
            args
          )
        })}
      </sd-radio-group>
    `;
  }
};

/**
 * Use the `size` attribute to change the size of the input radio. This attribute affects the font-size within the element, while the element itself remains the same size.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group size="lg" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
      <sd-radio-group size="sm" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable a input radio.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group label="Disabled Radio in Group" boldLabel value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2" disabled>Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
    </div>
  `
};

/**
 * The `invalid` attribute marks the radio as invalid. For an invalid radio-group (since radios always come in groups) an error-text underneath the group is mandatory.
 */

export const Invalid = {
  name: 'Invalid',
  render: () => html`
    <form id="invalid-form" class="flex flex-col gap-8">
      <sd-radio-group name="radio-group" id="invalid-radio" required boldlabel>
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Invalid Group</label>
      </sd-radio-group>
    </form>
    <script type="module">
      // Wait for custom elements to be defined
      await Promise.all([customElements.whenDefined('sd-radio-group'), customElements.whenDefined('sd-button')]).then(
        () => {
          const input = document.getElementById('invalid-radio');
          input.reportValidity();
        }
      );
    </script>
  `
};
