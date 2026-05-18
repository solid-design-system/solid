Use the `state` attribute to change the appearance of the marker:

- `default`
- `hover`: When the marker is hovered
- `active`: When the marker is active

```html
<div class="flex gap-12">
  <div class="flex flex-col space-y-5">
    <sd-map-marker state="default">
      <span class="sr-only">Pinned location with default state</span>
    </sd-map-marker>
    <sd-map-marker state="hover">
      <span class="sr-only">Pinned location with hover state</span>
    </sd-map-marker>
    <sd-map-marker state="active">
      <span class="sr-only">Pinned location with active state</span>
    </sd-map-marker>
  </div>

  <div class="flex flex-col space-y-5">
    <sd-map-marker state="default" variant="place">
      <sd-icon name="content/image" color="primary"></sd-icon>
      <span class="sr-only">Pinned place with default state</span>
    </sd-map-marker>
    <sd-map-marker state="hover" variant="place">
      <sd-icon name="content/image" color="primary"></sd-icon>
      <span class="sr-only">Pinned place with hover state</span>
    </sd-map-marker>
    <sd-map-marker state="active" variant="place">
      <sd-icon name="content/image" color="primary"></sd-icon>
      <span class="sr-only">Pinned place with active state</span>
    </sd-map-marker>
  </div>

  <div class="flex flex-col space-y-5">
    <sd-map-marker state="default" variant="cluster">
      <span class="sr-only">Cluster of locations</span>
      88
    </sd-map-marker>
    <sd-map-marker state="hover" variant="cluster">
      <span class="sr-only">Hovered Cluster of locations</span>
      88
    </sd-map-marker>
  </div>
</div>
```
