import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-animated-image>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-animated-image></sd-animated-image> `);

    expect(el).to.exist;
  });
});
