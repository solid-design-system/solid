import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import type SdProgressBar from './progress-bar';

describe('<sd-progress-bar>', () => {
  let el: SdProgressBar;

  const getProgressBar = (component: SdProgressBar) => component.shadowRoot!.querySelector<HTMLElement>('#bar')!;

  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar></sd-progress-bar>`);
      await expect(el).to.be.accessible();
    });

    it('should have default values set correctly', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar></sd-progress-bar>`);
      const base = el.shadowRoot!.querySelector('[part="base"]')!;

      expect(el.value).to.equal(null);
      expect(el.max).to.equal(100);
      expect(el.label).to.equal('');
      expect(el.valuePosition).to.equal(null);
      expect(el.inverted).to.equal(false);
      expect(el.showLabel).to.equal(false);
      expect(el.complete).to.equal(false);
      expect(base.getAttribute('aria-hidden')).to.equal('true');
    });
  });

  describe('label handling', () => {
    it('should connect aria-labelledby when label is set', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar label="Label" show-label></sd-progress-bar>`);

      const label = el.shadowRoot!.querySelector('[part="label"]');
      const progressBar = getProgressBar(el);
      const base = el.shadowRoot!.querySelector('[part="base"]')!;

      expect(label).to.exist;
      expect(label!.textContent!.trim()).to.equal('Label');
      expect(base.getAttribute('aria-hidden')).to.equal('false');
      expect(progressBar.getAttribute('aria-labelledby')).to.equal('label');
      expect(progressBar.getAttribute('aria-label')).to.equal(null);
    });

    it('should connect aria-labelledby when label slot is used', async () => {
      el = await fixture<SdProgressBar>(html`
        <sd-progress-bar show-label>
          <span slot="label">Label slot</span>
        </sd-progress-bar>
      `);

      const progressBar = getProgressBar(el);
      const labelSlot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="label"]');
      const base = el.shadowRoot!.querySelector('[part="base"]')!;

      expect(labelSlot).to.exist;
      expect(labelSlot!.assignedElements()[0].textContent!.trim()).to.equal('Label slot');
      expect(base.getAttribute('aria-hidden')).to.equal('false');
      expect(progressBar.getAttribute('aria-labelledby')).to.equal('label');
      expect(progressBar.getAttribute('aria-label')).to.equal(null);
    });

    it('should not render label element when show-label is false', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar label="Hidden label"></sd-progress-bar>`);

      const label = el.shadowRoot!.querySelector('[part="label"]');
      const base = el.shadowRoot!.querySelector('[part="base"]')!;
      expect(label).to.not.exist;
      expect(base.getAttribute('aria-hidden')).to.equal('false');
    });
  });

  describe('value display', () => {
    it('should render value on the right', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value="25" value-position="right"></sd-progress-bar>`);

      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');
      expect(valueRight).to.exist;
      expect(valueRight!.textContent!.trim()).to.equal('25');
    });

    it('should render value at the bottom', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value="40" value-position="bottom"></sd-progress-bar>`);

      const valueBottom = el.shadowRoot!.querySelector('[part="value-bottom"]');
      expect(valueBottom).to.exist;
      expect(valueBottom!.textContent!.trim()).to.equal('40');
    });

    it('should clamp value to max and fallback safe max when max is invalid', async () => {
      el = await fixture<SdProgressBar>(
        html`<sd-progress-bar value="150" max="0" value-position="right"></sd-progress-bar>`
      );

      const progressBar = getProgressBar(el);
      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');

      expect(progressBar.getAttribute('aria-valuemax')).to.equal('100');
      expect(progressBar.getAttribute('aria-valuenow')).to.equal('100');
      expect(valueRight!.textContent!.trim()).to.equal('100');
    });

    it('should clamp negative values to 0', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value="-20" value-position="bottom"></sd-progress-bar>`);

      const progressBar = getProgressBar(el);
      const valueBottom = el.shadowRoot!.querySelector('[part="value-bottom"]');

      expect(progressBar.getAttribute('aria-valuenow')).to.equal('0');
      expect(valueBottom!.textContent!.trim()).to.equal('0');
    });

    it('should use max value when complete is true', async () => {
      el = await fixture<SdProgressBar>(
        html`<sd-progress-bar value="10" max="80" complete value-position="right"></sd-progress-bar>`
      );

      const progressBar = getProgressBar(el);
      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');

      expect(progressBar.getAttribute('aria-valuemax')).to.equal('80');
      expect(progressBar.getAttribute('aria-valuenow')).to.equal('80');
      expect(valueRight!.textContent!.trim()).to.equal('80');
    });

    it('should use custom value formatter for displayed and aria values', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value="15" value-position="right"></sd-progress-bar>`);
      el.valueFormatter = value => `${value} items`;
      await el.updateComplete;

      const progressBar = getProgressBar(el);
      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');

      expect(progressBar.getAttribute('aria-valuenow')).to.equal('15 items');
      expect(progressBar.getAttribute('aria-valuetext')).to.equal('15 items');
      expect(valueRight!.textContent!.trim()).to.equal('15 items');
    });
  });

  describe('special modes', () => {
    it('should render loading mode when value is null', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value-position="right"></sd-progress-bar>`);

      const progressBar = getProgressBar(el);
      const loadingTrack = el.shadowRoot!.querySelectorAll('[part="track"]');
      const loadingIndicator = el.shadowRoot!.querySelector('[part="indicator"]');
      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');

      expect(progressBar.getAttribute('aria-valuenow')).to.equal(null);
      expect(progressBar.getAttribute('aria-valuetext')).to.equal(el.localize.term('loading'));
      expect(loadingTrack.length).to.equal(2);
      expect(loadingIndicator).to.exist;
      expect(valueRight).to.not.exist;
    });

    it('should render loading mode when value is NaN', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value-position="right"></sd-progress-bar>`);
      el.value = Number.NaN;
      await el.updateComplete;

      const progressBar = getProgressBar(el);
      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');

      expect(progressBar.getAttribute('aria-valuenow')).to.equal(null);
      expect(progressBar.getAttribute('aria-valuetext')).to.equal(el.localize.term('loading'));
      expect(valueRight).to.not.exist;
    });

    it('should apply inverted classes to bar, label and value output', async () => {
      el = await fixture<SdProgressBar>(html`
        <sd-progress-bar inverted show-label label="Inverted" value="60" value-position="right"></sd-progress-bar>
      `);

      const progressBar = getProgressBar(el);
      const label = el.shadowRoot!.querySelector('[part="label"]');
      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');
      const indicator = el.shadowRoot!.querySelector('[part="indicator"]');
      const track = el.shadowRoot!.querySelector('[part="track"]');

      expect(indicator!.classList.contains('sd-progress-bar--active--inverted-color-background')).to.equal(true);
      expect(track!.classList.contains('sd-progress-bar__slide-bar--inverted-color-background')).to.equal(true);
      expect(label!.classList.contains('text-white')).to.equal(true);
      expect(valueRight!.classList.contains('text-white')).to.equal(true);
      expect(progressBar.classList.contains('flex')).to.equal(true);
    });
  });
});
