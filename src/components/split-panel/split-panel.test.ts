import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-split-panel>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-split-panel></sd-split-panel> `);

    expect(el).to.exist;
  });
});
