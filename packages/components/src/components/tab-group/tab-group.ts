import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { scrollIntoView } from '../../internal/scroll';
import { watch } from '../../internal/watch';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import InteractiveStyles from '../../styles/interactive/interactive.css?inline';
import SolidElement from '../../internal/solid-element';
import type SdTab from '../tab/tab';
import type SdTabPanel from '../tab-panel/tab-panel';

/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://solid.union-investment.com/[storybook-link]/tab-group
 * @status stable
 * @since 2.1.0
 *
 * @dependency sd-button
 *
 * @slot - Used for grouping tab panels in the tab group. Must be `<sd-tab-panel>` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be `<sd-tab>` elements.
 *
 * @event {{ name: String }} sd-tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} sd-tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group's navigation container where tabs are slotted in.
 * @csspart tabs - The container that wraps the tabs.
 * @csspart active-tab-indicator - The line that highlights the currently selected tab.
 * @csspart body - The tab group's body where tab panels are slotted in.
 * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an `<sd-button>`.
 * @csspart scroll-button--start - The starting scroll button.
 * @csspart scroll-button--end - The ending scroll button.
 * @csspart scroll-button__base - The scroll button's exported `base` part.
 *
 * @cssproperty --indicator-color - The color of the active tab indicator.
 * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
 * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
 */
@customElement('sd-tab-group')
export default class SdTabGroup extends SolidElement {
  private readonly localize = new LocalizeController(this);

  @state() activeTab?: SdTab;
  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;
  private tabs: SdTab[] = [];
  private panels: SdTabPanel[] = [];

  @query('[part=base]') tabGroup: HTMLElement;
  @query('[part=body]') body: HTMLSlotElement;
  @query('.tab-group__nav') nav: HTMLElement;
  @query('.tab-group__indicator') indicator: HTMLElement;
  @query('.tab-group__indicator--background') indicatorBackground: HTMLElement;

  @state() private hasScrollControls = false;

  /** When set to container, a border appears around the current tab. */
  @property({ type: String, reflect: true }) variant: 'default' | 'container' = 'default';

  /**
   * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   */
  @property() activation: 'auto' | 'manual' = 'auto';

  connectedCallback() {
    const whenAllDefined = Promise.all([
      customElements.whenDefined('sd-tab'),
      customElements.whenDefined('sd-tab-panel')
    ]);

    super.connectedCallback();

    this.resizeObserver = new ResizeObserver(() => {
      this.repositionIndicator();
      this.updateScrollControls();
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
    this.resizeObserver.unobserve(this.nav);
  }

  private getAllTabs(options: { includeDisabled: boolean } = { includeDisabled: true }) {
    const slot = this.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="nav"]')!;

    return [...(slot.assignedElements() as SdTab[])].filter(el => {
      return options.includeDisabled
        ? el.tagName.toLowerCase() === 'sd-tab'
        : el.tagName.toLowerCase() === 'sd-tab' && !el.disabled;
    });
  }

  private getAllPanels() {
    return [...this.body.assignedElements()].filter(el => el.tagName.toLowerCase() === 'sd-tab-panel') as [SdTabPanel];
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

  setActiveTab(tab: SdTab, options?: { emitEvents?: boolean; scrollBehavior?: 'auto' | 'smooth' }) {
    options = {
      emitEvents: true,
      scrollBehavior: 'auto',
      ...options
    };

    if (tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;

      // Sync active tab and panel
      this.tabs.map(el => (el.active = el === this.activeTab));
      this.panels.map(el => (el.active = el.name === this.activeTab?.panel));
      this.syncIndicator();

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
        panel.setAttribute('aria-labelledby', tab.getAttribute('id')!);
      }
    });
  }

  private repositionIndicator() {
    const currentTab = this.activeTab;

    if (!currentTab) {
      return;
    }

    const width = this.variant === 'default' ? currentTab.clientWidth : currentTab.clientWidth / 2;
    const isRtl = this.localize.dir() === 'rtl';

    // We can't used offsetLeft/offsetTop here due to a shadow parent issue where neither can getBoundingClientRect
    // because it provides invalid values for animating elements: https://bugs.chromium.org/p/chromium/issues/detail?id=920069
    const allTabs = this.getAllTabs();
    const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
    const offset = precedingTabs.reduce(
      (previous, current) => ({
        left: previous.left + current.clientWidth,
        top: previous.top + current.clientHeight
      }),
      { left: 0, top: 0 }
    );

    this.indicator.style.width = `${width}px`;
    this.indicator.style.height = 'auto';
    this.indicator.style.translate = isRtl
      ? `${-1 * offset.left + (this.variant === 'default' ? 0 : currentTab.clientWidth / 4)}px`
      : `${offset.left + (this.variant === 'default' ? 0 : currentTab.clientWidth / 4)}px`;

    this.indicatorBackground.style.width = `${currentTab.clientWidth}px`;
    this.indicatorBackground.style.height = 'auto';
    this.indicatorBackground.style.translate = isRtl ? `${-1 * offset.left}px` : `${offset.left}px`;
  }

  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  private syncTabsAndPanels() {
    this.tabs = this.getAllTabs({ includeDisabled: false });
    this.panels = this.getAllPanels();
    this.syncIndicator();

    // After updating, show or hide scroll controls as needed
    this.updateComplete.then(() => this.updateScrollControls());
  }

