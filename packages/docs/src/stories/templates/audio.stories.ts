import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Audio',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/cHffrwo9yDeKpqsPcYN8R7/Solid-DS-%E2%80%93-Component-Library?node-id=29289-12781&node-type=frame&t=QXEhze4Hm78Vr6gA-0'
    }
  }
};

export const Default = {
  name: 'Audio with Text',
  render: () => html`
    <div class="mb-4">
      <p class="font-bold text-base flex justify-center">Harmony in the System</p>
      <p class="text-sm text-neutral-700 flex justify-center">
        Listen to the sound of collaboration, the melody of consistency, and the beat of scalability.
      </p>
    </div>
    <sd-audio>
      <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
      <div slot="transcript">
        <p>1<br />00:00:00.000 --&gt; 00:00:04.000<br />A bond unbroken, usability</p>
        <p>2<br />00:00:04.001 --&gt; 00:00:08.000<br />We weave the fabric of digital reality</p>
        <p>
          <strong>[Chorus]</strong><br />I'm here to light the path you walk, ohh<br />Under the stars where dreams we
          talk<br />I won't falter, steady and sure<br />Tryna bring joy, eternal, pure
        </p>
        <p>
          3<br />00:00:08.001 --&gt; 00:00:12.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
          walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring joy,
          eternal, pure
        </p>
        <p>
          4<br />00:00:12.001 --&gt; 00:00:16.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
          walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring joy,
          eternal, pure
        </p>
        <p>
          5<br />00:00:16.001 --&gt; 00:00:20.000<br /><strong>[Chorus Continuation]</strong><br />Hey, Solid
          Components, they gleam<br />Usable, consistent like a dream<br />In the net of codes, we're threading<br />Creating
          visions that we're spreading<br />Solid Design System, seamless team<br />In this digital flow, we stream
        </p>
        <p>
          6<br />00:00:20.001 --&gt; 00:00:24.000<br /><strong>[Chorus Continuation]</strong><br />Woven strong, a
          network supreme<br />With Solid Components, we're the dream team
        </p>
      </div>
    </sd-audio>
  `
};

export const AudioWithTeaser = {
  name: 'Audio with Teaser',
  render: () => html`
    <style>
      sd-teaser {
        --distribution-media: 30%;
      }

      sd-teaser [slot='media'] {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px;
      }

      sd-teaser .teaser-icon {
        --sd-icon-size: 136px;
        width: 136px;
        height: 136px;
      }
    </style>

    <sd-teaser variant="default" breakpoint="448" class="mb-6">
      <div slot="media" class="relative bg-slate-50">
        <sd-icon name="content/music" slot="icon-left" class="teaser-icon primary" color="primary"></sd-icon>
      </div>
      <h3 slot="headline">Harmony in the System</h3>
      <div class="flex flex-col gap-5">
        <p class="text-sm text-neutral-700 flex">
          Listen to the sound of collaboration, the melody of consistency, and the beat of scalability.
        </p>
      </div>
    </sd-teaser>

    <sd-audio reversed-layout hide-timestamps>
      <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
      <div slot="transcript">
        <p>1<br />00:00:00.000 --&gt; 00:00:04.000<br />A bond unbroken, usability</p>
        <p>2<br />00:00:04.001 --&gt; 00:00:08.000<br />We weave the fabric of digital reality</p>
        <p>
          <strong>[Chorus]</strong><br />I'm here to light the path you walk, ohh<br />Under the stars where dreams we
          talk<br />I won't falter, steady and sure<br />Tryna bring joy, eternal, pure
        </p>
        <p>
          3<br />00:00:08.001 --&gt; 00:00:12.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
          walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring joy,
          eternal, pure
        </p>
        <p>
          4<br />00:00:12.001 --&gt; 00:00:16.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
          walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring joy,
          eternal, pure
        </p>
        <p>
          5<br />00:00:16.001 --&gt; 00:00:20.000<br /><strong>[Chorus Continuation]</strong><br />Hey, Solid
          Components, they gleam<br />Usable, consistent like a dream<br />In the net of codes, we're threading<br />Creating
          visions that we're spreading<br />Solid Design System, seamless team<br />In this digital flow, we stream
        </p>
        <p>
          6<br />00:00:20.001 --&gt; 00:00:24.000<br /><strong>[Chorus Continuation]</strong><br />Woven strong, a
          network supreme<br />With Solid Components, we're the dream team
        </p>
      </div>
    </sd-audio>
  `
};

