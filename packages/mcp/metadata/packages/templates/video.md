---
name: video
title: Video
components:
  - sd-copyright
  - sd-copyright--placement-top
  - sd-media
  - sd-video
version: 1.0.0
---

## Template: Video with Description

```html
<figure class="sd-media">
  <sd-video>
    <video controls class="aspect-video">
      <source src="./placeholders/videos/sds-placeholder-video/sds-placeholder-video.webm" type="video/webm" />
      <track
        label="English"
        kind="subtitles"
        srclang="en"
        src="./placeholders/videos/sds-placeholder-video/sds-placeholder-video.vtt"
        default
      />
      Your browser does not support the video tag.
    </video>
    <img
      slot="poster"
      alt="Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
      class="aspect-video cover"
      src="./placeholders/images/union-investment.png"
    />
  </sd-video>
  <figcaption class="mt-4">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua.
  </figcaption>
</figure>
```

## Template: Video with Copyright

```html
<style>
  .sd-copyright::after {
    z-index: 10;
  }
</style>
<div class="sd-copyright sd-copyright--placement-top" style="--copyright:'© Union Investment 2025'">
  <sd-video>
    <video controls class="aspect-video">
      <source src="./placeholders/videos/sds-placeholder-video/sds-placeholder-video.webm" type="video/webm" />
      <track
        label="English"
        kind="subtitles"
        srclang="en"
        src="./placeholders/videos/sds-placeholder-video/sds-placeholder-video.vtt"
        default
      />
      Your browser does not support the video tag.
    </video>
    <img
      slot="poster"
      alt="Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
      class="aspect-video cover"
      src="./placeholders/images/union-investment.png"
    />
  </sd-video>
</div>
```
