Use the `sd-interactive--reset` class to reset the default browser styles of e. g. a button.

```html
<style>
  button.sd-interactive:not(.sd-interactive--reset) {
    background-color: rgb(239, 239, 239);
    border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    color: rgb(51, 51, 51);
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 8px 16px;
  }
  button.sd-interactive:not(.sd-interactive--reset):hover {
    background-color: rgb(230, 230, 230);
    border-color: rgb(204, 204, 204);
    color: rgb(51, 51, 51) !important;
  }
  button.sd-interactive:not(.sd-interactive--reset):active {
    background-color: rgb(204, 204, 204);
  }
</style>
<div class="flex flex-row gap-8">
  <button class="sd-interactive" title="Action name">Default</button>
  <button class="sd-interactive sd-interactive--reset" title="Action name">Reset</button>
</div>
```
