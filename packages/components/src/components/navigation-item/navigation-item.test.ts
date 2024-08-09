import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdNavigationItem from './navigation-item';

const defaultSlot = 'Default Slot';
const childrenSlot = html`<div slot="children">Children</div>`;
const variants = {
  button: {
    default: html`<sd-navigation-item>${defaultSlot}</sd-navigation-item>`,
    current: html`<sd-navigation-item current>${defaultSlot}</sd-navigation-item>`,
    disabled: html`<sd-navigation-item disabled>${defaultSlot}</sd-navigation-item>`
  },
  link: {
    default: html`<sd-navigation-item href="#">${defaultSlot}</sd-navigation-item>`,
    current: html`<sd-navigation-item current href="#">${defaultSlot}</sd-navigation-item>`,
    disabled: html`<sd-navigation-item disabled href="#">${defaultSlot}</sd-navigation-item>`,
    children: html`<sd-navigation-item href="#">${defaultSlot}${childrenSlot}</sd-navigation-item>`
  },
  accordion: {
    default: html`<sd-navigation-item>${defaultSlot}${childrenSlot}</sd-navigation-item>`,
    current: html`<sd-navigation-item current>${defaultSlot}${childrenSlot}</sd-navigation-item>`,
    disabled: html`<sd-navigation-item disabled>${defaultSlot}${childrenSlot}</sd-navigation-item>`
  }
};

