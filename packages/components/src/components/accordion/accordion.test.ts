// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdAccordion from './accordion';

describe('<sd-accordion>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when calling show()', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(content.hidden).to.be.false;
  });

  it('should emit sd-hide and sd-after-hide when calling hide()', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(content.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when setting open = true', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(content.hidden).to.be.false;
  });

  it('should emit sd-hide and sd-after-hide when setting open = false', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(content.hidden).to.be.true;
  });

  it('should not open when preventing sd-show', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    const showHandler = sinon.spy((event: CustomEvent) => event.preventDefault());

    el.addEventListener('sd-show', showHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(el.open).to.be.false;
  });

  it('should not close when preventing sd-hide', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    const hideHandler = sinon.spy((event: CustomEvent) => event.preventDefault());

    el.addEventListener('sd-hide', hideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(el.open).to.be.true;
  });

  it('should toggle accordion when Enter key is pressed on the summary', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    const summary = el.shadowRoot!.querySelector<HTMLElement>('[part~="header"]')!;
    const showHandler = sinon.spy();
    const hideHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-hide', hideHandler);

    // Simulate Enter key press
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    summary.dispatchEvent(enterEvent);

    await waitUntil(() => showHandler.calledOnce || hideHandler.calledOnce);

    expect(showHandler.calledOnce).to.be.true;
    expect(hideHandler.calledOnce).to.be.false;
    expect(el.open).to.be.true;
  });

  it('should toggle accordion when Spacebar key is pressed on the summary', async () => {
    const el = await fixture<SdAccordion>(html`
      <sd-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-accordion>
    `);
    await waitUntil(() => el?.shadowRoot?.querySelector('[part~="content"]'));

    const summary = el.shadowRoot!.querySelector<HTMLElement>('[part~="header"]')!;
    const showHandler = sinon.spy();
    const hideHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-hide', hideHandler);

    // Simulate Spacebar key press
    const spacebarEvent = new KeyboardEvent('keydown', { key: ' ' });
    summary.dispatchEvent(spacebarEvent);

    await waitUntil(() => showHandler.calledOnce || hideHandler.calledOnce);

    expect(showHandler.calledOnce).to.be.true;
    expect(hideHandler.calledOnce).to.be.false;
    expect(el.open).to.be.true;
  });
});
