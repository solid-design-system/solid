import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-breadcrumb>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-breadcrumb></sd-breadcrumb> `);

    expect(el).to.exist;
  });
});
