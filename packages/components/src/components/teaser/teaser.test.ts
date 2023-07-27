import { expect, fixture, html } from '@open-wc/testing';
import type SdTeaser from './teaser';

describe('<sd-teaser>', () => {
  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      const teaser = await fixture<SdTeaser>(html` <sd-teaser></sd-teaser> `);
      expect(teaser).to.exist;
    });
  });
  // Tests will follow...
});
