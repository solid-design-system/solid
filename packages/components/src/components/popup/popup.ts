import { arrow, autoUpdate, computePosition, flip, offset, shift, size } from '@floating-ui/dom';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Popup is a utility that lets you declaratively anchor "popup" containers to another element.
 * @documentation https://solid.union-investment.com/[storybook-link]/popup
 * @status stable
 * @since 1.8
 *
 * @event sd-reposition - Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive
 *  operations in your listener or consider debouncing it.
 * @event sd-current-placement - Emitted when the popup's placement changes automatically based on screen limitations.
 *
 * @slot - The popup's content.
 * @slot anchor - The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the
 *  `anchor` attribute or property instead.
 *
 * @csspart arrow - The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are
 *  assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and
 *  maybe a border or box shadow.
 * @csspart popup - The popup's container. Useful for setting a background color, box shadow, etc.
 *
 * @cssproperty [--arrow-size=6px] - The size of the arrow. Note that an arrow won't be shown unless the `arrow`
 *  attribute is used.
 * @cssproperty [--arrow-color=var(--sd-color-neutral-0)] - The color of the arrow.
 * @cssproperty [--auto-size-available-width] - A read-only custom property that determines the amount of width the
 *  popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only
 *  available when using `auto-size`.
 * @cssproperty [--auto-size-available-height] - A read-only custom property that determines the amount of height the
 *  popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only
 *  available when using `auto-size`.
 */
@customElement('sd-popup')
export default class SdPopup extends SolidElement {
  private anchorEl: HTMLElement | null;
  private cleanup: ReturnType<typeof autoUpdate> | undefined;
  private mutationObserver: MutationObserver | null;

  /** A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. */
  @query('[part="popup"]') popup: HTMLElement;
  @query('[part="arrow"]') private arrowEl: HTMLElement;

  /**
   * The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide its `id` or a
   * reference to it here. If the anchor lives inside the popup, use the `anchor` slot instead.
   */
  @property({ reflect: true }) anchor: Element | string;

  /**
   * Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
   * down and the popup will be hidden.
   */
  @property({ type: Boolean, reflect: true }) active = false;

  /**
   * The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
   * panel inside of the viewport.
   */
  @property({ type: String, reflect: true }) placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'top';

  /**
   * Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if
   * overflow is clipped, using a `fixed` position strategy can often workaround it.
   */
  @property({ type: String, reflect: true }) strategy: 'absolute' | 'fixed' = 'absolute';

  /** The distance in pixels from which to offset the panel away from its anchor. */
  @property({ type: Number, reflect: true }) distance = 0;

  /** The distance in pixels from which to offset the panel along its anchor. */
  @property({ type: Number, reflect: true }) skidding = 0;

  /**
   * Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
   * `--arrow-color` custom properties. For additional customizations, you can also target the arrow using
   * `::part(arrow)` in your stylesheet.
   */
  @property({ type: Boolean, reflect: true }) arrow = false;

  /**
   * The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
   * anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
   * align the arrow to the start, end, or center of the popover instead.
   */
  @property({ type: String, attribute: 'arrow-placement', reflect: true }) arrowPlacement:
    | 'start'
    | 'end'
    | 'center'
    | 'anchor' = 'anchor';

  /**
   * The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
   * this will prevent it from overflowing the corners.
   */
  @property({ attribute: 'arrow-padding', type: Number, reflect: true }) arrowPadding = 10;

  /**
   * When set, placement of the popup will flip to the opposite site to keep it in view. You can use
   * `flipFallbackPlacements` to further configure how the fallback placement is determined.
   */
  @property({ type: Boolean, reflect: true }) flip = false;

  /**
   * If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
   * string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
   * fallback strategy will be used instead.
   * */
  @property({
    attribute: 'flip-fallback-placements',
    converter: {
      fromAttribute: (value: string) => {
        return value
          .split(' ')
          .map(p => p.trim())
          .filter(p => p !== '');
      },
      toAttribute: (value: []) => {
        return value.join(' ');
      }
    }
  })
  flipFallbackPlacements = '';

