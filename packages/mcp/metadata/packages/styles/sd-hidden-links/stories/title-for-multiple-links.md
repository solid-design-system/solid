Use the `--sd-hidden-links-title` CSS property to set a title for multiple links.
German and English are set by default in regard of the document's or elements `lang` attribute.

```html
<div class="relative bg-white w-full h-[256px] p-8 flex" lang="de">
  <div class="sd-hidden-links sd-hidden-links--multiple">
    <sd-navigation-item href="#">Versteckter Link 1</sd-navigation-item>
    <sd-navigation-item href="#">Versteckter Link 2</sd-navigation-item>
    <sd-navigation-item href="#">Versteckter Link 3</sd-navigation-item>
  </div>
  <p class="self-center">Hier wird eine deutsche Überschrift erscheinen.</p>
</div>
<div class="relative bg-white w-full h-[256px] p-8 flex">
  <div class="sd-hidden-links sd-hidden-links--multiple" lang="en">
    <sd-navigation-item href="#">Hidden Link 1</sd-navigation-item>
    <sd-navigation-item href="#">Hidden Link 2</sd-navigation-item>
    <sd-navigation-item href="#">Hidden Link 3</sd-navigation-item>
  </div>
  <p class="self-center">Here you will see an English title.</p>
</div>
<div class="relative bg-white w-full h-[256px] p-8 flex">
  <style>
    #hidden-link-with-custom-title {
      --sd-hidden-links-title: 'Jump very fast to';
    }
  </style>
  <div id="hidden-link-with-custom-title" class="sd-hidden-links sd-hidden-links--multiple">
    <sd-navigation-item href="#">Hidden Link 1</sd-navigation-item>
    <sd-navigation-item href="#">Hidden Link 2</sd-navigation-item>
    <sd-navigation-item href="#">Hidden Link 3</sd-navigation-item>
  </div>
  <p class="self-center">Here you will see a custom title.</p>
</div>
```
