// cspell:dictionaries lorem-ipsum
import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdDialog from './dialog';

describe('<sd-dialog>', () => {
  const createFinishedAnimation = () => {
    const animation: Partial<Animation> = {
      addEventListener: (type: string, listener: EventListenerOrEventListenerObject) => {
        if (type === 'finish') {
          requestAnimationFrame(() => {
            if (typeof listener === 'function') {
              listener(new Event('finish'));
            } else {
              listener.handleEvent(new Event('finish'));
            }
          });
        }
      }
    };

    return animation as Animation;
  };

  const getPanelShowKeyframes = async (el: SdDialog) => {
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part~="overlay"]')!;
    const panelAnimate = sinon.stub(panel, 'animate').callsFake(() => createFinishedAnimation());
    const overlayAnimate = sinon.stub(overlay, 'animate').callsFake(() => createFinishedAnimation());

    try {
      await el.show();

      return panelAnimate.firstCall.args[0] as Keyframe[];
    } finally {
      panelAnimate.restore();
      overlayAnimate.restore();
    }
  };

  it('should be visible with the open attribute', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should include a close button by default', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    const closeButton = el.shadowRoot!.querySelector<HTMLElement>('[part~="close-button"]')!;

    expect(closeButton).to.exist;
  });

  it('should hide close button when no-close-button = true', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog open no-close-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    const closeButton = el.shadowRoot!.querySelector<HTMLElement>('[part~="close-button"]')!;

    expect(closeButton).not.to.exist;
  });

  it('should emit sd-show and sd-after-show when calling show()', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  describe('when themes change', () => {
    it('should use the simple motion for non-UI themes', async () => {
      const el = await fixture<SdDialog>(html`
        <sd-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
      `);
      const keyframes = await getPanelShowKeyframes(el);

      expect(keyframes[0]).to.deep.equal({ opacity: 0, scale: 0.8 });
      expect(keyframes[1]).to.deep.equal({ opacity: 1, scale: 1 });
    });

    it('should use the UI motion for UI themes', async () => {
      const wrapper = await fixture<HTMLElement>(html`
        <div class="sd-theme-ui-light">
          <sd-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
        </div>
      `);
      const el = wrapper.querySelector<SdDialog>('sd-dialog')!;
      const keyframes = await getPanelShowKeyframes(el);

      expect(keyframes[0]).to.deep.equal({ opacity: 0, transform: 'translate(-50%, 100%)' });
      expect(keyframes[1]).to.deep.equal({ opacity: 1, transform: 'translate(0, 0)' });
    });
  });

  it('should emit sd-hide and sd-after-hide when calling hide()', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit sd-show and sd-after-show when setting open = true', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit sd-hide and sd-after-hide when setting open = false', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should not close when sd-request-close is prevented', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part~="overlay"]')!;

    el.addEventListener('sd-request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<SdDialog>(html` <sd-dialog><input /></sd-dialog> `);
    const input = el.querySelector('input')!;
    const initialFocusHandler = sinon.spy((event: Event) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('sd-initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });

  it('should close when pressing Escape', async () => {
    const el = await fixture<SdDialog>(html` <sd-dialog open></sd-dialog> `);
    const hideHandler = sinon.spy();

    el.addEventListener('sd-hide', hideHandler);

    await sendKeys({ press: 'Escape' });
    await waitUntil(() => hideHandler.calledOnce);

    expect(el.open).to.be.false;
  });

  it('should focus trigger element that was focused before after closing', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);

    const trigger = document.createElement('button');
    trigger.id = 'trigger';
    trigger.textContent = 'Trigger';
    document.body.appendChild(trigger);

    // set event listener to focus trigger
    trigger.addEventListener('click', () => {
      el.show();
    });

    // focus trigger element
    trigger.focus();
    expect(document.activeElement).to.equal(trigger);

    // open dialog
    trigger.click();
    await waitUntil(() => el.open);
    expect(el.open).to.be.true;

    // close dialog
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part~="overlay"]')!;
    overlay.click();

    // wait until dialog is closed
    await waitUntil(() => !el.open);
    expect(document.activeElement).to.equal(trigger);
  });

  it('should focus trigger element inside a web component with Shadow Root that was focused before after closing', async () => {
    const el = await fixture<SdDialog>(html`
      <sd-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sd-dialog>
    `);
    // register a web component with Shadow Root
    class TestElement extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const trigger = document.createElement('button');
        trigger.id = 'trigger';
        trigger.textContent = 'Trigger';
        shadow.appendChild(trigger);
      }
    }
    customElements.define('test-element', TestElement);
    const testElement = document.createElement('test-element');
    document.body.appendChild(testElement);
    const trigger = testElement.shadowRoot!.querySelector<HTMLElement>('#trigger')!;

    // set event listener to focus trigger
    trigger.addEventListener('click', () => {
      el.show();
    });

    // focus trigger element
    trigger.focus();

    // open dialog
    trigger.click();
    await waitUntil(() => el.open);
    expect(el.open).to.be.true;

    // close dialog
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part~="overlay"]')!;
    overlay.click();

    // wait until dialog is closed
    await waitUntil(() => !el.open);
    const activeElementInsideTestElement = testElement.shadowRoot!.activeElement;
    expect(activeElementInsideTestElement).to.equal(trigger);
  });
});
