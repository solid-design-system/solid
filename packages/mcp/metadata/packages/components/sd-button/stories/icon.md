Use the `icon-left` or `icon-right` slot to add system icons.
**Accessibility hint:** Only use icon-only buttons when the icon meaning is unambiguous. Consider also adding the `title` attribute to describe the icon’s underlying action.

```html
<div class="flex gap-12">
  <sd-button>Icon left<sd-icon name="system/image" slot="icon-left"></sd-icon></sd-button>
  <sd-button>Icon right<sd-icon name="system/image" slot="icon-right"></sd-icon></sd-button>
  <sd-button title="icon only"><sd-icon name="system/image" label="Icon only"></sd-icon></sd-button>
</div>
```
