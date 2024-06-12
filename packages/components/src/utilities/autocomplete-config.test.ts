import { expect, fixture, html } from '@open-wc/testing';
import { setupAutocomplete } from './autocomplete-config';
// @ts-expect-error - Import works, TS doesn't know the type
import autoComplete from '@tarekraafat/autocomplete.js';

const mock = {
  src: [
    'PrivatFonds: Kontrolliert pro',
    'PrivatFonds: Nachhaltig',
    'UniAusschüttung A',
    'UniAusschüttung -net- A',
    'UniCommodities',
    'UniDividendenAss A',
    'UniDividendenAss -net- A',
    'UniDynamicFonds: Europa A',
    'UniDynamicFonds: Europa -net- A',
    'UniDynamicFonds: Global A',
    'UniDynamicFonds: Global -net- A',
    'UniEuropa A',
    'UniEuropa -net-',
    'UniEuroRenta Corporates A',
    'UniEuroRenta Real Zins A',
    'UniEuroRenta Real Zins -net- A',
    'UniFavorit: Aktien',
    'UniFavorit: Aktien Europa A',
    'UniFavorit: Aktien Europa -net- A',
    'UniFavorit: Aktien -net-',
    'UniGlobal',
    'UniGlobal Dividende A',
    'UniGlobal Dividende -net- A',
    'UniGlobal II A',
    'UniGlobal -net-',
    'UniGlobal Vorsorge',
    'UniIndustrie 4.0 A',
    'UniIndustrie 4.0 -net- A',
    'UniKlassikMix',
    'UniMarktführer A',
    'UniMarktführer -net- A',
    'UniMultiAsset: Chance III',
    'UniNachhaltig Aktien Deutschland',
    'UniNachhaltig Aktien Deutschland -net-',
    'UniNachhaltig Aktien Europa',
    'UniNachhaltig Aktien Europa -net-',
    'UniNachhaltig Aktien Global',
    'UniNachhaltig Aktien Global -net-',
    'UniNachhaltig Aktien Infrastruktur',
    'UniNachhaltig Aktien Infrastruktur -net-',
    'UniNordamerika',
    'UniRak',
    'UniRak Nachhaltig A',
    'UniRak Nachhaltig Konservativ A',
    'UniRak Nachhaltig Konservativ -net- A',
    'UniRak Nachhaltig -net- A',
    'UniRak -net-',
    'UniReserve: Euro-Corporates',
    'UniSector: BasicIndustries A',
    'UniSector: BioPharma A',
    'UniSector: HighTech A',
    'UniSelection: Global I',
    'UniStrategie: Ausgewogen',
    'UniStrategie: Offensiv',
    'UniStruktur',
    'UniThemen Aktien A',
    'UniThemen Aktien -net- A',
    'UniThemen Defensiv A',
    'UniValueFonds: Europa A',
    'UniValueFonds: Europa -net- A',
    'UniValueFonds: Global A',
    'UniValueFonds: Global -net- A',
    'UniZukunft Klima A',
    'UniZukunft Klima -net- A',
    'UniZukunft Welt A',
    'UniZukunft Welt -net- A',
    'Uni21.Jahrhundert -net-',
    'BBBank Dynamik Union',
    'BBBank Kontinuität Union',
    'BBBank Wachstum Union',
    'FVB-Aktienfonds Nachhaltig',
    'Invest Global',
    'LIGA-Pax-Aktien-Union',
    'Nachhaltig Global Mittelhessen',
    'Profi-Balance',
    'SpardaRentenPlus A',
    'Volksbank Bielefeld-Gütersloh NachhaltigkeitsInvest',
    'VR Bank Rhein-Neckar Union Balance Invest',
    'VR Sachsen Global Union',
    'VR Westmünsterland Aktiv Nachhaltig',
    'Werte Fonds Münsterland Klima'
  ].sort()
};

// Tests run differently when served as ESM vs Bundle.
// Here we are checking for the existence of the Solid Components global to determine which mode we are in.
const getSetupAutocomplete = () => {
  //     ESM                  Bundle
  return setupAutocomplete || (window as any)['Solid Components']['setupAutocomplete'] /* eslint-disable-line */
};

