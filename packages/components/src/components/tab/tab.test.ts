import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import type SdTab from './tab';

describe('<sd-tab>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<SdTab>(html`
      <sd-tab-group>
        <sd-tab slot="nav">Test</sd-tab>
      </sd-tab-group>
    `);
    await expect(el).to.be.accessible();
  });

  it('should render default tab', async () => {
    const el = await fixture<SdTab>(html` <sd-tab>Test</sd-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('role')).to.equal('tab');
    expect(el.getAttribute('aria-disabled')).to.equal('false');
    expect(el.getAttribute('aria-selected')).to.equal('false');
    expect(base.getAttribute('tabindex')).to.equal('-1');
    expect(el.active).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should disable tab by attribute', async () => {
    const el = await fixture<SdTab>(html` <sd-tab disabled>Test</sd-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.disabled).to.equal(true);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('tabindex')).to.equal('-1');
  });

  describe('when visually-disabled is set', () => {
    it('should have aria-disabled set to true', async () => {
      const el = await fixture<SdTab>(html` <sd-tab visually-disabled>Default Slot</sd-button> `);
      expect(el.getAttribute('aria-disabled')).to.be.equal('true');
    });
  });

  it('should set active tab by attribute', async () => {
    const el = await fixture<SdTab>(html` <sd-tab active>Test</sd-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.active).to.equal(true);
    expect(el.getAttribute('aria-selected')).to.equal('true');
    expect(base.getAttribute('tabindex')).to.equal('0');
  });

  describe('focus', () => {
    it('should focus inner div', async () => {
      const el = await fixture<SdTab>(html` <sd-tab>Test</sd-tab> `);

      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(base);
    });
  });

  describe('blur', () => {
    it('should blur inner div', async () => {
      const el = await fixture<SdTab>(html` <sd-tab>Test</sd-tab> `);

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });
});
