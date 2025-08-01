import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-paragraph');
const { overrideArgs } = storybookHelpers('sd-paragraph');
const { generateTemplate } = storybookTemplate('sd-paragraph');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Styles/sd-paragraph',
  component: 'sd-paragraph',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2706-27981&t=yS054qhxgjorbMDv-4'
    }
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value:
      'Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.'
  }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};

/**
 * Use the `sd-paragraph--size-*` classes for alternative appearances:
 *
 * - lg is the default size
 * - `sd-paragraph--size-sm`
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-6">
      <p class="sd-paragraph">
        Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
        Facilisis commodo integer hendrerit tortor.
      </p>
      <p class="sd-paragraph sd-paragraph--size-sm">
        Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
        Facilisis commodo integer hendrerit tortor.
      </p>
    </div>
  `
};

/**
 * Use the `sd-paragraph--inverted` class when displayed on primary background.
 */

export const Inverted = {
  render: () => html`
    <div class="p-4 bg-primary">
      <p class="sd-paragraph sd-paragraph--inverted">
        Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
        Facilisis commodo integer hendrerit tortor.
      </p>
    </div>
  `
};
