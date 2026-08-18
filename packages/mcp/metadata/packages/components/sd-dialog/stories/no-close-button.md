Use the `no-close-button` attribute to hide the close button in the dialog.
**Hint:** You should always include an action button that allows users to close the dialog.

```html
<div class="h-[40vh]">
  <sd-button id="no-close-drawer-trigger">Open dialog</sd-button>
  <sd-dialog id="no-close-dialog" headline="Headline" open no-close-button>
    <p class="sd-paragraph">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
    </p>
    <div slot="footer" class="flex sm:justify-end gap-4">
      <sd-button class="close-button" variant="primary">Button</sd-button>
    </div>
  </sd-dialog>
</div>

<script type="module">
  const dialog = document.getElementById('no-close-dialog');
  const button = dialog.querySelector('.close-button');
  const trigger = document.getElementById('no-close-drawer-trigger');

  button.addEventListener('click', () => {
    dialog.hide();
    setTimeout(() => {
      dialog.show();
    }, 2000);
  });

  trigger.addEventListener('click', () => {
    dialog.show();
  });
</script>
```
