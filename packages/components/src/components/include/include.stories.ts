import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { overrideArgs } = storybookHelpers('sd-include');
const { argTypes, args, parameters } = storybookDefaults('sd-include');
const { generateTemplate } = storybookTemplate('sd-include');

/**
 * *Includes give you the power to embed external HTML files into the page.*
 *
 * Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.
 *
 * The included content will be inserted into the `<sd-include>` element's default slot so it can be easily accessed and styled through the light DOM.
 *
 * ```html preview
 * <sd-include src="https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg"></sd-include>
 * ```
 *
 * ## Examples
 *
 * ### Listening for Events
 *
 * When an include file loads successfully, the `sd-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.
 *
 * If the request fails, the `sd-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).
 *
 * ```html
 * <sd-include src="https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg"></sd-include>
 *
 * <script>
 *   const include = document.querySelector('sd-include');
 *
 *   include.addEventListener('sd-load', event => {
 *     if (event.eventPhase === Event.AT_TARGET) {
 *       console.log('Success');
 *     }
 *   });
 *
 *   include.addEventListener('sd-error', event => {
 *     if (event.eventPhase === Event.AT_TARGET) {
 *       console.log('Error', event.detail.status);
 *     }
 *   });
 * </script>
 * ```
 *
 */

export default {
  title: 'Utilities/sd-include',
  component: 'sd-include',
  args: overrideArgs([{ type: 'attribute', name: 'src', value: 'https://union-investment.de/lorem-ipsum' }], args),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-include in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
