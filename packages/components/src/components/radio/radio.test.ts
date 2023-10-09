import { expect, fixture, html } from '@open-wc/testing';
import type SdRadio from './radio';
import type SdRadioGroup from '../radio-group/radio-group';

describe('<sd-radio>', () => {
  it('should not be checked by default', async () => {
    const radio = await fixture<SdRadio>(html`<sd-radio></sd-radio>`);
    expect(radio.checked).to.be.false;
  });

  it('should become checked when clicked', async () => {
    const radio = await fixture<SdRadio>(html`<sd-radio></sd-radio>`);
    radio.click();
    await radio.updateComplete;
    expect(radio.checked).to.be.true;
  });

  it('should not become checked when clicked if disabled', async () => {
    const radio = await fixture<SdRadio>(html`<sd-radio disabled></sd-radio>`);
    radio.click();
    await radio.updateComplete;
    expect(radio.checked).to.be.false;
  });

  it('should handle different sizes correctly', async () => {
    const radio = await fixture<SdRadio>(html`<sd-radio size="sm"></sd-radio>`);
    expect(radio.shadowRoot?.querySelector('.text-sm')).to.exist;
  });

  it('should have correct ARIA attributes', async () => {
    const radio = await fixture<SdRadio>(html`<sd-radio></sd-radio>`);
    expect(radio.getAttribute('role')).to.equal('radio');
    expect(radio.getAttribute('aria-checked')).to.equal('false');
    expect(radio.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should display as invalid when marked as invalid', async () => {
    const radio = await fixture<SdRadio>(html`<sd-radio invalid></sd-radio>`);
    expect(radio.shadowRoot?.querySelector('.text-error')).to.exist;
  });

  it('should handle custom values correctly', async () => {
    const radio = await fixture<SdRadio>(html`<sd-radio value="custom-value"></sd-radio>`);
    expect(radio.value).to.equal('custom-value');
  });

  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<SdRadioGroup>(html`
      <sd-radio-group value="1">
        <sd-radio id="radio-1" value="1"></sd-radio>
        <sd-radio id="radio-2" value="2" disabled></sd-radio>
      </sd-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SdRadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<SdRadio>('#radio-2')!;

    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    });
    radio2.dispatchEvent(clickEvent);
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