  private updateScrollControls() {
    this.hasScrollControls = this.nav.scrollWidth > this.nav.clientWidth;
  }

  @watch('placement', { waitUntilFirstUpdate: true })
  syncIndicator() {
    const tab = this.activeTab;

    if (tab) {
      this.indicator.style.display = 'block';
      this.repositionIndicator();
    } else {
      this.indicator.style.display = 'none';
    }
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
        class=${cx(
          'flex flex-col rounded-none',
          this.localize.dir() === 'rtl' && 'tab-group--rtl',
          this.hasScrollControls && 'tab-group--has-scroll-controls',
          this.variant === 'container' && 'tab-group--container'
        )}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls
            ? html`
                <button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${cx(
                    'tab-group__scroll-button tab-group__scroll-button--start sd-interactive flex items-center justify-center absolute top-0 bottom-0 left-0'
                  )}
                  @click=${this.handleScrollToStart}
                >
                  <sd-icon
                    library="system"
                    name=${isRtl ? 'chevron-up' : 'chevron-down'}
                    class=${cx('h-6 w-12 rotate-90 grid place-items-center')}
                  ></sd-icon>
                </button>
              `
            : ''}

          <div class="tab-group__nav flex overflow-x-auto">
            <div part="tabs" class=${cx('tab-group__tabs flex flex-auto relative flex-row')} role="tablist">
              <div part="active-tab-indicator" class=${cx('tab-group__indicator absolute bottom-0')}></div>
              <div
                class=${cx(
                  'tab-group__indicator--background absolute bottom-0',
                  this.variant !== 'container' && 'hidden'
                )}
              ></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls
            ? html`
                <button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${cx(
                    'tab-group__scroll-button tab-group__scroll-button--end sd-interactive flex items-center justify-center absolute top-0 bottom-0 right-0'
                  )}
                  @click=${this.handleScrollToEnd}
                >
                  <sd-icon
                    library="system"
                    name=${isRtl ? 'chevron-down' : 'chevron-up'}
                    class=${cx('h-6 w-12 rotate-90 grid place-items-center')}
                  ></sd-icon>
                </button>
              `
            : ''}
        </div>

        <slot
          part="body"
          class=${cx('tab-group__body block auto py-8 px-6')}
          @slotchange=${this.syncTabsAndPanels}
        ></slot>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    unsafeCSS(InteractiveStyles),
    componentStyles,
    css`
      :host {
        --indicator-color: rgb(45 157 0);
        --track-color: rgb(174 174 174);
        --track-width: 1px;

        @apply block;
      }

      .tab-group__indicator {
        border-bottom: solid calc(var(--track-width) * 2) var(--indicator-color);
        transition:
          200ms translate ease,
          200ms width ease;
      }

      .tab-group__indicator--background {
        border-bottom: solid var(--track-width) white;
        margin-left: 1px;
        margin-bottom: -1px;
      }

      .tab-group--has-scroll-controls .tab-group__nav-container {
        @apply relative py-0 px-12;
      }

      .tab-group__scroll-button {
        border-bottom: solid var(--track-width) var(--track-color);
      }

      .tab-group--rtl .tab-group__scroll-button--start {
        @apply left-auto right-0;
      }

      .tab-group--rtl .tab-group__scroll-button--end {
        @apply right-auto left-0;
      }

      .tab-group__nav {
        /* Hide scrollbar in Firefox */
        scrollbar-width: none;
      }

      /* Hide scrollbar in Chrome/Safari */
      .tab-group__nav::-webkit-scrollbar {
        @apply w-0 h-0;
      }

      .tab-group__tabs {
        border-bottom: solid var(--track-width) var(--track-color);
      }

      .tab-group--container .tab-group__body {
        @apply border-t-0;
        border: solid var(--track-width) var(--track-color);
        border-top: none;
      }

      ::slotted(sd-tab-panel) {
        --padding: 1rem 0;
      }

      .tab-group--container ::slotted(sd-tab) {
        border-radius: 4px 4px 0 0 !important;
      }

      .tab-group--container ::slotted(sd-tab[active]) {
        border: solid var(--track-width) var(--track-color) !important;
        border-bottom: none !important;
        margin-bottom: -1px;
      }

      .tab-group--container .tab-group__indicator {
        transition: none;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tab-group': SdTabGroup;
  }
}
