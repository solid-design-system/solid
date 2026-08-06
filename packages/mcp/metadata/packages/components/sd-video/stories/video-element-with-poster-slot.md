- Use in combination with a viewer component (e. g. from Moving Image) or a bare `<video>`-Tag.
- Use the `poster` slot to add a preview image.

```html
<sd-video>
  <video controls="" id="video-example" class="w-[854px] aspect-video">
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
    class="w-[854px] aspect-video cover"
    src="./placeholders/images/union-investment.png"
  />
</sd-video>
```
