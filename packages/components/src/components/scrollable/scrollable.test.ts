import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type SdScrollable from './scrollable';

describe('<sd-scrollable>', () => {
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

  it('should emit end event when scrolled to the end', async () => {
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

    el.addEventListener('end', endHandler);
    scrollContainer.dispatchEvent(new CustomEvent('scroll', { detail: { scrollLeft: scrollContainer.scrollWidth } }));

    expect(endHandler).to.have.been.calledOnce;
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
});
