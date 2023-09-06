import { expect, fixture, html } from '@open-wc/testing';
import type SdBadge from './badge';

const variants = ['default', 'success', 'error'];
const sizes = ['lg', 'md', 'sm'];

describe('<sd-badge>', () => {
  let el: SdBadge;

  describe('when provided no parameters', () => {
    it('should pass accessibility tests with a role of status on the base part.', async () => {
      el = await fixture<SdBadge>(html` <sd-badge>Badge</sd-badge> `);
      expect(el.shadowRoot!.querySelector('[part~="base"]')!.getAttribute('role')).to.eq('status');
      await expect(el).to.be.accessible();
    });

    it('should have the primary values set correctly', async () => {
      el = await fixture<SdBadge>(html` <sd-badge>Badge</sd-badge> `);
      expect(el.variant).to.equal('default');
      expect(el.size).to.equal('lg');
      expect(el.inverted).to.equal(false);
    });

    it('should render the child content provided', async () => {
      el = await fixture<SdBadge>(html` <sd-badge>Badge</sd-badge> `);
      expect(el.innerText).to.eq('Badge');
    });
  });

  variants.forEach(variant => {
    describe(`when passed a variant attribute ${variant}`, () => {
      it(`should be accessible when variant is "${variant}"`, async () => {
        el = await fixture<SdBadge>(html` <sd-badge variant="${variant}">Badge</sd-badge> `);
        await expect(el).to.be.accessible();
      });
    });
  });

  sizes.forEach(size => {
    describe(`when passed a size attribute ${size}`, () => {
      it(`should be accessible when size is "${size}"`, async () => {
        el = await fixture<SdBadge>(html` <sd-badge size="${size}">Badge</sd-badge> `);
        await expect(el).to.be.accessible();
      });
    });
  });
});
