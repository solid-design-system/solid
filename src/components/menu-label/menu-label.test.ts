import { expect, fixture, html } from '@open-wc/testing';
import type SdMenuLabel from './menu-label';

describe('<sd-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<SdMenuLabel>(html` <sd-menu-label>Test</sd-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
