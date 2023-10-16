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
      <img
        slot="poster"
        alt="poster"
        src="https://www.blender.org/wp-content/uploads/2020/10/robin-tran-redautumnforest_pr1.jpg" />
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

  it('renders slot elements correctly', () => {
    // Query for the default slot content
    const defaultSlotContent = el.shadowRoot!.querySelector('slot')?.assignedNodes();

    // Assert that default slot content exists
    expect(defaultSlotContent).to.exist;
    expect(el.querySelector('video')).to.exist;

    expect(el.shadowRoot!.querySelector('slot[name=play-icon]')).to.exist;
    expect(el.querySelector('sd-icon')).to.exist;

    expect(el.shadowRoot!.querySelector('slot[name=poster]')).to.exist;
    expect(el.querySelector('img')).to.exist;
  });

  describe('when "play-icon" is clicked', () => {
    it('emits "sd-play" event ', () => {
      const playSpy = sinon.spy();
      el.addEventListener('sd-play', playSpy);
      el.shadowRoot?.querySelector('button')?.click();
      expect(playSpy.calledOnce).to.be.true;
    });

    it('toggles playing property', () => {
      el.shadowRoot?.querySelector('button')?.click();
      expect(el.playing).to.be.true;
    });

    it('updates overlay class', async () => {
      el.overlay = true;
      await el.updateComplete;
      expect(el.shadowRoot!.querySelector('#overlay.opacity-100')).to.exist;

      el.playing = true;
      await el.updateComplete;
      expect(el.shadowRoot!.querySelector('#overlay.opacity-0')).to.exist;
    });
  });

  it('removes poster on play', async () => {
    expect(el.querySelector('img')).to.exist;

    el.shadowRoot?.querySelector('button')?.click();
    await el.updateComplete;

    setTimeout(() => {
      expect(el.querySelector('img')).to.not.exist;
    }, 300);
  });

  it('updates CSS classes based on overlay and playing properties', async () => {
    const overlayDiv = el.shadowRoot!.querySelector('#overlay');

    el.overlay = true;
    await el.updateComplete;
    expect(overlayDiv!.classList.contains('opacity-100')).to.be.true;

    el.playing = true;
    await el.updateComplete;
    expect(overlayDiv!.classList.contains('opacity-0')).to.be.true;
  });
});
