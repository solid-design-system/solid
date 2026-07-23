<sd-notification variant="info" open class="mb-4">Please notice that this component is only available for themes UI Light and UI Dark</sd-notification>
/
export default {
title: 'Components/sd-brandshape',
tags: ['!dev', 'autodocs'],
component: 'sd-brandshape',
parameters: {
...parameters,
design: {
type: 'figma',
url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2059-1578&node-type=section&t=5PpAC3TA3kYF7ufX-0'
}
},
args: overrideArgs([
{
type: 'slot',
name: 'default',
value: '<div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>'
},
{
type: 'slot',
name: 'image',
value: `<img slot="image" src="./placeholders/images/generic.jpg" alt="" />`
},
{ type: 'attribute', name: 'shapes', value: '["top", "middle", "bottom"]' }
]),
argTypes: {
...argTypes,
shapes: {
...argTypes['shapes'],
options: shapes
}
},
decorators: [
(story: () => typeof html) => html`
<style>
body:not(:has(.sd-theme-ui-light, .sd-theme-ui-dark)) .slot {
display: none;
}
body:not(:has(.sd-theme-ui-light, .sd-theme-ui-dark)) .inverted-wrapper {
background-color: transparent;
}
</style>

${story()}
`]
};
export const Default = {
name: 'Default',
render: (args: any) => {
return generateTemplate({ args });
}
};
/**
Use the`variant` attribute to set the color variant:

- `primary` (default): Used on light backgrounds
- `neutral-100`
- `border-primary`: Used on light backgrounds
  <br>Change the fill color to match the background color
- `image`: Used to show an image without additional content
- `white`: Used on primary, primary-100 and neutral-100 backgrounds
- `border-white`: Used on primary background

```html
<div class="space-y-5">
  <sd-brandshape variant="primary">
    <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape variant="neutral-100">
    <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape variant="border-primary">
    <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape variant="image">
    <div class="h-8"></div>
    <img slot="image" src="./placeholders/images/generic.jpg" alt="" />
  </sd-brandshape>

  <div class="bg-primary inverted-wrapper">
    <sd-brandshape variant="white">
      <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
    </sd-brandshape>

    <sd-brandshape variant="border-white">
      <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
    </sd-brandshape>
  </div>
</div>
```
