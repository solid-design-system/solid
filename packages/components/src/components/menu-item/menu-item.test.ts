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

  // it('should focus on first menuitem of submenu if ArrowRight is pressed on parent menuitem', async () => {
  //   const menu = await fixture<SdMenuItem>(html`
  //     <sd-menu>
  //       <sd-menu-item id="item-1">
  //         Submenu
  //         <sd-menu slot="submenu">
  //           <sd-menu-item value="submenu-item-1"> Nested Item 1 </sd-menu-item>
  //         </sd-menu>
  //       </sd-menu-item>
  //     </sd-menu>
  //   `);

  //   const selectHandler = sinon.spy((event: CustomEvent<{ item: SdMenuItem }>) => {
  //     const item = event.detail.item;
  //     expect(item.value).to.equal('submenu-item-1');
  //   });
  //   menu.addEventListener('sd-select', selectHandler);

  //   const submenu = menu.querySelector('sd-menu-item');
  //   submenu!.focus();
  //   await menu.updateComplete;
  //   await sendKeys({ press: 'ArrowRight' });
  //   await menu.updateComplete;
  //   await sendKeys({ press: 'Enter' });
  //   await menu.updateComplete;
  //   expect(selectHandler).to.have.been.calledOnce;
  // });

  // it('should focus on outer menu if ArrowRight is pressed on nested menuitem', async () => {
  //   const menu = await fixture<SdMenuItem>(html`
  //     <sd-menu>
  //       <sd-menu-item value="outer-item-1">
  //         Submenu
  //         <sd-menu slot="submenu">
  //           <sd-menu-item value="inner-item-1"> Nested Item 1 </sd-menu-item>
  //         </sd-menu>
  //       </sd-menu-item>
  //     </sd-menu>
  //   `);

  //   const focusHandler = sinon.spy((event: FocusEvent) => {
  //     expect((event.target as SdMenuItem | null)?.value).to.equal('outer-item-1');
  //     expect((event.relatedTarget as SdMenuItem | null)?.value).to.equal('inner-item-1');
  //   });

  //   const outerItem = menu.querySelector('sd-menu-item');
  //   outerItem!.focus();
  //   await menu.updateComplete;
  //   await sendKeys({ press: 'ArrowRight' });

  //   if (outerItem) {
  //     outerItem.addEventListener('focus', focusHandler);
  //   }
  //   await menu.updateComplete;
  //   await sendKeys({ press: 'ArrowLeft' });
  //   await menu.updateComplete;
  //   expect(focusHandler).to.have.been.calledOnce;
  // });
});
