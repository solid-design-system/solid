/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { elementUpdated, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { registerIconLibrary } from '../../../dist/solid-components';
import type SdIcon from './icon';
import internalLibrary, { icons as internalIcons } from './library.internal';
import statusLibrary, { icons as statusIcons } from './library.status';

const testLibraryIcons = {
  'test-icon1': `
    <svg id="test-icon1">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,
  'content/test-icon1': `
    <svg id="content-test-icon1">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,
  'test-icon2': `
    <svg id="test-icon2">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,
  'bad-icon': `<div></div>`
};

describe('<sd-icon>', () => {
  before(() => {
    // Tests run differently when served as ESM vs. bundled
    // Here we are checking for the existence of the Solid Components global
    // to determine which mode we are in.

    let registerIconLibraryForTest;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    if ((window as any)['SolidComponents']) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      registerIconLibraryForTest = (window as any)['SolidComponents']['registerIconLibrary']; // Bundle Mode
    } else {
      registerIconLibraryForTest = registerIconLibrary; // ES Module Mode
    }
    registerIconLibraryForTest('test-library', {
      resolver: (name: keyof typeof testLibraryIcons) => {
        // only for testing a bad request
        if (name === ('bad-request' as keyof typeof testLibraryIcons)) {
          return `data:image/svg+xml`;
        }

        if (name in testLibraryIcons) {
          return `data:image/svg+xml,${encodeURIComponent(testLibraryIcons[name])}`;
        }
        return '';
      },
      mutator: (svg: SVGElement) => svg.setAttribute('fill', 'currentColor')
    });
  });

  describe('defaults ', () => {
    it('default properties', async () => {
      const el = await fixture<SdIcon>(html` <sd-icon></sd-icon> `);

      expect(el.name).to.be.undefined;
      expect(el.src).to.be.undefined;
      expect(el.label).to.equal('');
      expect(el.library).to.equal('default');
    });

    it('renders pre-loaded system icons and emits sd-load event', async () => {
      const el = await fixture<SdIcon>(html` <sd-icon library="_internal"></sd-icon> `);
      const listener = oneEvent(el, 'sd-load');

      el.name = 'chevron-bottom';
      const ev = await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.exist;
      expect(ev).to.exist;
    });

    it('the icon is accessible', async () => {
      const el = await fixture<SdIcon>(html` <sd-icon library="_internal" name="check"></sd-icon> `);
      await expect(el).to.be.accessible();
    });

    it('the icon has the correct default aria attributes', async () => {
      const el = await fixture<SdIcon>(html` <sd-icon library="_internal" name="check"></sd-icon> `);

      expect(el.getAttribute('role')).to.be.null;
      expect(el.getAttribute('aria-label')).to.be.null;
      expect(el.getAttribute('aria-hidden')).to.equal('true');
    });
  });

  describe('bundled Figma icons', () => {
    it('keeps internal base icons, branded paths and CSS override precedence', async () => {
      const element = await fixture<HTMLDivElement>(html`<div style="--sd-theme: ui-light"></div>`);
      const base = internalLibrary.resolver('risk', element);
      expect(base).to.match(/^data:image\/svg\+xml,/);
      expect(decodeURIComponent(base.split(',').slice(1).join(','))).to.include('viewBox');
      for (const [theme, folder] of [
        ['vb', 'vb'],
        ['bb', 'bbbank'],
        ['sp', 'sparda']
      ]) {
        element.style.setProperty('--sd-theme', theme);
        expect(internalLibrary.resolver('risk', element)).to.equal(
          `https://celum-icons.fe.union-investment.de/${folder}/internal/risk.svg`
        );
      }
      element.style.setProperty(
        '--sd-icon--risk',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>'
      );
      expect(internalLibrary.resolver('risk', element)).to.match(/^data:image\/svg\+xml,/);
      expect(Object.keys(internalIcons)).to.have.length(28);
    });

    it('renders every status asset with currentColor in light and dark themes', async () => {
      expect(Object.keys(statusIcons)).to.have.length(7);
      for (const theme of ['ui-light', 'ui-dark']) {
        for (const name of Object.keys(statusIcons)) {
          const element = await fixture<SdIcon>(
            html`<sd-icon
              library="sd-status-assets"
              style=${`--sd-theme: ${theme}; color: rgb(180, 30, 70)`}
            ></sd-icon>`
          );
          const loaded = oneEvent(element, 'sd-load');
          element.name = name;
          await loaded;
          await elementUpdated(element);
          const svg = element.shadowRoot!.querySelector('svg')!;
          expect(svg).to.exist;
          expect(svg.querySelector('path')?.getAttribute('fill')).to.equal('currentColor');
          expect(getComputedStyle(svg.querySelector('path')!).fill).to.equal('rgb(180, 30, 70)');
          expect(statusLibrary.resolver(name)).to.match(/^data:image\/svg\+xml,/);
        }
      }
    });
  });

  describe('when a label is provided', () => {
    it('the icon has the correct default aria attributes', async () => {
      const fakeLabel = 'a label';
      const el = await fixture<SdIcon>(html`
        <sd-icon label="${fakeLabel}" library="_internal" name="check"></sd-icon>
      `);

      expect(el.getAttribute('role')).to.equal('img');
      expect(el.getAttribute('aria-label')).to.equal(fakeLabel);
      expect(el.getAttribute('aria-hidden')).to.be.null;
    });
  });

  describe('when a valid src is provided', () => {
    it('the svg is rendered', async () => {
      const fakeId = 'test-src';
      const el = await fixture<SdIcon>(html` <sd-icon></sd-icon> `);

      const listener = oneEvent(el, 'sd-load');
      el.src = `data:image/svg+xml,${encodeURIComponent(`<svg id="${fakeId}"></svg>`)}`;

      await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.exist;
      expect(el.shadowRoot?.querySelector('svg')?.getAttribute('id')).to.equal(fakeId);
    });
  });

  describe('new library', () => {
    it('renders icons from the new library and emits sd-load event', async () => {
      const el = await fixture<SdIcon>(html` <sd-icon library="test-library"></sd-icon> `);
      const listener = oneEvent(el, 'sd-load');

      el.name = 'test-icon1';
      const ev = await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.exist;
      expect(ev.isTrusted).to.exist;
    });

    it('runs mutator from new library', async () => {
      const el = await fixture<SdIcon>(html` <sd-icon library="test-library" name="test-icon1"></sd-icon> `);
      await elementUpdated(el);

      const svg = el.shadowRoot?.querySelector('svg');
      expect(svg?.getAttribute('fill')).to.equal('currentColor');
    });

    it('uses the content icon primary color for content icons', async () => {
      const el = await fixture<SdIcon>(html`
        <sd-icon
          color="primary"
          library="test-library"
          style="--sd-color-icon-fill-content-icons-primary: 1, 2, 3; --sd-color-primary: 4, 5, 6;"
        ></sd-icon>
      `);
      const listener = oneEvent(el, 'sd-load');

      el.name = 'content/test-icon1';
      await listener;
      await elementUpdated(el);

      expect(getComputedStyle(el.shadowRoot!.querySelector('svg')!).color).to.equal('rgb(1, 2, 3)');
    });
  });

  describe('negative cases', () => {
    // using new library so we can test for malformed icons when registered
    it("svg not rendered with an icon that doesn't exist in the library", async () => {
      const el = await fixture<SdIcon>(html` <sd-icon library="test-library" name="does-not-exist"></sd-icon> `);

      expect(el.shadowRoot?.querySelector('svg')).to.be.null;
    });

    it('emits sd-error when the file cant be retrieved', async () => {
      const el = await fixture<SdIcon>(html` <sd-icon library="test-library"></sd-icon> `);
      const listener = oneEvent(el, 'sd-error');

      el.name = 'bad-request';
      const ev = await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.be.null;
      expect(ev).to.exist;
    });

    it("emits sd-error when there isn't an svg element in the registered icon", async () => {
      const el = await fixture<SdIcon>(html` <sd-icon library="test-library"></sd-icon> `);
      const listener = oneEvent(el, 'sd-error');

      el.name = 'bad-icon';
      const ev = await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.be.null;
      expect(ev).to.exist;
    });
  });
});
