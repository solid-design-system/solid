/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-accordion');
const { overrideArgs } = storybookHelpers('sd-accordion');
const { generateTemplate } = storybookTemplate('sd-accordion');

export default {
  title: 'Components/sd-accordion',
  component: 'sd-accordion',
  tags: ['!dev', 'autodocs'],
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' },
    { type: 'attribute', name: 'summary', value: 'Accordion' }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2001-2283&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `open` attribute to set the state of the accordion.
 */

export const Open = {
  name: 'Open',
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-accordion open summary="Open"><p>This text is immediately visible.</p></sd-accordion>
      <sd-accordion summary="Closed"><p>This text is not immediately visible.</p></sd-accordion>
    </div>
  `
};

/**
 * Use `summary` to provide the text in the accordion header.
 *
 * __Hint:__ The `summary` slot allows you to use custom html.
 */

export const Summary = {
  name: 'Summary',
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-accordion>
        <div slot="summary">
          <h4>I don't have a telephone number with a German area code. Can I still register?</h4>
        </div>
        <p>
          Union Investment is the dedicated asset manager within the German cooperative financial network. All
          shareholders are also part of the network, which ensures a stable and long-term ownership structure. This
          allows us to maintain a sustainable business model and develop strong, long-term client relationships.
        </p>
      </sd-accordion>
    </div>
  `
};
