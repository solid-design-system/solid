Use the `variant` attribute to change the appearance of the marker:

- `main` (default)
- `place`: Used to show a location on the map
- `cluster`: Used to show multiple locations on the map

```html
<div class="flex items-center gap-12">
  <sd-map-marker>
    <span class="sr-only">Pinned Location</span>
  </sd-map-marker>
  <sd-map-marker variant="place">
    <sd-icon name="content/image" color="primary"></sd-icon>
    <span class="sr-only">Pinned Place</span>
  </sd-map-marker>
  <sd-map-marker variant="cluster">
    88
    <span class="sr-only">Locations</span>
  </sd-map-marker>
</div>
```
