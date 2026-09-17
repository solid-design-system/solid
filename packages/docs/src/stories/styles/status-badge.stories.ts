import { html } from 'lit-html';
import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-status-badge');
const { overrideArgs } = storybookHelpers('sd-status-badge');
const { generateTemplate } = storybookTemplate('sd-status-badge');

export default {
  title: 'Styles/sd-status-badge',
  tags: ['!dev', 'autodocs'],
  component: 'sd-status-badge',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Active`
    },
    { type: 'attribute', name: 'class', value: 'sd-status-badge--success' }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS-%E2%80%93-Component-Library?node-id=18391-37775&t=LaSTkqB8MKXGCZbc-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<div class="%CLASSES%">%SLOT%</div>' },
      args
    });
  }
};

/**
 * Use the `sd-status-badge--*` classes for alternative appearances:
 * - `sd-status-badge--success`
 * - `sd-status-badge--warning`
 * - `sd-status-badge--error`
 * - `sd-status-badge--info`
 * - `sd-status-badge--neutral`
 */
export const Variants = {
  render: () => {
    return html`<div class="flex flex-col items-start gap-4">
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Active
      </div>
      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
        Degraded
      </div>
      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-close" library="sd-status-assets"></sd-icon>
        Canceled
      </div>
      <div class="sd-status-badge sd-status-badge--info">
        <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
        Status Info
      </div>
      <div class="sd-status-badge sd-status-badge--neutral">
        <sd-icon name="status-minus" library="sd-status-assets"></sd-icon>
        Inactive
      </div>
    </div>`;
  }
};

/**
 * Use the `sd-status-badge--size-*` classes for alternative sizes:
 * - large size is the default size
 * - `sd-status-badge--size-md`
 * - `sd-status-badge--size-sm`
 */
export const Sizes = {
  render: () => {
    return html`<div class="flex flex-col items-start gap-12">
      <div class="sd-status-badge sd-status-badge--info">
        <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
        Status Info
      </div>
      <div class="sd-status-badge sd-status-badge--info sd-status-badge--size-md">
        <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
        Status Info
      </div>
      <div class="sd-status-badge sd-status-badge--info sd-status-badge--size-sm">
        <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
        Status Info
      </div>
    </div>`;
  }
};
