Use the `removable` attribute to include the removability indicator.
This attribute is disabled when using the attributes `selected` or `toggleable`.
**Hint:** Combine the `sd-remove` event and `hide` method to visually hide the tag
when the removable button is triggered.

```html
<div class="flex gap-12">
  <sd-tag id="removable-tag" size="lg" removable>Removable</sd-tag>
</div>

<script type="module">
  const tag = document.querySelector('#removable-tag');

  tag.addEventListener('sd-remove', event => tag.hide());
  tag.addEventListener('sd-after-hide', event => {
    setTimeout(() => {
      event.target.style.opacity = '1';
      event.target.hidden = false;
    }, 2000);
  });
</script>
```
