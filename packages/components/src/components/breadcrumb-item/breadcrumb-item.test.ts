import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-breadcrumb-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-breadcrumb-item></sd-breadcrumb-item> `);

    expect(el).to.exist;
  });
});
