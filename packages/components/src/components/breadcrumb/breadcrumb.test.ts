import '../../../dist/solid-components';
import { aTimeout, expect, fixture, html } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import type SdBreadcrumb from './breadcrumb';

describe('<sd-breadcrumb>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<SdBreadcrumb>(html`
      <sd-breadcrumb>
        <sd-breadcrumb-item href="#">Breadcrumb</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#">Breadcrumb</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#" current>Breadcrumb</sd-breadcrumb-item>
      </sd-breadcrumb>
    `);
    await expect(el).to.be.accessible();
  });

  it('should properly apply label attribute', async () => {
    const el = await fixture<SdBreadcrumb>(html` <sd-breadcrumb label="Lorem ipsum"></sd-breadcrumb> `);
    expect(el.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).to.equal('Lorem ipsum');
  });

  it('should truncate all items except last and second to last', async () => {
    // DEV-NOTE: Ignore resize observer loop error. This is happening due to setting the style="width: 10px;" on the breadcrumb.
    window.onerror = (message: string) => {
      if (message.includes('ResizeObserver loop')) return true;
      return false;
    };

    await setViewport({ width: 1025, height: 200 });
    const el = await fixture<SdBreadcrumb>(html`
      <sd-breadcrumb style="width: 10px;">
        <sd-breadcrumb-item href="#">Breadcrumb</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#" hidden>Breadcrumb</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#" current hidden>Breadcrumb</sd-breadcrumb-item>
      </sd-breadcrumb>
    `);

    const items = el.querySelectorAll('sd-breadcrumb-item');

    await el.updateComplete;
    await aTimeout(100);

    expect(items.item(0).hasAttribute('hidden')).to.be.true;
    expect(items.item(1).hasAttribute('hidden')).to.be.false;
    expect(items.item(2).hasAttribute('hidden')).to.be.false;
  });

  it('should have mobile view', async () => {
    await setViewport({ width: 1023, height: 200 });
    const el = await fixture<SdBreadcrumb>(html`
      <sd-breadcrumb style="width: 10px;">
        <sd-breadcrumb-item href="#">Breadcrumb</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#">Breadcrumb</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#" current>Breadcrumb</sd-breadcrumb-item>
      </sd-breadcrumb>
    `);

    await el.updateComplete;
    await aTimeout(0);

    const items = el.querySelectorAll('sd-breadcrumb-item');
    expect(getComputedStyle(items.item(0)).display).to.equal('none');
    expect(getComputedStyle(items.item(1)).display).to.equal('flex');
    expect(getComputedStyle(items.item(2)).display).to.equal('none');
  });
});
