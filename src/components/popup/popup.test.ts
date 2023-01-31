import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-popup></sd-popup> `);

    expect(el).to.exist;
  });
});
