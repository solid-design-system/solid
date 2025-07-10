import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import type SdRangeTick from './range-tick';

describe('<sd-range-tick>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdRangeTick>(html` <sd-range-tick></sd-range-tick> `);
    await expect(el).to.be.accessible();
  });

  it('should have default values', async () => {
    const el = await fixture<SdRangeTick>(html` <sd-range-tick></sd-range-tick> `);
    expect(el.subtick).to.be.false;
  });
});
