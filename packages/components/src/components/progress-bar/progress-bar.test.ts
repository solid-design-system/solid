import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import type SdProgressBar from './progress-bar';

describe('<sd-progress-bar>', () => {
  let el: SdProgressBar;

  const getProgress = (component: SdProgressBar) => component.shadowRoot!.querySelector('progress')!;

  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar></sd-progress-bar>`);
      await expect(el).to.be.accessible();
    });

    it('should have default values set correctly', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar></sd-progress-bar>`);

      const progress = getProgress(el);

      expect(el.value).to.equal(0);
      expect(el.max).to.equal(100);
      expect(el.loading).to.equal(false);
      expect(el.label).to.equal('');
      expect(el.valueRight).to.equal(false);
      expect(el.valueBottom).to.equal(false);
      expect(el.inverted).to.equal(false);

      expect(progress.getAttribute('max')).to.equal('100');
      expect(progress.getAttribute('value')).to.equal('0');
      expect(progress.getAttribute('aria-label')).to.equal('Progress');
      expect(progress.getAttribute('aria-labelledby')).to.equal(null);
    });
  });

  describe('label handling', () => {
    it('should render the label attribute and connect aria-labelledby', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar label="Label"></sd-progress-bar>`);

      const label = el.shadowRoot!.querySelector('[part="label"]');
      const progress = getProgress(el);

      expect(label).to.exist;
      expect(label!.textContent!.trim()).to.equal('Label');
      expect(progress.getAttribute('aria-labelledby')).to.equal('label');
      expect(progress.getAttribute('aria-label')).to.equal(null);
    });

    it('should render the label slot content', async () => {
      el = await fixture<SdProgressBar>(html`
        <sd-progress-bar>
          <span slot="label">Label slot</span>
        </sd-progress-bar>
      `);

      const label = el.shadowRoot!.querySelector('[part="label"]');
      const labelSlot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="label"]');
      expect(label).to.exist;
      expect(labelSlot).to.exist;
      expect(labelSlot!.assignedElements()[0].textContent!.trim()).to.equal('Label slot');
    });
  });

  describe('value display', () => {
    it('should render percentage on the right', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value="25" value-right></sd-progress-bar>`);

      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');
      expect(valueRight).to.exist;
      expect(valueRight!.textContent!.trim()).to.equal('25%');
    });

    it('should render percentage at the bottom', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value="40" value-bottom></sd-progress-bar>`);

      const valueBottom = el.shadowRoot!.querySelector('[part="value-bottom"]');
      expect(valueBottom).to.exist;
      expect(valueBottom!.textContent!.trim()).to.equal('40%');
    });

    it('should clamp value to max and fallback safe max when max is invalid', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value="150" max="0" value-right></sd-progress-bar>`);

      const progress = getProgress(el);
      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');

      expect(progress.getAttribute('max')).to.equal('100');
      expect(progress.getAttribute('value')).to.equal('100');
      expect(valueRight!.textContent!.trim()).to.equal('100%');
    });

    it('should clamp negative values to 0', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar value="-20" value-bottom></sd-progress-bar>`);

      const progress = getProgress(el);
      const valueBottom = el.shadowRoot!.querySelector('[part="value-bottom"]');

      expect(progress.getAttribute('value')).to.equal('0');
      expect(valueBottom!.textContent!.trim()).to.equal('0%');
    });
  });

  describe('special modes', () => {
    it('should render loading mode without value and with loading text', async () => {
      el = await fixture<SdProgressBar>(html`<sd-progress-bar loading></sd-progress-bar>`);

      const progress = getProgress(el);

      expect(progress.classList.contains('loading')).to.equal(true);
      expect(progress.getAttribute('value')).to.equal(null);
      expect(progress.getAttribute('aria-valuetext')).to.equal('Loading');
    });

    it('should apply inverted classes to progress and value output', async () => {
      el = await fixture<SdProgressBar>(html`
        <sd-progress-bar inverted label="Inverted" value="60" value-right value-bottom></sd-progress-bar>
      `);

      const progress = getProgress(el);
      const label = el.shadowRoot!.querySelector('[part="label"]');
      const valueRight = el.shadowRoot!.querySelector('[part="value-right"]');
      const valueBottom = el.shadowRoot!.querySelector('[part="value-bottom"]');

      expect(progress.classList.contains('sd-progress-bar__slide-bar--inverted-color-background')).to.equal(true);
      expect(label!.classList.contains('text-white')).to.equal(true);
      expect(valueRight!.classList.contains('text-white')).to.equal(true);
      expect(valueBottom!.classList.contains('text-white')).to.equal(true);
    });
  });
});
