Use the `selected` attribute to enable the selected state.
**Accessibility hint**: Use the attribute `toggleable` to reflect the `selected` state on the `aria-pressed` attribute.

```html
<div id="tags-selected" class="flex gap-12">
  <sd-tag selected toggleable>Selected</sd-tag>
</div>

<script type="module">
  const handleToggle = event => {
    const tag = event.target;
    tag.toggleAttribute('selected');
    const isSelected = tag.hasAttribute('selected');
    tag.innerText = isSelected ? 'Selected' : 'Unselected';
  };

  const tags = document.querySelectorAll('#tags-selected sd-tag');
  tags.forEach(tag => tag.addEventListener('click', handleToggle));
</script>
```
