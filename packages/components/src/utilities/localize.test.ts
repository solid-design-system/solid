import '../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import type SdSelect from 'src/components/select/select';

describe('<sd-carousel>', () => {
  it('should apply initial localization', async () => {
    const select = await fixture<SdSelect>(html`
      <sd-select value="option-1" clearable><sd-option value="option-1">Option 1</sd-option></sd-select>
    `);
    expect(select.shadowRoot!.querySelector('button[part="clear-button"]')!.getAttribute('aria-label')).to.equal(
      'Clear entry'
    );
  });

  it('should apply initial localization from lang', async () => {
    const select = await fixture<SdSelect>(html`
      <sd-select lang="de" value="option-1" clearable><sd-option value="option-1">Option 1</sd-option></sd-select>
    `);
    expect(select.shadowRoot!.querySelector('button[part="clear-button"]')!.getAttribute('aria-label')).to.equal(
      'Eingabe löschen'
    );
  });

  it('should apply custom localization from data-attribute', async () => {
    const select = await fixture<SdSelect>(html`
      <sd-select lang="de" value="option-1" clearable data-custom-localization='{"clearEntry": "Reset!!"}'
        ><sd-option value="option-1">Option 1</sd-option></sd-select
      >
    `);
    expect(select.shadowRoot!.querySelector('button[part="clear-button"]')!.getAttribute('aria-label')).to.equal(
      'Reset!!'
    );
  });

  it('should reactively apply custom localization from data-attribute', async () => {
    const select = await fixture<SdSelect>(html`
      <sd-select lang="de" value="option-1" clearable data-custom-localization='{"clearEntry": "Reset!!"}'
        ><sd-option value="option-1">Option 1</sd-option></sd-select
      >
    `);

    select.setAttribute('data-custom-localization', '{"clearEntry": "Updated!!"}');

    await waitUntil(
      () => select.shadowRoot!.querySelector('button[part="clear-button"]')!.getAttribute('aria-label') === 'Updated!!'
    );
  });

  it('should apply custom localization from setCustomLocalization', async () => {
    const select = await fixture<SdSelect>(html`
      <sd-select value="option-1" clearable><sd-option value="option-1">Option 1</sd-option></sd-select>
    `);
    select.localize.setCustomLocalization({ clearEntry: 'Reset me!!' });
    await waitUntil(
      () => select.shadowRoot!.querySelector('button[part="clear-button"]')!.getAttribute('aria-label') === 'Reset me!!'
    );
  });

  it('should use default localization when no custom localization is set', async () => {
    const select = await fixture<HTMLFormElement>(html`
      <sd-select name="a" value="option-2 option-3" multiple>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    expect(select.shadowRoot!.querySelector('input')!.value).to.equal('Options Selected (2)');
  });

  it('should apply custom localization with a function', async () => {
    const select = await fixture<SdSelect>(html`
      <sd-select name="a" value="option-2 option-3" multiple>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);

    select.localize.setCustomLocalization({
      numOptionsSelected: num => {
        if (num === 0) return '';
        return `Funds selected (${num})`;
      }
    });

    // force component to update before changing the value
    await select.updateComplete;

    // change the value to trigger the localization update
    select.value = 'option-1';

    // await for the DOM to be updated and localization to apply
    await waitUntil(() => {
      return select.shadowRoot!.querySelector('input')!.value === 'Funds selected (1)';
    }, 'Expected value to be "Funds selected (1)"');

    expect(select.shadowRoot!.querySelector('input')!.value).to.equal('Funds selected (1)');
  });
});
