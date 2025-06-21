import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-menu>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-menu></sd-menu> `);

    expect(el).to.exist;
  });
});
