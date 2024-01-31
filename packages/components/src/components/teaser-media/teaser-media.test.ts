import { expect, fixture, html } from '@open-wc/testing';
import type SdTeaserMedia from './teaser-media';

describe('<sd-teaser-media>', () => {
  it('renders default values correctly', async () => {
    const el = await fixture<SdTeaserMedia>(html`<sd-teaser-media></sd-teaser-media>`);

    expect(el.variant).to.equal('white');
  });

  it('renders assigned values correctly', async () => {
    const el = await fixture<SdTeaserMedia>(html`<sd-teaser-media variant="neutral-100"></sd-teaser-media>`);

    expect(el.variant).to.equal('neutral-100');
  });

  it('renders slots correctly', async () => {
    const el = await fixture<SdTeaserMedia>(html`
      <sd-teaser-media>
        <div slot="media">Media</div>
        <div slot="meta">Meta</div>
        <div slot="headline">Headline</div>
        <div slot="main">Main</div>
        <div slot="expandable">Expandable</div>
      </sd-teaser-media>
    `);

    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="media"]')).to.exist;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="meta"]')).to.exist;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="headline"]')).to.exist;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="main"]')).to.exist;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="expandable"]')).to.exist;
  });

  it('hides slots correctly', async () => {
    const el = await fixture<SdTeaserMedia>(html` <sd-teaser-media> </sd-teaser-media> `);

    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="media"]')?.classList.contains('hidden')).to.be.true;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="meta"]')?.classList.contains('hidden')).to.be.true;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="main"]')?.classList.contains('hidden')).to.be.true;
    expect(el.shadowRoot!.querySelector<HTMLElement>('[part~="expandable"]')?.classList.contains('hidden')).to.be.true;
  });
});
