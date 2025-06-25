import '../../../dist/solid-components';
import { clickOnElement } from '../../internal/test.js';
import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type { SdMenu, SdMenuItem } from 'src/solid-components';

describe('<sd-menu>', () => {
  it('emits sd-select with the correct event detail when clicking an item', async () => {
    const menu = await fixture<SdMenu>(html`
      <sd-menu>
        <sd-menu-item value="item-1">Item 1</sd-menu-item>
        <sd-menu-item value="item-2">Item 2</sd-menu-item>
        <sd-menu-item value="item-3">Item 3</sd-menu-item>
        <sd-menu-item value="item-4">Item 4</sd-menu-item>
      </sd-menu>
    `);
    const item2 = menu.querySelectorAll('sd-menu-item')[1];
    const selectHandler = sinon.spy((event: CustomEvent<{ item: SdMenuItem }>) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect event detail emitted with sd-select');
      }
    });

    menu.addEventListener('sd-select', selectHandler);
    await clickOnElement(item2);

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('can be selected via keyboard', async () => {
    const menu = await fixture<SdMenu>(html`
      <sd-menu>
        <sd-menu-item value="item-1">Item 1</sd-menu-item>
        <sd-menu-item value="item-2">Item 2</sd-menu-item>
        <sd-menu-item value="item-3">Item 3</sd-menu-item>
        <sd-menu-item value="item-4">Item 4</sd-menu-item>
      </sd-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('sd-menu-item');
    const selectHandler = sinon.spy((event: CustomEvent<{ item: SdMenuItem }>) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect item selected');
      }
    });

    menu.addEventListener('sd-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await sendKeys({ press: 'Enter' });

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('does not select disabled items when clicking', async () => {
    const menu = await fixture<SdMenu>(html`
      <sd-menu>
        <sd-menu-item value="item-1">Item 1</sd-menu-item>
        <sd-menu-item value="item-2" disabled>Item 2</sd-menu-item>
        <sd-menu-item value="item-3">Item 3</sd-menu-item>
        <sd-menu-item value="item-4">Item 4</sd-menu-item>
      </sd-menu>
    `);
    const item2 = menu.querySelectorAll('sd-menu-item')[1];
    const selectHandler = sinon.spy();

    menu.addEventListener('sd-select', selectHandler);

    await clickOnElement(item2);

    expect(selectHandler).to.not.have.been.calledOnce;
  });

  it('does not select disabled items when pressing enter', async () => {
    const menu = await fixture<SdMenu>(html`
      <sd-menu>
        <sd-menu-item value="item-1">Item 1</sd-menu-item>
        <sd-menu-item value="item-2" disabled>Item 2</sd-menu-item>
        <sd-menu-item value="item-3">Item 3</sd-menu-item>
        <sd-menu-item value="item-4">Item 4</sd-menu-item>
      </sd-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('sd-menu-item');
    const selectHandler = sinon.spy();

    menu.addEventListener('sd-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    expect(document.activeElement).to.equal(item2);
    await sendKeys({ press: 'Enter' });
    await item2.updateComplete;

    expect(selectHandler).to.not.have.been.called;
  });

  it('Should fire "sd-select" when clicking an element within a menu-item', async () => {
    // eslint-disable-next-line
    const selectHandler = sinon.spy(() => {});

    const menu: SdMenu = await fixture(html`
      <sd-menu>
        <sd-menu-item>
          <span>Menu item</span>
        </sd-menu-item>
      </sd-menu>
    `);

    menu.addEventListener('sd-select', selectHandler);
    const span = menu.querySelector('span')!;
    await clickOnElement(span);

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('Should be able to check a checkbox menu item in a submenu', async () => {
    const menu: SdMenu = await fixture(html`
      <sd-menu style="max-width: 200px;">
        <sd-menu-item>
          <span>Menu item</span>
          <sd-menu slot="submenu">
            <sd-menu-item type="checkbox" checked>Checkbox</sd-menu-item>
          </sd-menu>
        </sd-menu-item>
      </sd-menu>
    `);

    const menuItem = menu.querySelector<SdMenuItem>('sd-menu-item')!;
    const checkbox = menu.querySelector<SdMenuItem>("[type='checkbox']")!;

    expect(checkbox.checked).to.equal(true);
    await clickOnElement(menuItem);
    await sendKeys({ press: 'ArrowRight' });
    await clickOnElement(checkbox);
    await checkbox.updateComplete;
    expect(checkbox.checked).to.equal(false);
  });
});
