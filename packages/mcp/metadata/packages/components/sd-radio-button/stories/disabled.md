Use the `disabled` attribute to disable an input radio button.

```html
<div class="flex gap-12">
  <sd-radio-group value="1">
    <sd-radio-button value="1">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Label
    </sd-radio-button>
    <sd-radio-button value="2" disabled>
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Disabled
    </sd-radio-button>
    <sd-radio-button value="3">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Label
    </sd-radio-button>
  </sd-radio-group>
</div>
```
