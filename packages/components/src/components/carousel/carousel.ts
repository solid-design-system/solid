import '../icon/icon.js';
import { AutoplayController } from './autoplay-controller.js';
import { clamp } from '../../internal/math.js';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { FadeController } from './fade-controller.js';
import { LocalizeController } from '../../utilities/localize.js';
import { map } from 'lit/directives/map.js';
import { prefersReducedMotion } from '../../internal/animate.js';
import { property, query, queryAll, state } from 'lit/decorators.js';
import { range } from 'lit/directives/range.js';
import { ScrollController } from './scroll-controller.js';
import { watch } from '../../internal/watch.js';
import cx from 'classix';
import SdCarouselItem from '../carousel-item/carousel-item.js';
import SolidElement from '../../internal/solid-element.js';

/**
 * @summary Carousels display an arbitrary number of content slides along a horizontal axis.
 *
 * @since 1.18.0
 * @status stable
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
 * @csspart controls - A wrapper for the navigation and autoplay controller buttons.
 * @csspart pagination-dot - The pagination indicator in dot format.
 * @csspart pagination-number - The pagination indicator in number format.
 * @csspart pagination-item - The pagination indicator.
 * @csspart pagination-item--active - Applied when the item is active.
 * @csspart navigation - The navigation wrapper.
 * @csspart navigation-button - The navigation button.
 * @csspart navigation-button--previous - Applied to the previous button.
 * @csspart navigation-button--next - Applied to the next button.
 * @csspart autoplay-controls - A wrapper for pause/start button.
 *
 *
 * @cssproperty --slide-gap - The space between each slide.
 * @cssproperty --scroll-hint - The amount of padding to apply to the scroll area, allowing adjacent slides to become
 *  partially visible as a scroll hint.
 */
@customElement('sd-carousel')
export default class SdCarousel extends SolidElement {
  @query('[part~="autoplay-controls"]') autoplayControls: HTMLElement;
  @query('[part~="navigation-button--previous"]') previousButton: HTMLButtonElement;
  @query('[part~="navigation-button--next"]') nextButton: HTMLButtonElement;
  @queryAll('[part~="pagination-item"]') paginationItems: HTMLButtonElement[];

  /** Determines the counting system for the carousel. */
  @property({ type: String, reflect: true }) variant: 'dot' | 'number' = 'number';
  /** Inverts the carousel */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  @property({ type: Boolean, reflect: true }) loop = false;

  /** When set, the slides will scroll automatically when the user is not interacting with them.  */
  @property({ type: Boolean, reflect: true }) autoplay = false;

  /** When set, slides will fade between each other instead of scrolling. */
  @property({ type: Boolean, reflect: true }) fade = false;

  /** Specifies how many slides should be shown at a given time.  */
  @property({ type: Number, attribute: 'slides-per-page', reflect: true }) slidesPerPage = 1;

  /**
   * Use `slides-per-move` to set how many slides the carousel advances when scrolling. This is useful when specifying a `slides-per-page` greater than one. By setting `slides-per-move` to the same value as `slides-per-page`, the carousel will advance by one page at a time.<br>
   * <b>Note:</b><br>
   * <li> The number of slides should be divisible by the number of `slides-per-page` to maintain consistent scroll behavior.</li>
   * <li>Variations between `slides-per-move` and `slides-per-page` can lead to unexpected scrolling behavior. Keep your intended UX in mind when adjusting these values.</li>
   */
  @property({ type: Number, attribute: 'slides-per-move', reflect: true }) slidesPerMove = 1;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.carousel__slides') scrollContainer: HTMLElement;
  @query('.carousel__pagination') paginationContainer: HTMLElement;

  /**
   * The index of the active slide
   * @internal
   */
  @state() activeSlide = 0;

  /**
   * The current page of the carousel
   * @internal
   */
  @state() currentPage = 1;

  /**
   * Boolean keeping track of the autoplay pause/play button
   * @internal
   */
  @state() pausedAutoplay = false;

  private autoplayController = new AutoplayController(this, () => this.next());
  private scrollController = new ScrollController(this);
  private readonly slides = this.getElementsByTagName('sd-carousel-item');
  private intersectionObserver: IntersectionObserver; // determines which slide is displayed
  // A map containing the state of all the slides
  private readonly intersectionObserverEntries = new Map<Element, IntersectionObserverEntry>();
  public localize = new LocalizeController(this);
  private mutationObserver: MutationObserver;
  private userInteracted = false;
  private fadeController = new FadeController(this);

