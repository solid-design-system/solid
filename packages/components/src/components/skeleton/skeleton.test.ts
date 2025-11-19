import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-skeleton>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-skeleton></sd-skeleton> `);

    expect(el).to.exist;
  });
});
