import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-skeleton');
const { overrideArgs } = storybookHelpers('sd-skeleton');
const { generateTemplate } = storybookTemplate('sd-skeleton');

export default {
  title: 'Styles/sd-skeleton',
  tags: ['!dev', 'autodocs'],
  component: 'sd-skeleton',
  args: overrideArgs([{ type: 'attribute', name: 'class', value: 'h-8 w-48' }]),
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs'
    }
  },
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<div class="%CLASSES%"></div>' },
      args
    });
  }
};

/**
 * Use `sd-skeleton--circular` for circular placeholders such as avatars or icons.
 */
export const Circular = {
  render: () => html`<div class="sd-skeleton sd-skeleton--circular w-12 h-12"></div>`
};

/**
 * Apply `sd-skeleton` and `inert` directly to the element that will be shown after loading.
 * `inert` hides the element from the accessibility tree and removes focus — no screen reader
 * will announce "Submit form" while the skeleton is visible.
 * Remove both attributes once content is ready.
 */
export const OnElements = {
  render: () => html`
    <div class="flex flex-col gap-6 p-4 w-[392px]">
      <div>
        <p class="sd-paragraph text-sm text-neutral-700 mb-2">Button — sizes to its natural width</p>
        <sd-button class="sd-skeleton" inert>Submit form</sd-button>
      </div>
      <div>
        <p class="sd-paragraph text-sm text-neutral-700 mb-2">Text placeholders — use explicit widths</p>
        <div class="flex flex-col gap-2">
          <div class="sd-skeleton h-7 w-3/4" inert></div>
          <div class="sd-skeleton h-4 w-full" inert></div>
          <div class="sd-skeleton h-4 w-5/6" inert></div>
        </div>
      </div>
      <div>
        <p class="sd-paragraph text-sm text-neutral-700 mb-2">Mixed — avatar + text lines</p>
        <div class="flex gap-3 items-center">
          <div class="sd-skeleton sd-skeleton--circular w-10 h-10 shrink-0" inert></div>
          <div class="flex flex-col gap-2 flex-1">
            <div class="sd-skeleton h-4 w-2/3" inert></div>
            <div class="sd-skeleton h-3 w-1/2" inert></div>
          </div>
        </div>
      </div>
    </div>
  `
};

/**
 * Toggle both `sd-skeleton` and `inert` together to switch between loading and loaded states.
 * Adding `inert` ensures the element is completely inaccessible while loading —
 * not focusable, not announced by screen readers.
 */
export const Toggle = {
  render: () => html`
    <div class="flex flex-col items-start gap-4 p-4">
      <sd-button
        id="toggle-btn"
        onclick="
          const btn = document.getElementById('demo-btn');
          btn.classList.toggle('sd-skeleton');
          btn.toggleAttribute('inert');
        "
      >
        Toggle skeleton
      </sd-button>
      <sd-button id="demo-btn" class="sd-skeleton" inert>Submit form</sd-button>
    </div>
  `
};
