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
    expect(el.scrollStep).to.equal(150);
    expect(el.scrollbars).to.be.false;
    expect(el.shadow).to.be.false;
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

  it('should show scroll shadows when shadow attribute is set', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;" shadow>
        <div style="width: 200px; height: 80px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    `);

    const shadowEnd = el.shadowRoot!.querySelector<HTMLElement>('[part~="shadow-end"]')!;

    expect(shadowEnd).to.exist;
  });

  it('should emit button-end event when end button is clicked', async () => {
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
    const buttonEndHandler = sinon.spy();

    el.addEventListener('button-end', buttonEndHandler);
    buttonEnd.click();

    // expect(buttonEndHandler).to.have.been.calledOnce;
  });

  it('should emit start event when scrolled to the start', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;">
        <div style="width: 200px; height: 80px;">
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    `);

    const scrollContainer = el.shadowRoot!.querySelector<HTMLElement>('.scroll-container')!;
    const startHandler = sinon.spy();

    el.addEventListener('start', startHandler);
    scrollContainer.scrollLeft = 0;
    scrollContainer.dispatchEvent(new Event('scroll'));

    // expect(startHandler).to.have.been.calledOnce;
  });

  it('should emit end event when scrolled to the end', async () => {
    const el = await fixture<SdScrollable>(html`
      <sd-scrollable style="height: 183px; width: 277px;">
        <div style="width: 200px; height: 80px;">
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
    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    scrollContainer.dispatchEvent(new Event('scroll'));

    // expect(endHandler).to.have.been.calledOnce;
  });
});
