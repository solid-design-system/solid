import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type SdAudio from './audio';

describe('<sd-audio>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-audio></sd-audio> `);

    expect(el).to.exist;
  });

  it('should emit sd-playback-start event when play buttons is clicked', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio>
        <audio slot="default" src="test-audio.mp3"></audio>
      </sd-audio>
    `);

    await el.updateComplete;

    const playButton = el.shadowRoot!.querySelector('[part="play-button"]')!;
    const spy = sinon.spy();
    el.addEventListener('sd-playback-start', spy);

    (playButton as HTMLElement).click();

    expect(spy.calledOnce).to.be.true;
  });

  it('should emit sd-playback-mute event when mute button is clicked', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio>
        <audio slot="default" src="test-audio.mp3"></audio>
      </sd-audio>
    `);

    await el.updateComplete;

    const muteButton = el.shadowRoot!.querySelector('[part="volume"]')!;
    const spy = sinon.spy();
    el.addEventListener('sd-playback-mute', spy);

    (muteButton as HTMLElement).click();

    expect(spy.calledOnce).to.be.true;
  });

  it('should hide the timestamps when the attribute is set', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio hide-timestamps>
        <audio slot="default" src="test-audio.mp3"></audio>
      </sd-audio>
    `);

    await el.updateComplete;

    expect(el.shadowRoot!.querySelector('[part="timestamps"]')).to.be.null;
  });

  it('should render the canvas when the animated attribute is set', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio animated>
        <audio slot="default" src="test-audio.mp3"></audio>
      </sd-audio>
    `);

    await el.updateComplete;

    expect(el.shadowRoot!.querySelector('canvas')).to.exist;
  });

  it('should emit sd-transcript-click event when transcript button is clicked', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio>
        <audio src="test-audio.mp3"></audio>
        <div slot="transcript">Transcript</div>
      </sd-audio>
    `);

    await el.updateComplete;

    const transcriptButton = el.shadowRoot!.querySelector('[name="transcript"]')!;
    const spy = sinon.spy();
    el.addEventListener('sd-transcript-click', spy);

    (transcriptButton as HTMLElement).click();

    expect(spy.calledOnce).to.be.true;
  });
});
