import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdNavigationItem from './navigation-item';

const childrenSlot = html`<div slot="children">Children</div>`;

describe('<sd-navigation-item>', () => {
  it('renders a component', async () => {
    const el = await fixture<SdNavigationItem>(html` <sd-navigation-item></sd-navigation-item> `);

    expect(el).to.exist;
  });

  // Test rendering of different element types
  it('only renders a button element by default', async () => {
    const el = await fixture<SdNavigationItem>(html`<sd-navigation-item></sd-navigation-item>`);

    expect(el.shadowRoot!.querySelector('a')).to.not.exist;
    expect(el.shadowRoot!.querySelector('button')).to.exist;
    expect(el.shadowRoot!.querySelector('summary')).to.not.exist;
    expect(el.shadowRoot!.querySelector('details')).to.not.exist;
  });

  it('only renders an anchor element when "href" property is provided, regardless of children', async () => {
    const el = await fixture<SdNavigationItem>(html`<sd-navigation-item href="#">${childrenSlot}</sd-navigation-item>`);
    expect(el.shadowRoot!.querySelector('a')).to.exist;
    expect(el.shadowRoot!.querySelector('button')).to.not.exist;
    expect(el.shadowRoot!.querySelector('summary')).to.not.exist;
    expect(el.shadowRoot!.querySelector('details')).to.not.exist;
  });

  it('only renders a details element when the "children" slot is used and no "href" property is provided', async () => {
    const el = await fixture<SdNavigationItem>(html`<sd-navigation-item>${childrenSlot}</sd-navigation-item>`);
    expect(el.shadowRoot!.querySelector('a')).to.not.exist;
    expect(el.shadowRoot!.querySelector('button')).to.not.exist;
    expect(el.shadowRoot!.querySelector('summary')).to.exist;
    expect(el.shadowRoot!.querySelector('details')).to.exist;
  });

  // Test events
  it('emits "sd-click" event when clicking the button variant', async () => {
    const el = await fixture<SdNavigationItem>(html`<sd-navigation-item></sd-navigation-item>`);
    const button = el.shadowRoot!.querySelector('button');
    const clickSpy = sinon.spy();

    el.addEventListener('sd-click', clickSpy);

    button!.click();

    await waitUntil(() => clickSpy.calledOnce);

    expect(clickSpy).to.have.been.calledOnce;
  });

  it('emits "sd-toggle-details" event with "open" property set to true in event.detail when clicking the closed summary variant', async () => {
    const el = await fixture<SdNavigationItem>(html`<sd-navigation-item>${childrenSlot}</sd-navigation-item>`);
    const details = el.shadowRoot!.querySelector('details');
    const summary = el.shadowRoot!.querySelector('summary');
    const toggleHandler = sinon.spy();

    el.addEventListener('sd-toggle-details', toggleHandler);

    summary!.click();

    await waitUntil(() => toggleHandler.calledOnce);

    expect(toggleHandler).to.have.been.calledOnce;
    expect(toggleHandler).to.have.been.calledWith(sinon.match.has('detail', sinon.match.has('open', true)));
    expect(details).to.have.attribute('open');
  });

  it('emits "sd-toggle-details" event with "open" property set to false in event.detail when clicking the open summary variant', async () => {
    const el = await fixture<SdNavigationItem>(html`<sd-navigation-item open>${childrenSlot}</sd-navigation-item>`);
    const details = el.shadowRoot!.querySelector('details');
    const summary = el.shadowRoot!.querySelector('summary');
    const toggleHandler = sinon.spy();

    el.addEventListener('sd-toggle-details', toggleHandler);

    summary!.click();

    await waitUntil(() => toggleHandler.calledOnce);

    expect(toggleHandler).to.have.been.calledOnce;
    expect(toggleHandler).to.have.been.calledWith(sinon.match.has('detail', sinon.match.has('open', false)));
    expect(details).to.not.have.attribute('open');
  });

  // it('adds "aria-disabled" attribute when "disabled" property is true', async () => {
  //   const el = await fixture<SdNavigationItem>(html`<sd-navigation-item disabled>Button</sd-navigation-item>`);
  //   expect(el.getAttribute('aria-disabled')).to.equal('true');
  // });

  // it('sets "aria-current" attribute when "current" property is true', async () => {
  //   const el = await fixture<SdNavigationItem>(html`<sd-navigation-item current>Button</sd-navigation-item>`);
  //   expect(el.getAttribute('aria-current')).to.equal('page');
  // });

  // it('applies appropriate "role" attribute based on element type', async () => {
  //   const buttonEl = await fixture<SdNavigationItem>(html`<sd-navigation-item>Button</sd-navigation-item>`);
  //   const linkEl = await fixture<SdNavigationItem>(html`<sd-navigation-item href="#">Link</sd-navigation-item>`);
  //   const summaryEl = await fixture<SdNavigationItem>(html`<sd-navigation-item><summary>Summary</summary></sd-navigation-item>`);

  //   expect(buttonEl.getAttribute('role')).to.equal('button');
  //   expect(linkEl.getAttribute('role')).to.equal('link');
  //   expect(summaryEl.getAttribute('role')).to.equal('button');
  // });
});
