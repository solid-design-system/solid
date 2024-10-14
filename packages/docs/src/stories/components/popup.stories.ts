import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-popup');
const { generateTemplate } = storybookTemplate('sd-popup');
const { overrideArgs } = storybookHelpers('sd-popup');

/**
 * Popup is a utility that lets you declaratively anchor "popup" containers to another element.
 *
 * This component’s name is inspired by `<popup>`. It uses Floating UI under the hood to provide a well-tested, lightweight, and fully declarative positioning utility for tooltips, dropdowns, and more.
 *
 * Popup doesn’t provide any styles — just positioning! The popup’s preferred placement, distance, and skidding (offset) can be configured using attributes.
 *
 * > Popup is a low-level utility built specifically for positioning elements. Do not mistake it for a tooltip or similar because it does not facilitate an accessible experience! Almost every correct usage of <sd-popup> will involve building other components. It should rarely, if ever, occur directly in your HTML.
 */

export default {
  title: 'Utilities/sd-popup',
  component: 'sd-popup',
  args: overrideArgs([
    { type: 'slot', name: 'anchor', value: '<span style="background: gray" slot="anchor">Anchor</span>' },
    {
      type: 'slot',
      name: 'default',
      value: '<span style="background: red">Popup content</span>'
    },
    {
      type: 'attribute',
      name: 'active',
      value: true
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-popup in its default state when active.
 */

export const Default = {
  render: (args: any) => {
    return html`<div style="padding: 40px;">${generateTemplate({ args })}</div>`;
  }
};
