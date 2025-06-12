import '../../../dist/solid-components';
import { aTimeout, expect, fixture, html } from '@open-wc/testing';
import type SdBreadcrumbItem from './breadcrumb-item';

describe('<sd-breadcrumb-item>', () => {
  it('should have default attributes', async () => {
    const el = await fixture<SdBreadcrumbItem>(html` <sd-breadcrumb-item>Breadcrumb</sd-breadcrumb-item> `);
    const link = el.shadowRoot!.querySelector('sd-link')!;

    expect(el.role).to.equal('listitem');
    expect(link.href).to.equal('');
  });

  it('should pass down correct href', async () => {
    const el = await fixture<SdBreadcrumbItem>(html` <sd-breadcrumb-item href="#">Breadcrumb</sd-breadcrumb-item> `);
    const link = el.shadowRoot!.querySelector('sd-link')!;

    expect(link.href).to.equal('#');
  });

  it('should have current properties when applied', async () => {
    const el = await fixture<SdBreadcrumbItem>(html`
      <sd-breadcrumb-item href="#" current>Breadcrumb</sd-breadcrumb-item>
    `);
    const link = el.shadowRoot!.querySelector('sd-link')!;

    await aTimeout(100);
    expect(link.href).to.equal('');
    expect(link.shadowRoot!.querySelector('a')!.getAttribute('aria-current')).to.equal('page');
  });
});
