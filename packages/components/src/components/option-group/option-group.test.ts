import { aTimeout, expect, fixture, html } from '@open-wc/testing';

import type SdOption from '../option/option';
import type SdOptionGroup from './option-group';

const getSdOptions = (el: SdOptionGroup) => Array.from(el.querySelectorAll('sd-option'));
const getEnabledOptions = (el: SdOptionGroup) => getSdOptions(el).filter((opt: SdOption) => !opt.disabled);

const getDisabledOptions = (el: SdOptionGroup) => getSdOptions(el).filter((opt: SdOption) => opt.disabled);

describe('<sd-option-group>', () => {
  it('passes accessability test', async () => {
    const el = await fixture<SdOptionGroup>(html`
      <sd-select label="Select one">
        <sd-option-group label="Options">
          <sd-option value="1">Option 1</sd-option>
          <sd-option value="2">Option 2</sd-option>
          <sd-option value="3">Option 3</sd-option>
          <sd-option value="4" disabled>Disabled</sd-option>
        </sd-option-group>
      </sd-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<SdOptionGroup>(html`<sd-option-group></sd-option-group>`);

    expect(el.disabled).to.be.false;
  });

  describe('when using the disabled attribute', () => {
    it('changes all <sd-option /> tags disabled attributes to false when sd-option-groups disabled attribute is false', async () => {
      const el = await fixture<SdOptionGroup>(html`
        <sd-option-group>
          <sd-option value="1">Value 1</sd-option>
          <sd-option value="2" disabled>Value 2</sd-option>
        </sd-option-group>
      `);

      // Make sure we have the correct baseline of elements
      expect(getSdOptions(el)).to.have.length(2);
      expect(getEnabledOptions(el)).to.have.length(2);
      expect(getDisabledOptions(el)).to.have.length(0);
    });

    it('changes all <sd-option /> tags disabled attributes to true when sd-option-groups disabled attribute is true', async () => {
      const el = await fixture<SdOptionGroup>(html`
        <sd-option-group disabled>
          <sd-option value="1">Value 1</sd-option>
          <sd-option value="2" disabled>Value 2</sd-option>
        </sd-option-group>
      `);

      // Make sure we have the correct baseline of elements
      expect(getSdOptions(el)).to.have.length(2);
      expect(getEnabledOptions(el)).to.have.length(0);
      expect(getDisabledOptions(el)).to.have.length(2);
    });

    it('should set its childrens sd-option disabled property according to its own when the slot content changes', async () => {
      const el = await fixture<SdOptionGroup>(html`
        <sd-option-group>
          <sd-option value="1">Option 1</sd-option>
          <sd-option value="2" disabled>Option 2</sd-option>
        </sd-option-group>
      `);

      // Make sure we have the correct baseline of elements
      expect(getSdOptions(el)).to.have.length(2);
      expect(getEnabledOptions(el)).to.have.length(2);
      expect(getDisabledOptions(el)).to.have.length(0);

      // Add an (initially) disabled group. Disabled should be removed
      el.innerHTML += '<sd-option value="3" disabled>Option 3</sd-option>';
      await aTimeout(100);

      expect(getSdOptions(el)).to.have.length(3);
      expect(getEnabledOptions(el)).to.have.length(3);
      expect(getDisabledOptions(el)).to.have.length(0);

      el.disabled = true;
      await aTimeout(100);

      el.innerHTML += '<sd-option value="4">Option 4</sd-option>';
      await aTimeout(100);

      expect(getSdOptions(el)).to.have.length(4);
      expect(getEnabledOptions(el)).to.have.length(0);
      expect(getDisabledOptions(el)).to.have.length(4);
    });
  });
});