  /**
   * When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
   * the popup should be positioned using the best available fit based on available space or as it was initially
   * preferred.
   */
  @property({ type: String, attribute: 'flip-fallback-strategy' }) flipFallbackStrategy: 'best-fit' | 'initial' =
    'best-fit';

  /**
   * The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   */
  @property({ type: Object }) flipBoundary: Element | Element[];

  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  @property({ attribute: 'flip-padding', type: Number }) flipPadding = 0;

  /** Moves the popup along the axis to keep it in view when clipped. */
  @property({ type: Boolean }) shift = false;

  /**
   * The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   */
  @property({ type: Object }) shiftBoundary: Element | Element[];

  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  @property({ attribute: 'shift-padding', type: Number }) shiftPadding = 0;

  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  @property({ type: String, attribute: 'auto-size' }) autoSize: 'horizontal' | 'vertical' | 'both';

  /** Syncs the popup's width or height to that of the anchor element. */
  @property() sync: 'width' | 'height' | 'both';

  /**
   * The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
   * default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
   * change the boundary by passing a reference to one or more elements to this property.
   */
  @property({ type: Object }) autoSizeBoundary: Element | Element[];

  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  @property({ attribute: 'auto-size-padding', type: Number }) autoSizePadding = 0;

  async connectedCallback() {
    super.connectedCallback();

    // Start the positioner after the first update
    await this.updateComplete;
    this.start();

    // Set up the mutation observer
    this.setupMutationObserver();
  }

  disconnectedCallback() {
    this.stop();

    // Disconnect the mutation observer when the component is disconnected
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  async updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);