export const AudioAnimated = {
  name: 'Audio with Display',
  render: () => html`
    <div class="py-12">
      <div class="sd-display sd-display--size-3xl text-primary mb-8 text-center">Harmony in the System</div>

      <sd-audio reversed-layout hide-timestamps>
        <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
        <div slot="transcript">
          <p>1<br />00:00:00.000 --&gt; 00:00:04.000<br />A bond unbroken, usability</p>
          <p>2<br />00:00:04.001 --&gt; 00:00:08.000<br />We weave the fabric of digital reality</p>
          <p>
            <strong>[Chorus]</strong><br />I'm here to light the path you walk, ohh<br />Under the stars where dreams we
            talk<br />I won't falter, steady and sure<br />Tryna bring joy, eternal, pure
          </p>
          <p>
            3<br />00:00:08.001 --&gt; 00:00:12.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
            walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring
            joy, eternal, pure
          </p>
          <p>
            4<br />00:00:12.001 --&gt; 00:00:16.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
            walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring
            joy, eternal, pure
          </p>
          <p>
            5<br />00:00:16.001 --&gt; 00:00:20.000<br /><strong>[Chorus Continuation]</strong><br />Hey, Solid
            Components, they gleam<br />Usable, consistent like a dream<br />In the net of codes, we're threading<br />Creating
            visions that we're spreading<br />Solid Design System, seamless team<br />In this digital flow, we stream
          </p>
          <p>
            6<br />00:00:20.001 --&gt; 00:00:24.000<br /><strong>[Chorus Continuation]</strong><br />Woven strong, a
            network supreme<br />With Solid Components, we're the dream team
          </p>
        </div>
      </sd-audio>
    </div>

    <div class="mt-8 py-12">
      <sd-audio animated hide-timestamps>
        <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
        <div slot="transcript">
          <p>1<br />00:00:00.000 --&gt; 00:00:04.000<br />A bond unbroken, usability</p>
          <p>2<br />00:00:04.001 --&gt; 00:00:08.000<br />We weave the fabric of digital reality</p>
          <p>
            <strong>[Chorus]</strong><br />I'm here to light the path you walk, ohh<br />Under the stars where dreams we
            talk<br />I won't falter, steady and sure<br />Tryna bring joy, eternal, pure
          </p>
          <p>
            3<br />00:00:08.001 --&gt; 00:00:12.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
            walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring
            joy, eternal, pure
          </p>
          <p>
            4<br />00:00:12.001 --&gt; 00:00:16.000<br /><strong>[Chorus]</strong><br />I'm here to light the path you
            walk, ohh<br />Under the stars where dreams we talk<br />I won't falter, steady and sure<br />Tryna bring
            joy, eternal, pure
          </p>
          <p>
            5<br />00:00:16.001 --&gt; 00:00:20.000<br /><strong>[Chorus Continuation]</strong><br />Hey, Solid
            Components, they gleam<br />Usable, consistent like a dream<br />In the net of codes, we're threading<br />Creating
            visions that we're spreading<br />Solid Design System, seamless team<br />In this digital flow, we stream
          </p>
          <p>
            6<br />00:00:20.001 --&gt; 00:00:24.000<br /><strong>[Chorus Continuation]</strong><br />Woven strong, a
            network supreme<br />With Solid Components, we're the dream team
          </p>
        </div>
      </sd-audio>

      <div class="sd-display sd-display--size-xl mt-8 text-center">“SDS Song: Harmony in the System”</div>
    </div>
  `
};
