/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-shadow, @typescript-eslint/no-unsafe-member-access  */
import { expect, fixture, html } from '@open-wc/testing';
import type SdBadge from './badge';

const variants = [
  {
    name: 'default',
    tailwindClasses: 'text-white bg-primary-500 border-white',
    invertedTailwindClasses: 'text-primary bg-white border-primary'
  },
  {
    name: 'success',
    tailwindClasses: 'text-white bg-[#367B28] border-white',
    invertedTailwindClasses: 'text-white bg-[#367B28] border-white'
  },
  {
    name: 'error',
    tailwindClasses: 'text-white bg-error border-white',
    invertedTailwindClasses: 'text-white bg-error border-white'
  }
];

const sizes = [
  { name: 'sm', tailwindClasses: 'h-2 min-w-[8px] text-[10px]' },
  { name: 'md', tailwindClasses: 'h-4 px-[4px] min-w-[16px] text-[10px]' },
  { name: 'lg', tailwindClasses: 'h-5 px-[5px] min-w-[20px] text-[12px]' }
];

const baseClasses =
  'inline-flex items-center text-center justify-center align-middle leading-none whitespace-nowrap border rounded-full select-none font-semibold cursor-[inherit]';

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
      expect(el.overflowing).to.equal(false);
    });

    it('should render the child content provided', async () => {
      el = await fixture<SdBadge>(html` <sd-badge>Badge</sd-badge> `);
      expect(el.innerText).to.eq('Badge');
    });

    it('should render without the overflow indicator', async () => {
      el = await fixture<SdBadge>(html` <sd-badge>Badge</sd-badge> `);
      expect(el.shadowRoot!.querySelector('[part~="base"]')).to.exist;
      expect(el.shadowRoot!.querySelector('[part~="overflow-indicator"]')).have.class('hidden');
      expect(el.querySelector(`*[slot='overflow-indicator']`)).to.not.exist;
    });

    it('should default to default styling, with the primary color', async () => {
      el = await fixture<SdBadge>(html` <sd-badge>Badge</sd-badge> `);
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.classList.value.trim()).to.contain(baseClasses);
      expect(part.classList.value.trim()).to.contain(variants[0].tailwindClasses);
    });
  });

  describe('when passed an overflow-indicator', () => {
    it('should pass accessibility tests if parameter overflowing is true.', async () => {
      el = await fixture<SdBadge>(
        html` <sd-badge overflowing>Badge<span slot="overflow-indicator">+</span></sd-badge> `
      );
      await expect(el).to.be.accessible();
    });

    it(`should render with an overflow indicator that is also visible to screen readers if parameter overflowing is true"`, async () => {
      el = await fixture<SdBadge>(
        html` <sd-badge overflowing>Badge<span slot="overflow-indicator">+</span></sd-badge> `
      );
      expect(el.shadowRoot!.querySelector('[part~="overflow-indicator"]')).not.have.class('hidden');
      expect(el.querySelector(`*[slot='overflow-indicator']`)!.getAttribute('aria-hidden')).to.eq('false');
    });

    it(`should render without an overflow indicator that is also not visible to screen readers if parameter overflowing is false"`, async () => {
      el = await fixture<SdBadge>(html` <sd-badge>Badge<span slot="overflow-indicator">+</span></sd-badge> `);
      expect(el.shadowRoot!.querySelector('[part~="overflow-indicator"]')).to.have.class('hidden');
      expect(el.querySelector(`*[slot='overflow-indicator']`)!.getAttribute('aria-hidden')).to.eq('true');
    });
  });

  variants.forEach(variant => {
    describe(`when passed a variant attribute ${variant.name}`, () => {
      it(`should be accessible when variant is "${variant.name}"`, async () => {
        el = await fixture<SdBadge>(html` <sd-badge variant="${variant.name}">Badge</sd-badge> `);
        await expect(el).to.be.accessible();
      });

      it(`should render the background, font and border color associated with variant "${variant.name}" and still have the base classes`, async () => {
        el = await fixture<SdBadge>(html` <sd-badge variant="${variant.name}">Badge</sd-badge> `);
        const part = el.shadowRoot!.querySelector('[part~="base"]')!;
        expect(part.classList.value.trim()).to.contain(baseClasses);
        expect(part.classList.value.trim()).to.contain(variant.tailwindClasses);
      });

      it(`should render the background, font and border color associated with variant "${variant.name}" in the inverted state`, async () => {
        el = await fixture<SdBadge>(html` <sd-badge variant="${variant.name}" inverted>Badge</sd-badge> `);
        const part = el.shadowRoot!.querySelector('[part~="base"]')!;
        expect(part.classList.value.trim()).to.contain(variant.invertedTailwindClasses);
      });
    });
  });

  sizes.forEach(size => {
    describe(`when passed a size attribute ${size.name}`, () => {
      it(`should be accessible when size is "${size.name}"`, async () => {
        el = await fixture<SdBadge>(html` <sd-badge size="${size}">Badge</sd-badge> `);
        await expect(el).to.be.accessible();
      });

      it(`should render the badge and font size associated with size "${size.name}"`, async () => {
        el = await fixture<SdBadge>(html` <sd-badge size="${size.name}">Badge</sd-badge> `);
        const base = el.shadowRoot!.querySelector('[part~="base"]')!;
        expect(base.classList.value.trim()).to.contain(size.tailwindClasses);
      });
    });
  });
});
