import '../../solid-components';
import { getDefaultArgs, renderDefaultStory, renderStoryFromAttributes } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-details',
  component: 'sd-details',
  args: getDefaultArgs('sd-details'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-details', args);
  }
};

/**
 * Use the `disable` attribute to prevent the details from toggling.
 */

export const Disabled = {
  parameters: { controls: { exclude: ['disabled'] } },
  render: (args: any) => {
    return renderStoryFromAttributes(
      {
        customElementTag: 'sd-details',
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
    return renderStoryFromAttributes(
      {
        customElementTag: 'sd-details',
        args: args,
        attributes: ['open'],
        vertical: true,
      }
    );
  }
};



/**
 * Use the expand-icon and collapse-icon slots to change the expand and collapse icons, respectively.
 * To disable the animation, override the rotate property on the summary-icon part as shown below:
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
    return renderStoryFromAttributes(
      {
        customElementTag: 'sd-details',
        args: {
          ...args,
          'expand-icon': '<span slot="expand-icon">✅</span>',
          'collapse-icon': '<span slot="collapse-icon">❎</span>'
        },
        attributes: ['open'],
        vertical: true,
      }
    );
  }
};
