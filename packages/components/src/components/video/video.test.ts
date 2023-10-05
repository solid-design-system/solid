import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-video>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-video></sd-video> `);

    expect(el).to.exist;
  });
});
