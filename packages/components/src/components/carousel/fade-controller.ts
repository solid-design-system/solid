import type SdCarousel from './carousel';

export class FadeController {
  private carousel: SdCarousel;
  private heightCalculated = false;
  private resizeTimeout?: ReturnType<typeof setTimeout>;
  private isEnabled = false;
  private isCalculating = false;

  private readonly fadeClasses = {
    base: [
      'absolute',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'visible',
      'transition-opacity',
      'duration-x-slow',
      'ease-in-out'
    ],
    active: ['opacity-100', 'z-[1]'],
    inactive: ['opacity-0', 'z-0']
  } as const;

  constructor(carousel: SdCarousel) {
    this.carousel = carousel;
  }

  enable() {
    if (this.isEnabled) {
      return;
    }

    this.isEnabled = true;
    this.calculateHeight();
    window.addEventListener('resize', this.handleResize);
  }

  disable() {
    if (!this.isEnabled) {
      return;
    }

    this.isEnabled = false;
    this.removeFadeStyles();

    this.carousel.style.removeProperty('--carousel-height');
    if (this.carousel.scrollContainer) {
      this.carousel.scrollContainer.style.removeProperty('height');
    }

    this.heightCalculated = false;
    this.isCalculating = false;

    window.removeEventListener('resize', this.handleResize);
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = undefined;
    }
  }

  updateActiveSlide(activeIndex: number) {
    if (!this.isEnabled) {
      return;
    }

    const slides = this.carousel.getSlides();
    slides.forEach((slide, index) => {
      this.applyFadeStyles(slide, index === activeIndex);
    });
  }

  private applyFadeStyles(slide: Element, isActive: boolean) {
    const classList = slide.classList;

    classList.remove(...this.getAllFadeClasses());
    classList.add(...this.fadeClasses.base);

    if (isActive) {
      classList.add(...this.fadeClasses.active);
    } else {
      classList.add(...this.fadeClasses.inactive);
    }

    slide.toggleAttribute('inert', !isActive);
    slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  }

  private removeFadeStyles() {
    const slides = this.carousel.getSlides();
    slides.forEach(slide => {
      slide.classList.remove(...this.getAllFadeClasses());
      slide.removeAttribute('inert');
      slide.removeAttribute('aria-hidden');
    });
  }

  private getAllFadeClasses(): string[] {
    return [...this.fadeClasses.base, ...this.fadeClasses.active, ...this.fadeClasses.inactive];
  }

  private calculateHeight() {
    if (this.heightCalculated || !this.isEnabled || this.isCalculating) {
      return;
    }

    const slides = this.carousel.getSlides();
    const scrollContainer = this.carousel.scrollContainer;

    if (slides.length === 0 || !scrollContainer) {
      return;
    }

    this.isCalculating = true;

    scrollContainer.style.removeProperty('height');
    this.carousel.style.removeProperty('--carousel-height');

    const originalStyles = slides.map(slide => {
      const element = slide as HTMLElement;
      const original = {
        position: element.style.position,
        opacity: element.style.opacity,
        zIndex: element.style.zIndex,
        transform: element.style.transform,
        classes: element.className
      };

      element.classList.remove(...this.getAllFadeClasses());
      element.classList.add('relative', 'opacity-1', 'z-auto', 'transform-none');

      return original;
    });

    requestAnimationFrame(() => {
      if (!this.isEnabled) {
        this.isCalculating = false;
        return;
      }

      const heights = slides.map(slide => slide.getBoundingClientRect().height);
      const maxHeight = Math.max(...heights);

      slides.forEach((slide, index) => {
        const element = slide as HTMLElement;
        const original = originalStyles[index];

        element.className = original.classes;

        ['position', 'opacity', 'zIndex', 'transform'].forEach(prop => {
          const value = original[prop as keyof typeof original];
          if (value) {
            element.style.setProperty(prop, value);
          } else {
            element.style.removeProperty(prop);
          }
        });
      });

      if (maxHeight > 0) {
        this.carousel.style.setProperty('--carousel-height', `${maxHeight}px`);
        scrollContainer.style.height = `${maxHeight}px`;

        this.heightCalculated = true;

        this.updateActiveSlide(this.carousel.activeSlide);
      }

      this.isCalculating = false;
    });
  }

  private handleResize = () => {
    if (!this.isEnabled) {
      return;
    }

    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = setTimeout(() => {
      if (this.isEnabled) {
        this.heightCalculated = false;
        this.calculateHeight();
      }
    }, 250);
  };

  public recalculateHeight() {
    if (!this.isEnabled) return;

    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = undefined;
    }

    this.heightCalculated = false;
    this.calculateHeight();
  }
}
