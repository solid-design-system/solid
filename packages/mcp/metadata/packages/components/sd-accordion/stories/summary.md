Use `summary` to provide the text in the accordion header.
**Hint:** The `summary` slot allows you to use custom html.

```html
<div class="grid grid-cols-2 gap-12">
  <sd-accordion>
    <div slot="summary">
      <h4>I don't have a telephone number with a German area code. Can I still register?</h4>
    </div>
    <p>
      Union Investment is the dedicated asset manager within the German cooperative financial network. All shareholders
      are also part of the network, which ensures a stable and long-term ownership structure. This allows us to maintain
      a sustainable business model and develop strong, long-term client relationships.
    </p>
  </sd-accordion>
</div>
```
