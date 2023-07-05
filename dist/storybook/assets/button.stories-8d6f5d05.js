import"./solid-components-f5954afb.js";import{x as ae}from"./directive-helpers-09afb1c8.js";import{s as re,b as se,a as ie}from"./helper-229b0a9d.js";import"./iframe-4c2cee6f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const{argTypes:oe,parameters:le}=re("sd-button"),{overrideArgs:ue}=se("sd-button"),{generateTemplate:t}=ie("sd-button"),ge={title:"Components/sd-button",component:"sd-button",parameters:{...le,design:{type:"figma",url:"https://www.figma.com/file/fPGhgNZv98U4H69Gu2tlWi/Button?type=design&node-id=13-18&t=jDLqFEdY7ZlOJurc-4"}},args:ue({type:"slot",name:"default",value:"Default"}),argTypes:oe},a={render:e=>t({args:e})},r={name:"Variant × Size",parameters:{controls:{exclude:["variant","size"]}},render:e=>t({axis:{x:{type:"attribute",name:"variant"},y:{type:"attribute",name:"size"}},args:e})},s={name:"Variant",parameters:{controls:{exclude:["variant","inverted"]}},render:e=>t({axis:{x:{type:"attribute",name:"variant"},y:{type:"attribute",name:"inverted",values:[!1,!0]}},args:e,options:{templateBackgrounds:{alternate:"y",colors:["white","#00358E"]}}})},i={parameters:{controls:{exclude:["variant","size","disabled","loading","inverted"]}},render:e=>ae`${t({axis:{x:[{type:"attribute",name:"variant"},{type:"attribute",name:"size"}],y:{type:"attribute",name:"inverted",values:[!1,!0]}},constants:[{type:"attribute",name:"loading",value:!0},{type:"slot",name:"default",value:"Loading"}],args:e,options:{title:"disabled=false",templateBackgrounds:{alternate:"y",colors:["white","#00358E"]}}})}
    ${t({axis:{x:[{type:"attribute",name:"variant"}],y:{type:"attribute",name:"inverted",values:[!1,!0]}},constants:[{type:"attribute",name:"loading",value:!0},{type:"attribute",name:"disabled",value:!0},{type:"slot",name:"default",value:"Loading"}],args:e,options:{title:"disabled=true",templateBackgrounds:{alternate:"y",colors:["white","#00358E"]}}})}`},o={parameters:{controls:{exclude:["variant","disabled","loading"]}},render:e=>t({axis:{x:[{type:"attribute",name:"variant"},{type:"attribute",name:"disabled"},{type:"attribute",name:"loading"}]},constants:{type:"attribute",name:"inverted",value:!0},options:{templateBackground:"#00358E"},args:e})},l={parameters:{controls:{exclude:["variant","size","disabled","loading","inverted"]}},render:e=>t({axis:{x:[{type:"attribute",name:"variant"},{type:"attribute",name:"size"},{type:"attribute",name:"loading"}],y:{type:"attribute",name:"inverted",values:[!1,!0]}},constants:{type:"attribute",name:"disabled",value:!0},args:e,options:{templateBackgrounds:{alternate:"y",colors:["white","#00358E"]}}})},u={parameters:{controls:{exclude:["size","default","icon-left","icon-right"]}},render:e=>ae`
      ${["sm","md","lg"].map(n=>t({axis:{x:{type:"slot",name:"icon-right",values:[{value:"",title:"–"},{value:'<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',title:"system/picture"},{value:'<sd-icon library="global-resources" name="system/multi-functions" slot="icon-right"></sd-icon>',title:"system/multi-functions"},{value:'<sd-icon library="global-resources" name="system/minus" slot="icon-right"></sd-icon>',title:"system/minus"}]},y:{type:"slot",name:"icon-left",values:[{value:"",title:"–"},{value:'<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',title:"system/picture"},{value:'<sd-icon library="global-resources" name="system/multi-functions" slot="icon-left"></sd-icon>',title:"system/multi-functions"},{value:'<sd-icon library="global-resources" name="system/minus" slot="icon-left"></sd-icon>',title:"system/minus"}]}},constants:[{type:"attribute",name:"size",value:n}],args:e,options:{title:`size="${n}"`}}))}
    `},c={name:"Icon Only",parameters:{controls:{exclude:["size","inverted"]}},render:e=>t({axis:{x:{type:"attribute",name:"size"}},constants:{type:"slot",name:"default",value:'<sd-icon library="global-resources" name="system/picture"></sd-icon>'},args:e})},d={parameters:{controls:{exclude:["base","label","icon-left","icon-right"]}},render:e=>t({axis:{y:{type:"template",name:"sd-button::part(...){outline: solid 2px red}",values:["base","label","icon-left","icon-right"].map(n=>({title:n,value:`<style>#part-${n} sd-button::part(${n}){outline: solid 2px red}</style><div id="part-${n}">%TEMPLATE%</div>`}))}},constants:[{type:"slot",name:"icon-right",value:'<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>'},{type:"slot",name:"icon-left",value:'<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'}],args:e})};var m,p,y,b,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source},description:{story:"Default: This shows sd-button in its default state.",...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.description}}};var v,f,x,h,z;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Variant × Size',
  parameters: {
    controls: {
      exclude: ['variant', 'size']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'variant'
        },
        y: {
          type: 'attribute',
          name: 'size'
        }
      },
      args
    });
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"The button in all possible combinations of `variant` and `size`.",...(z=(h=r.parameters)==null?void 0:h.docs)==null?void 0:z.description}}};var T,w,k,E,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Variant',
  parameters: {
    controls: {
      exclude: ['variant', 'inverted']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'variant'
        },
        y: {
          type: 'attribute',
          name: 'inverted',
          values: [false, true]
        }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', '#00358E']
        }
      }
    });
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:"The button in all possible combinations of `variant` `inverted`.",...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.description}}};var $,B,L,D,I;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['variant', 'size', 'disabled', 'loading', 'inverted']
    }
  },
  render: (args: any) => {
    return html\`\${generateTemplate({
      axis: {
        x: [{
          type: 'attribute',
          name: 'variant'
        }, {
          type: 'attribute',
          name: 'size'
        }],
        y: {
          type: 'attribute',
          name: 'inverted',
          values: [false, true]
        }
      },
      constants: [{
        type: 'attribute',
        name: 'loading',
        value: true
      }, {
        type: 'slot',
        name: 'default',
        value: 'Loading'
      }],
      args,
      options: {
        title: 'disabled=false',
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', '#00358E']
        }
      }
    })}
    \${generateTemplate({
      axis: {
        x: [{
          type: 'attribute',
          name: 'variant'
        }],
        y: {
          type: 'attribute',
          name: 'inverted',
          values: [false, true]
        }
      },
      constants: [{
        type: 'attribute',
        name: 'loading',
        value: true
      }, {
        type: 'attribute',
        name: 'disabled',
        value: true
      }, {
        type: 'slot',
        name: 'default',
        value: 'Loading'
      }],
      args,
      options: {
        title: 'disabled=true',
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', '#00358E']
        }
      }
    })}\`;
  }
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:"Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.",...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var V,O,U,A,P;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['variant', 'disabled', 'loading']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [{
          type: 'attribute',
          name: 'variant'
        }, {
          type: 'attribute',
          name: 'disabled'
        }, {
          type: 'attribute',
          name: 'loading'
        }]
      },
      constants: {
        type: 'attribute',
        name: 'inverted',
        value: true
      },
      options: {
        templateBackground: '#00358E'
      },
      args
    });
  }
}`,...(U=(O=o.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:"Use the `inverted` attribute to make a button with inverted colors.",...(P=(A=o.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};var C,W,_,j,q;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['variant', 'size', 'disabled', 'loading', 'inverted']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [{
          type: 'attribute',
          name: 'variant'
        }, {
          type: 'attribute',
          name: 'size'
        }, {
          type: 'attribute',
          name: 'loading'
        }],
        y: {
          type: 'attribute',
          name: 'inverted',
          values: [false, true]
        }
      },
      constants: {
        type: 'attribute',
        name: 'disabled',
        value: true
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', '#00358E']
        }
      }
    });
  }
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:"Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.",...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};var G,H,M,Z,F;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['size', 'default', 'icon-left', 'icon-right']
    }
  },
  render: (args: any) => {
    return html\`
      \${['sm', 'md', 'lg'].map(size =>
    // We have to compare different types of icons: "square", "wide" and "tall" ones.
    generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'icon-right',
          values: [{
            value: '',
            title: '–'
          }, {
            value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
            title: 'system/picture'
          }, {
            value: '<sd-icon library="global-resources" name="system/multi-functions" slot="icon-right"></sd-icon>',
            title: 'system/multi-functions'
          }, {
            value: '<sd-icon library="global-resources" name="system/minus" slot="icon-right"></sd-icon>',
            title: 'system/minus'
          }]
        },
        y: {
          type: 'slot',
          name: 'icon-left',
          values: [{
            value: '',
            title: '–'
          }, {
            value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',
            title: 'system/picture'
          }, {
            value: '<sd-icon library="global-resources" name="system/multi-functions" slot="icon-left"></sd-icon>',
            title: 'system/multi-functions'
          }, {
            value: '<sd-icon library="global-resources" name="system/minus" slot="icon-left"></sd-icon>',
            title: 'system/minus'
          }]
        }
      },
      constants: [{
        type: 'attribute',
        name: 'size',
        value: size
      }],
      args,
      options: {
        title: \`size="\${size}"\`
      }
    }))}
    \`;
  }
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source},description:{story:"Use the `icon-left` and `icon-right` slots to add icons.",...(F=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:F.description}}};var J,N,Y,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Icon Only',
  parameters: {
    controls: {
      exclude: ['size', 'inverted']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size'
        }
      },
      constants: {
        type: 'slot',
        name: 'default',
        value: '<sd-icon library="global-resources" name="system/picture"></sd-icon>'
      },
      args
    });
  }
}`,...(Y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:Y.source},description:{story:"When inserting an `<sd-icon>` into the default slot, the button will be rendered as an icon-only button.",...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var R,X,ee,te,ne;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['base', 'label', 'icon-left', 'icon-right']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-button::part(...){outline: solid 2px red}',
          values: ['base', 'label', 'icon-left', 'icon-right'].map(part => {
            return {
              title: part,
              value: \`<style>#part-\${part} sd-button::part(\${part}){outline: solid 2px red}</style><div id="part-\${part}">%TEMPLATE%</div>\`
            };
          })
        }
      },
      constants: [{
        type: 'slot',
        name: 'icon-right',
        value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>'
      }, {
        type: 'slot',
        name: 'icon-left',
        value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'
      }],
      args
    });
  }
}`,...(ee=(X=d.parameters)==null?void 0:X.docs)==null?void 0:ee.source},description:{story:"Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.",...(ne=(te=d.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};const ve=["Default","VariantAndSize","Variant","Loading","Inverted","Disabled","IconSlots","IconOnly","Parts"];export{a as Default,l as Disabled,c as IconOnly,u as IconSlots,o as Inverted,i as Loading,d as Parts,s as Variant,r as VariantAndSize,ve as __namedExportsOrder,ge as default};
//# sourceMappingURL=button.stories-8d6f5d05.js.map
