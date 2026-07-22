---
name: carousel
title: Carousel
components:
  - sd-carousel
  - sd-carousel-item
version: 1.0.0
---

## Template: Carousel with Images

```html
<sd-carousel role="region" aria-label="Carousel with images" fade>
  <sd-carousel-item>
    <img
      src="./placeholders/images/architecture.jpg"
      alt="Modern, waved architecture with blue sky in background"
      class="aspect-video"
    />
  </sd-carousel-item>
  <sd-carousel-item>
    <img
      src="./placeholders/images/skyline.jpg"
      alt="A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs."
      class="aspect-video"
    />
  </sd-carousel-item>
  <sd-carousel-item>
    <img
      src="./placeholders/images/workspace.jpg"
      alt="Close-up of a pair of glasses, a pen, and an open notebook with notes written on it, on a desk next to a laptop."
      class="aspect-video"
    />
  </sd-carousel-item>
</sd-carousel>
```

## Template: Loop and Autoplay

```html
<sd-carousel loop autoplay role="region" aria-label="Carousel in loop and autoplay">
  <sd-carousel-item>
    <img
      src="./placeholders/images/coffeeshop.jpg"
      alt="A group of people sitting in a coffee shop"
      class="aspect-video"
    />
  </sd-carousel-item>
  <sd-carousel-item>
    <img
      src="./placeholders/images/friends.jpg"
      alt="A couple of friends sitting and laughing together on a bed with a dog."
      class="aspect-video"
    />
  </sd-carousel-item>
  <sd-carousel-item>
    <img
      src="./placeholders/images/family.jpg"
      alt="A smiling father with two children outdoors, symbolizing shared values and future growth."
      class="aspect-video"
    />
  </sd-carousel-item>
</sd-carousel>
```
