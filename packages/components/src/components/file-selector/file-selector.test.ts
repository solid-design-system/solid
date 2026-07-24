import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';

describe('<sd-file-selector>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-file-selector></sd-file-selector> `);

    expect(el).to.exist;
  });
});
