import { expect, fixture, html } from '@open-wc/testing';
import type SdSpinner from './spinner';

describe('<sd-spinner>', () => {
  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      const spinner = await fixture<SdSpinner>(html` <sd-spinner></sd-spinner> `);
      await expect(spinner).to.be.accessible();
    });

    it('should have a role of "status".', async () => {
      const spinner = await fixture<SdSpinner>(html` <sd-spinner></sd-spinner> `);
      const svg = spinner.shadowRoot!.querySelector('svg')!;
      expect(svg).have.attribute('role', 'progressbar');
    });
  });
});
