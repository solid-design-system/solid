import { expect, fixture, html } from '@open-wc/testing';
import type SdTeaser from './teaser';

describe('<sd-teaser>', () => {
  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      const teaser = await fixture<SdTeaser>(html` <sd-teaser></sd-teaser> `);
      expect(teaser).to.exist;
    });
  });

  describe('when provided orientation, variant, distribution ratio, and breakpoints', () => {
    it('should render with the correct orientation', async () => {
      const teaser = await fixture<SdTeaser>(html` <sd-teaser orientation="horizontal"></sd-teaser> `);
      expect(teaser.orientation).to.equal('horizontal');
    });

    it('should render with the correct variant', async () => {
      const teaser = await fixture<SdTeaser>(html` <sd-teaser variant="primary"></sd-teaser> `);
      expect(teaser.variant).to.equal('primary');
    });
  });
});
