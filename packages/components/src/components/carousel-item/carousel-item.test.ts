import { expect, fixture, html } from '@open-wc/testing';
import type SdCarouselItem from './carousel-item';

describe('<sd-carousel-item>', () => {
  it('should render a component', async () => {
    const el = await fixture<SdCarouselItem>(html` <sd-carousel-item>Test Content</sd-carousel-item> `);

    expect(el).to.exist;
  });

  it('should pass accessibility tests', async () => {
    // Arrange
    const el = await fixture<SdCarouselItem>(html` <sd-carousel-item>Test Content</sd-carousel-item> `);

    // Assert
    await expect(el).to.be.accessible();
  });
});
