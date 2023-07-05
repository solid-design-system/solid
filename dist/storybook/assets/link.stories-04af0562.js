import"./solid-components-f5954afb.js";import{x as W}from"./directive-helpers-09afb1c8.js";import{s as X,a as Z,b as ee}from"./helper-229b0a9d.js";import"./iframe-4c2cee6f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const{argTypes:te}=X("sd-link"),{generateTemplate:a}=Z("sd-link"),{overrideArgs:ae}=ee("sd-link"),ce={title:"Components/sd-link",component:"sd-link",args:ae([{type:"slot",name:"default",value:"Link"},{type:"attribute",name:"href",value:"#"}]),argTypes:te},n={render:t=>a({args:t})},s={name:"Disabled × Inverted",parameters:{controls:{exclude:["size","default","href","inverted"]}},render:t=>a({axis:{x:{type:"attribute",name:"href",values:["#link",{value:"",title:"–"}]},y:{type:"attribute",name:"inverted",values:[!1,!0]}},args:t,options:{templateBackgrounds:{alternate:"y",colors:["white","#00358E"]}}})},r={name:"Bold",parameters:{controls:{exclude:["default"]}},render:t=>a({axis:{x:{type:"slot",name:"default",title:"main-slot",values:["Link","<b>Link</b>"]}},args:t,options:{templateBackgrounds:{alternate:"y",colors:["white","#00358E"]}}})},o={name:"Size × Icon Slots",parameters:{controls:{exclude:["default","icon-left","size","icon-right","standalone"]}},render:t=>W`
      ${[!1,!0].map(e=>a({axis:{x:{type:"slot",name:"default",title:'slot="icon-..."',values:[{value:"Link",title:"–"},{value:'Link<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',title:"left"},{value:'Link<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',title:"right"}]},y:{type:"attribute",name:"size"}},options:{title:`standalone="${e?"true":"false"}"`},constants:{type:"attribute",name:"standalone",value:e},args:t}))}
    `},l={name:"Inverted × Icon Slots",parameters:{controls:{exclude:["inverted","default","icon-left","icon-right"]}},render:t=>a({axis:{x:{type:"slot",name:"default",title:'slot="icon-..."',values:[{value:"Link",title:"–"},{value:'Link<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',title:"left"},{value:'Link<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',title:"right"}]},y:{type:"attribute",name:"inverted",values:[!1,!0]}},args:t,options:{templateBackgrounds:{alternate:"y",colors:["white","#00358E"]}}})},i={name:"Standalone × Icon Slots",parameters:{controls:{exclude:["icon-right","icon-left","main","standalone","default"]}},render:t=>W`
      ${[!1,!0].map(e=>a({axis:{x:{type:"slot",name:"default",title:"icon-...",values:[{value:"Magna ex ex elit cupidatat non esse.",title:"–"},{value:'<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>Magna ex ex elit cupidatat non esse.',title:"left"},{value:'Magna ex ex elit cupidatat non esse.<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',title:"right"}]},y:{type:"attribute",name:"standalone",values:[!1,!0]}},constants:[{type:"template",name:"default-template",value:`<div style="font-size: 16px; text-align: left; width: 200px; word-break: break-all;">${e?"Qui do.":""}%TEMPLATE%${e?"Eiusmod minim excepteur.</div>":""}`}],args:t,options:{title:e?"example with surrounding content":"example without surrounding content"}}))}
    `},c={parameters:{controls:{exclude:["icon-right","default","standalone","base"]}},render:t=>a({axis:{y:{type:"template",name:"sd-link::part(base){align-items: ...;}",values:["start","center","end"].map(e=>({value:`<style>#align-icon-${e} sd-link::part(base){align-items: ${e};}</style><div id="align-icon-${e}">%TEMPLATE%</div>`,title:e}))}},constants:[{type:"template",name:"constant-template",value:"<style>div[id^=align-icon-]{text-align: left; width: 300px;}</style>"},{type:"slot",name:"icon-right",value:'<sd-icon library="global-resources" name="system/arrow-right" slot="icon-right"></sd-icon>'},{type:"slot",name:"default",value:"In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate."},{type:"attribute",name:"standalone",value:!0}],args:t})},d={parameters:{controls:{exclude:["base","label","icon-left","icon-right"]}},render:t=>a({axis:{y:{type:"template",name:"sd-link::part(...){outline: solid 2px red}",values:["base","label","icon-left","icon-right"].map(e=>({title:e,value:`<style>#part-${e} sd-link::part(${e}){outline: solid 2px red}</style><div id="part-${e}">%TEMPLATE%</div>`}))}},constants:[{type:"slot",name:"icon-right",value:'<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>'},{type:"slot",name:"icon-left",value:'<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'}],args:t})};var u,p,m,y,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Default: This shows sd-link in its default state.",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var v,b,f,h,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Disabled × Inverted',
  parameters: {
    controls: {
      exclude: ['size', 'default', 'href', 'inverted']
    }
  },
  render: (args: any) => generateTemplate({
    axis: {
      x: {
        type: 'attribute',
        name: 'href',
        values: ['#link', {
          value: '',
          title: '–'
        }]
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
  })
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:"Unset `href` to make the link disabled.",...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var k,I,S,T,w;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Bold',
  parameters: {
    controls: {
      exclude: ['default']
    }
  },
  render: (args: any) => generateTemplate({
    axis: {
      x: {
        type: 'slot',
        name: 'default',
        title: 'main-slot',
        values: ['Link', '<b>Link</b>']
      }
    },
    args,
    options: {
      templateBackgrounds: {
        alternate: 'y',
        colors: ['white', '#00358E']
      }
    }
  })
}`,...(S=(I=r.parameters)==null?void 0:I.docs)==null?void 0:S.source},description:{story:"You can make links bold by setting `<b>` tags around the text in the main slot.",...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.description}}};var L,$,E,A,z;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Size × Icon Slots',
  parameters: {
    controls: {
      exclude: ['default', 'icon-left', 'size', 'icon-right', 'standalone']
    }
  },
  render: (args: any) => {
    return html\`
      \${[false, true].map(standalone => generateTemplate({
      axis: {
        x: {
          // To make the story creation easier, we put everything in the default slot.
          type: 'slot',
          name: 'default',
          title: 'slot="icon-..."',
          values: [{
            value: 'Link',
            title: '–'
          }, {
            value: 'Link<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',
            title: 'left'
          }, {
            value: 'Link<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
            title: 'right'
          }]
        },
        y: {
          type: 'attribute',
          name: 'size'
        }
      },
      options: {
        title: \`standalone="\${standalone ? 'true' : 'false'}"\`
      },
      constants: {
        type: 'attribute',
        name: 'standalone',
        value: standalone
      },
      args
    }))}
    \`;
  }
}`,...(E=($=o.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:"Use the `icon-left` and `icon-right` slots to add icons. They automatically adapt the size.",...(z=(A=o.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};var M,B,D,P,U;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Inverted × Icon Slots',
  parameters: {
    controls: {
      exclude: ['inverted', 'default', 'icon-left', 'icon-right']
    }
  },
  render: (args: any) => generateTemplate({
    axis: {
      // To make the story creation easier, we put everything in the default slot.
      x: {
        type: 'slot',
        name: 'default',
        title: 'slot="icon-..."',
        values: [{
          value: 'Link',
          title: '–'
        }, {
          value: 'Link<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',
          title: 'left'
        }, {
          value: 'Link<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
          title: 'right'
        }]
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
  })
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"Icons automatically adapt to the link's invertedness.",...(U=(P=l.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var C,_,Q,H,O;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Standalone × Icon Slots',
  parameters: {
    controls: {
      exclude: ['icon-right', 'icon-left', 'main', 'standalone', 'default']
    }
  },
  render: (args: any) => {
    return html\`
      \${[false, true].map(surroundingContent =>
    // To make the story creation easier, we put everything in the default slot.
    generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'default',
          title: 'icon-...',
          values: [{
            value: 'Magna ex ex elit cupidatat non esse.',
            title: '–'
          }, {
            value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>Magna ex ex elit cupidatat non esse.',
            title: 'left'
          }, {
            value: 'Magna ex ex elit cupidatat non esse.<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
            title: 'right'
          }]
        },
        y: {
          type: 'attribute',
          name: 'standalone',
          values: [false, true]
        }
      },
      constants: [{
        type: 'template',
        name: 'default-template',
        value: \`<div style="font-size: 16px; text-align: left; width: 200px; word-break: break-all;">\${surroundingContent ? 'Qui do.' : ''}%TEMPLATE%\${surroundingContent ? 'Eiusmod minim excepteur.</div>' : ''}\`
      }],
      args,
      options: {
        title: surroundingContent ? 'example with surrounding content' : 'example without surrounding content'
      }
    }))}
    \`;
  }
}`,...(Q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:Q.source},description:{story:"This `standalone` attribute controls the layout of the icon and text within the component.\n- If true, the icon and text will be displayed side by side, each occupying its own column.\n- If false or not provided, the icon will be displayed inline within the text.",...(O=(H=i.parameters)==null?void 0:H.docs)==null?void 0:O.description}}};var Y,j,q,F,G;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ['icon-right', 'default', 'standalone', 'base']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-link::part(base){align-items: ...;}',
          values: ['start', 'center', 'end'].map(alignIcon => {
            return {
              value: \`<style>#align-icon-\${alignIcon} sd-link::part(base){align-items: \${alignIcon};}</style><div id="align-icon-\${alignIcon}">%TEMPLATE%</div>\`,
              title: alignIcon
            };
          })
        }
      },
      constants: [{
        type: 'template',
        name: 'constant-template',
        value: '<style>div[id^=align-icon-]{text-align: left; width: 300px;}</style>'
      }, {
        type: 'slot',
        name: 'icon-right',
        value: '<sd-icon library="global-resources" name="system/arrow-right" slot="icon-right"></sd-icon>'
      }, {
        type: 'slot',
        name: 'default',
        value: 'In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.'
      }, {
        type: 'attribute',
        name: 'standalone',
        value: true
      }],
      args
    });
  }
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"Use the part selector to align the icon within the component.",...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var J,K,N,R,V;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
          name: 'sd-link::part(...){outline: solid 2px red}',
          values: ['base', 'label', 'icon-left', 'icon-right'].map(part => {
            return {
              title: part,
              value: \`<style>#part-\${part} sd-link::part(\${part}){outline: solid 2px red}</style><div id="part-\${part}">%TEMPLATE%</div>\`
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
}`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source},description:{story:"Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.",...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};const de=["Default","InvertedAndDisabled","BoldInMainSlot","SizeAndIconSlots","InvertedAndIconSlots","StandaloneAndIconSlots","IconAlignment","Parts"];export{r as BoldInMainSlot,n as Default,c as IconAlignment,s as InvertedAndDisabled,l as InvertedAndIconSlots,d as Parts,o as SizeAndIconSlots,i as StandaloneAndIconSlots,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=link.stories-04af0562.js.map
