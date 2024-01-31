import { expect, fixture, html } from '@open-wc/testing';
import type SdTeaserMedia from './teaser-media';

describe('<sd-teaser-media>', () => {
  it('renders default values correctly', async () => {
    const el = await fixture<SdTeaserMedia>(html`<sd-teaser-media></sd-teaser-media>`);

    expect(el.variant).to.equal('white');
  });
});
