import { expect, fixture, html } from '@open-wc/testing';
import type SdBrandshape from './brandshape';

describe('<sd-brandshape>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdBrandshape>(
      html`<sd-brandshape><span style="color: white;">Default Slot</span></sd-brandshape>`
    );
    await expect(el).to.be.accessible();
  });

  it('should render a component', async () => {
    const el = await fixture(html`<sd-brandshape><span style="color: white;">Default Slot</span></sd-brandshape>`);
    expect(el).to.exist;
  });

  it('should set default values correctly', async () => {
    const el = await fixture<SdBrandshape>(
      html`<sd-brandshape><span style="color: white;">Default Slot</span></sd-brandshape>`
    );
    expect(el.variant).to.equal('primary');
    expect(el.shapes).to.deep.equal(['top', 'middle', 'bottom']);
  });
});
