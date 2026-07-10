<sd-notification variant="info" open class="only-theme-kid mb-4">Add "shadow-sm" manually with css property box-shadow.</sd-notification>
/
export default {
title: 'Styles/sd-flag',
tags: ['!dev', 'autodocs'],
component: 'sd-flag',
parameters: {
...parameters,
design: {
type: 'figma',
url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2106-34451&t=ohgrgpEVGgKzqMzU-4'
}
},
args: overrideArgs([{ type: 'slot', name: 'default', value: 'Flag' }]),
argTypes
};
export const Default = {
render: (args: any) => {
return generateTemplate({
options: { templateContent: '<span class="%CLASSES%">%SLOT%</span>' },
args
});
}
};
/\*_
Use the `sd-flag--_` classes for alternative appearances:

- neutral-200 is the default appearance
- `sd-flag--neutral-300`
- `sd-flag--neutral-500`
- `sd-flag--white`

```html
<div class="flex gap-4 bg-neutral-100 p-8">
  <div class="sd-flag">Default</div>
  <div class="sd-flag sd-flag--neutral-300">Neutral 300</div>
  <div class="sd-flag sd-flag--neutral-500">Neutral 500</div>
  <div class="sd-flag sd-flag--white">White</div>
</div>
```
