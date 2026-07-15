Use the `no-close-button` attribute to hide the close button in the dialog.
**Hint:** You should always include an action button that allows users to close the dialog.

```html
<div class="h-[40vh]">
  <sd-button id="no-close-drawer-trigger">Open Dialog</sd-button>
  <sd-dialog id="no-close-dialog" headline="Headline" open no-close-button>
    <p class="sd-paragraph">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
    </p>
    <sd-button class="close-button" slot="footer" variant="primary">Button</sd-button>
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
