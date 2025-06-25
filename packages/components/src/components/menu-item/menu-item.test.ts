import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
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

  it('should pass accessibility tests when using a submenu', async () => {
    const el = await fixture<SdMenuItem>(html`
      <sd-menu>
        <sd-menu-item>
          Submenu
          <sd-menu slot="submenu">
            <sd-menu-item>Submenu Item 1</sd-menu-item>
            <sd-menu-item>Submenu Item 2</sd-menu-item>
          </sd-menu>
        </sd-menu-item>
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
    const el = await fixture<SdMenuItem>(html` <sd-menu-item disabled>Test</sd-menu-item> `);
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

  it('should not render a sd-popup if the slot="submenu" attribute is missing, but the slot should exist in the component and be hidden.', async () => {
    const menu = await fixture<SdMenuItem>(html`
      <sd-menu>
        <sd-menu-item>
          Item 1
          <sd-menu>
            <sd-menu-item> Nested Item 1 </sd-menu-item>
          </sd-menu>
        </sd-menu-item>
      </sd-menu>
    `);

    const menuItem: SdMenuItem = menu.querySelector('sd-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('sd-popup')).to.be.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.true;
  });

  it('should render an sd-popup if the slot="submenu" attribute is present', async () => {
    const menu = await fixture<SdMenuItem>(html`
      <sd-menu>
        <sd-menu-item id="test">
          Item 1
          <sd-menu slot="submenu">
            <sd-menu-item> Nested Item 1 </sd-menu-item>
          </sd-menu>
        </sd-menu-item>
      </sd-menu>
    `);

    const menuItem = menu.querySelector('sd-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('sd-popup')).to.be.not.null;
    const submenuSlot: SdMenuItem = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.false;
  });
});
