import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-datepicker>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-datepicker></sd-datepicker> `);

    expect(el).to.exist;
  });
});
