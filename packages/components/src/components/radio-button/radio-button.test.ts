import { expect, fixture, html } from '@open-wc/testing';
import type SdRadioButton from './radio-button';
import type SdRadioGroup from '../radio-group/radio-group';

describe('<sd-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<SdRadioGroup>(html`
      <sd-radio-group value="1">
        <sd-radio-button id="radio-1" value="1"></sd-radio-button>
        <sd-radio-button id="radio-2" value="2" disabled></sd-radio-button>
      </sd-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SdRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<SdRadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });

  it('should receive positional classes from <sd-button-group>', async () => {
    const radioGroup = await fixture<SdRadioGroup>(html`
      <sd-radio-group value="1">
        <sd-radio-button id="radio-1" value="1"></sd-radio-button>
        <sd-radio-button id="radio-2" value="2"></sd-radio-button>
        <sd-radio-button id="radio-3" value="3"></sd-radio-button>
      </sd-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SdRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<SdRadioButton>('#radio-2')!;
    const radio3 = radioGroup.querySelector<SdRadioButton>('#radio-3')!;

    await Promise.all([radioGroup.updateComplete, radio1.updateComplete, radio2.updateComplete, radio3.updateComplete]);

    expect(radio1.classList.contains('sd-button-group__button')).to.be.true;
    expect(radio1.classList.contains('sd-button-group__button--first')).to.be.true;
    expect(radio2.classList.contains('sd-button-group__button')).to.be.true;
    expect(radio2.classList.contains('sd-button-group__button--inner')).to.be.true;
    expect(radio3.classList.contains('sd-button-group__button')).to.be.true;
    expect(radio3.classList.contains('sd-button-group__button--last')).to.be.true;
  });
});
