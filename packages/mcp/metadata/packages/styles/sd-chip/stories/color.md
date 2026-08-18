<sd-notification variant="info" open class="only-theme-kid mb-4">Add "shadow-sm" manually with css property box-shadow.</sd-notification>
/
export default {
title: 'Styles/sd-chip',
component: 'sd-chip',
tags: ['!dev', 'autodocs'],
args: overrideArgs({ type: 'slot', name: 'default', value: 'Chip' }),
parameters: {
...parameters,
design: {
type: 'figma',
url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2106-26033&t=yS054qhxgjorbMDv-4'
}
},
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
/**
Use the `&--color-*` classes to switch between color families:

- sd-chip--color-primary is the default appearance
- `sd-chip--color-neutral`
- `sd-chip--color-white`

```html
<div class="flex gap-12 items-center">
  <div class="sd-chip sd-chip--color-primary">primary</div>
  <div class="sd-chip sd-chip--color-neutral">neutral</div>
  <div class="sd-chip sd-chip--color-white">white</div>
</div>
```
