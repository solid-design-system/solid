Use the `max-options-visible` attribute to define the maximum number of selected options that will be visible.
**Hint:** It requires the `multiple` and `useTags` attributes to be set.<br />
Once the maximum number of options is reached, the selection will display a message indicating how many additional options have been selected.<br />
To remove the limit, set the attribute to `0`.

```html
<div class="w-[700px] h-[400px]">
  <sd-combobox
    size="lg"
    label="Funds name"
    placement="bottom"
    multiple
    value="BBBank_Dynamik_Union BBBank_Kontinuität_Union BBBank_Nachhaltigkeit_Union"
    max-options-visible="2"
  >
    <sd-option value="BBBank_Dynamik_Union" checkbox>BBBank Dynamik Union</sd-option>
    <sd-option value="BBBank_Kontinuität_Union" checkbox>BBBank Kontinuität Union</sd-option>
    <sd-option value="BBBank_Nachhaltigkeit_Union" checkbox>BBBank Nachhaltigkeit Union</sd-option>
    <sd-option value="BBBank_Wachstum_Union" checkbox>BBBank Wachstum Union</sd-option>
    <sd-option value="BBBank_Zukunft_Union" checkbox>BBBank Zukunft Union</sd-option>
  </sd-combobox>
</div>
```
