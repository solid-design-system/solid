import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-mutation-observer></sd-mutation-observer> `);

    expect(el).to.exist;
  });
});
