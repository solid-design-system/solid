import { expect, fixture, html } from '@open-wc/testing';

// TODO: add audio player tests
describe('<sd-audio>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-audio></sd-audio> `);

    expect(el).to.exist;
  });
});
