Use the `sd-table-cell--bg-*` classes for alternative appearances:

- transparent is the default background
- `sd-table-cell--bg-white`
- `sd-table-cell--bg-primary-100`
- `sd-table-cell--bg-neutral-100`

```html
<div class="grid grid-cols-2 gap-8">
  <table class="sd-table">
    <tbody>
      <tr class="relative">
        <td class="sd-table-cell">Transparent</td>
      </tr>
    </tbody>
  </table>
  <table class="sd-table">
    <tbody>
      <tr class="relative">
        <td class="sd-table-cell sd-table-cell--bg-white">White</td>
      </tr>
    </tbody>
  </table>
  <table class="sd-table">
    <tbody>
      <tr class="relative">
        <td class="sd-table-cell sd-table-cell--bg-primary-100">Primary-100</td>
      </tr>
    </tbody>
  </table>
  <table class="sd-table">
    <tbody>
      <tr class="relative">
        <td class="sd-table-cell sd-table-cell--bg-neutral-100">Neutral-100</td>
      </tr>
    </tbody>
  </table>
</div>
```
