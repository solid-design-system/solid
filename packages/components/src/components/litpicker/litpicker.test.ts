import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-litpicker>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-litpicker></sd-litpicker> `);

    expect(el).to.exist;
  });
});
