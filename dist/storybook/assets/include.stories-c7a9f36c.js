import"./solid-components-f5954afb.js";import{b as d,s as l,a}from"./helper-229b0a9d.js";import"./iframe-4c2cee6f.js";import"../sb-preview/runtime.js";import"./directive-helpers-09afb1c8.js";import"./_commonjsHelpers-725317a4.js";const{overrideArgs:c}=d("sd-include"),{argTypes:u,args:m,parameters:p}=l("sd-include"),{generateTemplate:h}=a("sd-include"),_={title:"Utilities/sd-include",component:"sd-include",args:c([{type:"attribute",name:"src",value:"https://union-investment.de/lorem-ipsum"}],m),argTypes:u,parameters:{...p,docs:{description:{component:`*Includes give you the power to embed external HTML files into the page.*

Included files are asynchronously requested using \`window.fetch()\`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the \`<sd-include>\` element's default slot so it can be easily accessed and styled through the light DOM.

\`\`\`html preview
<sd-include src="https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg"></sd-include>
\`\`\`

## Examples

### Listening for Events

When an include file loads successfully, the \`sd-load\` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the \`sd-error\` event will be emitted. In this case, \`event.detail.status\` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

\`\`\`html
<sd-include src="https://cdn.dam.union-investment.de/original/454499_UI_Logo_RGB.svg"></sd-include>

<script>
  const include = document.querySelector('sd-include');

  include.addEventListener('sd-load', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Success');
    }
  });

  include.addEventListener('sd-error', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Error', event.detail.status);
    }
  });
<\/script>
\`\`\``}}}},e={render:r=>h({args:r})};var n,t,s,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source},description:{story:"Default: This shows sd-include in its default state.",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.description}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=include.stories-c7a9f36c.js.map
