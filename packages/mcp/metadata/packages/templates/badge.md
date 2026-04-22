---
name: badge
title: Badge
components:
  - sd-badge
  - sd-button
  - sd-header
  - sd-icon
  - sd-navigation-item
version: 1.0.0
---

## Template: Button with badge

```html
<div class="flex flex-col">
  <section class="flex p-8 gap-10 items-center">
    <sd-button role="status">
      <sd-badge>10</sd-badge>
      Requests
    </sd-button>
    <sd-button variant="secondary" role="status">
      <sd-icon name="system/rss" slot="icon-left"></sd-icon>
      <sd-badge>+99</sd-badge>
      News
    </sd-button>
    <sd-button variant="secondary" size="md">
      <sd-icon name="system/phone"></sd-icon>
      <sd-badge variant="red" size="md" role="status">
        4
        <span class="sr-only">Calls</span>
      </sd-badge>
    </sd-button>
    <sd-button variant="tertiary" size="md">
      <sd-icon name="system/bell"></sd-icon>
      <sd-badge class="mt-2.5 mr-2.5" variant="green" size="md" role="status">
        5
        <span class="sr-only">Notifications</span>
      </sd-badge>
    </sd-button>
    <sd-button variant="tertiary" size="md">
      <sd-icon name="system/user"></sd-icon>
      <sd-badge class="mt-[0.75rem] mr-[0.75rem]" size="sm" role="status"> User Notifications Available </sd-badge>
    </sd-button>
  </section>
  <section class="flex p-8 gap-10 bg-primary items-center">
    <sd-button inverted role="status">
      <sd-badge inverted>10</sd-badge>
      Requests
    </sd-button>
    <sd-button inverted variant="secondary" size="md" role="status">
      <sd-icon name="system/rss" slot="icon-left"></sd-icon>
      <sd-badge inverted>+99</sd-badge>
      News
    </sd-button>
    <sd-button inverted variant="secondary" size="md">
      <sd-icon name="system/phone"></sd-icon>
      <sd-badge inverted variant="red" size="md" role="status">
        4
        <span class="sr-only">Calls</span>
      </sd-badge>
    </sd-button>
    <sd-button inverted variant="tertiary" size="md">
      <sd-icon name="system/bell"></sd-icon>
      <sd-badge inverted class="mt-2.5 mr-2.5" variant="green" size="md" role="status">
        5
        <span class="sr-only">Notifications</span>
      </sd-badge>
    </sd-button>
    <sd-button inverted variant="tertiary" size="md">
      <sd-icon name="system/user"></sd-icon>
      <sd-badge inverted class="mt-[0.75rem] mr-[0.75rem]" size="sm" role="status">
        User Notifications Available
      </sd-badge>
    </sd-button>
  </section>
</div>
```

## Template: Navigation Item with Badge

```html
<style>
  #anchor--templates-badge--navigation-item-with-badge .innerZoomElementWrapper {
    height: 100px;
  }
</style>
<sd-header class="max-w-[650px]" fixed>
  <div class="flex justify-between items-center">
    <a class="flex flex-shrink" href="#">
      <img class="h-8" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
    </a>
    <div class="flex">
      <sd-navigation-item class="relative">
        <sd-icon name="system/bell" class="text-xl" label="Open Notifications"></sd-icon>
        <sd-badge class="absolute -top-2 -right-5" size="md">
          +99
          <span class="sr-only">Notifications</span>
        </sd-badge>
      </sd-navigation-item>
      <sd-navigation-item>
        <sd-icon name="system/menu" class="text-xl" label="Open menu"></sd-icon>
      </sd-navigation-item>
    </div>
  </div>
</sd-header>
```

## Template: Interactive Increment

```html
<section class="flex gap-12 items-center">
  <sd-button variant="tertiary" size="md">
    <sd-icon name="system/bell"></sd-icon>
    <sd-badge class="mt-2.5 mr-2.5" variant="green" size="md" role="status">
      <span id="interactive-badge-count">5</span>
      <span class="sr-only">Notifications</span>
    </sd-badge>
  </sd-button>

  <sd-button id="interactive-badge-button"> Increment </sd-button>
</section>
<script type="module">
  await Promise.all([
    customElements.whenDefined('sd-icon'),
    customElements.whenDefined('sd-badge'),
    customElements.whenDefined('sd-button')
  ]).then(() => {
    const button = document.querySelector('#interactive-badge-button');
    const countElement = document.querySelector('#interactive-badge-count');

    const state = { count: 5, limit: 10 };

    const update = () => {
      const label = state.count > state.limit ? '+' + state.limit : state.count;
      countElement.innerHTML = label;
    };

    update();
    button.addEventListener('click', () => {
      state.count += 1;
      update();
    });
  });
</script>
```
