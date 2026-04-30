Use the `sd-pagination--*` classes for alternative appearances:

- number is the default appearance
- `simple`

```html
<div class="flex gap-10">
  <nav class="sd-pagination" aria-label="Default variant pagination">
    <ul>
      <li>
        <a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
      </li>
      <li><a aria-current="page">1</a></li>
      <li><a href="/?page=2">2</a></li>
      <li><a href="/?page=3">3</a></li>
      <li><a href="/?page=4">4</a></li>
      <li><a href="/?page=5">5</a></li>
      <li><a href="/?page=6">6</a></li>
      <li><a href="/?page=7">7</a></li>
      <li><a href="/?page=8">8</a></li>
      <li><a href="/?page=9">9</a></li>
      <li><a href="/?page=10">10</a></li>
      <li><a href="/?page=11">11</a></li>
      <li><a href="/?page=12">12</a></li>
      <li><a href="/?page=13">13</a></li>
      <li><a href="/?page=14">14</a></li>
      <li><a href="/?page=15">15</a></li>
      <li><a href="/?page=16">16</a></li>
      <li><a href="/?page=17">17</a></li>
      <li><a href="/?page=18">18</a></li>
      <li><a href="/?page=19">19</a></li>
      <li><a href="/?page=20">20</a></li>
      <li>
        <a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
      </li>
    </ul>
  </nav>
  <nav class="sd-pagination sd-pagination--simple" aria-label="Simple variant pagination">
    <ul>
      <li>
        <a aria-hidden="true"><sd-icon name="system/chevron-left" label="Previous"></sd-icon></a>
      </li>
      <li>1</li>
      <li>20</li>
      <li>
        <a href="/?page=2"><sd-icon name="system/chevron-right" label="Next"></sd-icon></a>
      </li>
    </ul>
  </nav>
</div>
```
