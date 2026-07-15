Use the `size` attribute to change the size:

- `lg` (default)
- `md`
- `sm`

```html
<div class="flex flex-col gap-12">
  <sd-radio-group value="1" size="lg">
    <sd-radio-button value="1">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Large
    </sd-radio-button>
    <sd-radio-button value="2">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Large
    </sd-radio-button>
    <sd-radio-button value="3">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Large
    </sd-radio-button>
  </sd-radio-group>

  <sd-radio-group value="1" size="md">
    <sd-radio-button value="1" size="md">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Medium
    </sd-radio-button>
    <sd-radio-button value="2" size="md">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Medium
    </sd-radio-button>
    <sd-radio-button value="3" size="md">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Medium
    </sd-radio-button>
  </sd-radio-group>

  <sd-radio-group value="1" size="sm">
    <sd-radio-button value="1">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Small
    </sd-radio-button>
    <sd-radio-button value="2">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Small
    </sd-radio-button>
    <sd-radio-button value="3">
      <sd-icon name="system/image" slot="icon"></sd-icon>
      Small
    </sd-radio-button>
  </sd-radio-group>
</div>
```