describe('<sd-navigation-item>', () => {
  // Test default button variant
  describe('by default', () => {
    // Render
    it('only renders a button element', async () => {
      const el = await fixture<SdNavigationItem>(variants.button.default);

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('a')).to.not.exist;
      expect(el.shadowRoot!.querySelector('button')).to.exist;
      expect(el.shadowRoot!.querySelector('summary')).to.not.exist;
      expect(el.shadowRoot!.querySelector('details')).to.not.exist;
    });

    // Accessibility
    it('passes accessibility test', async () => {
      const el = await fixture<SdNavigationItem>(variants.button.default);
      await expect(el).to.be.accessible();
    });

    it('adds aria-current: "page" to <a> when current is true', async () => {
      const el = await fixture<SdNavigationItem>(variants.link.current);
      const link = el.shadowRoot!.querySelector('a');
      expect(link).attribute('aria-current', 'page');
    });

    it('should not render href on element itself if no href provided', async () => {
      const el = await fixture<SdNavigationItem>(variants.button.default);
      expect(el).not.to.have.attribute('href');
    });

    // Events
    describe('when disabled', () => {
      it('passes accessibility test', async () => {
        const el = await fixture<SdNavigationItem>(variants.button.disabled);
        await expect(el).to.be.accessible();
      });

      it('adds aria-disabled', async () => {
        const el = await fixture<SdNavigationItem>(variants.button.disabled);
        const button = el.shadowRoot!.querySelector('button');
        expect(button).attribute('aria-disabled');
      });

      it('should disable the native <button>', async () => {
        const el = await fixture<SdNavigationItem>(variants.button.disabled);
        expect(el.shadowRoot!.querySelector('button[disabled]')).to.exist;
      });

      it('should not emit any events when disabled', async () => {
        const el = await fixture<SdNavigationItem>(variants.button.disabled);
        const button = el.shadowRoot!.querySelector('button');
        const focusHandler = sinon.spy();
        const clickHandler = sinon.spy();

        el.addEventListener('focus', focusHandler);
        el.addEventListener('click', clickHandler);

        // Trigger focus event
        el.disabled = true; // Simulate focusing on the disabled element
        el.focus();

        // Wait for event handling
        await el.updateComplete;

        // Simulate a click on the disabled element
        const clickEvent = new MouseEvent('click');
        button!.dispatchEvent(clickEvent);

        // Wait for event handling
        await el.updateComplete;

        expect(focusHandler.calledOnce).to.be.false;
        expect(clickHandler.calledOnce).to.be.false;
      });
    });
  });

  // Test overriding link variant
  describe('when given an "href" property', () => {
    // Render
    it('only renders an anchor element regardless of children', async () => {
      const el = await fixture<SdNavigationItem>(variants.link.children);

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('a')).to.exist;
      expect(el.shadowRoot!.querySelector('button')).to.not.exist;
      expect(el.shadowRoot!.querySelector('summary')).to.not.exist;
      expect(el.shadowRoot!.querySelector('details')).to.not.exist;
    });

    // Accessibility
    it('passes accessibility test', async () => {
      const el = await fixture<SdNavigationItem>(variants.link.default);
      await expect(el).to.be.accessible();
    });

    it('adds aria-current: "page" to <a> when current is true', async () => {
      const el = await fixture<SdNavigationItem>(variants.link.current);
      const link = el.shadowRoot!.querySelector('a');
      expect(link).attribute('aria-current', 'page');
    });

    // Events
    it('should not emit any events when disabled', async () => {
      const el = await fixture<SdNavigationItem>(variants.link.disabled);
      const link = el.shadowRoot!.querySelector('a');
      const focusHandler = sinon.spy();
      const clickHandler = sinon.spy();

      el.addEventListener('focus', focusHandler);
      el.addEventListener('click', clickHandler);

      // Trigger focus event
      el.disabled = true; // Simulate focusing on the disabled element
      el.focus();

      // Wait for event handling
      await el.updateComplete;

      // Simulate a click on the disabled element
      const clickEvent = new MouseEvent('click');
      link!.dispatchEvent(clickEvent);

      // Wait for event handling
      await el.updateComplete;

      expect(focusHandler.calledOnce).to.be.false;
      expect(clickHandler.calledOnce).to.be.false;
    });

    describe('when disabled', () => {
      it('passes accessibility test', async () => {
        const el = await fixture<SdNavigationItem>(variants.link.disabled);
        await expect(el).to.be.accessible();
      });

      it('adds aria-disabled', async () => {
        const el = await fixture<SdNavigationItem>(variants.link.disabled);
        const link = el.shadowRoot!.querySelector('a');
        expect(link).attribute('aria-disabled');
      });

      it('should not disable the native <a>', async () => {
        const el = await fixture<SdNavigationItem>(variants.link.disabled);
        const link = el.shadowRoot!.querySelector('a');
        expect(link).not.to.have.attribute('disabled');
      });
    });
  });

  // Test accordion variant
  describe('when given a value for the "children" slot', () => {
    // Render
    it('only renders a details and summary element pair', async () => {
      const el = await fixture<SdNavigationItem>(variants.accordion.default);

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('a')).to.not.exist;
      expect(el.shadowRoot!.querySelector('button')).to.not.exist;
      expect(el.shadowRoot!.querySelector('summary')).to.exist;
      expect(el.shadowRoot!.querySelector('details')).to.exist;
    });

    // Accessibility
    it('passes accessibility test', async () => {
      const el = await fixture<SdNavigationItem>(variants.accordion.default);
      await expect(el).to.be.accessible();
    });

    it('adds aria-current: "page" to <summary> when current is true', async () => {
      const el = await fixture<SdNavigationItem>(variants.accordion.current);
      const summary = el.shadowRoot!.querySelector('summary');
      expect(summary).attribute('aria-current', 'page');
    });

    it('adds aria-controls: "navigation-item-details" to <summary>', async () => {
      const el = await fixture<SdNavigationItem>(variants.accordion.default);
      const summary = el.shadowRoot!.querySelector('summary');
      expect(summary).attribute('aria-controls', 'navigation-item-details');
    });

    // Events
    it('emits "sd-show" event when clicking closed HTML details element summary', async () => {
      const el = await fixture<SdNavigationItem>(variants.accordion.default);

      const details = el.shadowRoot!.querySelector('details');
      const summary = el.shadowRoot!.querySelector('summary');
      const clickHandler = sinon.spy();

      el.addEventListener('sd-show', clickHandler);

      summary!.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledOnce;
      expect(details).to.have.attribute('open');
    });

    it('emits "sd-hide" when clicking open HTML details element summary', async () => {
      const el = await fixture<SdNavigationItem>(
        html`<sd-navigation-item open>Default Slot ${childrenSlot}</sd-navigation-item>;`
      );
      const details = el.shadowRoot!.querySelector('details');
      const summary = el.shadowRoot!.querySelector('summary');
      const clickHandler = sinon.spy();

      el.addEventListener('sd-hide', clickHandler);

      summary!.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledOnce;
      expect(details).to.not.have.attribute('open');
    });

    describe('when disabled', () => {
      it('passes accessibility test', async () => {
        const el = await fixture<SdNavigationItem>(variants.accordion.disabled);
        await expect(el).to.be.accessible();
      });

      it('adds aria-disabled', async () => {
        const el = await fixture<SdNavigationItem>(variants.accordion.disabled);
        const summary = el.shadowRoot!.querySelector('summary');
        expect(summary).attribute('aria-disabled');
      });

      it('should disable the native <summary> element', async () => {
        const el = await fixture<SdNavigationItem>(variants.accordion.disabled);
        const summary = el.shadowRoot!.querySelector('summary');
        expect(summary).attribute('aria-disabled');
      });

      it('should not emit any events when disabled', async () => {
        const el = await fixture<SdNavigationItem>(variants.accordion.disabled);
        const summary = el.shadowRoot!.querySelector('summary');
        const focusHandler = sinon.spy();
        const clickHandler = sinon.spy();
        const showHandler = sinon.spy();
        const hideHandler = sinon.spy();

        el.addEventListener('focus', focusHandler);
        el.addEventListener('click', clickHandler);
        el.addEventListener('sd-show', showHandler);
        el.addEventListener('sd-hide', hideHandler);

        // Trigger focus event
        el.disabled = true; // Simulate focusing on the disabled element
        el.focus();

        // Wait for event handling
        await el.updateComplete;

        // Simulate a click on the disabled element
        const clickEvent = new MouseEvent('click');
        summary!.dispatchEvent(clickEvent);

        // Wait for event handling
        await el.updateComplete;

        expect(focusHandler.calledOnce).to.be.false;
        expect(clickHandler.calledOnce).to.be.false;
        expect(showHandler.calledOnce).to.be.false;

        // Simulate a second click on the disabled element
        const clickAgainEvent = new MouseEvent('click');
        summary!.dispatchEvent(clickAgainEvent);

        expect(hideHandler.calledOnce).to.be.false;
      });
    });
  });

  // Test separate variant
  describe('when given a value for the "children" slot, an "href" property and "separate" property is true', () => {
    it('renders an accordion with a link simultaneously', async () => {
      const el = await fixture<SdNavigationItem>(
        html`<sd-navigation-item separated href="#" vertical chevron>Navigation</sd-navigation-item>`
      );

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('a')).to.exist;
      expect(el.shadowRoot!.querySelector('button')).to.exist;
      expect(el.shadowRoot!.querySelector('summary')).to.not.exist;
      expect(el.shadowRoot!.querySelector('details')).to.not.exist;
    });

    it('renders an open accordion with children slot and a link simultaneously', async () => {
      const el = await fixture<SdNavigationItem>(
        html`<sd-navigation-item separated href="#" vertical chevron open
          >Navigation${childrenSlot}</sd-navigation-item
        >`
      );

      expect(el).to.exist;
      expect(el.shadowRoot!.querySelector('a')).to.exist;
      expect(el.shadowRoot!.querySelector('button')).to.exist;
      expect(el.shadowRoot!.querySelector('summary')).to.not.exist;
      expect(el.shadowRoot!.querySelector('details')).to.not.exist;
    });

    //Accessibility
    it('passes accessibility test', async () => {
      const el = await fixture<SdNavigationItem>(
        html`<sd-navigation-item href="#" separated>${defaultSlot}${childrenSlot}</sd-navigation-item>`
      );
      await expect(el).to.be.accessible();
    });
  });
});
