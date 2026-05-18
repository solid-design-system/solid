Use the `headline` attribute to set the headline of the dialog. If you need to use custom HTML, use the headline slot instead.

```html
<div class="h-[40vh]">
  <sd-button id="headline-drawer-trigger">Open Dialog</sd-button>
  <sd-dialog id="headline-dialog" open headline="Headline">
    <p class="sd-paragraph">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
    </p>
    <sd-button slot="footer">Button</sd-button>
  </sd-dialog>
</div>
<script type="module">
  const dialog = document.getElementById('headline-dialog');
  const trigger = document.getElementById('headline-drawer-trigger');

  trigger.addEventListener('click', () => {
    dialog.show();
  });
</script>
```
