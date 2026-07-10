**Known browser issues:**

- When the headline is set by slot instead of attribute, the dialog name is not being announced by VoiceOver in Chrome and Firefox.
/
export default {
title: 'Components/sd-dialog',
component: 'sd-dialog',
tags: ['!dev', 'autodocs'],
args: overrideArgs([
{
type: 'attribute',
name: 'open',
value: true
},
{
type: 'slot',
name: 'default',
value: `<div class="slot slot--border slot--text h-16 w-full">Default slot</div>`
},
{
type: 'slot',
name: 'headline',
value: `<div slot="headline" class="slot slot--border slot--text h-16">Headline slot</div>`
},
{
type: 'slot',
name: 'footer',
value: `<div slot="footer" class="slot slot--border slot--text h-16 w-full">Footer slot</div>`
}
]),
argTypes,
parameters: {
...parameters,
design: {
type: 'figma',
url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2216-42723&node-type=section&t=5PpAC3TA3kYF7ufX-0'
}
}
};
export const Default = {
render: (args: any) => {
return html` <div style="height: 40vh;">
${generateTemplate({
args
})}
</div>`;
}
};
/**
Use the `open` attribute to show the dialog.

```html
<div class="h-[40vh]">
  <sd-button id="drawer-trigger">Open Dialog</sd-button>
  <sd-dialog id="dialog" open>
    <span slot="headline" class="sd-headline sd-headline--size-3xl">Lorem ipsum</span>
    <p class="sd-paragraph">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
    </p>
    <sd-button slot="footer">Button</sd-button>
  </sd-dialog>
</div>
<script type="module">
  const dialog = document.getElementById('dialog');
  const trigger = document.getElementById('drawer-trigger');

  trigger.addEventListener('click', () => {
    dialog.show();
  });
</script>
```
