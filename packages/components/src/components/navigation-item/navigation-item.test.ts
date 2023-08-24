import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-navigation-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-navigation-item></sd-navigation-item> `);

    expect(el).to.exist;
  });
});
