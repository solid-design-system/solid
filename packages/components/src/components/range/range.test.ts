import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-range>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-range></sd-range> `);

    expect(el).to.exist;
  });
});
