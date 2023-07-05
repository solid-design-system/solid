import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-details');
const { defaultTemplate, attributesTemplate } = storybookTemplates('sd-details');

export default {
  title: 'Components/sd-details',
  component: 'sd-details',
  args: {
    ...args,
    'default-slot': '<slot-comp></slot-comp>',
    'summary-slot': '<span slot="summary">Summary Slot</span>',
  },
  argTypes,
  decorators: [withActions] as any
};


/**
 * Default: This shows sd-details in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `disable` attribute to prevent the details from toggling.
 */

export const Disabled = {
  parameters: { controls: { exclude: ['disabled'] } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args, disabled: true },
        attributes: ['disabled'],
        vertical: true,
      }
    );
  }
};


/**
 * Use the `open` attribute to programmatically open the details.
 */
export const Open = {
  parameters: { controls: { exclude: 'open' } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: args,
        attributes: ['open'],
        vertical: true,
      }
    );
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
    controls: { exclude: ['expand-icon', 'collapse-icon'] },
  },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: {
          ...args,
          'expand-icon-slot': '<span slot="expand-icon">✅</span>',
          'collapse-icon-slot': '<span slot="collapse-icon">❎</span>'
        },
        attributes: ['open'],
        vertical: true,
      }
    );
  }
};
