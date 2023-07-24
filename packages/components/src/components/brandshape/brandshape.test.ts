import { expect, fixture, html } from '@open-wc/testing';
import type SdBrandshape from './brandshape';

describe('sd-brandshape', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-brandshape>Default Slot</sd-brandshape>`);

    expect(el).to.exist;
  });

  it('default values are set correctly', async () => {
    const el = await fixture<SdBrandshape>(html` <sd-brandshape>Default Slot</sd-brandshape> `);

    expect(el.variant).to.equal('primary');
    expect(el.form).to.equal('full');
  });

  it('should pass accessibility tests', async () => {
    const brandshape = await fixture<SdBrandshape>(html` <sd-brandshape>Default Slot</sd-brandshape> `);
    await expect(brandshape).to.be.accessible();
  });
});
