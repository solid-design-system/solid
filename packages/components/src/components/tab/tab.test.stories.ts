import '../../solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tab');
const { overrideArgs } = storybookHelpers('sd-tab');
const { generateTemplate } = storybookTemplate('sd-tab');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-tab/Screenshot Tests',
  tags: ['!autodocs'],
  component: 'sd-tab',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `Tab`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-tab in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};

/**
 * Use the `active` attribute to toggle the active state. Styling to indicate the active state is applied in the `sd-tab-group` component.
 */

export const Active = {
  name: 'Active',
  parameters: { controls: { exclude: ['active'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'active', values: [false, true] }
      },
      args
    });
  }
};

/**
 * Use the variant attribute to alternate between the `default` and `container` styles.
 */

export const Variant = {
  name: 'Variant',
  parameters: { controls: { exclude: ['variant'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' },
        x: { type: 'attribute', name: 'active', values: [false, true] }
      },
      args,
      constants: { type: 'attribute', name: 'active', value: true }
    });
  }
};

/**
 * Use the `disabled` attribute to toggle the disabled state.
 */

export const Disabled = {
  name: 'Disabled',
  parameters: { controls: { exclude: ['disabled'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'disabled' }
      },
      args
    });
  }
};

export const Parts = {
  name: 'Parts',
  parameters: {
    controls: {
      exclude: ['base', 'active-tab-indicator', 'bottom-border']
    }
  },
  render: (args: any) => {
    return html`
      ${['base', 'active-tab-indicator', 'hover-bottom-border'].map(part =>
        generateTemplate({
          axis: {
            x: {
              type: 'template',
              name: 'sd-tab::part(...){outline: solid 2px red}',
              values: [
                {
                  title: part,
                  value: `<style>#part-${part} sd-tab::part(${part}){outline: solid 2px red; ${
                    part === 'tabs' && 'outline-offset:-2px;'
                  }}</style><div id="part-${part}">%TEMPLATE%</div>`
                }
              ]
            },
            y: { type: 'attribute', name: 'active', values: [false, true] }
          },
          constants: [
            {
              type: 'template',
              name: 'width',
              value: `
                <div style="width: 600px; position: relative;">%TEMPLATE%
                </div>
              `
            }
          ],
          args
        })
      )}
    `;
  }
};
/**
 * Use the `left` slot to optionally include an element (eg. icon) positioned to the left of the label.
 */

export const Sample = {
  name: 'Sample: Icon',
  parameters: { controls: { exclude: ['active', 'variant'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' },
        x: {
          type: 'slot',
          name: 'left',
          values: [
            {
              title: 'sd-icon',
              value: `
              <sd-icon slot="left" name="system/picture" library="global-resources"></sd-icon>`
            },
            {
              title: 'sd-icon + sd-badge',
              value: `
              <div class="relative">
            <sd-icon slot="left" name="system/picture" library="global-resources"></sd-icon>
            <sd-badge class="absolute -top-0.5 -right-0.5" tabindex="-1" size="sm"></sd-badge>
         </div>`
            }
          ]
        }
      },
      args,
      constants: { type: 'attribute', name: 'active', value: true }
    });
  }
};

export const Combination = generateScreenshotStory([Default, Active, Variant, Disabled, Parts, Sample]);
