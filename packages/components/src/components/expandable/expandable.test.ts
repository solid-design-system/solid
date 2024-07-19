import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdExpandable from './expandable';

describe('<sd-expandable>', () => {
  it('should be visible when the open attribute is set', async () => {
    const el = await fixture<SdExpandable>(html`
      <sd-expandable open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-expandable>
    `);

    expect(el.open).to.be.true;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SdExpandable>(html`
      <sd-expandable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-expandable>
    `);

    expect(el.open).to.be.false;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when opened programmatically', async () => {
    const el = await fixture<SdExpandable>(html`
      <sd-expandable open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-expandable>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.open = true; // Programmatically open the expandable

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!.hidden).to.be.false;
  });

  //   it('should emit sd-hide and sd-after-hide when closed programmatically', async () => {
  //     const el = await fixture(html`<sd-expandable open></sd-expandable>`);
  //     const hideHandler = sinon.spy();
  //     const afterHideHandler = sinon.spy();

  //     el.addEventListener('sd-hide', hideHandler);
  //     el.addEventListener('sd-after-hide', afterHideHandler);
  //     el.open = false; // Programmatically close the expandable

  //     await waitUntil(() => hideHandler.calledOnce);
  //     await waitUntil(() => afterHideHandler.calledOnce);

  //     expect(hideHandler).to.have.been.calledOnce;
  //     expect(afterHideHandler).to.have.been.calledOnce;
  //     expect(el.shadowRoot.querySelector('.content').hidden).to.be.true;
  //   });

  //   it('should toggle open state when toggle button is clicked', async () => {
  //     const el = await fixture(html`<sd-expandable></sd-expandable>`);
  //     const toggleButton = el.shadowRoot.querySelector('button');
  //     toggleButton.click(); // Simulate user clicking the toggle button

  //     expect(el.open).to.be.true;

  //     toggleButton.click(); // Click again to close
  //     expect(el.open).to.be.false;
  //   });

  //   it('should not open when preventing sd-show event', async () => {
  //     const el = await fixture(html`<sd-expandable></sd-expandable>`);
  //     el.addEventListener('sd-show', event => {
  //       event.preventDefault();
  //     });

  //     el.open = true; // Try to open it
  //     await el.updateComplete;

  //     expect(el.open).to.be.false; // Check if it's still not opened
  //   });

  //   it('should not close when preventing sd-hide event', async () => {
  //     const el = await fixture(html`<sd-expandable open></sd-expandable>`);
  //     el.addEventListener('sd-hide', event => {
  //       event.preventDefault();
  //     });

  //     el.open = false; // Try to close it
  //     await el.updateComplete;

  //     expect(el.open).to.be.true; // Check if it's still open
  //   });
});
