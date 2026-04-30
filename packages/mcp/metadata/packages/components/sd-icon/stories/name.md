**Used to display icons.**
Icons can be used to indicate an action or to represent content.
**Related templates**:

- [Tab Group with Icon and Badge](?path=/docs/templates-tab-group--docs#tab%20group%20with%20icon%20and%20badge)
  /
  export default {
  title: 'Components/sd-icon',
  tags: ['autodocs', 'skip-playwright'],
  component: 'sd-icon',
  args: overrideArgs([{ name: 'name', type: 'attribute', value: 'union-investment/content/image' }], args),
  argTypes,
  parameters: { ...parameters }
  };
  export const Default = {
  render: (args: any) => {
  return generateTemplate({ args });
  }
  };
  /\*\*
  Use the `name` attribute to change the icon. Checkout these lists of Union Investment's icons for available names:
- [Content Icons](?path=/story/components-sd-icon-default--library-default-content)
- [System Icons](?path=/story/components-sd-icon-default--library-default-system)

```html
<div class="flex flex-col gap-12">
  <div class="flex gap-12">
    <sd-icon name="union-investment/content/image" label="Simplified picture frame"></sd-icon>
    <sd-icon name="union-investment/system/image" label="Very simplified picture frame"></sd-icon>
  </div>
  <div class="flex gap-12">
    <sd-icon name="union-investment/content/alarm" label="Simplified alarm bell"></sd-icon>
    <sd-icon name="union-investment/system/alarm" label="Very simplified alarm bell"></sd-icon>
  </div>
</div>
```
