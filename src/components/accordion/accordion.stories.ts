import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-accordion');
const { generateTemplate } = storybookTemplate('sd-accordion');

export default {
  title: 'Components/sd-accordion',
  component: 'sd-accordion',
  args: {
    ...args,
    'default-slot': '<slot-comp></slot-comp>',
    'summary-slot': '<span slot="summary">Accordion</span>'
  },
  argTypes
};

/**
 * Use as vertical stack of interactive headlines that can be used to toggle the display of additional information; each element can be collapsed with only a brief caption visible, or 'expanded to display the entire content.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * An accordion item can either be collapsed or open.
 */
export const States = {
  parameters: { controls: { exclude: 'open' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'open' }
      },
      args
    });
  }
};

/**
 * Use the expand-icon and collapse-icon slots to change the expand and collapse icons, respectively.
 * To disable the details, override the rotate property on the summary-icon part as shown below:
 * ```
 * sl-details.custom-icons::part(summary-icon) {
 *   rotate: none;
 * }
 * ```
 */

export const Slots = {
  parameters: {
    controls: { exclude: ['expand-icon', 'collapse-icon'] }
  },
  render: (args: any) => {
    return generateTemplate({
      args: {
        ...args,
        'expand-icon-slot': '<span slot="expand-icon">✅</span>',
        'collapse-icon-slot': '<span slot="collapse-icon">❎</span>'
      },
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
    });
  }
};