  connectedCallback(): void {
    super.connectedCallback();
    ['click', 'keydown'].forEach(event => this.addEventListener(event, this.handleUserInteraction));

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
    ['click', 'keydown'].forEach(event => this.removeEventListener(event, this.handleUserInteraction));

    if (this.fade) {
      this.fadeController.disable();
    }
  }

  protected async firstUpdated(): Promise<void> {
    this.initializeSlides();
    this.mutationObserver = new MutationObserver(this.handleSlotChange);
    this.mutationObserver.observe(this, { childList: true, subtree: false });

    if (this.fade) {
      await this.updateComplete;
      this.fadeController.enable();
    }
  }

  public getPageCount(totalSlides: number, slidesPerPage: number, slidesPerMove: number) {
    return Math.ceil((totalSlides - slidesPerPage) / slidesPerMove) + 1 > 0
      ? Math.ceil((totalSlides - slidesPerPage) / slidesPerMove) + 1
      : // Returns 1 if the total number of slides is less than the number of slides per page
        1;
  }

  public getCurrentPage(
    totalSlides: number,
    activeSlide: number,
    slidesPerPage: number,
    slidesPerMove: number
  ): number {
    return (
      Math.ceil((totalSlides - slidesPerPage) / slidesPerMove) -
      Math.ceil((totalSlides - slidesPerPage - activeSlide) / slidesPerMove) +
      1
    );
  }

  private handleUserInteraction = () => {
    this.userInteracted = true;
  };

