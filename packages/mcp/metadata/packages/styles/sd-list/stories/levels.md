List items can be nested up to 3 levels.

```html
<div class="grid grid-cols-2 gap-12">
  <ul class="sd-list">
    <li>
      Unordered list level 1
      <ul>
        <li>
          Unordered list level 2
          <ul>
            <li>Unordered list level 3</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Unordered list level 1</li>
    <li>Unordered list level 1</li>
  </ul>
  <ol class="sd-list">
    <li>
      Ordered list level 1
      <ol>
        <li>
          Ordered list level 2
          <ol>
            <li>Ordered list level 3</li>
          </ol>
        </li>
      </ol>
    </li>
    <li>Ordered list level 1</li>
    <li>Ordered list level 1</li>
  </ol>
  <ul class="sd-list--icon sd-list">
    <li>
      <sd-icon name="content/image"></sd-icon>
      Unordered list level 1
      <ul class="sd-list--icon sd-list">
        <li>
          <sd-icon name="content/image"></sd-icon>
          Unordered list level 2
          <ul class="sd-list--icon sd-list">
            <li>
              <sd-icon name="content/image"></sd-icon>
              Unordered list level 3
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <sd-icon name="content/image"></sd-icon>
      Unordered list level 1
    </li>
    <li>
      <sd-icon name="content/image"></sd-icon>
      Unordered list level 1
    </li>
  </ul>
</div>
```
