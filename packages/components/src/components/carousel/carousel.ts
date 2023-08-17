import '../icon/icon.ts';
import { AutoplayController } from './autoplay-controller.js';
import { clamp } from '../../internal/math.js';
import { css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize.js';
import { map } from 'lit/directives/map.js';
import { prefersReducedMotion } from '../../internal/animate.js';
import { range } from 'lit/directives/range.js';
import { ScrollController } from './scroll-controller.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SdCarouselItem from '../carousel-item/carousel-item.ts';
import SolidElement from '../../internal/solid-element.js';

/**
 * @summary Carousels display an arbitrary number of content slides along a horizontal axis.
 *
 * @since 2.2
 * @status experimental
 *
 * @dependency sd-icon
 *
 * @event {{ index: number, slide: SdCarouselItem }} sd-slide-change - Emitted when the active slide changes.
 *
 * @slot - The carousel's main content, one or more `<sd-carousel-item>` elements.
 * @slot next-icon - Optional next icon to use instead of the default. Works best with `<sd-icon>`.
 * @slot previous-icon - Optional previous icon to use instead of the default. Works best with `<sd-icon>`.
 * @slot autoplay-start - Optional start icon to use instead of the default. Works best with `<sd-icon>`.
 * @slot autoplay-pause - Optional pause icon to use instead of the default. Works best with `<sd-icon>`.
 *
 * @csspart base - The carousel's internal wrapper.
 * @csspart scroll-container - The scroll container that wraps the slides.
 * @csspart pagination - The pagination indicators wrapper.
 * @csspart pagination-item - The pagination indicator.
 * @csspart pagination-item--active - Applied when the item is active.
 * @csspart navigation - The navigation wrapper.
 * @csspart navigation-button - The navigation button.
 * @csspart navigation-button--previous - Applied to the previous button.
 * @csspart navigation-button--next - Applied to the next button.
 *
 * @cssproperty --slide-gap - The space between each slide.
 * @cssproperty --scroll-hint - The amount of padding to apply to the scroll area, allowing adjacent slides to become
 *  partially visible as a scroll hint.
 */
@customElement('sd-carousel')
export default class SdCarousel extends SolidElement {
  /** Determines the counting system for the carousel. */
  @property({ type: String, reflect: true }) variant: 'dot' | 'num' = 'num';
  /** Inverts the carousel */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  @property({ type: Boolean, reflect: true }) loop = false;

  /** When set, the slides will scroll automatically when the user is not interacting with them.  */
  @property({ type: Boolean, reflect: true }) autoplay = false;

  /** Specifies how many slides should be shown at a given time.  */
  @property({ type: Number, attribute: 'slides-per-page' }) slidesPerPage = 1;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.carousel__slides') scrollContainer: HTMLElement;
  @query('.carousel__pagination') paginationContainer: HTMLElement;

  // The index of the active slide
  @state() activeSlide = 0;

  // Boolean keeping track of the autoplay pause/play button
  @property({ type: Boolean, reflect: true }) pausedAutoplay = false;

  private autoplayController = new AutoplayController(this, () => this.next());
  private scrollController = new ScrollController(this);
  private readonly slides = this.getElementsByTagName('sd-carousel-item');
  private intersectionObserver: IntersectionObserver; // determines which slide is displayed
  // A map containing the state of all the slides
  private readonly intersectionObserverEntries = new Map<Element, IntersectionObserverEntry>();
  private readonly localize = new LocalizeController(this);
  private mutationObserver: MutationObserver;

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'region');
    this.setAttribute('aria-label', this.localize.term('carousel'));

    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          // Store all the entries in a map to be processed when scrolling ends
          this.intersectionObserverEntries.set(entry.target, entry);

          const slide = entry.target;
          slide.toggleAttribute('inert', !entry.isIntersecting);
          slide.classList.toggle('--in-view', entry.isIntersecting);
          slide.setAttribute('aria-hidden', entry.isIntersecting ? 'false' : 'true');
        });
      },
      {
        root: this,
        threshold: 0.6
      }
    );
    this.intersectionObserver = intersectionObserver;

    // Store the initial state of each slide
    intersectionObserver.takeRecords().forEach(entry => {
      this.intersectionObserverEntries.set(entry.target, entry);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.intersectionObserver.disconnect();
    this.mutationObserver.disconnect();
  }

  protected firstUpdated(): void {
    this.initializeSlides();
    this.mutationObserver = new MutationObserver(this.handleSlotChange);
    this.mutationObserver.observe(this, { childList: true, subtree: false });
  }

  private getPageCount() {
    return Math.ceil(this.getSlides().length / this.slidesPerPage);
  }

  private getCurrentPage() {
    return Math.ceil(this.activeSlide / this.slidesPerPage);
  }

  private getSlides({ excludeClones = true }: { excludeClones?: boolean } = {}) {
    return [...this.slides].filter(slide => !excludeClones || !slide.hasAttribute('data-clone'));
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      const target = event.target as HTMLElement;
      const isRtl = this.localize.dir() === 'rtl';
      const isFocusInPagination = target.closest('[part~="pagination-item"]') !== null;
      const isNext =
        event.key === 'ArrowDown' || (!isRtl && event.key === 'ArrowRight') || (isRtl && event.key === 'ArrowLeft');
      const isPrevious =
        event.key === 'ArrowUp' || (!isRtl && event.key === 'ArrowLeft') || (isRtl && event.key === 'ArrowRight');

      event.preventDefault();

      if (isPrevious) {
        this.previous();
      }

      if (isNext) {
        this.next();
      }

      if (event.key === 'Home') {
        this.goToSlide(0);
      }

      if (event.key === 'End') {
        this.goToSlide(this.getSlides().length - 1);
      }

      if (isFocusInPagination) {
        this.updateComplete.then(() => {
          const activePaginationItem = this.shadowRoot?.querySelector<HTMLButtonElement>(
            '[part~="pagination-item--active"]'
          );

          if (activePaginationItem) {
            activePaginationItem.focus();
          }
        });
      }
    }
  }

  private handleScrollEnd() {
    const slides = this.getSlides();
    const entries = [...this.intersectionObserverEntries.values()];

    const firstIntersecting: IntersectionObserverEntry | undefined = entries.find(entry => entry.isIntersecting);

    if (this.loop && firstIntersecting?.target.hasAttribute('data-clone')) {
      const clonePosition = Number(firstIntersecting.target.getAttribute('data-clone'));

      // Scrolls to the original slide without animating, so the user won't notice that the position has changed
      this.goToSlide(clonePosition, 'auto');

      return;
    }

    // Activate the first intersecting slide
    if (firstIntersecting) {
      this.activeSlide = slides.indexOf(firstIntersecting.target as SdCarouselItem);
    }
  }

  private handleSlotChange = (mutations: MutationRecord[]) => {
    const needsInitialization = mutations.some(mutation =>
      [...mutation.addedNodes, ...mutation.removedNodes].some(
        node => SdCarouselItem.isCarouselItem(node) && !(node as HTMLElement).hasAttribute('data-clone')
      )
    );

    // Reinitialize the carousel if a carousel item has been added or removed
    if (needsInitialization) {
      this.initializeSlides();
    }
    this.requestUpdate();
  };

  public toggleAutoplay() {
    this.pausedAutoplay = !this.pausedAutoplay;
    if (this.pausedAutoplay) {
      this.autoplayController.manualPause();
    } else if (this.autoplay) {
      this.autoplayController.manualResume();
    }
  }

  @watch('loop', { waitUntilFirstUpdate: true })
  @watch('slidesPerPage', { waitUntilFirstUpdate: true })
  initializeSlides() {
    const slides = this.getSlides();
    const intersectionObserver = this.intersectionObserver;

    this.intersectionObserverEntries.clear();

    // Removes all the cloned elements from the carousel
    this.getSlides({ excludeClones: false }).forEach((slide, index) => {
      intersectionObserver.unobserve(slide);

      slide.classList.remove('--in-view');
      slide.classList.remove('--is-active');
      slide.setAttribute('aria-label', this.localize.term('slideNum', index + 1));

      if (slide.hasAttribute('data-clone')) {
        slide.remove();
      }
    });

    if (this.loop) {
      // Creates clones to be placed before and after the original elements to simulate infinite scrolling
      const slidesPerPage = this.slidesPerPage;
      const lastSlides = slides.slice(-slidesPerPage);
      const firstSlides = slides.slice(0, slidesPerPage);

      lastSlides.reverse().forEach((slide, i) => {
        const clone = slide.cloneNode(true) as HTMLElement;
        clone.setAttribute('data-clone', String(slides.length - i - 1));
        this.prepend(clone);
      });

      firstSlides.forEach((slide, i) => {
        const clone = slide.cloneNode(true) as HTMLElement;
        clone.setAttribute('data-clone', String(i));
        this.append(clone);
      });
    }

    this.getSlides({ excludeClones: false }).forEach(slide => {
      intersectionObserver.observe(slide);
    });

    // Because the DOM may be changed, restore the scroll position to the active slide
    this.goToSlide(this.activeSlide, 'auto');
  }

  @watch('activeSlide')
  handelSlideChange() {
    const slides = this.getSlides();
    slides.forEach((slide, i) => {
      slide.classList.toggle('--is-active', i === this.activeSlide);
    });

    // Do not emit an event on first render
    if (this.hasUpdated) {
      this.emit('sd-slide-change', {
        detail: {
          index: this.activeSlide,
          slide: slides[this.activeSlide]
        }
      });
    }
  }

  @watch('autoplay')
  handleAutoplayChange() {
    this.autoplayController.stop();
    if (this.autoplay) {
      this.autoplayController.start(3000);
    }
  }

  /**
   * Move the carousel backward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  previous(behavior: ScrollBehavior = 'smooth') {
    this.goToSlide(this.activeSlide - 1, behavior);
  }

  /**
   * Move the carousel forward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  next(behavior: ScrollBehavior = 'smooth') {
    this.goToSlide(this.activeSlide + 1, behavior);
  }

  /**
   * Scrolls the carousel to the slide specified by `index`.
   *
   * @param index - The slide index.
   * @param behavior - The behavior used for scrolling.
   */
  goToSlide(index: number, behavior: ScrollBehavior = 'smooth') {
    const { slidesPerPage, loop, scrollContainer } = this;

    const slides = this.getSlides();
    const slidesWithClones = this.getSlides({ excludeClones: false });

    // Sets the next index without taking into account clones, if any.
    const newActiveSlide = (index + slides.length) % slides.length;
    this.activeSlide = newActiveSlide;

    // Get the index of the next slide. For looping carousel it adds `slidesPerPage`
    // to normalize the starting index in order to ignore the first nth clones.
    const nextSlideIndex = clamp(index + (loop ? slidesPerPage : 0), 0, slidesWithClones.length - 1);
    const nextSlide = slidesWithClones[nextSlideIndex];

    const scrollContainerRect = scrollContainer.getBoundingClientRect();
    const nextSlideRect = nextSlide.getBoundingClientRect();

    scrollContainer.scrollTo({
      left: nextSlideRect.left - scrollContainerRect.left + scrollContainer.scrollLeft,
      top: nextSlideRect.top - scrollContainerRect.top + scrollContainer.scrollTop,
      behavior: prefersReducedMotion() ? 'auto' : behavior
    });
  }

  render() {
    const { scrollController, slidesPerPage } = this;
    const pagesCount = this.getPageCount();
    const currentPage = this.getCurrentPage();
    const prevEnabled = this.loop || currentPage > 0;
    const nextEnabled = this.loop || currentPage < pagesCount - 1;
    const isLtr = this.localize.dir() === 'ltr';

    return html`
      <div part="base" class=${cx(`carousel h-full w-full`, this.inverted ? 'bg-[#00358E]' : '')}>
        <div
          id="scroll-container"
          part="scroll-container"
          class="${cx(
            `carousel__slides mb-6
            grid max-h-full w-full items-center justify-items-center overflow-auto
            overscroll-x-contain grid-flow-col auto-rows-[100%]
            snap-x snap-mandatory overflow-y-hidden`
          )}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${scrollController.scrolling ? 'true' : 'false'}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        <div class=${cx('w-full flex items-center justify-center relative', this.inverted ? 'bg-primary' : '')}>
          <div part="navigation" class=${cx('flex items-center')}>
            <sd-button
              ?disabled=${!prevEnabled ? true : false}
              ?inverted=${this.inverted}
              variant="tertiary"
              part="navigation-button navigation-button--previous"
              class=${cx('mr-2')}
              aria-label="${this.localize.term('previousSlide')}"
              aria-controls="scroll-container"
              aria-disabled="${prevEnabled ? 'false' : 'true'}"
              @click=${prevEnabled ? () => this.previous() : null}
            >
              <slot name="previous-icon">
                <sd-icon
                  class=${cx('h-6 w-6 rotate-90 justify-self-center')}
                  library="system"
                  name="${isLtr ? 'chevron-down' : 'chevron-up'}"
                ></sd-icon>
              </slot>
            </sd-button>

            ${this.variant === 'dot'
              ? html`
                  <div
                    part="pagination"
                    role="tablist"
                    class="${cx(' flex wrap items-center gap-2')}"
                    aria-controls="scroll-container"
                  >
                    ${map(range(pagesCount), index => {
                      const isActive = index === currentPage;
                      return html`
                        <button
                          part="pagination-item ${isActive ? 'pagination-item--active' : ''}"
                          class="${cx(
                            'carousel__pagination-item',
                            'block cursor-pointer bg-none border-0',
                            isActive ? 'bg-accent rounded-full' : ''
                          )}"
                          role="tab"
                          aria-selected="${isActive ? 'true' : 'false'}"
                          aria-label="${this.localize.term('goToSlide', index + 1, pagesCount)}"
                          tabindex=${isActive ? '0' : '-1'}
                          @click=${() => this.goToSlide(index * slidesPerPage)}
                          @keydown=${this.handleKeyDown}
                        >
                          <span
                            class=${cx(
                              'h-4 w-4 block border hover:border-primary-500 rounded-full',
                              this.inverted ? 'border-white hover:border-primary-500' : 'border-primary',
                              isActive
                                ? this.inverted
                                  ? 'bg-accent hover:bg-accent-300 border-none'
                                  : 'bg-accent hover:bg-accent-550 border-none'
                                : ''
                            )}
                          ></span>
                        </button>
                      `;
                    })}
                  </div>
                `
              : html` <span class="flex gap-0.5 cursor-default">
                  <span
                    class=${cx('w-5 text-center border-b-2 border-accent', this.inverted ? 'text-white' : 'text-black')}
                    >${currentPage + 1}</span
                  >
                  <span class=${cx('scale-y-[1.5]', 'text-center', this.inverted ? 'text-white' : 'text-black')}
                    >/</span
                  >
                  <span class=${cx('w-5 text-center', this.inverted ? 'text-white' : 'text-black')}>${pagesCount}</span>
                </span>`}

            <sd-button
              ?disabled=${!nextEnabled ? true : false}
              ?inverted=${this.inverted}
              variant="tertiary"
              part="navigation-button navigation-button--next"
              class="ml-2"
              aria-label="${this.localize.term('nextSlide')}"
              aria-controls="scroll-container"
              aria-disabled="${nextEnabled ? 'false' : 'true'}"
              @click=${nextEnabled ? () => this.next() : null}
            >
              <slot name="next-icon">
                <sd-icon
                  class=${cx('h-6 w-6 rotate-90')}
                  library="system"
                  name="${isLtr ? 'chevron-up' : 'chevron-down'}"
                ></sd-icon>
              </slot>
            </sd-button>
          </div>
          <sd-button
            ?inverted=${this.inverted}
            variant="tertiary"
            class=${cx('items-end absolute right-0 transition-all', !this.autoplay ? 'hidden' : '')}
            part="autoplay-controls"
            @click=${this.toggleAutoplay}
          >
            <slot name="autoplay-start" class=${cx(!this.pausedAutoplay ? 'hidden' : '')}>
              <sd-icon class=${cx('h-6 w-6')} library="system" name="start"></sd-icon>
            </slot>

            <slot name="autoplay-pause" class=${cx(this.pausedAutoplay ? 'hidden' : '')}>
              <sd-icon class=${cx('h-6 w-6')} library="system" name="pause"></sd-icon>
            </slot>
          </sd-button>
        </div>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    css`
      ${componentStyles}
      :host {
        --slide-gap: var(--sl-spacing-medium, 1rem);
        --scroll-hint: 0px;

        display: flex;
      }

      .carousel {
        grid-template-areas:
          '. slides .'
          '. pagination .';
      }

      .carousel__pagination {
        grid-area: pagination;
      }

      .carousel__slides {
        grid-area: slides;
        scrollbar-width: none;
        --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
        grid-auto-columns: var(--slide-size);
        column-gap: var(--slide-gap);
        scroll-padding-inline: var(--scroll-hint);
        padding-inline: var(--scroll-hint);
      }

      @media (prefers-reduced-motion) {
        :where(.carousel__slides) {
          scroll-behavior: auto;
        }
      }

      .carousel__slides--dragging,
      .carousel__slides--dropping {
        scroll-snap-type: unset;
      }

      .carousel__slides::-webkit-scrollbar {
        display: none;
      }

      .carousel__navigation {
        grid-area: navigation;
      }

      sd-button::part(label) {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        pointer-events: none;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-carousel': SdCarousel;
  }
}
