import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-paragraph');
const { overrideArgs } = storybookHelpers('sd-paragraph');
const { generateTemplate } = storybookTemplate('sd-paragraph');

/**
 * Used to display blocks of text.
 * It uses the base font size and can contain bold and/or link styles.
 */

export default {
  tags: ['!dev'],
  title: 'Styles/sd-paragraph',
  component: 'sd-paragraph',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SkTc8tXPNPjZlxvXXJ6vTt/Paragraph?type=design&node-id=1701-741&mode=design&t=FsmhHop5U1y6FbYg-0'
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

/**
 * Default: This shows sd-paragraph in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};

/**
 * Use the `sd-paragraph--size-sm` class to set a smaller font size.
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
 * Use the `inverted` class to make a paragraph with inverted colors.
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
