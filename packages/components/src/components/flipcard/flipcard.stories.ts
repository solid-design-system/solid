import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-flipcard');
const { generateTemplate } = storybookTemplate('sd-flipcard');
const { overrideArgs } = storybookHelpers('sd-flipcard');

/**
 * Used to display content on one side and reveal additional information when flipped.
 *
 * **Accessibility Hint**:
 * Front flipcards should not contain any action items. If an action is necessary, consider placing it on the back of the card (once flipped) or in a separate area.
 *
 * **Related templates**:
 * - [Flipcard](?path=/docs/templates-flipcard--docs)
 */
export default {
  title: 'Components/sd-flipcard',
  tags: ['!dev'],
  component: 'sd-flipcard',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'front',
      value: `<p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>`
    },
    {
      type: 'slot',
      name: 'back',
      value: `<p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>`
    },
    {
      type: 'slot',
      name: 'media-front',
      value: `<img slot='media-front' class="object-cover h-full w-full" src='./placeholders/images/generic.jpg' alt='Generic'/>`
    },
    {
      type: 'slot',
      name: 'media-back',
      value: `<img slot='media-back' class="object-cover h-full w-full" src='./placeholders/images/generic.jpg' alt='Generic'/>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2314-193708&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to set the color variant for front or back:
 *
 * - `empty` (default)
 * - `primary`
 * - `primary-100`
 * - `gradient-light-top`
 * - `gradient-light-bottom`
 * - `gradient-dark-top`
 * - `gradient-dark-bottom`
 */
export const Variants = {
  render: () =>
    html` <div class="grid grid-cols-2 gap-8">
      <sd-flipcard activation="click hover" flip-direction="horizontal" front-variant="primary" back-variant="primary">
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
      <sd-flipcard
        activation="click hover"
        flip-direction="horizontal"
        front-variant="primary-100"
        back-variant="primary-100"
      >
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
      <sd-flipcard
        activation="click hover"
        flip-direction="horizontal"
        front-variant="gradient-light-top"
        back-variant="gradient-light-top"
      >
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
      <sd-flipcard
        activation="click hover"
        flip-direction="horizontal"
        front-variant="gradient-light-bottom"
        back-variant="gradient-light-bottom"
      >
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
      <sd-flipcard
        activation="click hover"
        flip-direction="horizontal"
        front-variant="gradient-dark-top"
        back-variant="gradient-dark-top"
      >
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
      <sd-flipcard
        activation="click hover"
        flip-direction="horizontal"
        front-variant="gradient-dark-bottom"
        back-variant="gradient-dark-bottom"
      >
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
    </div>`
};

/**
 * Use the CSS property `aspect-ratio` to set the aspect ratio of the flipcard:
 * - 3:4 ratio (default)
 * - 16:9 ratio
 */

export const AspectRatios = {
  parameters: { ...parameters, docs: { story: { inline: false, height: '1050px' } } },
  render: () =>
    html` <sd-flipcard
        activation="click hover"
        flip-direction="horizontal"
        front-variant="primary-100"
        back-variant="primary-100"
        style="aspect-ratio:3/4;"
        class="mb-12"
      >
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
      <sd-flipcard
        activation="click hover"
        flip-direction="horizontal"
        front-variant="primary-100"
        back-variant="primary-100"
        style="aspect-ratio:16/9"
      >
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>`
};

/**
 * Use the `activation` attribute to determine the activation type of the flipcard:
 * - `click hover` (default)
 * - `click`
 */

export const Activation = {
  render: () =>
    html` <div class="grid grid-cols-2 gap-8">
      <sd-flipcard activation="click hover" flip-direction="horizontal" front-variant="empty" back-variant="empty">
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
      <sd-flipcard activation="click" flip-direction="horizontal" front-variant="empty" back-variant="empty">
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
    </div>`
};

/**
 * Use the `flip-direction` attribute to determine the direction of the flipcard:
 * - `horizontal` (default)
 * - `vertical`
 */

export const flipDirection = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-8">
      <sd-flipcard activation="click hover" flip-direction="horizontal" front-variant="empty" back-variant="empty">
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
      <sd-flipcard activation="click hover" flip-direction="vertical" front-variant="empty" back-variant="empty">
        <p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>
        <p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>
        <img
          slot="media-front"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
        <img
          slot="media-back"
          class="object-cover h-full w-full"
          src="./placeholders/images/generic.jpg"
          alt="Generic Alt"
        />
      </sd-flipcard>
    </div>`
};
