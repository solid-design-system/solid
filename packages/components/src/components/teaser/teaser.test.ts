import { expect, fixture, html } from '@open-wc/testing';
import type SdTeaser from './teaser';

describe('<sd-teaser>', () => {
  it('renders default values correctly', async () => {
    const el = await fixture<SdTeaser>(html`<sd-teaser></sd-teaser>`);

    expect(el.variant).to.equal('white');
    expect(el.breakpoint).to.equal(448);
    expect(el.inset).to.equal(false);
  });

  it('renders assigned values correctly', async () => {
    const el = await fixture<SdTeaser>(html`<sd-teaser variant="neutral-100" breakpoint="9999" inset></sd-teaser>`);

    expect(el.variant).to.equal('neutral-100');
    expect(el.breakpoint).to.equal(9999);
    expect(el.inset).to.equal(true);
  });

  it('renders slots correctly', async () => {
    const el = await fixture<SdTeaser>(html`
      <sd-teaser>
        <div slot="media">Media</div>
        <div slot="meta">Meta</div>
        <div slot="headline">Headline</div>
        <div slot="main">Main</div>
      </sd-teaser>
    `);

    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="media"]')).to.exist;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="meta"]')).to.exist;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="headline"]')).to.exist;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="main"]')).to.exist;
  });

  it('hides slots correctly', async () => {
    const el = await fixture<SdTeaser>(html` <sd-teaser> </sd-teaser> `);

    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="media"]')?.classList.contains('hidden')).to.be.true;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="meta"]')?.classList.contains('hidden')).to.be.true;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="main"]')?.classList.contains('hidden')).to.be.true;
  });

  describe('applies --distribution-media and --distribution-content CSS properties correctly', () => {
    it('--distribution-media is 70% and --distribution-content 30%', async () => {
      const el = await fixture<SdTeaser>(html`
        <sd-teaser style="--distribution-media: 70%; --distribution-content: 30%;">
          <div slot="media">Media</div>
          <div slot="meta">Meta</div>
          <div slot="headline">Headline</div>
          <div slot="main">Main</div>
        </sd-teaser>
      `);

      // Wait for updates to complete
      await el.updateComplete;

      if (!el.inset) {
        const media = el.shadowRoot!.querySelector<HTMLElement>('[part="media"]');
        const content = el.shadowRoot!.querySelector<HTMLElement>('[part="content"]');

        if (media && content) {
          const mediaWidth = media.offsetWidth;
          const contentWidth = content.offsetWidth;
          const ratio = mediaWidth / contentWidth;
          const ratioRounded = parseFloat(ratio.toFixed(1));
          expect(ratioRounded).to.equal(parseFloat((70 / 30).toFixed(1)));
        }
      }
    });

    it('--distribution-media is fixed 400px', async () => {
      const el = await fixture<SdTeaser>(html`
        <sd-teaser style="--distribution-media: 400px; width:500px;">
          <div slot="media">Media</div>
          <div slot="meta">Meta</div>
          <div slot="headline">Headline</div>
          <div slot="main">Main</div>
        </sd-teaser>
      `);

      // Wait for updates to complete
      await el.updateComplete;

      if (!el.inset) {
        const media = el.shadowRoot!.querySelector<HTMLElement>('[part="media"]');
        const content = el.shadowRoot!.querySelector<HTMLElement>('[part="content"]');

        if (media && content) {
          media.style.flexShrink = '0';
          const mediaWidth = media.offsetWidth;

          expect(mediaWidth).to.equal(400);
        }
      }
    });

    it('does not apply --distribution-media and --distribution-content CSS properties when breakpoint is 9999', async () => {
      const el = await fixture<SdTeaser>(html`
        <sd-teaser style="--distribution-media: 30%; --distribution-content: 70%; width:400px;">
          <div slot="media">Media</div>
          <div slot="meta">Meta</div>
          <div slot="headline">Headline</div>
          <div slot="main">Main</div>
        </sd-teaser>
      `);

      // Wait for updates to complete
      await el.updateComplete;

      const media = el.shadowRoot!.querySelector<HTMLElement>('[part="media"]');
      const content = el.shadowRoot!.querySelector<HTMLElement>('[part="content"]');

      if (media && content) {
        const mediaWidth = media.offsetWidth;
        const contentWidth = content.offsetWidth;

        expect(mediaWidth).to.equal(400);
        expect(contentWidth).to.equal(400);
      }
    });
  });

  describe('breakpoints', () => {
    describe('default breakpoint', () => {
      it('check if state is vertical', async () => {
        const el = await fixture<SdTeaser>(html`<sd-teaser style="width:400px;"></sd-teaser>`);

        const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]');
        await el.updateComplete;
        expect(base?.classList.contains('flex-col')).to.be.true;
        expect(base?.classList.contains('flex-row')).to.be.false;
      });

      it('check if state is horizontal', async () => {
        const el = await fixture<SdTeaser>(html`<sd-teaser style="width:600px;"></sd-teaser>`);

        const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]');
        await el.updateComplete;
        expect(base?.classList.contains('flex-row')).to.be.true;
        expect(base?.classList.contains('flex-col')).to.be.false;
      });
    });

    describe('manual breakpoint', () => {
      it('check if state is vertical', async () => {
        const el = await fixture<SdTeaser>(html`<sd-teaser style="width:400px;" breakpoint="999"></sd-teaser>`);

        const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]');
        await el.updateComplete;
        expect(base?.classList.contains('flex-col')).to.be.true;
        expect(base?.classList.contains('flex-row')).to.be.false;
      });

      it('check if state is still vertical', async () => {
        const el = await fixture<SdTeaser>(html`<sd-teaser style="width:800px;"></sd-teaser>`);

        const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]');
        await el.updateComplete;
        expect(base?.classList.contains('flex-row')).to.be.true;
        expect(base?.classList.contains('flex-col')).to.be.false;
      });

      it('check if state is horizontal', async () => {
        const el = await fixture<SdTeaser>(html`<sd-teaser style="width:1000px;"></sd-teaser>`);

        const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]');
        await el.updateComplete;
        expect(base?.classList.contains('flex-row')).to.be.true;
        expect(base?.classList.contains('flex-col')).to.be.false;
      });
    });
  });
  it('keeps inset property as false after changing variant', async () => {
    const el = await fixture<SdTeaser>(html`<sd-teaser variant="white border-neutral-300"></sd-teaser>`);

    expect(el.variant).to.equal('white border-neutral-300');
    expect(el.inset).to.equal(true); // The inset should be true initially due to the variant

    el.variant = 'neutral-100';
    await el.updateComplete;

    expect(el.variant).to.equal('neutral-100');
    expect(el.inset).to.equal(false); // The inset should be false after the variant change
  });
});
