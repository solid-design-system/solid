import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-selectrefactor>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-selectrefactor></sd-selectrefactor> `);

    expect(el).to.exist;
  });
});
