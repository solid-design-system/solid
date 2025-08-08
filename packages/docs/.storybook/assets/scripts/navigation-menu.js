if (typeof window.NavigationMenu === 'undefined') {
  class NavigationMenuElement {
    constructor(element) {
      this.el = element;
    }

    emit(name, detail) {
      this.el.dispatchEvent(
        new CustomEvent(name, {
          bubbles: true,
          detail
        })
      );
    }
  }

  class NavigationMenuSubmenuBase extends NavigationMenuElement {
    constructor(
      element,
      options = {
        focusTimeout: undefined,
        shouldInert: false
      }
    ) {
      super(element);

      this.el = element;
      this.options = options;

      if (!this._init) {
        throw new Error('Must implement _init method!');
      }

      this._init();

      if (!this.trigger) {
        throw new Error('Trigger must be initialized on the _init method!');
      }
    }

    isActive() {
      return this.el.hasAttribute('data-active-submenu');
    }

    hasActiveItem() {
      return Array.from(this.el.querySelectorAll('sd-navigation-item:not([slot="trigger"]')).some(item =>
        item.hasAttribute('current')
      );
    }

    reset() {
      this._reset?.();
      this.el.removeAttribute('data-active-submenu');
      this.el.querySelectorAll('sd-navigation-item').forEach(item => {
        if (item.querySelector('sd-navigation-item[current]')) return;
        item.removeAttribute('open');
      });
    }

    open(focusWithin = true) {
      if (!this._open) {
        throw new Error('Must implement _open method!');
      }

      this._open();
      this.el.setAttribute('data-active-submenu', '');
      this.trigger.shadowRoot.querySelector('[part="base"]').setAttribute('aria-expanded', 'true');

      if (focusWithin) {
        this.focusWithin();
      }

      this.emit('sd-navigation-submenu-open', { source: this });
    }

    close() {
      if (!this._close) {
        throw new Error('Must implement _close method!');
      }

      this._close();
      this.el.removeAttribute('data-active-submenu');
      this.trigger.shadowRoot.querySelector('[part="base"]').setAttribute('aria-expanded', 'false');

      if (!this.hasActiveItem()) {
        this.trigger.removeAttribute('current');
      }

      this.emit('sd-navigation-submenu-close', { source: this });
    }

    focusWithin() {
      const firstNavigationMenuItem = this.el.querySelector('sd-navigation-item:not([slot="trigger"])');
      setTimeout(() => firstNavigationMenuItem?.focus(), this.options.focusTimeout || 0);
    }

    focusTrigger() {
      setTimeout(() => this.trigger.focus(), this.options.focusTimeout || 0);
    }

    back() {
      this.close();
      this.focusTrigger();
    }

    getTabbableBoundary() {
      return Array.from(
        Array.from(this.el.querySelectorAll(['sd-navigation-item', 'sd-button'].join(','))).filter(
          el =>
            !(
              el.tagName === 'SD-NAVIGATION-ITEM' &&
              el.parentElement.tagName === 'SD-NAVIGATION-ITEM' &&
              !el.parentElement.hasAttribute('open')
            )
        )
      );
    }
  }

  class NavigationMenuItemBase extends NavigationMenuElement {
    constructor(element) {
      super(element);

      this.el = element;
      this.el.addEventListener('click', e => this.onClick(e));
      this.base = this.el.shadowRoot.querySelector('[part="base"]');

      if (!this._init) {
        throw new Error('Must implement _init method!');
      }

      this._init();

      if (this.isSubmenuTrigger) {
        this.base.setAttribute('aria-haspopup', 'true');
        this.base.setAttribute('aria-expanded', 'false');
      }

      const hasChildren = !!this.el.querySelector('[slot="children"]');
      if (hasChildren) {
        this.isGroupItem = true;
      }

      if (hasChildren && this.el.querySelector('sd-navigation-item[current]')) {
        this.el.setAttribute('open', '');
      }
    }

    onClick(event) {
      if (event.target.closest('sd-navigation-item') !== this.el) return;
      if (event.pointerType === 'touch' && this.isSubmenuTrigger && event.target.closest('sd-dropdown')) return;
      this.click();
    }

    focus() {
      this.el.focus();
    }

    click(focusWithin = true) {
      if (this.isSubmenuTrigger) {
        this.submenu.open(focusWithin);
        return;
      }

      if (this.isGroupItem && !this.el.separated) {
        this.el.toggleAttribute('open');
        return;
      }

      this._click?.();
      this.emit('sd-navigation-item-click', { source: this });
    }

    setCurrent(current) {
      if (current) {
        this.el.setAttribute('current', '');
      } else {
        this.el.removeAttribute('current');
      }
    }
  }

  class NavigationMenuFocusControllerBase {
    constructor(menu, options = { direction: 'horizontal' }) {
      this.menu = menu;
      this.options = options;
      this.menu.el.addEventListener('keydown', e => this.onKeydown(e));
    }

    focusNext() {
      throw new Error('Must implement focusNext method!');
    }

    focusPrevious() {
      throw new Error('Must implement focusPrevious method!');
    }

    onKeydown(e) {
      const item = this.menu.items.find(_item => _item.el === e.target);

      if (this.options.direction === 'horizontal') {
        switch (e.key) {
          case 'ArrowDown':
            if (item.isSubmenuTrigger) {
              item.click();
            }
            break;
          case 'ArrowUp':
            item.parent?.back();
            break;
          case 'ArrowRight':
            this.focusNext(item);
            break;
          case 'ArrowLeft':
            this.focusPrevious(item);
            break;
        }
      } else {
        switch (e.key) {
          case 'ArrowDown':
            this.focusNext(item);
            break;
          case 'ArrowUp':
            this.focusPrevious(item);
            break;
          case 'ArrowRight':
            if (item.isSubmenuTrigger || (item.isGroupItem && !item.el.separated)) {
              item.click();
            } else if (item.isGroupItem && item.el.separated) {
              item.el.toggleAttribute('open');
            }
            break;
          case 'ArrowLeft':
            item.parent?.back();
            break;
        }
      }
    }
  }

  class NavigationMenu extends NavigationMenuElement {
    constructor(
      element,
      ItemClass,
      options = {
        backButton: null,
        currentOnTrigger: false
      }
    ) {
      super(element);

      if (!ItemClass) {
        throw new Error('Must provide ItemClass parameter!');
      }

      this.el = element;
      this.items = Array.from(element.querySelectorAll('sd-navigation-item')).map(item => new ItemClass(item));

      this.options = options;
      this.options.backButton?.addEventListener('click', () => this.handleBackButton());
      this.options.backButton?.setAttribute('hidden', '');

      this.el.addEventListener('sd-navigation-item-click', e => this.onItemClick(e));
      this.el.addEventListener('sd-navigation-submenu-open', e => this.onSubmenuOpen(e));
      this.el.addEventListener('sd-navigation-submenu-close', e => this.onSubmenuClose(e));
    }

    reset() {
      this.el.removeAttribute('data-submenu-open');
      this.items.forEach(item => {
        item.el.removeAttribute('inert');
        item.submenu?.reset();
      });
    }

    onItemClick(e) {
      this.items.forEach(item => {
        const isTarget = item.el === e.target;
        const isCurrent = this.options.currentOnTrigger ? isTarget || !!item.submenu?.el.contains(e.target) : isTarget;
        item.setCurrent(isCurrent);
      });
    }

    handleBackButton() {
      this.items.forEach(item => {
        if (item.submenu && item.submenu.isActive()) {
          item.submenu.back();
        }
      });
    }

    onSubmenuOpen(e) {
      const submenu = e.detail.source;
      if (submenu.options.shouldInert) {
        this.items.forEach(item => {
          item.submenu?.el.setAttribute('inert', '');

          if (item.parent?.el !== submenu.el) {
            item.el.setAttribute('inert', '');
          }
        });

        submenu.el.removeAttribute('inert');
      }

      this.options.backButton?.removeAttribute('hidden');
      this.el.setAttribute('data-submenu-open', '');
    }

    onSubmenuClose() {
      this.options.backButton?.setAttribute('hidden', '');
      this.reset();
    }
  }

  // Horizontal Mega Menu (Desktop)
  class NavigationMenuHorizontalSubmenu extends NavigationMenuSubmenuBase {
    constructor(element) {
      super(element);
      this.el.addEventListener('pointerout', e => this.onPointerOut(e));
      this.el.addEventListener('sd-hide', () => this.close());
    }

    _init() {
      this.trigger = this.el.querySelector('[slot="trigger"]');
    }

    _open() {
      this.el.show();
    }

    _close() {
      this.el.hide();
    }

    onPointerOut(event) {
      if (event.pointerType !== 'mouse' || this.el.contains(event.relatedTarget)) return;
      this.close();
    }
  }

  class NavigationMenuHorizontalItem extends NavigationMenuItemBase {
    _init() {
      if (this.el.closest('sd-dropdown') && this.el.getAttribute('slot') === 'trigger') {
        this.isSubmenuTrigger = true;
        this.submenu = new NavigationMenuHorizontalSubmenu(this.el.closest('sd-dropdown'));
        this.el.addEventListener('pointerover', e => {
          if (e.pointerType === 'touch') return;
          this.click(false);
        });
      }

      if (this.el.closest('sd-dropdown')) {
        this.parent = new NavigationMenuHorizontalSubmenu(this.el.closest('sd-dropdown'));
      }
    }

    _click() {
      if (this.isGroupItem) {
        this.el.toggleAttribute('open');
      }
    }
  }

  class HorizontalFocusController extends NavigationMenuFocusControllerBase {
    constructor(menu) {
      super(menu, { direction: 'horizontal' });
    }

    focusNext(item) {
      let index = this.menu.items.findIndex(_item => _item.el === item.el);
      let next = this.menu.items[index + 1];

      while (true) {
        if (!next) break;

        if (item.parent && !item.isSubmenuTrigger && item.parent.el !== next.parent?.el) return;

        if (next.parent && !next.isSubmenuTrigger && !next.parent.isActive()) {
          index++;
          next = this.menu.items[index + 1];
          continue;
        }

        break;
      }

      if (item.parent && item.parent.el !== next?.parent?.el) {
        item.parent?.close();
      }

      next?.focus();
    }

    focusPrevious(item) {
      let index = this.menu.items.findIndex(_item => _item.el === item.el);
      let previous = this.menu.items[index - 1];

      while (true) {
        if (!previous) break;

        if (previous.parent && previous.isSubmenuTrigger && previous.parent.el === item.parent?.el) return;

        if (previous.parent && !previous.isSubmenuTrigger && !previous.parent.isActive()) {
          index--;
          previous = this.menu.items[index - 1];
          continue;
        }

        break;
      }

      if (item.parent && item.parent.el !== previous?.parent?.el) {
        item.parent?.close();
      }

      previous?.focus();
    }
  }

  // Vertical Mega Menu (Mobile)
  class NavigationMenuVerticalSubmenu extends NavigationMenuSubmenuBase {
    constructor(element) {
      super(element, { focusTimeout: 300, shouldInert: true });
    }

    _init() {
      this.trigger = this.el.previousElementSibling;
      this.el.setAttribute('inert', '');
      this.el.querySelector('sd-button')?.addEventListener('click', () => this.back());
    }

    _reset() {
      this.el.setAttribute('inert', '');
    }

    _open() {
      this.el.removeAttribute('inert');
    }

    _close() {
      this.el.setAttribute('inert', '');
    }
  }

  class NavigationMenuVerticalItem extends NavigationMenuItemBase {
    _init() {
      if (this.el.nextElementSibling?.matches('[data-submenu]')) {
        this.isSubmenuTrigger = true;
        this.submenu = new NavigationMenuVerticalSubmenu(this.el.nextElementSibling);
      }

      if (this.el.closest('[data-submenu]')) {
        this.parent = new NavigationMenuVerticalSubmenu(this.el.closest('[data-submenu]'));
      }
    }
  }

  class VerticalFocusController extends NavigationMenuFocusControllerBase {
    constructor(menu) {
      super(menu, { direction: 'vertical' });
    }

    focusNext(item) {
      let index = this.menu.items.findIndex(_item => _item.el === item.el);
      let next = this.menu.items[index + 1];

      while (true) {
        if (!next) break;

        if (item.parent && item.parent.el !== next.parent?.el) return;

        if (next.parent && !next.parent.isActive()) {
          index++;
          next = this.menu.items[index + 1];
          continue;
        }

        if (
          next.el.parentElement.closest('sd-navigation-item') &&
          !next.el.parentElement.closest('sd-navigation-item').hasAttribute('open')
        ) {
          index++;
          next = this.menu.items[index + 1];
          continue;
        }

        break;
      }

      next?.focus();
    }

    focusPrevious(item) {
      let index = this.menu.items.findIndex(_item => _item.el === item.el);
      let previous = this.menu.items[index - 1];

      while (true) {
        if (!previous) break;

        if (item.parent && item.parent.el !== previous.parent?.el) return;

        if (previous.parent && !previous.parent.isActive()) {
          index--;
          previous = this.menu.items[index - 1];
          continue;
        }

        if (
          previous.el.parentElement.closest('sd-navigation-item') &&
          !previous.el.parentElement.closest('sd-navigation-item').hasAttribute('open')
        ) {
          index--;
          previous = this.menu.items[index - 1];
          continue;
        }

        break;
      }

      previous?.focus();
    }
  }

  window.NavigationMenu = NavigationMenu;
  window.NavigationMenuHorizontalItem = NavigationMenuHorizontalItem;
  window.HorizontalFocusController = HorizontalFocusController;
  window.NavigationMenuVerticalItem = NavigationMenuVerticalItem;
  window.VerticalFocusController = VerticalFocusController;
}
