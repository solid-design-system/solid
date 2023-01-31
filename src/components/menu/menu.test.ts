import { clickOnElement } from '../../internal/test';
import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdMenu from './menu';
import type SdMenuItem from '../menu-item/menu-item';

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
    const selectHandler = sinon.spy((event: CustomEvent) => {
      const item = event.detail.item as SdMenuItem; // eslint-disable-line
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
    const selectHandler = sinon.spy((event: CustomEvent) => {
      const item = event.detail.item as SdMenuItem; // eslint-disable-line
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
});
