## Overview

`<sd-carousel>` — Carousels display an arbitrary number of content slides along a horizontal axis.

## API

### Examples

Use the components tool (with `component` + `story` args) to retrieve the HTML for any of these examples:

- sd-carousel/variant
- sd-carousel/inverted
- sd-carousel/loop
- sd-carousel/autoplay
- sd-carousel/slides-per-page
- sd-carousel/slides-per-move
- sd-carousel/fade

### Key Properties

- prop.variant: 'dot'|'number', default='number' — Determines the counting system for the carousel.
- prop.inverted: boolean, default=false — Inverts the carousel
- prop.loop: boolean, default=false — When set, allows the user to navigate the carousel in the same direction indefinitely.
- prop.autoplay: boolean, default=false — When set, the slides will scroll automatically when the user is not interacting with them.
- prop.fade: boolean, default=false — When set, slides will fade between each other instead of scrolling.
- prop.slidesPerPage [attr: slides-per-page]: number, default=1 — Specifies how many slides should be shown at a given time.
- prop.slidesPerMove [attr: slides-per-move]: number, default=1 — Use `slides-per-move` to set how many slides the carousel advances when scrolling. This is useful when specifying a `slides-per-page` greater than one. By setting `slides-per-move` to the same value as `slides-per-page`, the carousel will advance by one page at a time.<br>
<b>Note:</b><br>
<li> The number of slides should be divisible by the number of `slides-per-page` to maintain consistent scroll behavior.</li>
<li>Variations between `slides-per-move` and `slides-per-page` can lead to unexpected scrolling behavior. Keep your intended UX in mind when adjusting these values.</li>
- prop.dir: 'ltr'|'rtl'|'auto' — The element's directionality.
- prop.lang: string — The element's language.

### Events

- event.sd-slide-change: Emitted when the active slide changes.

### Slots

- slot.default: The carousel's main content, one or more `<sd-carousel-item>` elements.
- slot.next-icon: Optional next icon to use instead of the default. Works best with `<sd-icon>`.
- slot.previous-icon: Optional previous icon to use instead of the default. Works best with `<sd-icon>`.
- slot.autoplay-start: Optional start icon to use instead of the default. Works best with `<sd-icon>`.
- slot.autoplay-pause: Optional pause icon to use instead of the default. Works best with `<sd-icon>`.

### CSS Parts

- part.base: The carousel's internal wrapper.
- part.scroll-container: The scroll container that wraps the slides.
- part.controls: A wrapper for the navigation and autoplay controller buttons.
- part.pagination-dot: The pagination indicator in dot format.
- part.pagination-number: The pagination indicator in number format.
- part.pagination-item: The pagination indicator.
- part.pagination-item--active: Applied when the item is active.
- part.navigation: The navigation wrapper.
- part.navigation-button: The navigation button.
- part.navigation-button--previous: Applied to the previous button.
- part.navigation-button--next: Applied to the next button.
- part.autoplay-controls: A wrapper for pause/start button.

## Guidelines

### Use Cases

- Highlight key features or promotions in a compact, rotating format.
- Create interactive galleries for users to browse through images or videos.
- Showcase testimonials or reviews to build credibility and trust.

### Rules

### Content and Style

- Ensure consistency in content and style across slides by following a similar layout and type of information.

### Usage and Interaction

- Adapt the "slides per move" attribute to "slides per page" as needed, but keep the total number of available slides in mind: avoid moving more than one slide at a time if there are only a few slides.
- Refrain from placing critical content in a rotating format, as users may miss it.
- Enable swipe gestures to move slides on touch devices, while keeping the navigation arrows visible at all times.
- Avoid enabling autoplay if possible. If necessary, ensure there is an option to stop any automatic movement.
- Consider alternatives to carousels whenever possible, as they can be difficult for some users to navigate comfortably. Options such as accordions or tabs, for example, offer a more accessible way to present content.

### Background

- Use light background options like white, neutral-100, primary-100, or use a primary background when inverted.

### Accessibility

- Navigation arrows are still displayed on touch devices to enable alternative interaction that complies with accessibility requirements.
- Always display the pause/play control when the carousel is set to autoplay.
- Ensure sufficient contrast between each slide’s content and its background.

#### ARIA Labels

- Use appropriate ARIA roles, such as ’aria-roledescription="carousel"’and ”aria-live” to indicate the state of the carousel and announce dynamic changes to screen reader users.
- Add the role="region" attribute together with an unique aria-label whenever the carousel is an important landmark of the page.
- For purely decorative images, ALT-tags should be left empty so that screen readers can bypass them and concentrate on conveying meaningful content.

### Related Templates

- carousel

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.

### Related Components

- sd-carousel-item: A carousel item represent a slide within a [carousel](/components/carousel).

Use the components tool (with `component` arg) to retrieve the full spec for any of these components.
