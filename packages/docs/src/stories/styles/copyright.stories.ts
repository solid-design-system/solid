import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-copyright');
const { overrideArgs } = storybookHelpers('sd-copyright');
const { generateTemplate } = storybookTemplate('sd-copyright');

/**
 * Used to be displayed at the bottom of an image for example.
 *
 * Use the `--copyright` CSS property and the class `sd-copyright` in the parent of any element to set a copyright text.
 *
 * ** Related template:**
 * - [Media with Copyright](?path=/docs/templates-media--docs#copyright)
 * - [Video with Copyright](?path=/docs/templates-video--docs#video%20element%20with%20copyright)
 * - [Teaser Media with Copyright](?path=/docs/templates-teaser-media--docs#teaser%20media%20with%20copyright)
 */
export default {
  title: 'Styles/sd-copyright',
  tags: ['!dev'],
  component: 'sd-copyright',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2113-30804&t=yS054qhxgjorbMDv-4'
    }
  },
  args: overrideArgs(
    {
      type: 'slot',
      name: 'default',
      value: `<img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover"/>`
    },
    {
      '--copyright': '© 2024 Solid Design System'
    }
  ),
  argTypes
};

export const Default = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: { [k: string]: any }) => {
    return generateTemplate({
      options: {
        templateContent: `<div class="%CLASSES% max-w-xl" style="--copyright: '${args['--copyright']}';">%SLOT%</div>`
      },
      args
    });
  }
};

/**
 * Use the `&--orientation-*` classes for alternative appearances:
 * - `horizontal` is the default copyright orientation
 * - `vertical`: use the class `sd-copyright--orientation-vertical`
 */

export const Variants = {
  render: () =>
    html`<div class="grid grid-cols-2 gap-4">
      <div class="sd-copyright max-w-xl" style="--copyright: '© 2024 Solid Design System';">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-video object-cover"
        />
      </div>

      <div
        class="sd-copyright sd-copyright--orientation-vertical max-w-xl"
        style="--copyright: '© 2024 Solid Design System';"
      >
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-video object-cover"
        />
      </div>
    </div>`
};
