// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdDetails from './details';

describe('<sd-details>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SdDetails>(html`
      <sd-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SdDetails>(html`
      <sd-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when calling show()', async () => {
    const el = await fixture<SdDetails>(html`
      <sd-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit sd-hide and sd-after-hide when calling hide()', async () => {
    const el = await fixture<SdDetails>(html`
      <sd-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when setting open = true', async () => {
    const el = await fixture<SdDetails>(html`
      <sd-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit sd-hide and sd-after-hide when setting open = false', async () => {
    const el = await fixture<SdDetails>(html`
      <sd-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should not open when preventing sd-show', async () => {
    const el = await fixture<SdDetails>(html`
      <sd-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-details>
    `);
    const showHandler = sinon.spy((event: CustomEvent) => event.preventDefault());

    el.addEventListener('sd-show', showHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(el.open).to.be.false;
  });

  it('should not close when preventing sd-hide', async () => {
    const el = await fixture<SdDetails>(html`
      <sd-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-details>
    `);
    const hideHandler = sinon.spy((event: CustomEvent) => event.preventDefault());

    el.addEventListener('sd-hide', hideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(el.open).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<SdDetails>(html`
      <div>
        <sd-details>
          <div style="height: 200px;"></div>
        </sd-details>
        <sd-details>
          <div style="height: 400px;"></div>
        </sd-details>
      </div>
    `);
    const first = el.querySelectorAll('sd-details')[0];
    const second = el.querySelectorAll('sd-details')[1];
    const firstBody = first.shadowRoot!.querySelector('[part="body"]')!;
    const secondBody = second.shadowRoot!.querySelector('[part="body"]')!;

    await first.show();
    await second.show();

    expect(firstBody.clientHeight).to.equal(232); // 200 + 16px + 16px (vertical padding)
    expect(secondBody.clientHeight).to.equal(432); // 400 + 16px + 16px (vertical padding)
  });
});
