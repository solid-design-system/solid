Use the standard html list elements for alternative appearances:

- ordered: use an `ol` element to create a numbered list.<br />Use the html `start` attribute to set the starting number of the list, the default value is '1'.
- unordered: use an `ul` element to create an unnumbered list.

```html
<div class="flex flex-col gap-12">
  <ol class="sd-footnotes">
    <li>Lorem ipsum dolor sit amet.</li>
    <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
    <li>Dolore magna aliq erat, sed diam voluptua.</li>
  </ol>
  <ul class="sd-footnotes">
    <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
    <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
    <li>Dolore magna aliq erat, sed diam voluptua.</li>
  </ul>
</div>
```