    // Start or stop the positioner when active changes
    if (changedProps.has('active')) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }

    // Update the anchor when anchor changes
    if (changedProps.has('anchor')) {
      this.handleAnchorChange();
    }

    // All other properties will trigger a reposition when active
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }

  private setupMutationObserver() {
    // Create an observer instance
    this.mutationObserver = new MutationObserver(mutations => this.handleCurrentPlacementChange(mutations));

    // Configuration of the observer:
    const config = { attributes: true };

    // Start observing the target node for configured mutations
    this.mutationObserver.observe(this, config);
  }

  private handleCurrentPlacementChange(mutations: MutationRecord[]) {
    return mutations.forEach(mutation => {
      // Check if the "data-current-placement" attribute changed
      if (mutation.attributeName === 'data-current-placement') {
        const currentPlacement = this.getAttribute('data-current-placement');
        this.emit('sd-current-placement', { detail: currentPlacement });
      }
    });
  }

  private async handleAnchorChange() {
    await this.stop();

    if (this.anchor && typeof this.anchor === 'string') {
      // Locate the anchor by id
      const root = this.getRootNode() as Document | ShadowRoot;
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof HTMLElement) {
      // Use the anchor's reference
      this.anchorEl = this.anchor;
    } else {
      // Look for a slotted anchor
      this.anchorEl = this.querySelector<HTMLElement>('[slot="anchor"]');
    }

    // If the anchor is a <slot>, we'll use the first assigned element as the target since slots use `display: contents`
    // and positioning can't be calculated on them
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0] as HTMLElement;
    }

    if (!this.anchorEl) {
      throw new Error(
        'Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.'
      );
    }

    this.start();
  }

  private start() {
    // We can't start the positioner without an anchor
    if (!this.anchorEl) {
      return;
    }

    this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }

  private async stop(): Promise<void> {
    return new Promise(resolve => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = undefined;
        this.removeAttribute('data-current-placement');
        this.style.removeProperty('--auto-size-available-width');
        this.style.removeProperty('--auto-size-available-height');
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }

  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    // Nothing to do if the popup is inactive or the anchor doesn't exist
    if (!this.active || !this.anchorEl) {
      return;
    }

    //
    // NOTE: Floating UI middlewares are order dependent: https://floating-ui.com/docs/middleware
    //
    const middleware = [
      // The offset middleware goes first
      offset({ mainAxis: this.distance, crossAxis: this.skidding })
    ];

    // First we sync width/height
    if (this.sync) {
      middleware.push(
        size({
          apply: ({ rects }) => {
            const syncWidth = this.sync === 'width' || this.sync === 'both';
            const syncHeight = this.sync === 'height' || this.sync === 'both';
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : '';
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : '';
          }
        })
      );
    } else {
      // Cleanup styles if we're not matching width/height
      this.popup.style.width = '';
      this.popup.style.height = '';
    }

    // Then we flip
    if (this.flip) {
      middleware.push(
        flip({
          boundary: this.flipBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === 'best-fit' ? 'bestFit' : 'initialPlacement',
          padding: this.flipPadding
        })
      );
    }

    // Then we shift
    if (this.shift) {
      middleware.push(
        shift({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }

    // Now we adjust the size as needed
    if (this.autoSize) {
      middleware.push(
        size({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === 'vertical' || this.autoSize === 'both') {
              this.style.setProperty('--auto-size-available-height', `${availableHeight}px`);
            } else {
              this.style.removeProperty('--auto-size-available-height');
            }

            if (this.autoSize === 'horizontal' || this.autoSize === 'both') {
              this.style.setProperty('--auto-size-available-width', `${availableWidth}px`);
            } else {
              this.style.removeProperty('--auto-size-available-width');
            }
          }
        })
      );
    } else {
      // Cleanup styles if we're no longer using auto-size
      this.style.removeProperty('--auto-size-available-width');
      this.style.removeProperty('--auto-size-available-height');
    }

    // Finally, we add an arrow
    if (this.arrow) {
      middleware.push(
        arrow({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }

    computePosition(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy
    }).then(({ x, y, middlewareData, placement }) => {
      //
      // Even though we have our own localization utility, it uses different heuristics to determine RTL. Because of
      // that, we'll use the same approach that Floating UI uses.
      //
      // Source: https://github.com/floating-ui/floating-ui/blob/cb3b6ab07f95275730d3e6e46c702f8d4908b55c/packages/dom/src/utils/getDocumentRect.ts#L31
      //
      const isRtl = getComputedStyle(this).direction === 'rtl';
      const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[placement.split('-')[0]]!;

      this.setAttribute('data-current-placement', placement);

      Object.assign(this.popup.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      if (this.arrow) {
        const arrowX = middlewareData.arrow!.x;
        const arrowY = middlewareData.arrow!.y;
        let top = '';
        let right = '';
        let bottom = '';
        let left = '';

        if (this.arrowPlacement === 'start') {
          // Start
          const value = typeof arrowX === 'number' ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : '';
          top = typeof arrowY === 'number' ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : '';
          right = isRtl ? value : '';
          left = isRtl ? '' : value;
        } else if (this.arrowPlacement === 'end') {
          // End
          const value = typeof arrowX === 'number' ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : '';
          right = isRtl ? '' : value;
          left = isRtl ? value : '';
          bottom = typeof arrowY === 'number' ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : '';
        } else if (this.arrowPlacement === 'center') {
          // Center
          left = typeof arrowX === 'number' ? `calc(50% - var(--arrow-size-diagonal))` : '';
          top = typeof arrowY === 'number' ? `calc(50% - var(--arrow-size-diagonal))` : '';
        } else {
          // Anchor (default)
          left = typeof arrowX === 'number' ? `${arrowX}px` : '';
          top = typeof arrowY === 'number' ? `${arrowY}px` : '';
        }

        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: 'calc(var(--arrow-size-diagonal) * -1)'
        });
      }
    });

    this.emit('sd-reposition');
  }

  render() {
    return html`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${cx('isolate', this.strategy !== 'fixed' ? 'absolute' : 'fixed', !this.active && 'hidden')}
      >
        <slot></slot>
        ${this.arrow ? html`<div part="arrow" class="absolute rotate-45 -z-10" role="presentation"></div>` : ''}
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        --arrow-color: var(--sd-color-neutral-1000);
        --arrow-size: 6px;

        /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
        --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
        --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
        @apply contents;
      }

      [part='popup'] {
        max-width: var(--auto-size-available-width, none);
        max-height: var(--auto-size-available-height, none);
      }

      [part='arrow'] {
        width: calc(var(--arrow-size-diagonal) * 2);
        height: calc(var(--arrow-size-diagonal) * 2);
        background: var(--arrow-color);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-popup': SdPopup;
  }
}
