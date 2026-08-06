Use the `sd-table-cell--shadow-*` classes to add a shadow to columns or rows when the table is scrollable with sticky headers:

- `sd-table-cell--shadow-right`
- `sd-table-cell--shadow-left`
- `sd-table-cell--shadow-bottom`
- `sd-table-cell--shadow-top`

```html
<div class="flex flex-col gap-16">
  <table class="sd-table sample-table">
    <tbody>
      <tr>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-right sd-table-cell--shadow-active"
        >
          Cell content
        </td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
      </tr>
      <tr>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-right sd-table-cell--shadow-active"
        >
          Cell content
        </td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
      </tr>
      <tr>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-right  sd-table-cell--shadow-active "
        >
          Cell content
        </td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
      </tr>
    </tbody>
  </table>
  <table class="sd-table sample-table">
    <tbody>
      <tr>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active"
        >
          Cell content
        </td>
      </tr>
      <tr>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active"
        >
          Cell content
        </td>
      </tr>
      <tr>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-left sd-table-cell--shadow-active "
        >
          Cell content
        </td>
      </tr>
    </tbody>
  </table>

  <table class="sd-table sample-table">
    <tbody>
      <tr>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-bottom sd-table-cell--shadow-active "
        >
          Cell content
        </td>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-bottom sd-table-cell--shadow-active "
        >
          Cell content
        </td>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-bottom sd-table-cell--shadow-active"
        >
          Cell content
        </td>
      </tr>
      <tr>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
      </tr>
      <tr>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
      </tr>
    </tbody>
  </table>

  <table class="sd-table sample-table">
    <tbody>
      <tr>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
      </tr>
      <tr>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
        <td class="sd-table-cell text-nowrap whitespace-nowrap">Cell content</td>
      </tr>
      <tr>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-top sd-table-cell--shadow-active"
        >
          Cell content
        </td>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-top sd-table-cell--shadow-active"
        >
          Cell content
        </td>
        <td
          class="sd-table-cell left-0 top-auto sticky right-0 z-[2] sd-table-cell--shadow-top sd-table-cell--shadow-active "
        >
          Cell content
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
