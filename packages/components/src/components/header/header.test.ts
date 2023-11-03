import { expect, fixture, html } from '@open-wc/testing';
import type SdHeader from './header';

describe('<sd-header>', () => {
  it('renders header correctly', async () => {
    const el = await fixture<SdHeader>(html`<sd-header></sd-header>`);

    expect(el.fixed).to.be.false;
    expect(el.autoSpacing).to.be.true;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="main"]')).to.exist;
  });

  it('allows to set fixed property', async () => {
    const el = await fixture<SdHeader>(html`<sd-header .fixed=${true}></sd-header>`);
    expect(el.fixed).to.be.true;
  });

  it('allows to set auto-spacing property', async () => {
    const el = await fixture<SdHeader>(html`<sd-header .autoSpacing=${false}></sd-header>`);
    expect(el.autoSpacing).to.be.false;
  });

  it('sets body style padding-top when auto-spacing is true', async () => {
    await fixture<SdHeader>(html`<sd-header .autoSpacing=${true}></sd-header>`);
    // Timeout for ResizeObserver to run
    await new Promise(r => setTimeout(r, 100));
    expect(document.body.style.paddingTop).to.not.be.empty;
  });

  it('applies correct custom CSS properties', async () => {
    const el = await fixture<SdHeader>(
      html`<sd-header
        style="--sd-header-inner-width: 100px; --sd-header-inner-max-width: 500px; --sd-header-padding-top: 10px; --sd-header-padding-bottom: 20px;"
      ></sd-header>`
    );
    const shadowRoot = el.shadowRoot!;
    const mainPart = shadowRoot.querySelector('[part="main"]')!;
    const computedStyles = getComputedStyle(mainPart);

    expect(computedStyles.width).to.equal('100px');
    expect(computedStyles.maxWidth).to.equal('500px');
    expect(computedStyles.paddingTop).to.equal('10px');
    expect(computedStyles.paddingBottom).to.equal('20px');
  });
});
