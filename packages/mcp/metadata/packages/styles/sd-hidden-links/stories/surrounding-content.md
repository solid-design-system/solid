The style appends its position relative to the position of the parent container and adds some default padding. It can be used on any element, and the padding is easily overridden via CSS.

```html
<div style="height: 100px; --sd-header-inner-max-width: 1456px;">
  <style>
    .sb-main-padded.sb-show-main {
      padding: 0;
    }
    :root {
      --sd-header-padding: 8px 16px;
    }

    sd-header {
      height: 64px;
      max-height: 140px;
    }

    @media (min-width: 376px) {
      :root {
        --sd-header-padding: 24px;
      }
      sd-header {
        height: 96px;
      }
    }

    @media (min-width: 1025px) {
      :root {
        --sd-header-padding: 24px 32px;
      }
      sd-header {
        height: 140px;
      }
    }

    @media (min-width: 1440px) {
      :root {
        --sd-header-padding: 24px 48px;
      }
    }
  </style>
  <div class="z-20 sd-hidden-links">
    <sd-button href="#">Skip to content</sd-button>
  </div>
  <sd-header class="z-10" fixed>
    <div class="flex justify-between items-center">
      <!-- top-left-area start !-->
      <a class="flex flex-shrink" href="#">
        <img class="h-8 md:h-12 lg:h-[56px]" src="images/logo-unioninvestment-lg.svg" alt="Logo" />
      </a>
    </div>
  </sd-header>
</div>
```
