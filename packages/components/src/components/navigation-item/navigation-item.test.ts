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

    // Events
    it('emits "sd-mouse-enter" / "sd-mouse-leave" events when mouse enters / leaves', async () => {
      const el = await fixture<SdNavigationItem>(variants.button.default);
      const button = el.shadowRoot!.querySelector('button');
      const mouseEnterHandler = sinon.spy();
      const mouseLeaveHandler = sinon.spy();

      el.addEventListener('sd-mouse-enter', mouseEnterHandler);
      el.addEventListener('sd-mouse-leave', mouseLeaveHandler);

      // Trigger mouseenter event
      const mouseEnterEvent = new MouseEvent('mouseenter');
      button!.dispatchEvent(mouseEnterEvent);

      // Wait for event handling
      await el.updateComplete;

      // Trigger mouseleave event
      const mouseLeaveEvent = new MouseEvent('mouseleave');
      button!.dispatchEvent(mouseLeaveEvent);

      // Wait for event handling
      await el.updateComplete;

      expect(mouseEnterHandler).to.have.been.calledOnce;
      expect(mouseLeaveHandler).to.have.been.calledOnce;
    });

    it('emits "sd-click" event with no detail property when clicked', async () => {
      const el = await fixture<SdNavigationItem>(variants.button.default);
      const button = el.shadowRoot!.querySelector('button');

      const clickHandler = sinon.spy();

      el.addEventListener('sd-click', clickHandler);

      button!.click();

      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.not.have.been.calledWith(sinon.match.has('detail', sinon.match.has('open')));
      expect(button).to.not.have.attribute('open');
    });

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

      it('should not emit any events', async () => {
        const el = await fixture<SdNavigationItem>(variants.button.disabled);
        const button = el.shadowRoot!.querySelector('button');
        const mouseEnterHandler = sinon.spy();
        const mouseLeaveHandler = sinon.spy();

        el.addEventListener('sd-mouse-enter', mouseEnterHandler);
        el.addEventListener('sd-mouse-leave', mouseLeaveHandler);

        // Trigger mouseenter event
        const mouseEnterEvent = new MouseEvent('mouseenter');
        button!.dispatchEvent(mouseEnterEvent);

        // Wait for event handling
        await el.updateComplete;

        // Trigger mouseleave event
        const mouseLeaveEvent = new MouseEvent('mouseleave');
        button!.dispatchEvent(mouseLeaveEvent);

        // Wait for event handling
        await el.updateComplete;

        expect(mouseEnterHandler).not.to.have.been.calledOnce;
        expect(mouseLeaveHandler).not.to.have.been.calledOnce;
      });
    });
  });

  // Test overriding link variant
  describe('when given an "href" property', () => {
    // Render
    it('only renders an anchor element, regardless of children', async () => {
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
    it('emits "sd-mouse-enter" / "sd-mouse-leave" events when mouse enters / leaves', async () => {
      const el = await fixture<SdNavigationItem>(variants.link.default);
      const link = el.shadowRoot!.querySelector('a');
      const mouseEnterHandler = sinon.spy();
      const mouseLeaveHandler = sinon.spy();

      el.addEventListener('sd-mouse-enter', mouseEnterHandler);
      el.addEventListener('sd-mouse-leave', mouseLeaveHandler);

      // Trigger mouseenter event
      const mouseEnterEvent = new MouseEvent('mouseenter');
      link!.dispatchEvent(mouseEnterEvent);

      // Wait for event handling
      await el.updateComplete;

      // Trigger mouseleave event
      const mouseLeaveEvent = new MouseEvent('mouseleave');
      link!.dispatchEvent(mouseLeaveEvent);

      // Wait for event handling
      await el.updateComplete;

      expect(mouseEnterHandler).to.have.been.calledOnce;
      expect(mouseLeaveHandler).to.have.been.calledOnce;
    });

    it('does not emit "sd-click" event when clicked', async () => {
      const el = await fixture<SdNavigationItem>(variants.link.default);
      const link = el.shadowRoot!.querySelector('a');
      const clickHandler = sinon.spy();

      // Add an event listener
      el.addEventListener('sd-click', clickHandler);

      // Dispatch a click event with a delay
      setTimeout(() => {
        const clickEvent = new MouseEvent('click');
        link!.dispatchEvent(clickEvent);
      });

      // Wait for the event loop to process the click event
      await new Promise(resolve => setTimeout(resolve, 0));

      // Ensure that the "sd-click" event was not emitted
      expect(clickHandler.called).to.be.false;
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

      it('should not emit any events', async () => {
        const el = await fixture<SdNavigationItem>(variants.link.disabled);
        const link = el.shadowRoot!.querySelector('a');
        const mouseEnterHandler = sinon.spy();
        const mouseLeaveHandler = sinon.spy();

        el.addEventListener('sd-mouse-enter', mouseEnterHandler);
        el.addEventListener('sd-mouse-leave', mouseLeaveHandler);

        // Trigger mouseenter event
        const mouseEnterEvent = new MouseEvent('mouseenter');
        link!.dispatchEvent(mouseEnterEvent);

        // Wait for event handling
        await el.updateComplete;

        // Trigger mouseleave event
        const mouseLeaveEvent = new MouseEvent('mouseleave');
        link!.dispatchEvent(mouseLeaveEvent);

        // Wait for event handling
        await el.updateComplete;

        expect(mouseEnterHandler).not.to.have.been.calledOnce;
        expect(mouseLeaveHandler).not.to.have.been.calledOnce;
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
    it('emits "sd-mouse-enter" / "sd-mouse-leave" events when mouse enters / leaves', async () => {
      const el = await fixture<SdNavigationItem>(variants.accordion.default);
      const summary = el.shadowRoot!.querySelector('summary');
      const mouseEnterHandler = sinon.spy();
      const mouseLeaveHandler = sinon.spy();

      el.addEventListener('sd-mouse-enter', mouseEnterHandler);
      el.addEventListener('sd-mouse-leave', mouseLeaveHandler);

      // Trigger mouseenter event
      const mouseEnterEvent = new MouseEvent('mouseenter');
      summary!.dispatchEvent(mouseEnterEvent);

      // Wait for event handling
      await el.updateComplete;

      // Trigger mouseleave event
      const mouseLeaveEvent = new MouseEvent('mouseleave');
      summary!.dispatchEvent(mouseLeaveEvent);

      // Wait for event handling
      await el.updateComplete;

      expect(mouseEnterHandler).to.have.been.calledOnce;
      expect(mouseLeaveHandler).to.have.been.calledOnce;
    });

    it('emits "sd-click" event with detail property "open" set to true when clicking closed HTML details element summary', async () => {
      const el = await fixture<SdNavigationItem>(variants.accordion.default);
      const details = el.shadowRoot!.querySelector('details');
      const summary = el.shadowRoot!.querySelector('summary');
      const clickHandler = sinon.spy();

      el.addEventListener('sd-click', clickHandler);

      summary!.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledWith(sinon.match.has('detail', sinon.match.has('open', true)));
      expect(details).to.have.attribute('open');
    });

    it('emits "sd-click" event with detail property "open" set to false when clicking open HTML details element summary', async () => {
      const el = await fixture<SdNavigationItem>(
        html`<sd-navigation-item open>Default Slot ${childrenSlot}</sd-navigation-item>;`
      );
      const details = el.shadowRoot!.querySelector('details');
      const summary = el.shadowRoot!.querySelector('summary');
      const clickHandler = sinon.spy();

      el.addEventListener('sd-click', clickHandler);

      summary!.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledWith(sinon.match.has('detail', sinon.match.has('open', false)));
      expect(details).to.not.have.attribute('open');
    });

    // TODO: Fix following two tests, two attempts at the same thing
    // TODO: Add complete keydown testing to all variants
    // REVIEWER: I don't understand how to fix keydown tests for this component

    // it('should toggle accordion when Enter key is pressed on the summary', async () => {
    //   const el = await fixture<SdNavigationItem>(variants.accordion.default);
    //   const summary = el.shadowRoot!.querySelector('summary')!;
    //   const keydownHandler = sinon.spy();

    //   el.addEventListener('sd-click', keydownHandler);

    //   // Simulate Enter key press
    //   const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    //   summary.dispatchEvent(enterEvent);

    //   await waitUntil(() => keydownHandler.calledOnce);

    //   expect(keydownHandler.calledOnce).to.be.true;
    // });

    // it('emits "sd-click" event with detail property "open" set to true when pressing Enter key while focused on closed HTML details element summary', async () => {
    //   const el = await fixture<SdNavigationItem>(variants.accordion.default);
    //   const summary = el.shadowRoot!.querySelector('summary');
    //   const keydownHandler = sinon.spy();

    //   el.addEventListener('sd-click', keydownHandler);

    //   // Simulate Enter key press
    //   const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    //   summary!.dispatchEvent(enterEvent);

    //   // Wait for event handling
    //   await el.updateComplete;

    //   expect(keydownHandler).to.have.been.calledOnce;
    // });

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

      it('should not emit any events', async () => {
        const el = await fixture<SdNavigationItem>(variants.accordion.disabled);
        const summary = el.shadowRoot!.querySelector('summary');
        const mouseEnterHandler = sinon.spy();
        const mouseLeaveHandler = sinon.spy();

        el.addEventListener('sd-mouse-enter', mouseEnterHandler);
        el.addEventListener('sd-mouse-leave', mouseLeaveHandler);

        // Trigger mouseenter event
        const mouseEnterEvent = new MouseEvent('mouseenter');
        summary!.dispatchEvent(mouseEnterEvent);

        // Wait for event handling
        await el.updateComplete;

        // Trigger mouseleave event
        const mouseLeaveEvent = new MouseEvent('mouseleave');
        summary!.dispatchEvent(mouseLeaveEvent);

        // Wait for event handling
        await el.updateComplete;

        expect(mouseEnterHandler).not.to.have.been.calledOnce;
        expect(mouseLeaveHandler).not.to.have.been.calledOnce;
      });
    });
  });
});
