import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-video');
const { generateTemplate } = storybookTemplate('sd-video');

/**
 * The `sd-video` component can be used to wrap external video elements in order to provide basic styling for Union Investment.
 * ## Implementation
 * Use in combination with a viewer component (e. g. from Moving Image) or a bare `<video>`-Tag in addition to `sd-media`.
 * `<sd-media>
 *  <sd-video><video></video></sd-video>
 *  <p slot="copyright">This is mine!!!</p>
 * </sd-media>`
 */

export default {
  title: 'Components/sd-video',
  component: 'sd-video',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-video in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The `sd-video` element with a standard `video` element in the `default` slot.
 */

export const VideoElement = {
  name: 'Video Element',
  parameters: {
    controls: {
      exclude: ['overlay', 'playing', 'default', 'play-icon']
    }
  },
  render: (args: any) => {
    return html`<sd-video-example></sd-video-example>`;
  }
};
