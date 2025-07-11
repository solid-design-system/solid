import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import type SdLoader from './loader';

describe('<sd-loader>', () => {
  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      const loader = await fixture<SdLoader>(html` <sd-loader></sd-loader> `);
      await expect(loader).to.be.accessible();
    });

    it('should have a role of "progressbar".', async () => {
      const loader = await fixture<SdLoader>(html` <sd-loader></sd-loader> `);
      const svg = loader.shadowRoot!.querySelector('svg')!;
      expect(svg).have.attribute('role', 'progressbar');
    });
  });
});
