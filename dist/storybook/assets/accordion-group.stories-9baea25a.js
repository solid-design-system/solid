import"./solid-components-f5954afb.js";import{s as w,a as A}from"./helper-229b0a9d.js";import"./iframe-4c2cee6f.js";import"../sb-preview/runtime.js";import"./directive-helpers-09afb1c8.js";import"./_commonjsHelpers-725317a4.js";const{argTypes:P,args:b,parameters:f}=w("sd-accordion-group"),{generateTemplate:s}=A("sd-accordion-group"),D={title:"Components/sd-accordion-group",component:"sd-accordion-group",args:{...b,"default-slot":'<sd-accordion summary="Accordion 1"><slot-comp></slot-comp></sd-accordion><sd-accordion summary="Accordion 2"><slot-comp></slot-comp></sd-accordion><sd-accordion summary="Accordion 3"><slot-comp></slot-comp></sd-accordion>'},argTypes:P,parameters:{...f}},r={render:e=>s({args:e,constants:{type:"template",name:"width",value:'<div style="width: 300px">%TEMPLATE%</div>'}})},t={parameters:{controls:{exclude:"close-others"}},render:e=>s({axis:{y:{type:"attribute",name:"close-others"}},args:e,constants:{type:"template",name:"width",value:'<div style="width: 300px">%TEMPLATE%</div>'}})},o={parameters:{controls:{exclude:"base"}},render:e=>s({axis:{y:{type:"template",name:"sd-accordion-group::part(...){outline: solid 2px red}",values:["base"].map(a=>({title:"base",value:`<style>#part-${a} sd-accordion-group::part(${a}){outline: solid 2px red}</style><div id="part-${a}">%TEMPLATE%</div>`}))}},args:e,constants:{type:"template",name:"width",value:'<div style="width: 300px">%TEMPLATE%</div>'}})};var n,d,c,p,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: {
        type: 'template',
        name: 'width',
        value: '<div style="width: 300px">%TEMPLATE%</div>'
      }
    });
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:"Vertical stack of sd-accordions.",...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.description}}};var l,m,u,y,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: 'close-others'
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'close-others'
        }
      },
      args,
      constants: {
        type: 'template',
        name: 'width',
        value: '<div style="width: 300px">%TEMPLATE%</div>'
      }
    });
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Set 'close-others' to only have one accordion open.",...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var v,T,h,x,E;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: 'base'
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-accordion-group::part(...){outline: solid 2px red}',
          values: ['base'].map(part => {
            return {
              title: 'base',
              value: \`<style>#part-\${part} sd-accordion-group::part(\${part}){outline: solid 2px red}</style><div id="part-\${part}">%TEMPLATE%</div>\`
            };
          })
        }
      },
      args,
      constants: {
        type: 'template',
        name: 'width',
        value: '<div style="width: 300px">%TEMPLATE%</div>'
      }
    });
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source},description:{story:"Part of sd-accordion-group",...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.description}}};const O=["Default","CloseOthers","Parts"];export{t as CloseOthers,r as Default,o as Parts,O as __namedExportsOrder,D as default};
//# sourceMappingURL=accordion-group.stories-9baea25a.js.map
