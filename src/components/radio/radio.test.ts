import { expect, fixture, html } from '@open-wc/testing';
import type SdRadio from './radio';
import type SdRadioGroup from '../radio-group/radio-group';

describe('<sd-radio>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<SdRadioGroup>(html`
      <sd-radio-group value="1">
        <sd-radio id="radio-1" value="1"></sd-radio>
        <sd-radio id="radio-2" value="2" disabled></sd-radio>
      </sd-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SdRadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<SdRadio>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
