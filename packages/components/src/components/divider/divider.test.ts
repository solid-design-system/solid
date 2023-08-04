import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import type SdDivider from './divider';

describe('<sd-divider>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<SdDivider>(html` <sd-divider></sd-divider> `);
      await expect(el).to.be.accessible();
    });

    it('orientation defaults to horizontal', async () => {
      const el = await fixture<SdDivider>(html` <sd-divider></sd-divider> `);

      expect(el.getAttribute('orientation')).to.equal('horizontal');
    });

    it('inverted defaults to false', async () => {
      const el = await fixture<SdDivider>(html` <sd-divider></sd-divider> `);

      expect(el.inverted).to.be.false;
    });
  });

  describe('property change ', () => {
    it('orientation is updated', async () => {
      const el = await fixture<SdDivider>(html` <sd-divider></sd-divider> `);

      el.orientation = 'vertical';
      await elementUpdated(el);

      expect(el.getAttribute('orientation')).to.equal('vertical');
    });

    it('inverted is updated', async () => {
      const el = await fixture<SdDivider>(html` <sd-divider></sd-divider> `);

      el.inverted = true;

      await elementUpdated(el);

      expect(el.hasAttribute('inverted')).to.be.true;
    });
  });
});