  public getSlides({ excludeClones = true }: { excludeClones?: boolean } = {}) {
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
    if (this.fade) {
      return;
    }

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

  private handleFocus() {
    if (this.autoplay) {
      this.scrollContainer.setAttribute('aria-live', 'polite');
    }
  }

  private handleBlur() {
    if (this.autoplay) {
      this.scrollContainer.setAttribute('aria-live', 'off');
    }
  }

  private unblockAutoplay = (e: MouseEvent, button: HTMLButtonElement) => {
    // When the button is clicked with a mouse, blur the button to resume autoplay.
    if (e.detail) {
      button.blur();
    }
  };

  /**
   * Pause the autoplay.
   */
  public pause() {
    this.pausedAutoplay = true;
  }

  /**
   * Resume the autoplay
   */
  public resume() {
    this.pausedAutoplay = false;
  }

  @watch('pausedAutoplay')
  handlePausedAutoplay() {
    if (this.pausedAutoplay) {
      this.autoplayController.stop();
      this.autoplayControls?.setAttribute('aria-pressed', 'false');
    } else if (this.autoplay) {
      this.autoplayController.start(3000);
      this.autoplayControls?.setAttribute('aria-pressed', 'true');
    }
  }

  @watch('fade', { waitUntilFirstUpdate: true })
  handleFadeChange() {
    if (this.fade) {
      this.fadeController.enable();
    } else {
      this.fadeController.disable();
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
      slide.setAttribute('aria-label', this.localize.term('slideNum', index + 1, slides.length));

      if (slide.hasAttribute('data-clone')) {
        slide.remove();
      }
    });

    if (this.loop && !this.fade) {
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

    if (this.fade) {
      this.updateComplete.then(() => {
        this.fadeController.enable();
      });
    }

    if (!this.fade) {
      // Because the DOM may be changed, restore the scroll position to the active slide
      this.goToSlide(this.activeSlide, 'auto');
    }
  }

  @watch('activeSlide')
  handleSlideChange() {
    const slides = this.getSlides();

    slides.forEach((slide, i) => {
      slide.classList.toggle('--is-active', i === this.activeSlide);
    });

    if (this.fade) {
      this.fadeController.updateActiveSlide(this.activeSlide);
    }

    // Calculate current page only once
    const newCurrentPage = this.getCurrentPage(slides.length, this.activeSlide, this.slidesPerPage, this.slidesPerMove);

    // Batch updates together
    if (this.currentPage !== newCurrentPage) {
      this.currentPage = newCurrentPage;
    }

    // Do not emit an event on first render
    if (this.hasUpdated) {
      this.emit('sd-slide-change', {
        detail: {
          index: this.activeSlide,
          slide: slides[this.activeSlide]
        }
      });
    }

    // Check page count after all other updates
    const pageCount = this.getPageCount(slides.length, this.slidesPerPage, this.slidesPerMove);
    if (this.currentPage > pageCount) {
      // Use requestAnimationFrame to defer this update to the next frame
      requestAnimationFrame(() => {
        this.nextTillFirst();
      });
    }
  }

  @watch('slidesPerMove')
  handleSlidesPerMoveChange() {
    if (this.fade) {
      return;
    }

    const slides = this.getSlides({ excludeClones: false });

    const slidesPerMove = this.slidesPerMove;
    slides.forEach((slide, i) => {
      const shouldSnap = Math.abs(i - slidesPerMove) % slidesPerMove === 0;
      if (shouldSnap) {
        slide.style.removeProperty('scroll-snap-align');
      } else {
        slide.style.setProperty('scroll-snap-align', 'none');
      }
    });
  }

  @watch('autoplay')
  handleAutoplayChange() {
    this.autoplayController.stop();
    if (this.autoplay && !this.pausedAutoplay) {
      this.autoplayController.start(3000);
    }
  }

  /**
   * Move the carousel backward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  previous(behavior: ScrollBehavior = 'smooth') {
    if (this.fade) {
      const previousIndex = this.loop
        ? (this.activeSlide - 1 + this.getSlides().length) % this.getSlides().length
        : Math.max(0, this.activeSlide - 1);
      this.goToSlide(previousIndex);
      return;
    }

    let previousIndex = this.activeSlide || this.activeSlide - this.slidesPerMove;
    let canSnap = false;

    while (!canSnap && previousIndex > 0) {
      previousIndex -= 1;
      canSnap = Math.abs(previousIndex - this.slidesPerMove) % this.slidesPerMove === 0;
    }

    if (this.currentPage - 1 === 0 && this.loop) {
      this.goToSlide(this.activeSlide - this.slidesPerPage, behavior);
    } else {
      this.goToSlide(previousIndex, behavior);
    }
  }

  /**
   * Move the carousel forward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  next(behavior: ScrollBehavior = 'smooth') {
    if (this.fade) {
      const nextIndex = this.loop
        ? (this.activeSlide + 1) % this.getSlides().length
        : Math.min(this.getSlides().length - 1, this.activeSlide + 1);
      this.goToSlide(nextIndex);
      return;
    }

    if (this.currentPage + 1 <= this.getPageCount(this.getSlides().length, this.slidesPerPage, this.slidesPerMove)) {
      this.goToSlide(this.activeSlide + this.slidesPerMove, behavior);
    } else {
      if (this.loop) {
        this.nextTillFirst(behavior);
      }
    }
  }

  nextTillFirst(behavior: ScrollBehavior = 'smooth') {
    if (this.fade) {
      this.goToSlide(0);
      return;
    }

    while (this.activeSlide !== 0) {
      this.goToSlide(this.activeSlide + 1, behavior);
    }

    this.currentPage = this.getCurrentPage(
      this.getSlides().length,
      this.activeSlide,
      this.slidesPerPage,
      this.slidesPerMove
    );
  }

  /**
   * Scrolls the carousel to the slide specified by `index`.
   *
   * @param index - The slide index.
   * @param behavior - The behavior used for scrolling.
   */
  goToSlide(index: number, behavior: ScrollBehavior = 'smooth') {
    const { slidesPerPage, loop, scrollContainer, fade } = this;

    const slides = this.getSlides();
    const slidesWithClones = this.getSlides({ excludeClones: false });

    // Sets the next index without taking into account clones, if any.
    // Inconsistencies may arise when scrolling from the last slide if slidesPerMove is not divisible by the slide count.
    // This is most apparent with slidesPerPage set to one, but we won't provide a fix as it's not a recommended use case anyways.
    const newActiveSlide = (index + slides.length) % slides.length;
    this.activeSlide = newActiveSlide;

    if (fade) {
      return;
    }

    // Get the index of the next slide. For looping carousel it adds `slidesPerPage`
    // to normalize the starting index in order to ignore the first nth clones.
    const nextSlideIndex = clamp(index + (loop ? slidesPerPage : 0), 0, slidesWithClones.length + 1);
    const nextSlide = slidesWithClones[nextSlideIndex];

    const scrollContainerRect = scrollContainer.getBoundingClientRect();
    const nextSlideRect = nextSlide.getBoundingClientRect();

    scrollContainer.scrollTo({
      left: nextSlideRect.left - scrollContainerRect.left + scrollContainer.scrollLeft,
      top: nextSlideRect.top - scrollContainerRect.top + scrollContainer.scrollTop,
      behavior: prefersReducedMotion() ? 'auto' : behavior
    });

    if (this.userInteracted && !this.loop) {
      const isLastSlide =
        this.activeSlide === slides.length - 1 || this.activeSlide === this.slides.length - this.slidesPerPage;
      const isFirstSlide = this.activeSlide === 0;

      if (isLastSlide) {
        this.previousButton.focus({ preventScroll: true });
      } else if (isFirstSlide) {
        this.nextButton.focus({ preventScroll: true });
      }
    }
  }

  render() {
    const { scrollController, slidesPerMove } = this;
    const pagesCount = this.getPageCount(this.getSlides().length, this.slidesPerPage, this.slidesPerMove);
    const currentPage = this.getCurrentPage(
      this.getSlides().length,
      this.activeSlide,
      this.slidesPerPage,
      this.slidesPerMove
    );
    const prevEnabled = this.loop || currentPage > 1;
    const nextEnabled = this.loop || currentPage < pagesCount;
    const isLtr = this.localize.dir() === 'ltr';

    return html`
      <div part="base" class=${cx(`carousel h-full w-full`)}>
        <div
          id="scroll-container"
          part="scroll-container"
          class="${cx(
            `carousel__slides mb-6 max-h-full w-full items-center justify-items-center`,
            this.inverted ? 'focus-visible:focus-outline-inverted' : 'focus-visible:focus-outline',
            this.fade
              ? 'relative overflow-hidden'
              : `grid overflow-auto overscroll-x-contain grid-flow-col auto-rows-[100%] snap-x snap-mandatory overflow-y-hidden`
          )}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${scrollController.scrolling ? 'true' : 'false'}"
          aria-label="${this.localize.term(
            'carouselContainer',
            Array.from(this.slides).filter(el => !el.hasAttribute('data-clone')).length
          )}"
          aria-live=${this.autoplay ? 'off' : 'polite'}
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        >
          <slot></slot>
        </div>

        <div part="controls" class=${cx('w-full flex items-center justify-center relative')}>
          <div part="navigation" class=${cx('carousel__navigation flex items-center justify-center')}>
            <button
              part="navigation-button navigation-button--previous"
              id="carousel__navigation-button--previous"
              ?disabled=${!prevEnabled ? true : false}
              class=${cx(
                '!mr-6 !rounded-sm sd-interactive transition-colors duration-fast ease-in-out',
                !prevEnabled && 'sd-interactive--disabled',
                this.inverted ? 'sd-interactive--inverted' : 'sd-interactive--reset'
              )}
              aria-label="${this.localize.term('previousSlide')}"
              aria-controls="scroll-container"
              aria-disabled="${prevEnabled ? 'false' : 'true'}"
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              @click=${prevEnabled
                ? (e: MouseEvent) => {
                    this.previous();
                    this.unblockAutoplay(e, this.previousButton);
                  }
                : null}
            >
              <slot name="previous-icon">
                <sd-icon
                  class=${cx('h-6 w-6 rotate-90 grid place-items-center')}
                  library="_internal"
                  name="${isLtr ? 'chevron-down' : 'chevron-up'}"
                ></sd-icon>
              </slot>
            </button>

            ${this.variant === 'dot'
              ? html`
                  <div
                    part="pagination-dot"
                    role="tablist"
                    class="${cx('carousel__pagination dot flex wrap items-center gap-2')}"
                    aria-controls="scroll-container"
                  >
                    ${map(range(pagesCount), index => {
                      const isActive = index + 1 === currentPage;
                      return html`
                        <button
                          part="pagination-item ${isActive ? 'pagination-item--active' : ''}"
                          class="${cx(
                            'carousel__pagination-item',
                            'block cursor-pointer bg-none border-0 rounded-full',
                            isActive ? 'bg-accent' : '',
                            this.inverted ? 'focus-within:focus-outline-inverted' : 'focus-within:focus-outline'
                          )}"
                          role="tab"
                          tabindex="0"
                          aria-selected="${isActive ? 'true' : 'false'}"
                          aria-label="${this.localize.term('goToSlide', index + 1, pagesCount)}"
                          @click="${(e: MouseEvent) => {
                            this.goToSlide(index * slidesPerMove);
                            this.unblockAutoplay(e, this.paginationItems[index]);
                          }}"
                          @keydown=${this.handleKeyDown}
                        >
                          <span
                            class=${cx(
                              'h-4 w-4 block border hover:border-primary-500 rounded-full transition-colors duration-slow hover:duration-fast ease-in-out',
                              this.inverted ? 'border-white hover:border-primary-500' : 'border-primary',
                              isActive && 'bg-accent border-none',
                              isActive ? (this.inverted ? 'hover:bg-accent-300' : 'hover:bg-accent-550') : ''
                            )}
                          ></span>
                        </button>
                      `;
                    })}
                  </div>
                `
              : html` <span
                  part="pagination-number"
                  class="carousel__pagination number flex gap-0.5 cursor-default select-none"
                  aria-controls="scroll-container"
                >
                  <span
                    part="pagination-item"
                    class=${cx('w-5 text-center border-b-2 border-accent', this.inverted ? 'text-white' : 'text-black')}
                    >${currentPage}</span
                  >
                  <span
                    part="pagination-divider"
                    class=${cx('scale-y-[1.5]', 'text-center', this.inverted ? 'text-white' : 'text-black')}
                    >/</span
                  >
                  <span
                    part="pagination-item"
                    class=${cx('w-5 text-center', this.inverted ? 'text-white' : 'text-black')}
                    >${pagesCount}</span
                  >
                </span>`}

            <button
              part="navigation-button navigation-button--next"
              id="carousel__navigation-button--next"
              ?disabled=${!nextEnabled ? true : false}
              class=${cx(
                '!ml-6 !rounded-sm sd-interactive transition-colors duration-fast ease-in-out',
                !nextEnabled && 'sd-interactive--disabled',
                this.inverted ? 'sd-interactive--inverted' : 'sd-interactive--reset'
              )}
              aria-label="${this.localize.term('nextSlide')}"
              aria-controls="scroll-container"
              aria-disabled="${nextEnabled ? 'false' : 'true'}"
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              @click=${nextEnabled
                ? (e: MouseEvent) => {
                    this.next();
                    this.unblockAutoplay(e, this.nextButton);
                  }
                : null}
            >
              <slot name="next-icon">
                <sd-icon
                  class=${cx('h-6 w-6 rotate-90 grid place-items-center')}
                  library="_internal"
                  name="${isLtr ? 'chevron-up' : 'chevron-down'}"
                ></sd-icon>
              </slot>
            </button>
          </div>
          <button
            class=${cx(
              'ml-6 !rounded-sm',
              '!absolute !right-0 sd-interactive',
              this.inverted ? 'sd-interactive--inverted' : 'sd-interactive--reset',
              !this.autoplay && '!hidden'
            )}
            part="autoplay-controls"
            aria-label="${this.localize.term('autoplay')}"
            aria-pressed="true"
            @click=${(e: MouseEvent) => {
              this.pausedAutoplay = !this.pausedAutoplay;
              if (e.detail) {
                this.autoplayControls.blur();
              }
            }}
          >
            <slot name="autoplay-start" class=${cx(!this.pausedAutoplay ? 'hidden' : '')}>
              <sd-icon class="h-6 w-6 grid place-items-center" library="_internal" name="start"></sd-icon>
            </slot>

            <slot name="autoplay-pause" class=${cx(this.pausedAutoplay ? 'hidden' : '')}>
              <sd-icon class="h-6 w-6 grid place-items-center" library="_internal" name="pause"></sd-icon>
            </slot>
          </button>
        </div>
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        --slide-gap: var(--sl-spacing-medium, 1rem);
        --scroll-hint: 0px;
        @apply flex;
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

        &::-webkit-scrollbar {
          @apply hidden;
        }
      }

      :host([fade]) {
        --carousel-height: auto;
      }

      :host([fade]) .carousel__slides {
        @apply block relative overflow-hidden;
        height: var(--carousel-height);
      }

      @media (prefers-reduced-motion) {
        :where(.carousel__slides) {
          scroll-behavior: auto;
        }
      }

      .carousel__navigation {
        grid-area: navigation;
      }

      sd-button::part(label) {
        @apply flex flex-auto items-center pointer-events-none;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-carousel': SdCarousel;
  }
}
