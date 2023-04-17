import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdMenuItem from './menu-item';

describe('<sd-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdMenuItem>(html`
      <sd-menu>
        <sd-menu-item>Item 1</sd-menu-item>
        <sd-menu-item>Item 2</sd-menu-item>
        <sd-menu-item>Item 3</sd-menu-item>
        <sd-divider></sd-divider>
        <sd-menu-item type="checkbox" checked>Checked</sd-menu-item>
        <sd-menu-item type="checkbox">Unchecked</sd-menu-item>
      </sd-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<SdMenuItem>(html` <sd-menu-item>Test</sd-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<SdMenuItem>(html` <sd-menu-item>Test</sd-menu-item> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<SdMenuItem>(html` <sd-menu-item>Test</sd-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<SdMenuItem>(html` <sd-menu-item>Text</sd-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<SdMenuItem>(html`
      <sd-menu>
        <sd-menu-item inert>Item 1</sd-menu-item>
        <sd-menu-item>Item 2</sd-menu-item>
        <sd-menu-item>Item 3</sd-menu-item>
      </sd-menu>
    `);
    const item1 = menu.querySelector('sd-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });
});
