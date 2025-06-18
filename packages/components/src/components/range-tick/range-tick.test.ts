import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-range-tick>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-range-tick></sd-range-tick> `);

    expect(el).to.exist;
  });
});
