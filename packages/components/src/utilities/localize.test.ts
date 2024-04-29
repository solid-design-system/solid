// import { expect, fixture, html } from '@open-wc/testing';
// import type SdCarousel from 'src/components/carousel/carousel';

// describe('<sd-carousel>', () => {
//   it('should use default localization when no custom localization is set', async () => {
//     const el = await fixture<SdCarousel>(html`<sd-carousel></sd-carousel>`);
//     expect(
//       el.shadowRoot.querySelector('button[part="navigation-button--previous"]').getAttribute('aria-label')
//     ).to.equal('Previous Slide');
//   });

//   it('should apply initial custom localization from attributes', async () => {
//     const el = await fixture(html`<sd-carousel custom-localization='{"previousSlide":"Before"}'></sd-carousel>`);
//     expect(
//       el.shadowRoot.querySelector('button[part="navigation-button--previous"]').getAttribute('aria-label')
//     ).to.equal('Before');
//   });

//   it('should update localization when setCustomLocalization is called', async () => {
//     const el = await fixture(html`<sd-carousel></sd-carousel>`);
//     el.localize.setCustomLocalization({ previousSlide: 'Before' });
//     await el.updateComplete;
//     expect(
//       el.shadowRoot.querySelector('button[part="navigation-button--previous"]').getAttribute('aria-label')
//     ).to.equal('Before');
//   });

//   it('should handle function-based custom localization', async () => {
//     const el = await fixture(html`<sd-carousel></sd-carousel>`);
//     el.localize.setCustomLocalization({
//       goToSlide: (index, count) => `Jump to slide ${index} of ${count}`
//     });
//     await el.updateComplete;
//     // Assuming some method to trigger setting index and count
//     el.simulateSlideChange(2, 5);
//     expect(el.shadowRoot.querySelector('button[part="pagination-item"]').getAttribute('aria-label')).to.equal(
//       'Jump to slide 2 of 5'
//     );
//   });

//   it('should respect language changes', async () => {
//     const el = await fixture(html`<sd-carousel lang="es"></sd-carousel>`);
//     el.localize.setCustomLocalization({ previousSlide: 'Anterior' });
//     await el.updateComplete;
//     expect(
//       el.shadowRoot.querySelector('button[part="navigation-button--previous"]').getAttribute('aria-label')
//     ).to.equal('Anterior');

//     // Simulate language change
//     el.lang = 'de';
//     el.localize.setCustomLocalization({ previousSlide: 'Zurück' });
//     await el.updateComplete;
//     expect(
//       el.shadowRoot.querySelector('button[part="navigation-button--previous"]').getAttribute('aria-label')
//     ).to.equal('Zurück');
//   });
// });
