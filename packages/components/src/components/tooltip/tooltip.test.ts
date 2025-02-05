import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdPopup from '../popup/popup';
import type SdTooltip from './tooltip';

describe('<sd-tooltip>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip" open>
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip">
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when calling show()', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip">
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
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
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip" open>
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
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
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip">
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
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
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip" open>
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
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
    expect(document.activeElement).to.not.equal(el);
  });

  it('should hide the tooltip when tooltip is visible and disabled becomes true', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip" open>
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.disabled = true;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
    expect(document.activeElement).to.not.equal(el);
  });

  it('should show when open initially', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip" open>
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    await el.updateComplete;

    expect(body.hidden).to.be.false;
  });

  it('should not accept pointer events on the tooltip', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip" open>
        <sd-button>Hover Me</sd-button>
      </sd-tooltip>
    `);
    const popup = el.shadowRoot!.querySelector<SdPopup>('sd-popup')!;

    expect(getComputedStyle(popup.popup).pointerEvents).to.equal('none');
  });

  it('should toggle the tooltip when clicking the trigger', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip">
        <sd-button>Click Me</sd-button>
      </sd-tooltip>
    `);

    const button = el.querySelector('sd-button')!;
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    // tooltip starts hidden
    expect(body.hidden).to.be.true;

    button.click();
    await waitUntil(() => !body.hidden);

    // tooltip is visible after clicking the button
    expect(body.hidden).to.be.false;

    button.click();
    await waitUntil(() => body.hidden);

    // tooltip is hidden again after clicking the button a second time
    expect(body.hidden).to.be.true;
    expect(document.activeElement).to.not.equal(el);
  });

  it('removes whitespace nodes from the default slot', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip">
        <!-- -->
        <span>Content</span>
      </sd-tooltip>
    `);

    const defaultSlot = el.shadowRoot!.querySelector('slot:not([name])')!;
    const nodes = (defaultSlot as HTMLSlotElement).assignedNodes({ flatten: true }) as HTMLElement[];

    expect(nodes.length).to.equal(1);
  });

  it('should toggle the tooltip when focus the trigger', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip" trigger="focus">
        <sd-button>Click Me</sd-button>
      </sd-tooltip>
    `);

    const button = el.querySelector('sd-button')!;
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    // tooltip starts hidden
    expect(body.hidden).to.be.true;

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    button.focus();
    await waitUntil(() => !body.hidden);

    // tooltip is visible after clicking the button
    expect(body.hidden).to.be.false;

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    button.blur();
    await waitUntil(() => body.hidden);

    // tooltip is hidden again after clicking the button a second time
    expect(body.hidden).to.be.true;
    expect(document.activeElement).to.not.equal(el);
  });

  it('should close tooltip when clicking trigger if it was opened by focus', async () => {
    const el = await fixture<SdTooltip>(html`
      <sd-tooltip content="This is a tooltip" trigger="focus">
        <sd-button>Click Me</sd-button>
      </sd-tooltip>
    `);

    const button = el.querySelector('sd-button')!;
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    // tooltip starts hidden
    expect(body.hidden).to.be.true;

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    button.focus();
    await waitUntil(() => !body.hidden);

    // tooltip is visible after clicking the button
    expect(body.hidden).to.be.false;

    button.click();
    button.blur();
    await waitUntil(() => body.hidden);

    // tooltip is hidden again after clicking the button a second time
    expect(body.hidden).to.be.true;
    expect(document.activeElement).to.not.equal(el);
  });
});
