import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type SdVideo from './video';

describe('<sd-video>', () => {
  let el: SdVideo;

  beforeEach(async () => {
    el = await fixture(html`<sd-video>
      <video controls>
        <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <sd-icon library="global-resources" name="system/start" slot="play-icon"></sd-icon
    ></sd-video>`);
  });

  it('should render a component', () => {
    expect(el).to.exist;
    expect(el.shadowRoot).to.exist;
  });

  it('initializes with default properties', () => {
    expect(el.playing).to.be.false;
    expect(el.overlay).to.be.false;
  });

  it('toggles playing property on play()', () => {
    el.playing = true;
    expect(el.playing).to.be.true;
  });

  it('emits "sd-play" event on play()', () => {
    const playSpy = sinon.spy();
    el.addEventListener('sd-play', playSpy);
    el.shadowRoot?.querySelector('button')?.click();
    expect(playSpy.calledOnce).to.be.true;
  });

  it('updates overlay class based on playing property', async () => {
    el.overlay = true;
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('#overlay.opacity-100')).to.exist;

    el.playing = true;
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('#overlay.opacity-0')).to.exist;
  });

  it('renders slot elements correctly', () => {
    expect(el.querySelector('video')).to.exist;
    expect(el.querySelector('sd-icon')).to.exist;
  });
});
