import '../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type SdButton from '../components/button/button';

describe('CustomAttributesController', () => {
  describe('single object format', () => {
    it('should apply a single attribute to the base element', async () => {
      const el = await fixture<SdButton>(html`
        <sd-button custom-attributes='{"aria-label": "Test Label"}'>Button</sd-button>
      `);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement).to.exist;
      expect(baseElement!.getAttribute('aria-label')).to.equal('Test Label');
    });

    it('should apply multiple attributes from a single object', async () => {
      const el = await fixture<SdButton>(html`
        <sd-button custom-attributes='{"aria-expanded": "false", "aria-haspopup": "true"}'>Button</sd-button>
      `);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('aria-expanded')).to.equal('false');
      expect(baseElement!.getAttribute('aria-haspopup')).to.equal('true');
    });
  });

  describe('array of objects format', () => {
    it('should apply attributes from an array of objects', async () => {
      const el = await fixture<SdButton>(html`
        <sd-button custom-attributes='[{"aria-expanded": "false"}, {"aria-haspopup": "true"}]'>Button</sd-button>
      `);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('aria-expanded')).to.equal('false');
      expect(baseElement!.getAttribute('aria-haspopup')).to.equal('true');
    });
  });

  describe('targeted queries', () => {
    it('should apply attributes to elements matching part query', async () => {
      const el = await fixture<SdButton>(html`
        <sd-button custom-attributes='[{"query": "base", "attributes": [{"aria-label": "Targeted Label"}]}]'>
          Button
        </sd-button>
      `);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('aria-label')).to.equal('Targeted Label');
    });

    it('should apply base attributes and targeted attributes together', async () => {
      const el = await fixture<SdButton>(html`
        <sd-button
          custom-attributes='[{"aria-expanded": "false"}, {"query": "base", "attributes": [{"aria-label": "Targeted"}]}]'
        >
          Button
        </sd-button>
      `);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('aria-expanded')).to.equal('false');
      expect(baseElement!.getAttribute('aria-label')).to.equal('Targeted');
    });
  });

  describe('setCustomAttributes method', () => {
    it('should apply attributes programmatically with a single object', async () => {
      const el = await fixture<SdButton>(html`<sd-button>Button</sd-button>`);

      el.setCustomAttributes({ 'aria-label': 'Programmatic Label' });
      await el.updateComplete;

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('aria-label')).to.equal('Programmatic Label');
    });

    it('should apply attributes programmatically with an array', async () => {
      const el = await fixture<SdButton>(html`<sd-button>Button</sd-button>`);

      el.setCustomAttributes([{ 'aria-expanded': 'true' }, { 'aria-pressed': 'false' }]);
      await el.updateComplete;

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('aria-expanded')).to.equal('true');
      expect(baseElement!.getAttribute('aria-pressed')).to.equal('false');
    });
  });

  describe('attribute updates', () => {
    it('should clear old attributes when value changes', async () => {
      const el = await fixture<SdButton>(html`
        <sd-button custom-attributes='{"aria-label": "Old Label"}'>Button</sd-button>
      `);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('aria-label')).to.equal('Old Label');

      el.setAttribute('custom-attributes', '{"aria-expanded": "true"}');
      await el.updateComplete;

      expect(baseElement!.getAttribute('aria-label')).to.be.null;
      expect(baseElement!.getAttribute('aria-expanded')).to.equal('true');
    });

    it('should clear all attributes when value is removed', async () => {
      const el = await fixture<SdButton>(html`
        <sd-button custom-attributes='{"aria-label": "Test Label"}'>Button</sd-button>
      `);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('aria-label')).to.equal('Test Label');

      el.removeAttribute('custom-attributes');
      await el.updateComplete;

      expect(baseElement!.getAttribute('aria-label')).to.be.null;
    });
  });

  describe('error handling', () => {
    it('should handle invalid JSON gracefully', async () => {
      const consoleErrorSpy = sinon.spy(console, 'error');

      const el = await fixture<SdButton>(html` <sd-button custom-attributes="not valid json">Button</sd-button> `);

      expect(consoleErrorSpy.calledOnce).to.be.true;

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      // Should not have any custom attributes applied
      expect(baseElement!.getAttribute('aria-label')).to.be.null;

      consoleErrorSpy.restore();
    });

    it('should handle null/empty values', async () => {
      const el = await fixture<SdButton>(html`<sd-button custom-attributes="">Button</sd-button>`);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      // Should render without errors
      expect(baseElement).to.exist;
    });
  });

  describe('non-aria attributes', () => {
    it('should allow setting any attribute, not just aria-*', async () => {
      const el = await fixture<SdButton>(html`
        <sd-button custom-attributes='{"data-testid": "my-button", "role": "switch"}'>Button</sd-button>
      `);

      const baseElement = el.shadowRoot!.querySelector('[part~="base"]');
      expect(baseElement!.getAttribute('data-testid')).to.equal('my-button');
      expect(baseElement!.getAttribute('role')).to.equal('switch');
    });
  });
});
