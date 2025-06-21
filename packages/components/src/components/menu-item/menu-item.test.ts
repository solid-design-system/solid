import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-menu-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-menu-item></sd-menu-item> `);

    expect(el).to.exist;
  });
});
