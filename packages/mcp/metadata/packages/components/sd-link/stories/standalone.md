Use the `standalone` attribute to control the layout of the icon and text within the component.
If true, the icon and text will be displayed side by side, each occupying its own column.
If false or not provided, the icon will be displayed inline within the text.

```html
<div class="flex gap-12">
  <div class="sd-prose">
    <ul>
      <li>
        <sd-link href="http://union-investment.com" standalone>
          <sd-icon name="system/home" slot="icon-left"></sd-icon>
          Union Investment
        </sd-link>
      </li>
      <li>
        <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" standalone>
          <sd-icon name="system/pen" slot="icon-left"></sd-icon>
          Solid Design System
        </sd-link>
      </li>
    </ul>

    <p>
      While the list above shows standalone links, we now will link to the
      <sd-link href="https://cd.union-investment.de">CD Toolbox</sd-link> inside a paragraph.
    </p>
  </div>
</div>
```
