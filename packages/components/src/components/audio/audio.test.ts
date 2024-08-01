import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdAudio from './audio';

describe('<sd-audio>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-audio></sd-audio> `);

    expect(el).to.exist;
  });

  it('should emit sd-playback-start and sd-playback-end events when play and pause buttons are clicked', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio>
        <audio slot="default" src="test-audio.mp3"></audio>
      </sd-audio>
    `);

    await el.updateComplete;

    const playButton = el.shadowRoot!.querySelector<HTMLButtonElement>('[part="play-button"]')!;
    const slotElement = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="default"]')!;
    const assignedElements = slotElement.assignedElements();
    const audioElement = assignedElements.length > 0 ? (assignedElements[0] as HTMLAudioElement) : null;

    expect(audioElement).to.exist;

    const playbackStartSpy = sinon.spy();
    const playbackEndSpy = sinon.spy();
    el.addEventListener('sd-playback-start', playbackStartSpy);
    el.addEventListener('sd-playback-end', playbackEndSpy);

    // Mock play and pause methods
    const mockPlay = sinon.stub(audioElement!, 'play').callsFake(async () => {
      el.isPlaying = true;
      audioElement!.dispatchEvent(new Event('play'));
      return Promise.resolve();
    });
    const mockPause = sinon.stub(audioElement!, 'pause').callsFake(() => {
      el.isPlaying = false;
      audioElement!.dispatchEvent(new Event('pause'));
    });

    playButton.click();
    await waitUntil(() => playbackStartSpy.calledOnce, 'sd-playback-start should be emitted', { timeout: 2000 });
    expect(playbackStartSpy.calledOnce).to.be.true;

    audioElement!.dispatchEvent(new Event('ended'));
    await waitUntil(() => playbackEndSpy.calledOnce, 'sd-playback-end should be emitted', { timeout: 2000 });
    expect(playbackEndSpy.calledOnce).to.be.true;

    mockPlay.restore();
    mockPause.restore();
  });

  it('should update the current time as audio plays', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio>
        <audio slot="default" src="test-audio.mp3"></audio>
      </sd-audio>
    `);

    await el.updateComplete;

    const slotElement = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="default"]')!;
    const assignedElements = slotElement.assignedElements();
    const audioElement = assignedElements.length > 0 ? (assignedElements[0] as HTMLAudioElement) : null;

    expect(audioElement).to.exist;

    sinon.stub(audioElement!, 'currentTime').get(() => 50);

    // dispatch a timeupdate event to simulate the audio playing
    audioElement!.dispatchEvent(new Event('timeupdate'));

    expect(el.currentTime).to.equal('0:50');
  });

  it('should emit sd-transcript-click event when transcript icon is clicked', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio>
        <audio src="test-audio.mp3"></audio>
        <div slot="transcript">Transcript</div>
      </sd-audio>
    `);

    await el.updateComplete;

    const transcriptIcon = el.shadowRoot!.querySelector('sd-icon[name="transcript"]')!;
    const spy = sinon.spy();
    el.addEventListener('sd-transcript-click', spy);

    (transcriptIcon as HTMLElement).click();

    expect(spy.calledOnce).to.be.true;
  });

  it('should handle volume slider changes', async () => {
    const el = await fixture<SdAudio>(html`
      <sd-audio>
        <audio slot="default" src="test-audio.mp3"></audio>
      </sd-audio>
    `);

    await el.updateComplete;

    const slotElement = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="default"]')!;
    const assignedElements = slotElement.assignedElements();
    const audioElement = assignedElements.length > 0 ? (assignedElements[0] as HTMLAudioElement) : null;

    expect(audioElement).to.exist;

    if (!audioElement) {
      throw new Error('Audio element is not assigned');
    }

    const volumeSlider = el.shadowRoot!.querySelector<HTMLInputElement>('.audio-player__volume-slider')!;

    expect(volumeSlider).to.exist;

    audioElement.volume = 1;

    volumeSlider.value = '50';
    volumeSlider.dispatchEvent(new Event('click'));

    // set a delay to allow the event to propagate
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(audioElement.volume).to.equal(0.5);
  });
});
