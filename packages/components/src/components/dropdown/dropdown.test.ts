import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdDropdown from './dropdown';

describe('<sd-dropdown>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown open>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
          <sd-menu-item>Item 2</sd-menu-item>
          <sd-menu-item>Item 3</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;

    expect(panel.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
          <sd-menu-item>Item 2</sd-menu-item>
          <sd-menu-item>Item 3</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;

    expect(panel.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when calling show()', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
          <sd-menu-item>Item 2</sd-menu-item>
          <sd-menu-item>Item 3</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit sd-hide and sd-after-hide when calling hide()', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown open>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
          <sd-menu-item>Item 2</sd-menu-item>
          <sd-menu-item>Item 3</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when setting open = true', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
          <sd-menu-item>Item 2</sd-menu-item>
          <sd-menu-item>Item 3</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit sd-hide and sd-after-hide when setting open = false', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown open>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
          <sd-menu-item>Item 2</sd-menu-item>
          <sd-menu-item>Item 3</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  /**
   * TODO: Re-enable this test once sd-menu and sd-menu-item are implemented
   */

  // it('should still open on arrow navigation when no menu items', async () => {
  //   const el = await fixture<SdDropdown>(html`
  //     <sd-dropdown>
  //       <sd-button slot="trigger" caret>Toggle</sd-button>
  //       <sd-menu> </sd-menu>
  //     </sd-dropdown>
  //   `);
  //   const trigger = el.querySelector('sd-button')!;

  //   trigger.focus();
  //   await sendKeys({ press: 'ArrowDown' });
  //   await el.updateComplete;

  //   expect(el.open).to.be.true;
  // });

  // it('should open on arrow navigation', async () => {
  //   const el = await fixture<SdDropdown>(html`
  //     <sd-dropdown>
  //       <sd-button slot="trigger" caret>Toggle</sd-button>
  //       <sd-menu>
  //         <sd-menu-item>Item 1</sd-menu-item>
  //         <sd-menu-item>Item 2</sd-menu-item>
  //       </sd-menu>
  //     </sd-dropdown>
  //   `);
  //   const trigger = el.querySelector('sd-button')!;

  //   trigger.focus();
  //   await sendKeys({ press: 'ArrowDown' });
  //   await el.updateComplete;

  //   expect(el.open).to.be.true;
  // });

  it('should close on escape key', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown open>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
          <sd-menu-item>Item 2</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const trigger = el.querySelector('sd-button')!;

    trigger.focus();
    await sendKeys({ press: 'Escape' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should not open on arrow navigation when no menu exists', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <div>Some custom content</div>
      </sd-dropdown>
    `);
    const trigger = el.querySelector('sd-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should open on enter key', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const trigger = el.querySelector('sd-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should open on enter key when no menu exists', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <div>Some custom content</div>
      </sd-dropdown>
    `);
    const trigger = el.querySelector('sd-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should hide when clicked outside container and initially open', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown open>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);

    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should hide when clicked outside container', async () => {
    const el = await fixture<SdDropdown>(html`
      <sd-dropdown>
        <sd-button slot="trigger" caret>Toggle</sd-button>
        <sd-menu>
          <sd-menu-item>Item 1</sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    `);
    const trigger = el.querySelector('sd-button')!;

    trigger.click();
    await el.updateComplete;
    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  // Handle tabbing for Safari and other Browsers, see https://github.com/microsoft/playwright/issues/2114#issuecomment-1517642401
  const tabKey =
    navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('HeadlessChrome') ? 'Alt+Tab' : 'Tab';

  /**
   * DEV NOTE: These test would expect "Full Keyboard Access" to be activated on macOS to work in Firefox.
   * As this can't be guaranteed, we skip these tests for Firefox.
   */
  if (!navigator.userAgent.includes('Firefox')) {
    it('should focus focusable content when doing a tab after opening', async () => {
      const el = await fixture<SdDropdown>(html`
        <sd-dropdown>
          <sd-button slot="trigger" caret>Toggle</sd-button>
          <a href="#">Link 1</a>
        </sd-dropdown>
      `);
      const trigger = el.querySelector('sd-button')!;
      const link = el.querySelector('a')!;

      trigger.focus();
      await el.updateComplete;
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;
      await sendKeys({ press: tabKey });

      expect(link).to.be.equal(document.activeElement);
    });

    it('should focus element outside of dropdown if last focusable element inside dropdown was left', async () => {
      const el = await fixture<SdDropdown>(html`
        <sd-dropdown>
          <sd-button slot="trigger" caret>Toggle</sd-button>
          <a href="#">Link 1</a>
        </sd-dropdown>
        <a id="link" href="#">Link 1</a>
      `);
      const trigger = el.querySelector('sd-button')!;
      const link = document.querySelector('#link')!;

      trigger.focus();
      await el.updateComplete;
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;
      await sendKeys({ press: tabKey });
      await sendKeys({ press: tabKey });

      await el.updateComplete;
      expect(el.open).to.be.false;
      expect(link).to.be.equal(document.activeElement);
    });

    it('should close dropdown if last focusable element inside dropdown was left', async () => {
      const el = await fixture<SdDropdown>(html`
        <sd-dropdown>
          <sd-button slot="trigger" caret>Toggle</sd-button>
          <a href="#">Link 1</a>
        </sd-dropdown>
        <a id="link" href="#">Link 1</a>
      `);
      const trigger = el.querySelector('sd-button')!;
      const link = document.querySelector('#link')!;

      trigger.focus();
      await el.updateComplete;
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;
      await sendKeys({ press: tabKey });
      await sendKeys({ press: tabKey });

      await el.updateComplete;
      expect(el.open).to.be.false;
      expect(link).to.be.equal(document.activeElement);
    });
  }

  /**
   * TODO: Re-enable this test once sd-menu and sd-menu-item are implemented
   */

  // it('should close and stop propagating the keydown event when Escape is pressed and the dropdown is open ', async () => {
  //   const el = await fixture<SdDropdown>(html`
  //     <sd-dropdown open>
  //       <sd-button slot="trigger" caret>Toggle</sd-button>
  //       <sd-menu>
  //         <sd-menu-item>Dropdown Item 1</sd-menu-item>
  //         <sd-menu-item>Dropdown Item 2</sd-menu-item>
  //         <sd-menu-item>Dropdown Item 3</sd-menu-item>
  //       </sd-menu>
  //     </sd-dropdown>
  //   `);
  //   const firstMenuItem = el.querySelector('sd-menu-item')!;
  //   const hideHandler = sinon.spy();

  //   document.body.addEventListener('keydown', hideHandler);
  //   firstMenuItem.focus();
  //   await sendKeys({ press: 'Escape' });
  //   await el.updateComplete;

  //   expect(el.open).to.be.false;
  //   expect(hideHandler).to.not.have.been.called;
  // });
});
