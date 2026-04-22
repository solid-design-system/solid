Use the `multiple` attribute to allow multiple options to be selected.
To inform your users about their selected options tags are displayed.
Use Backspace to remove the last selected option.
Use `--tag-max-width` to set the maximum width of the tags and to show an ellipsis, e.g. `<sd-combobox style="--tag-max-width: 40px">`. The default value is `15ch`.
**Hint:** If you really don't want to show tags, you can hide them with CSS via `::part(tags)`.

```html
<div class="w-[700px] h-[400px]">
  <sd-combobox
    size="lg"
    label="Funds name"
    placement="bottom"
    multiple
    value="BBBank_Dynamik_Union BBBank_Kontinuität_Union"
  >
    <sd-option value="BBBank_Dynamik_Union" checkbox>BBBank Dynamik Union</sd-option>
    <sd-option value="BBBank_Kontinuität_Union" checkbox>BBBank Kontinuität Union</sd-option>
    <sd-option value="BBBank_Nachhaltigkeit_Union" checkbox>BBBank Nachhaltigkeit Union</sd-option>
    <sd-option value="BBBank_Wachstum_Union" checkbox>BBBank Wachstum Union</sd-option>
    <sd-option value="BBBank_Zukunft_Union" checkbox>BBBank Zukunft Union</sd-option>
  </sd-combobox>
</div>
```
