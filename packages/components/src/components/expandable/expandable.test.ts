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
    expect(el.shadowRoot!.querySelector<HTMLElement>('details')?.getAttribute('open')).to.equal('true');
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
    expect(el.shadowRoot!.querySelector<HTMLElement>('details')?.getAttribute('open')).to.equal('false');
  });

  it('should emit sd-show and sd-after-show when opened programmatically', async () => {
    const el = await fixture<SdExpandable>(html`
      <sd-expandable>
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
    await el.updateComplete;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(el.shadowRoot!.querySelector<HTMLElement>('details')?.getAttribute('open')).to.equal('true');
  });

  it('should emit sd-hide and sd-after-hide when closed programmatically', async () => {
    const el = await fixture<SdExpandable>(html`
      <sd-expandable open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-expandable>
    `);
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.open = false; // Programmatically close the expandable

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(el.shadowRoot!.querySelector<HTMLElement>('details')?.getAttribute('open')).to.equal('false');
  });

  it('should toggle open state when toggle button is clicked', async () => {
    const el = await fixture<SdExpandable>(html`
      <sd-expandable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </sd-expandable>
    `);
    const toggleButton = el.shadowRoot?.querySelector('button');
    toggleButton?.click(); // Simulate user clicking the toggle button

    expect(el.open).to.be.true;

    toggleButton?.click(); // Click again to close
    expect(el.open).to.be.false;
  });
});
