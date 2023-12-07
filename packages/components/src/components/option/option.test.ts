import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdOption from './option';

describe('<sd-option>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<SdOption>(html`
      <sd-select label="Select one">
        <sd-option value="1">Option 1</sd-option>
        <sd-option value="2">Option 2</sd-option>
        <sd-option value="3">Option 3</sd-option>
        <sd-option value="4" disabled>Disabled</sd-option>
      </sd-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<SdOption>(html` <sd-option>Test</sd-option> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('changes aria attributes', async () => {
    const el = await fixture<SdOption>(html` <sd-option>Test</sd-option> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('emits the slotchange event when the label changes', async () => {
    const el = await fixture<SdOption>(html` <sd-option>Text</sd-option> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });
});
