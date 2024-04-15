import { expect, fixture, html } from '@open-wc/testing';
import { setupAutocomplete } from './autocomplete-config';
import autoComplete from '@tarekraafat/autocomplete.js';
import type SdInput from 'src/components/input/input';

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

describe('sd-input', () => {
  describe('defaults ', () => {
    it('default properties', async () => {
      const el = await fixture<SdInput>(html`
        <script src="https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js"></script>
        <sd-input id="simple-example" type="search"></sd-input>
      `);

      // Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-popup')]).then(() => {
      // Tests run differently when served as ESM vs. bundled
      // Here we are checking for the existence of the Solid Components global
      // to determine which mode we are in.

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      let registerAutocompleteForTest;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      if ((window as any)['Solid Components']) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
        registerAutocompleteForTest = (window as any)['Solid Components']['setupAutocomplete']; // Bundle Mode
      } else {
        registerAutocompleteForTest = setupAutocomplete; // ES Module Mode
      }

      /* Simple example */
      const { config: simpleConfig } = registerAutocompleteForTest('#simple-example');

      const autoCompleteJS = new autoComplete({
        ...simpleConfig,
        placeHolder: 'Placeholder',
        mock
      });

      console.log(simpleConfig);

      expect(autoCompleteJS.resultsList.tag).to.equal('sd-popup');
      expect(autoCompleteJS.resultsList.maxResults).to.equal(5);
      expect(autoCompleteJS.resultItem.tag).to.equal('li');
      expect(autoCompleteJS.placeHolder).to.equal('Placeholder');
    });
  });
});
