import"./solid-components-f5954afb.js";import{x as E}from"./directive-helpers-09afb1c8.js";import{s as x,a as h}from"./helper-229b0a9d.js";import"./iframe-4c2cee6f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const{argTypes:F,args:A,parameters:L}=x("sd-spinner"),{generateTemplate:n}=h("sd-spinner"),D={title:"Components/sd-spinner",component:"sd-spinner",args:A,argTypes:F,parameters:{...L}},r={render:e=>n({args:e})},t={parameters:{controls:{exclude:"color"}},render:e=>n({axis:{x:{type:"attribute",name:"color"}},options:{templateBackgrounds:{alternate:"x",colors:["#F6F6F6","#00358E","#F6F6F6"]}},args:e})},s={parameters:{controls:{exclude:["color"]}},render:e=>E`
      ${n({axis:{x:{type:"template",name:"individual sizing",values:[{value:'<div style="font-size: inherit">%TEMPLATE%</div>',title:"font-size: inherit"},{value:'<div style="font-size: 1rem">%TEMPLATE%</div>',title:"font-size: 1rem"},{value:'<div style="font-size: 2rem">%TEMPLATE%</div>',title:"font-size: 2rem"},{value:'<div style="font-size: 4rem">%TEMPLATE%</div>',title:"font-size: 4rem"}]}},args:e})}
    `};var o,a,i,l,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source},description:{story:"Default: This shows sd-spinner in its default state.",...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.description}}};var c,d,m,u,v;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: 'color'
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'color'
        }
      },
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['#F6F6F6', '#00358E', '#F6F6F6']
        }
      },
      args
    });
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Use the `color` attribute to change the color of the spinner and correspond (currentColor) with the parents color.",...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.description}}};var f,g,T,y,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['color']
    }
  },
  render: (args: any) => {
    return html\`
      \${generateTemplate({
      axis: {
        x: {
          type: 'template',
          name: 'individual sizing',
          values: [{
            value: '<div style="font-size: inherit">%TEMPLATE%</div>',
            title: 'font-size: inherit'
          }, {
            value: '<div style="font-size: 1rem">%TEMPLATE%</div>',
            title: 'font-size: 1rem'
          }, {
            value: '<div style="font-size: 2rem">%TEMPLATE%</div>',
            title: 'font-size: 2rem'
          }, {
            value: '<div style="font-size: 4rem">%TEMPLATE%</div>',
            title: 'font-size: 4rem'
          }]
        }
      },
      args
    })}
    \`;
  }
}`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.source},description:{story:"Use the font-size in css to scale the spinner.",...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.description}}};const _=["Default","Color","Sizing"];export{t as Color,r as Default,s as Sizing,_ as __namedExportsOrder,D as default};
//# sourceMappingURL=spinner.stories-447455fd.js.map
