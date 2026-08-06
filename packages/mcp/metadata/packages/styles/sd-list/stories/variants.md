Use `sd-list` modifiers for alternative appearances:

- `ul` standard html list element to create an unordered list
- `ol` standard html list element to create a ordered list
- `sd-list--icon` class to create an icon list

```html
<div class="grid grid-cols-3 gap-12">
  <ul class="sd-list">
    <li>Unordered list</li>
    <li>Unordered list</li>
    <li>Unordered list</li>
  </ul>
  <ol class="sd-list">
    <li>Ordered list</li>
    <li>Ordered list</li>
    <li>Ordered list</li>
  </ol>
  <ul class="sd-list--icon sd-list">
    <li>
      <sd-icon name="content/image"></sd-icon>
      Icon list
    </li>
    <li>
      <sd-icon name="content/image"></sd-icon>
      Icon list
    </li>
    <li>
      <sd-icon name="content/image"></sd-icon>
      Icon list
    </li>
  </ul>
</div>
```
