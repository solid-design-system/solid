import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { debounce } from '../../internal/debounce';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { scrollIntoView } from '../../internal/scroll';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type SdTab from '../tab/tab';
import type SdTabPanel from '../tab-panel/tab-panel';

/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://solid.union-investment.com/[storybook-link]/tab-group
 * @status stable
 * @since 2.6.0
 *
 * @dependency sd-tab
 *
 * @slot - Used for grouping tab panels in the tab group. Must be `<sd-tab-panel>` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be `<sd-tab>` elements.
 *
 * @event {{ name: String }} sd-tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} sd-tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group's navigation container where tabs are slotted in.
 * @csspart scroll-container - The container that wraps the tabs and active-tab-indicator.
 * @csspart tabs - The container that wraps the tabs.
 * @csspart separation - The line that separates tabs from panels.
 * @csspart body - The tab group's body where tab panels are slotted in.
 * @csspart scroll-button--start - The starting scroll button.
 * @csspart scroll-button--end - The ending scroll button.
 * @csspart scroll-button__base - The scroll button's exported `base` part.
 *
 * */
@customElement('sd-tab-group')
export default class SdTabGroup extends SolidElement {
  public localize = new LocalizeController(this);

  private activeTab?: SdTab;
  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;
  private tabs: SdTab[] = [];
  private panels: SdTabPanel[] = [];

  @query('[part=base]') tabGroup: HTMLElement;
  @query('[part=body]') body: HTMLSlotElement;
  @query('[part=scroll-container]') nav: HTMLElement;
  @query('[part=active-tab-indicator]') indicator: HTMLElement | null;
  @query('[part="tabs"]') private tabsContainer!: HTMLElement;

  /** @internal */
  @state() hasScrollControls = false;

  /** @internal */
  @state() variant = 'default';

  @state() private canScroll: Record<'left' | 'right', boolean> = {
    left: false,
    right: false
  };

  /**
   * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   */
  @property({ type: String, reflect: true }) activation: 'auto' | 'manual' = 'auto';

  connectedCallback() {
    const whenAllDefined = Promise.all([
      customElements.whenDefined('sd-tab'),
      customElements.whenDefined('sd-tab-panel')
    ]);

    super.connectedCallback();

    this.resizeObserver = new ResizeObserver(() => {
      this.updateScrollControls();
      this.repositionIndicator();
    });

    this.mutationObserver = new MutationObserver(mutations => {
      // Update aria labels when the DOM changes
      if (mutations.some(m => !['aria-labelledby', 'aria-controls'].includes(m.attributeName!))) {
        setTimeout(() => this.setAriaLabels());
      }

      // Sync tabs when disabled states change
      if (mutations.some(m => m.attributeName === 'disabled')) {
        this.syncTabsAndPanels();
      }
    });

    // After the first update...
    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);
      this.handleScroll();
      this.nav.addEventListener('scroll', () => this.handleScroll());

