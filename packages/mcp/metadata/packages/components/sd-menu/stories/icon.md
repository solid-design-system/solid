**Note:** When first loading this page, the `focus-visible` styles applied to the `sd-menu-item` component will be visible. This is a browser specific behaviour. After you interact with the page, the correct styles will be displayed. This is only happening when the `sd-menu` is rendered in isolation, if rendered inside a `sd-dropdown` it will not happen.
/
export default {
tags: ['!dev', 'autodocs'],
title: 'Components/sd-menu',
component: 'sd-menu',
args: overrideArgs([
{
type: 'slot',
name: 'default',
value: `
<sd-menu-item>Menu item 1</sd-menu-item>
<sd-menu-item>Menu item 2</sd-menu-item>
<sd-menu-item>Menu item 3</sd-menu-item>`
}
]),
argTypes,
parameters: {
...parameters,
design: {
type: 'figma',
url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs?node-id=15967-5252&t=ZM8naV6M5izZj27w-0'
}
},
decorators: [
(story: any) =>
html`<style>
.innerZoomElementWrapper #story--components-sd-menu--default,
#anchor--components-sd-menu--default .innerZoomElementWrapper,
#anchor--components-sd-menu--icon .innerZoomElementWrapper,
#anchor--components-sd-menu--checkmark .innerZoomElementWrapper,
#anchor--components-sd-menu--submenu .innerZoomElementWrapper,
#anchor--components-sd-menu--grouping .innerZoomElementWrapper,
#anchor--components-sd-menu--disabled .innerZoomElementWrapper {
min-height: 450px;
}
</style>
${story()}`
] as unknown
};
export const Default = {
render: (args: any) => {
return html` <div class="h-[350px]">
<sd-dropdown distance="4" rounded open>
<sd-button variant="secondary" slot="trigger">
Menu
<sd-icon library="_internal" name="chevron-down" slot="icon-right"></sd-icon>
</sd-button>
${generateTemplate({
args
})}
</sd-dropdown>

</div>`;
}
};
/**
Use the `icon-indent` slot to add system icons.

```html
<sd-dropdown distance="4" rounded>
  <sd-button variant="secondary" slot="trigger">
    <sd-icon name="system/more-functions" label="Icon only"></sd-icon>
  </sd-button>
  <sd-menu>
    <sd-menu-item>
      <sd-icon name="system/image" slot="icon-indent"></sd-icon>
      Menu item 1
    </sd-menu-item>
    <sd-menu-item>
      <sd-icon name="system/image" slot="icon-indent"></sd-icon>
      Menu item 2
    </sd-menu-item>
    <sd-menu-item>
      <sd-icon name="system/image" slot="icon-indent"></sd-icon>
      Menu item 3
    </sd-menu-item>
  </sd-menu>
</sd-dropdown>
```
