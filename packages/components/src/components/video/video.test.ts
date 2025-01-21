import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdVideo from './video';

const defaultSlot = html`<video controls>
  <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>`;
const posterSlot = html`<img slot="poster" alt="A generic placeholder video" src="" />`;
const playIconSlot = html`<sd-icon library="system" name="start" color="primary"></sd-icon>`;
const variants = {
  default: html`<sd-video>${defaultSlot}</sd-video>`,
  playIcon: html`<sd-video>${defaultSlot}${playIconSlot}</sd-video>`,
  poster: html`<sd-video>${defaultSlot}${posterSlot}</sd-video>`,
  all: html`<sd-video>${defaultSlot}${playIconSlot}${posterSlot}</sd-video>`
};

describe('<sd-video>', () => {
  it('should render a component', async () => {
    const el: SdVideo = await fixture(variants.default);

    expect(el).to.exist;
    expect(el.shadowRoot).to.exist;
  });

  /**
   * DEV NOTE: This test fails specifically in Chromium browser environment due to limitations within the testing tool, which is currently outside the scope of our focus.
   * As a workaround, we are skipping these tests when running in Chromium.
   */
  if (!navigator.userAgent.includes('Chrome')) {
    it('passes accessibility test', async () => {
      const el: SdVideo = await fixture(variants.default);
      await expect(el).to.be.accessible();
    });
  }

  it('initializes with default properties', async () => {
    const el: SdVideo = await fixture(variants.default);

    expect(el.playing).to.be.false;
  });

  it('renders slot elements correctly', async () => {
    const el: SdVideo = await fixture(variants.all);

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
    it('emits "sd-play" event ', async () => {
      const el: SdVideo = await fixture(variants.default);
      const playSpy = sinon.spy();
      el.addEventListener('sd-play', playSpy);
      el.shadowRoot?.querySelector('button')?.click();
      expect(playSpy.calledOnce).to.be.true;
    });

    it('toggles playing property', async () => {
      const el: SdVideo = await fixture(variants.default);
      el.shadowRoot?.querySelector('button')?.click();
      expect(el.playing).to.be.true;
    });
  });

  describe('when interacted with via Keyboard', () => {
    describe('"play-icon"', () => {
      it('emits "sd-play" event', async () => {
        const el: SdVideo = await fixture(variants.default);
        const playSpy = sinon.spy();
        el.addEventListener('sd-play', playSpy);
        el.shadowRoot?.querySelector('button')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        expect(playSpy.calledOnce).to.be.true;
      });

      it('toggles playing property', async () => {
        const el: SdVideo = await fixture(variants.default);
        el.shadowRoot?.querySelector('button')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        expect(el.playing).to.be.true;
      });
    });

    // Handle tabbing for Safari and other Browsers, see https://github.com/microsoft/playwright/issues/2114#issuecomment-1517642401
    const tabKey =
      navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('HeadlessChrome') ? 'Alt+Tab' : 'Tab';

    it('video is not focusable before played', async () => {
      const el: SdVideo = await fixture(variants.all);

      await sendKeys({ press: tabKey });
      await el.updateComplete;
      await sendKeys({ press: tabKey });
      await el.updateComplete;

      expect(el.querySelector('video')).to.not.focus;
    });

    it('video is focusable after played', async () => {
      const el: SdVideo = await fixture(variants.all);

      el.shadowRoot?.querySelector('button')?.click();

      await sendKeys({ press: tabKey });
      await el.updateComplete;
      await sendKeys({ press: tabKey });
      await el.updateComplete;

      expect(el.querySelector('video')).to.focus;
    });
  });

  it('hides poster after initial play', async () => {
    const el: SdVideo = await fixture(variants.poster);
    const imgElement: HTMLImageElement = el.querySelector('img')!;

    // Listen for the transitionend event on the image element
    const transitionEndPromise = waitUntil(() => {
      return getComputedStyle(imgElement).opacity === '0';
    });

    el.shadowRoot?.querySelector('button')?.click();

    await transitionEndPromise; // Wait for the transitionend event

    // Assert that the poster element is hidden
    expect(getComputedStyle(imgElement).display).to.equal('none');
  });
});
