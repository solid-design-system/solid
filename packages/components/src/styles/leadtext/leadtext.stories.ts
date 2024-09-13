import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-leadtext');
const { overrideArgs } = storybookHelpers('sd-leadtext');
const { generateTemplate } = storybookTemplate('sd-leadtext');

/**
 * Used for text that should be highlighted and a focal point of the page.
 *
 * **Related templates**:
 * - [Headline, Display and Leadtext with Mark](?path=/docs/templates-headline-display-and-leadtext-with-mark--docs)
 */

export default {
  title: 'Styles/sd-leadtext',
  tags: ['!dev'],
  component: 'sd-leadtext',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2706-32946&t=4wQWPA7fIC0v9u7i-4'
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
      options: { templateContent: '<div class="%CLASSES%">%SLOT%</time>' },
      args
    });
  }
};

/**
 * Use `sd-leadtext` modifiers for alternative appearances:
 * -  Extra Large is the default leadtext size
 * - `sd-leadtext--size-lg`: Large can be used as an alternative
 */

export const Size = {
  render: () => html`
    <div class="flex flex-col gap-6">
      <div class="sd-leadtext">
        Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
        Facilisis commodo integer hendrerit tortor.
      </div>
      <div class="sd-leadtext sd-leadtext--size-lg">
        Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
        Facilisis commodo integer hendrerit tortor.
      </div>
    </div>
  `
};

/**
 * Use the `inverted` class when displayed on primary background.
 */

export const Inverted = {
  render: () => html`
    <div class="bg-primary p-4">
      <div class="sd-leadtext sd-leadtext--inverted">
        Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
        Facilisis commodo integer hendrerit tortor.
      </div>
    </div>
  `
};
