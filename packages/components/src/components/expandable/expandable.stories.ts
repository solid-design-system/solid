import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-expandable');
const { overrideArgs } = storybookHelpers('sd-expandable');
const { generateTemplate } = storybookTemplate('sd-expandable');

/**
 * Helps to reduce visible content by concealing part of it, with an option for users to reveal more as needed.
 *
 *  **Related templates**:
 * - [Expandable](?path=/docs/templates-expandable--docs)
 */
export default {
  title: 'Components/sd-expandable',
  component: 'sd-expandable',
  tags: ['!dev'],
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' }
  ]),
  argTypes,
  parameters: { ...parameters }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `open` attribute to set the state of the expandable.
 */

export const Open = {
  name: 'Open',
  render: () => {
    return html`<div class="flex flex-col gap-12">
      <sd-expandable class="sd-prose sd-prose--full-width">
        <p>
          Between 50 and 60 per cent of global economic output depends on functioning ecosystems and the associated
          natural services. This emphasises the high economic importance of the topic and the need to address the
          associated risks and take them into account in the investment process. In the biodiversity guideline, we
          describe the relevance of the topic and Union Investment's approach as a long-term investor.
        </p>
      </sd-expandable>
      <sd-expandable open class="sd-prose sd-prose--full-width">
        <p>
          Between 50 and 60 per cent of global economic output depends on functioning ecosystems and the associated
          natural services. This emphasises the high economic importance of the topic and the need to address the
          associated risks and take them into account in the investment process. In the biodiversity guideline, we
          describe the relevance of the topic and Union Investment's approach as a long-term investor. Between 50 and 60
          per cent of global economic output depends on functioning ecosystems and the associated natural services. This
          emphasises the high economic importance of the topic and the need to address the associated risks and take
          them into account in the investment process. In the biodiversity guideline, we describe the relevance of the
          topic and Union Investment's approach as a long-term investor.
        </p>
      </sd-expandable>
    </div>`;
  }
};

/**
 * Use the `inverted` attribute when displayed on primary background.
 */
export const Inverted = {
  name: 'Inverted',
  render: () => {
    return html`<div class="bg-primary p-8">
      <sd-expandable inverted class="sd-prose sd-prose--full-width sd-prose--inverted">
        <p>
          Between 50 and 60 per cent of global economic output depends on functioning ecosystems and the associated
          natural services. This emphasises the high economic importance of the topic and the need to address the
          associated risks and take them into account in the investment process. In the biodiversity guideline, we
          describe the relevance of the topic and Union Investment's approach as a long-term investor.
        </p>
      </sd-expandable>
    </div>`;
  }
};
