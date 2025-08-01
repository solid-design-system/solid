import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type SdScrollable from './scrollable';

describe('<sd-scrollable>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable>
        <div style="width: 200px; height: 200px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </sd-scrollable>
    `);
    await expect(el).to.be.accessible();
  });

  it('should render with default properties', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable>
        <div style="width: 200px; height: 200px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </sd-scrollable>
    `);

    expect(el.orientation).to.equal('horizontal');
    expect(el.buttons).to.be.false;
    expect(el.step).to.equal(150);
    expect(el.scrollbars).to.be.false;
    expect(el.shadows).to.be.false;
  });

  it('should show scroll button when buttons attribute is set', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" buttons>
        <div style="width: 200px; height: 80px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    `);

    const buttonEnd = el.shadowRoot!.querySelector<HTMLElement>('[part~="button-end"]')!;

    expect(buttonEnd).to.exist;
  });

  it('should show scroll shadow when shadow attribute is set', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" shadows>
        <div style="width: 200px; height: 80px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    `);

    const shadowRight = el.shadowRoot!.querySelector<HTMLElement>('[part~="shadow-right"]')!;

    expect(shadowRight).to.exist;
  });

  it('should emit button-right event when right button is clicked', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" buttons>
        <div style="width: 400px; height: 300px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    `);

    const buttonRight = el.shadowRoot!.querySelector<HTMLElement>('[part~="button-end"]')!;
    const buttonRightHandler = sinon.spy();

    el.addEventListener('button-right', buttonRightHandler);
    buttonRight.click();

    expect(buttonRightHandler).to.have.been.calledOnce;
  });

  it('should emit button-down event when bottom button is clicked', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" buttons orientation="vertical">
        <div style="width: 400px; height: 300px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    `);

    const buttonDown = el.shadowRoot!.querySelector<HTMLElement>('[part~="button-end"]')!;
    const buttonDownHandler = sinon.spy();

    el.addEventListener('button-down', buttonDownHandler);
    buttonDown.click();

    expect(buttonDownHandler).to.have.been.calledOnce;
  });

  it('should emit end and start events when scrolled to the edges', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;">
        <div style="width: 400px; height: 300px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    `);

    const scrollContainer = el.shadowRoot!.querySelector<HTMLElement>('.scroll-container')!;
    const endHandler = sinon.spy();
    const startHandler = sinon.spy();

    el.addEventListener('end', endHandler);
    el.addEventListener('start', startHandler);

    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    scrollContainer.dispatchEvent(new CustomEvent('scroll'));

    await el.updateComplete;

    scrollContainer.scrollLeft = 0;
    scrollContainer.dispatchEvent(new CustomEvent('scroll'));

    await el.updateComplete;

    expect(endHandler).to.have.been.calledOnce;
    expect(startHandler).to.have.been.calledOnce;
  });

  it('should apply inset padding when inset attribute is set', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" inset>
        <div style="width: 400px; height: 300px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    `);

    const scrollContainer = el.shadowRoot!.querySelector<HTMLElement>('.scroll-container')!;

    expect(scrollContainer.classList.contains('p-4')).to.be.true;
  });

  it('should scroll 120px each time the end button is clicked', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" buttons orientation="vertical" step="120">
        <div style="width: 400px; height: 800px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling.</p>
        </div>
      </sd-scrollable>
    `);

    const scrollContainer = el.shadowRoot!.querySelector<HTMLElement>('.scroll-container')!;
    const endButton = el.shadowRoot!.querySelector<HTMLElement>('[part~="button-end"]')!;
    const step = 120;

    expect(endButton).to.exist;

    const initialScrollTop = scrollContainer.scrollTop;

    endButton.click();
    await el.updateComplete;
    await new Promise(resolve => setTimeout(resolve, 500));

    expect(scrollContainer.scrollTop).to.equal(initialScrollTop + step);

    endButton.click();
    await el.updateComplete;
    await new Promise(resolve => setTimeout(resolve, 500));

    expect(scrollContainer.scrollTop).to.equal(initialScrollTop + step * 2);
  });

  it('should focus on the start button when end of scroll container is reached', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" buttons orientation="vertical" step="1000">
        <div style="width: 400px; height: 800px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling.</p>
        </div>
      </sd-scrollable>
    `);

    const endButton: HTMLButtonElement = el.shadowRoot!.querySelector('[part="button-end"]')!;
    endButton.click();
    await el.updateComplete;
    await new Promise(resolve => requestAnimationFrame(resolve));

    const startButton: HTMLButtonElement = el.shadowRoot!.querySelector('[part="button-start"]')!;
    expect(el.shadowRoot!.activeElement).to.equal(startButton);
  });

  it('should announce the scrolling action', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" buttons orientation="vertical" step="120">
        <div style="width: 400px; height: 800px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling.</p>
        </div>
      </sd-scrollable>
    `);

    const endButton = el.shadowRoot!.querySelector<HTMLButtonElement>('[part="button-end"]');
    const liveRegion = el.shadowRoot!.querySelector<HTMLButtonElement>('#announcement-container');

    expect(endButton).to.exist;
    expect(liveRegion!.innerText).to.eq('');

    endButton?.click();
    await el.updateComplete;

    expect(liveRegion!.innerText).to.eq('Scrolled');
  });
});
