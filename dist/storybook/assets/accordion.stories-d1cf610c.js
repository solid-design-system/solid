import"./solid-components-f5954afb.js";import{x as P}from"./directive-helpers-09afb1c8.js";import{s as L,b as M,a as S}from"./helper-229b0a9d.js";import"./iframe-4c2cee6f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const{argTypes:k,parameters:D}=L("sd-accordion"),{overrideArgs:$}=M("sd-accordion"),{generateTemplate:s}=S("sd-accordion"),q={title:"Components/sd-accordion",component:"sd-accordion",args:$([{type:"slot",name:"default",value:"<slot-comp></slot-comp>"},{type:"attribute",name:"summary",value:"Accordion"}]),argTypes:k,parameters:{...D}},a={render:t=>s({args:t})},n={parameters:{controls:{exclude:"open"}},render:t=>s({axis:{y:{type:"attribute",name:"open"}},args:t,constants:{type:"template",name:"width",value:'<div style="width: 300px">%TEMPLATE%</div>'}})},r={parameters:{controls:{exclude:["expand-icon","collapse-icon","default","summary"]}},render:t=>P`
      ${["default","summary","expand-icon","collapse-icon"].map(e=>s({axis:{x:{type:"slot",name:e,title:"slot=...",values:[{value:e==="default"?`<slot-comp style="--slot-content: ''"></slot-comp>`:`<slot-comp slot='${e}' style="--slot-content: ''; --slot-height: 24px; --slot-width: ${e==="summary"?"100%":"24px"}"></slot-comp>`,title:e}]}},constants:[{type:"template",name:"width",value:'<div style="width: 300px">%TEMPLATE%</div>'},{type:"attribute",name:"open",value:e==="collapse-icon"||e==="default"}],args:$({type:"slot",name:"default",value:""},t)}))}
    `},o={parameters:{controls:{exclude:["base","header","summary","summary-icon","content"]}},render:t=>s({axis:{y:{type:"template",name:"sd-accordion::part(...){outline: solid 2px red}",values:["base","header","summary","summary-icon","content"].map(e=>({title:e,value:`<style>#part-${e} sd-accordion::part(${e}){outline: solid 2px red}</style><div id="part-${e}">%TEMPLATE%</div>`}))}},constants:[{type:"template",name:"width",value:'<div style="width: 300px">%TEMPLATE%</div>'},{type:"attribute",name:"open",value:!0}],args:t})};var l,p,c,i,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"Accordion shows a brief summary and expands to show additional content.",...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.description}}};var m,u,y,v,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: 'open'
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'open'
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
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source},description:{story:"An accordion item can either be collapsed or open.",...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var h,g,T,f,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['expand-icon', 'collapse-icon', 'default', 'summary']
    }
  },
  render: (args: any) => {
    return html\`
      \${['default', 'summary', 'expand-icon', 'collapse-icon'].map(slot => generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: slot,
          title: 'slot=...',
          values: [{
            value: slot === 'default' ? \`<slot-comp style="--slot-content: ''"></slot-comp>\` : \`<slot-comp slot='\${slot}' style="--slot-content: ''; --slot-height: 24px; --slot-width: \${slot === 'summary' ? '100%' : '24px'}"></slot-comp>\`,
            title: slot
          }]
        }
      },
      constants: [{
        type: 'template',
        name: 'width',
        value: '<div style="width: 300px">%TEMPLATE%</div>'
      }, {
        type: 'attribute',
        name: 'open',
        value: slot === 'collapse-icon' || slot === 'default' ? true : false
      }],
      args: overrideArgs({
        type: 'slot',
        name: 'default',
        value: ''
      }, args)
    }))}
    \`;
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source},description:{story:"Use the expand-icon and collapse-icon slots to change the expand and collapse icons, respectively.\nTo disable the animation, override the rotate property on the summary-icon part as shown below:\n```\nsd-accordion.custom-icons::part(summary-icon) {\n  rotate: none;\n}\n```",...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var w,E,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['base', 'header', 'summary', 'summary-icon', 'content']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-accordion::part(...){outline: solid 2px red}',
          values: ['base', 'header', 'summary', 'summary-icon', 'content'].map(part => {
            return {
              title: part,
              value: \`<style>#part-\${part} sd-accordion::part(\${part}){outline: solid 2px red}</style><div id="part-\${part}">%TEMPLATE%</div>\`
            };
          })
        }
      },
      constants: [{
        type: 'template',
        name: 'width',
        value: '<div style="width: 300px">%TEMPLATE%</div>'
      }, {
        type: 'attribute',
        name: 'open',
        value: true
      }],
      args
    });
  }
}`,...(A=(E=o.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const z=["Default","States","Slots","Parts"];export{a as Default,o as Parts,r as Slots,n as States,z as __namedExportsOrder,q as default};
//# sourceMappingURL=accordion.stories-d1cf610c.js.map