      // Wait for tabs and tab panels to be registered
      whenAllDefined.then(() => {
        // Set initial tab state when the tabs become visible
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
          if (entries[0].intersectionRatio > 0) {
            this.setAriaLabels();
            this.setActiveTab(this.activeTab ?? this.tabs[0], { emitEvents: false });
            observer.unobserve(entries[0].target);
          }
        });
        intersectionObserver.observe(this.tabGroup);
      });
    });
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();

    if (this.nav) {
      this.resizeObserver?.unobserve(this.nav);
    }
  }

  private getAllTabs(options: { includeDisabled: boolean } = { includeDisabled: true }) {
    const slot = this.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="nav"]')!;

    return Array.from(slot.assignedElements())
      .map(el => (el.tagName.toLocaleLowerCase() === 'sd-tab' ? el : el.querySelector('sd-tab')))
      .filter((el: SdTab) => {
        return el && options.includeDisabled
          ? el.tagName.toLowerCase() === 'sd-tab'
          : el.tagName.toLowerCase() === 'sd-tab' && !el.disabled;
      }) as SdTab[];
  }

  private getAllPanels() {
    return [...this.body.assignedElements()].filter(el => el.tagName.toLowerCase() === 'sd-tab-panel') as [SdTabPanel];
  }

  private getActiveTab() {
    return this.tabs.find(t => t.matches(':focus'));
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('sd-tab');
    const tabGroup = tab?.closest('sd-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    if (tab !== null) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('sd-tab');
    const tabGroup = tab?.closest('sd-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    // Activate a tab
    if (['Enter', ' '].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: 'smooth' });
        event.preventDefault();
      }
    }

    // Scroll tab into view when tabbing forward
    if (['Tab'].includes(event.key)) {
      const index = this.tabs.indexOf(this.getActiveTab()!);
      const nextTab = this.tabs[index + 1];

      if (tab !== null && nextTab) {
        scrollIntoView(nextTab, this.nav, 'horizontal');
      }
    }

    // Scroll tab into view when tabbing backward
    if (['Shift', 'Tab'].includes(event.key)) {
      const index = this.tabs.indexOf(this.getActiveTab()!);
      const previousTab = this.tabs[index - 1];

      if (tab !== null && previousTab) {
        scrollIntoView(previousTab, this.nav, 'horizontal');
      }
    }

    // Move focus left or right
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      const activeEl = this.tabs.find(t => t.matches(':focus'));
      const isRtl = this.localize.dir() === 'rtl';

      if (activeEl?.tagName.toLowerCase() === 'sd-tab') {
        let index = this.tabs.indexOf(activeEl);

        if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = this.tabs.length - 1;
        } else if (event.key === (isRtl ? 'ArrowRight' : 'ArrowLeft') || event.key === 'ArrowUp') {
          index--;
        } else if (event.key === (isRtl ? 'ArrowLeft' : 'ArrowRight') || event.key === 'ArrowDown') {
          index++;
        }

        if (index < 0) {
          index = this.tabs.length - 1;
        }

        if (index > this.tabs.length - 1) {
          index = 0;
        }

        this.tabs[index].focus({ preventScroll: true });

        if (this.activation === 'auto') {
          this.setActiveTab(this.tabs[index], { scrollBehavior: 'smooth' });
        }

        scrollIntoView(this.tabs[index], this.nav, 'horizontal');

        event.preventDefault();
      }
    }
  }

  @debounce(20)
  private handleScroll() {
    this.canScroll = {
      left: this.nav.scrollLeft > 0,
      right: this.nav.scrollLeft + this.nav.clientWidth < this.nav.scrollWidth - 1
    };
  }

  private handleScrollToStart() {
    this.nav.scroll({
      left:
        this.localize.dir() === 'rtl'
          ? this.nav.scrollLeft + this.nav.clientWidth
          : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: 'smooth'
    });
  }

  private handleScrollToEnd() {
    this.nav.scroll({
      left:
        this.localize.dir() === 'rtl'
          ? this.nav.scrollLeft - this.nav.clientWidth
          : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: 'smooth'
    });
  }

  /** Sets the active tab and panel. */
  private setActiveTab(tab: SdTab, options?: { emitEvents?: boolean; scrollBehavior?: 'auto' | 'smooth' }) {
    options = {
      emitEvents: true,
      scrollBehavior: 'auto',
      ...options
    };

    if (tab !== this.activeTab && !tab.disabled && !tab.visuallyDisabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;

      // Sync active tab and panel
      this.tabs.map(el => (el.active = el === this.activeTab));
      this.panels.map(el => (el.active = el.name === this.activeTab?.panel));
      this.repositionIndicator();

      scrollIntoView(this.activeTab, this.nav, 'horizontal', options.scrollBehavior);

      // Emit events
      if (options.emitEvents) {
        if (previousTab) {
          this.emit('sd-tab-hide', { detail: { name: previousTab.panel } });
        }

        this.emit('sd-tab-show', { detail: { name: this.activeTab.panel } });
      }
    }
  }

  private setAriaLabels() {
    // Link each tab with its corresponding panel
    this.tabs.forEach(tab => {
      const panel = this.panels.find(el => el.name === tab.panel);
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id')!);
      }
    });
  }

  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  private syncTabsAndPanels() {
    this.tabs = this.getAllTabs({ includeDisabled: false });
    this.panels = this.getAllPanels();
    this.repositionIndicator();

    this.panels.forEach(panel => {
      panel.tabIndex = 0;
    });

    // After updating, show or hide scroll controls as needed
    this.updateComplete.then(() => this.updateScrollControls());

    if (this.tabs.length !== 0 && this.tabs[0].variant === 'container') {
      this.variant = 'container';
    }
  }

  private updateScrollControls() {
    this.hasScrollControls = this.nav.scrollWidth > this.nav.clientWidth;
  }

  private async repositionIndicator() {
    await this.updateComplete;

    const currentTab = this.activeTab;
    const indicator = this.indicator;
    const tabsContainer = this.tabsContainer;

    if (!currentTab || !indicator || !tabsContainer || currentTab.variant === 'container') return;

    const tabRect = currentTab.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();
    const isCentered = getComputedStyle(tabsContainer).justifyContent === 'center';

    const containerCenter = containerRect.left + containerRect.width / 2;
    const tabCenter = tabRect.left + tabRect.width / 2;

    const width = currentTab.offsetWidth;
    const offsetX = isCentered ? tabCenter - containerCenter : tabRect.left - containerRect.left;

    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${offsetX}px)`;
  }

  /** Shows the specified tab panel. */
  show(panel: string) {
    const tab = this.tabs.find(el => el.panel === panel);

    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <div
        part="base"
        class=${cx('flex flex-col rounded-none')}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div part="nav" class=${cx(this.hasScrollControls && 'relative py-0 px-12')}>
          ${this.hasScrollControls
            ? html`
                <button
                  part="scroll-button--start"
                  exportparts="base:scroll-button__base"
                  tabindex="-1"
                  aria-hidden="true"
                  disabled=${ifDefined(!this.canScroll.left || undefined)}
                  class=${cx(
                    'sd-interactive flex items-center justify-center absolute top-0 bottom-0 left-0 !outline-offset-0 border-b border-neutral-400 z-10',
                    this.localize.dir() === 'rtl' && 'left-auto right-0'
                  )}
                  @click=${this.handleScrollToStart}
                >
                  <sd-icon
                    library="_internal"
                    name=${isRtl ? 'chevron-up' : 'chevron-down'}
                    label="previous"
                    class=${cx('h-6 w-12 rotate-90 grid place-items-center')}
                  ></sd-icon>
                </button>
              `
            : ''}

          <div part="scroll-container" class="flex overflow-x-auto focus-visible:focus-outline !outline-offset-0">
            <div part="tabs" class=${cx('flex flex-auto relative flex-row')} role="tablist">
              ${this.activeTab?.variant !== 'container'
                ? html` <div
                    part="active-tab-indicator"
                    id="indicator"
                    class="absolute h-1 bg-accent bottom-0 transition-[transform,width] duration-medium ease-in-out z-30"
                  ></div>`
                : ''}
              <div part="separation" class="border-neutral-400 absolute w-full h-0.25 bottom-0 border-b z-10"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls
            ? html`
                <button
                  part="scroll-button--end"
                  exportparts="base:scroll-button__base"
                  tabindex="-1"
                  aria-hidden="true"
                  disabled=${ifDefined(!this.canScroll.right || undefined)}
                  class=${cx(
                    'sd-interactive flex items-center justify-center absolute top-0 bottom-0 right-0 !outline-offset-0 border-b border-neutral-400 z-10',
                    this.localize.dir() === 'rtl' && 'right-auto left-0'
                  )}
                  @click=${this.handleScrollToEnd}
                >
                  <sd-icon
                    library="_internal"
                    name=${isRtl ? 'chevron-down' : 'chevron-up'}
                    label="next"
                    class=${cx('h-6 w-12 rotate-90 grid place-items-center')}
                  ></sd-icon>
                </button>
              `
            : ''}
        </div>

        <slot
          part="body"
          class=${cx('block auto py-8 px-6', this.variant === 'container' && 'border border-neutral-400 border-t-0')}
          @slotchange=${this.syncTabsAndPanels}
        ></slot>
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block box-border;
      }

      [part='scroll-container'] {
        /* Hide scrollbar in Firefox */
        scrollbar-width: none;
      }

      /* Hide scrollbar in Chrome/Safari */
      [part='scroll-container']::-webkit-scrollbar {
        @apply w-0 h-0;
      }

      ::slotted(sd-tab-panel) {
        --padding: 1rem 0;
      }

      ::slotted(sd-tab-panel:focus-visible) {
        @apply focus-outline;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tab-group': SdTabGroup;
  }
}
