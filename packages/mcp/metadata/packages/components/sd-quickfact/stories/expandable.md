**Disclaimer:** Due to a bug with Storybook Controls, the `expandable` attribute controls might not behave as expected. Please refresh the page if you wish to reset the controls.
You can follow this issue here: https://github.com/storybookjs/storybook/issues/28634
/
export default {
title: 'Components/sd-quickfact',
component: 'sd-quickfact',
tags: ['!dev', 'autodocs'],
args: overrideArgs([
{
type: 'slot',
name: 'summary',
value: `<div slot="summary" class="flex flex-col sm:gap-4"> <p class="text-base font-normal leading-normal sm:text-4xl sm:leading-tight">Lorem Ipsum</p>

<div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div></div>`
},
{
type: 'slot',
name: 'icon',
value: `<sd-icon name="content/image" color="currentColor" aria-hidden="true" library="default" slot="icon"></sd-icon>`
}
]),
argTypes,
parameters: {
...parameters,
design: {
type: 'figma',
url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2592-3469&node-type=section&t=5PpAC3TA3kYF7ufX-0'
}
}
};
export const Default = {
render: (args: any) => {
return generateTemplate({
args
});
}
};
/**
Use the `expandable` attribute to make the quickfact item expandable.

```html
<sd-quickfact expandable="" summary="Lorem Ipsum">
  <sd-icon name="content/image" color="currentColor" aria-hidden="true" library="default" slot="icon"></sd-icon>
  <div class="slot slot--border slot--text h-16">Default slot</div>
</sd-quickfact>
```
