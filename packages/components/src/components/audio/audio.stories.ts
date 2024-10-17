import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-audio');
const { generateTemplate } = storybookTemplate('sd-audio');

/**
 * Used to play audio files that are part of the page content.
 *
 * **Related templates**:
 * - [Audio](?path=/docs/templates-audio--docs)
 */

export default {
  title: 'Components/sd-audio',
  component: 'sd-audio',
  tags: ['!dev'],
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

const audioConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: '<audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>'
};

const transcriptConstant: ConstantDefinition = {
  type: 'slot',
  name: 'transcript',
  value: `<div slot="transcript"><p>1<br>00:00:00.000 --> 00:00:04.000<br>A bond unbroken, usability</p><p>2<br>00:00:04.001 --> 00:00:08.000<br>We weave the fabric of digital reality</p><p><strong>[Chorus]</strong><br>I'm here to light the path you walk, ohh<br>Under the stars where dreams we talk<br>I won't falter, steady and sure<br>Tryna bring joy, eternal, pure</p><p>3<br>00:00:08.001 --> 00:00:12.000<br><strong>[Chorus]</strong><br>I'm here to light the path you walk, ohh<br>Under the stars where dreams we talk<br>I won't falter, steady and sure<br>Tryna bring joy, eternal, pure</p><p>4<br>00:00:12.001 --> 00:00:16.000<br><strong>[Chorus]</strong><br>I'm here to light the path you walk, ohh<br>Under the stars where dreams we talk<br>I won't falter, steady and sure<br>Tryna bring joy, eternal, pure</p><p>5<br>00:00:16.001 --> 00:00:20.000<br><strong>[Chorus Continuation]</strong><br>Hey, Solid Components, they gleam<br>Usable, consistent like a dream<br>In the net of codes, we're threading<br>Creating visions that we're spreading<br>Solid Design System, seamless team<br>In this digital flow, we stream</p><p>6<br>00:00:20.001 --> 00:00:24.000<br><strong>[Chorus Continuation]</strong><br>Woven strong, a network supreme<br>With Solid Components, we're the dream team</p></div>`
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`
      <div className="p-0">
        ${generateTemplate({
          args,
          constants: [audioConstant, transcriptConstant]
        })}
      </div>
    `;
  }
};

/**
 * Use the `animated` attribute to change the appearance.
 */
export const Animated = {
  render: () => {
    return html`
      <sd-audio animated>
        <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
      </sd-audio>
    `;
  }
};

/**
 * Use the `inverted` attribute to set the audio’s variant up side down.
 */
export const Inverted = {
  render: () => {
    return html`
      <div class="bg-primary p-12">
        <sd-audio inverted>
          <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
        </sd-audio>
      </div>
    `;
  }
};

/**
 * Use the `reversed-layout` attribute to set the audio’s variant up side down.
 *
 * For both variants the layout can be reversed for versatile positioning combinations.
 */
export const Reverse = {
  render: () => {
    return html`
      <sd-audio reversed-layout>
        <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
      </sd-audio>
    `;
  }
};

/**
 * Use the `speed` attribute to change the playback rate of the audio player:
 *
 * - 1x (default)
 * - 1.25x
 * - 1.5x
 */
export const Speed = {
  render: () => {
    return html`
      <sd-audio speed="1.5">
        <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
      </sd-audio>
    `;
  }
};

/**
 * Use the `hide-timestamps` attribute to hide the timestamps.
 */
export const NoTimestamps = {
  render: () => {
    return html`
      <sd-audio hide-timestamps>
        <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
      </sd-audio>
    `;
  }
};

/**
 * Use the `transcript` slot to display the text transcript.
 *
 * Clicking the transcript button opens “sd-drawer” displaying the text transcript.
 *
 * __Hint:__ If the slot does not exist the transcript button is not displayed
 */
export const Transcript = {
  render: () => {
    return html`
      <sd-audio>
        <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
        <div slot="transcript">
          <p>1<br />00:00:00.000 --> 00:00:04.000<br />A bond unbroken, usability</p>
          <p>2<br />00:00:04.001 --> 00:00:08.000<br />We weave the fabric of digital reality</p>
          <p>
            <strong>[Chorus]</strong><br />I'm here to light the path you walk, ohh<br />Under the stars where dreams we
            talk<br />I won't falter, steady and sure<br />Tryna bring joy, eternal, pure
          </p>
          <p>
            3<br />00:00:08.001 --> 00:00:12.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
            walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring
            joy, eternal, pure
          </p>
          <p>
            4<br />00:00:12.001 --> 00:00:16.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
            walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring
            joy, eternal, pure
          </p>
          <p>
            5<br />00:00:16.001 --> 00:00:20.000<br /><strong>[Chorus Continuation]</strong><br />Hey, Solid Components,
            they gleam<br />Usable, consistent like a dream<br />In the net of codes, we're threading<br />Creating
            visions that we're spreading<br />Solid Design System, seamless team<br />In this digital flow, we stream
          </p>
          <p>
            6<br />00:00:20.001 --> 00:00:24.000<br /><strong>[Chorus Continuation]</strong><br />Woven strong, a
            network supreme<br />With Solid Components, we're the dream team
          </p>
        </div>
      </sd-audio>
    `;
  }
};