describe('sd-autocomplete', () => {
  describe('defaults', () => {
    beforeEach(async() => {
      await fixture(html`
        <script src="https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js"></script>
        <sd-input id="autoCompleteInput" type="search"></sd-input>
        <sd-popup id="autoCompletePopup"></sd-popup> 
      `);
    })

    it('default properties', () => {
      const setupAutocompleteForTest = getSetupAutocomplete();

      const { config: simpleConfig } = setupAutocompleteForTest();

      /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
      const autoCompleteJS = new autoComplete({
        ...simpleConfig,
        mock
      });

      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      expect(autoCompleteJS.resultsList.tag).to.equal('ul');
      expect(autoCompleteJS.resultsList.maxResults).to.equal(5);
      expect(autoCompleteJS.resultItem.tag).to.equal('li');
      /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    });

    it('custom properties', () => {
      const setupAutocompleteForTest = getSetupAutocomplete();

      const { config: simpleConfig } = setupAutocompleteForTest();
      
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
      const autoCompleteJS = new autoComplete({
        ...simpleConfig,
        placeHolder: 'Placeholder',
        resultsList: {
          tag: 'ul',
          maxResults: 3
        },
        resultItem: {
          tag: 'sd-teaser'
        },
        mock
      });

      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      expect(autoCompleteJS.resultsList.tag).to.equal('ul');
      expect(autoCompleteJS.resultsList.maxResults).to.equal(3);
      expect(autoCompleteJS.resultItem.tag).to.equal('sd-teaser');
      expect(autoCompleteJS.placeHolder).to.equal('Placeholder');
      /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    });
  });

  describe('versioned components', () => {
    beforeEach(async() => {
      await fixture(html`
        <script src="https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js"></script>
        <script src="https://solid-design-system.fe.union-investment.de/3.6.0/versioned-components/es/input.js" type="module"></script>
        <script src="https://solid-design-system.fe.union-investment.de/3.6.0/versioned-components/es/popup.js" type="module"></script>
        <sd-3-6-0-input id="autoCompleteInput" class="customInputSelector" type="search"></sd-3-6-0-input>
        <sd-3-6-0-popup id="autoCompletePopup" class="customPopupSelector"></sd-3-6-0-popup>
      `);
    })

    it('setup with default selector', () => {
      // eslint-disable-next-line chai-expect/no-inner-literal
      expect(true).to.equal(true);

      const setupAutocompleteForTest = getSetupAutocomplete();

      const { config: simpleConfig } = setupAutocompleteForTest();

      /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
      const autoCompleteJS = new autoComplete({
        ...simpleConfig,
        mock
      });

      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      expect(autoCompleteJS.resultsList.tag).to.equal('ul');
      expect(autoCompleteJS.resultsList.maxResults).to.equal(5);
      expect(autoCompleteJS.resultItem.tag).to.equal('li');
      /* eslint-enable  @typescript-eslint/no-unsafe-member-access */
    });

    it('setup with custom ID as selector', () => {
      const setupAutocompleteForTest = getSetupAutocomplete();
    
      const { config: simpleConfig } = setupAutocompleteForTest('.customInputSelector', '.customPopupSelector');

      /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
      const autoCompleteJS = new autoComplete({
        ...simpleConfig,
        mock
      });

      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      expect(autoCompleteJS.resultsList.tag).to.equal('ul');
      expect(autoCompleteJS.resultsList.maxResults).to.equal(5);
      expect(autoCompleteJS.resultItem.tag).to.equal('li');
      /* eslint-enable  @typescript-eslint/no-unsafe-member-access */
    });

    it('setup with element instance', () => {
      const setupAutocompleteForTest = getSetupAutocomplete();
    
      const sdInput = document.getElementById('autoCompleteInput') as HTMLUnknownElement;
      const sdPopup = document.getElementById('autoCompletePopup') as HTMLUnknownElement;

      const { config: simpleConfig } = setupAutocompleteForTest(sdInput, sdPopup);
      
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
      const autoCompleteJS = new autoComplete({
        ...simpleConfig,
        mock
      });

      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      expect(autoCompleteJS.resultsList.tag).to.equal('ul');
      expect(autoCompleteJS.resultsList.maxResults).to.equal(5);
      expect(autoCompleteJS.resultItem.tag).to.equal('li');
      /* eslint-enable  @typescript-eslint/no-unsafe-member-access */
    });
  });

});
