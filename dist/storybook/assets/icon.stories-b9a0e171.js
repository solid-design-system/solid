import"./solid-components-f5954afb.js";import{icons as T}from"./library.system-98f1a9a4.js";import{s as I,b as A,a as L}from"./helper-229b0a9d.js";import"./iframe-4c2cee6f.js";import"../sb-preview/runtime.js";import"./directive-helpers-09afb1c8.js";import"./_commonjsHelpers-725317a4.js";const{argTypes:N,args:j,parameters:D}=I("sd-icon"),{overrideArgs:G}=A("sd-icon"),{generateTemplate:s}=L("sd-icon"),U={title:"Components/sd-icon",component:"sd-icon",args:G([{name:"library",type:"attribute",value:"global-resources"},{name:"name",type:"attribute",value:"system/picture"}],j),argTypes:N,parameters:{...D,docs:{description:{component:`## Colors
Per default icons inherit their color from the current text color. Thus, you can set the color property on the <sl-icon> element or an ancestor to change the color.

## Sizes
Icons are sized relative to the current font size. To change their size, set the font-size property on the icon itself or on a parent element as shown below.

## Libraries
You can register additional icons to use with the <sl-icon> component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.
Solid will ship with two built-in icon libraries, default and system. The default icon library contains all of the icons by Union Investment's Design System. The system icon library contains only a small subset of icons that are used internally by Solid components.

To register an additional icon library, use the \`registerIconLibrary()\` function that's exported from \`utilities/icon-library.js\`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via currentColor, so you may need to apply fill="currentColor or stroke="currentColor" to the SVG element using this function.

Here's an example that registers an icon library located in the /assets/icons directory.

\`\`\`html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => \`/assets/icons/\${name}.svg\`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
<\/script>
\`\`\`

To display an icon, set the library and name attributes of an <sl-icon> element.

\`\`\`html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<sl-icon library="my-icons" name="smile"></sl-icon>
\`\`\`

You can even version your icon libraries:

\`\`\`html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons-2-3-0', {
    resolver: name => \`/2-3-0/assets/icons/\${name}.svg\`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
<\/script>
\`\`\`

If an icon is used before registration occurs, it will be empty initially but shown when registered.
Check out the examples below or the [Shoelace Docs](https://shoelace.style/components/icon?id=icon-libraries)
to see how to handle this.`}}}},t={render:e=>s({args:e})},n={name:"Library: system",parameters:{controls:{exclude:["name","library"]}},render:e=>s({axis:{x:{type:"attribute",name:"color"},y:{type:"attribute",name:"name",values:Object.keys(T)}},constants:[{type:"attribute",name:"library",value:"system"},{type:"attribute",name:"name",value:"check"}],options:{templateBackgrounds:{alternate:"x",colors:["white","white","#00358E"]}},args:e})},r={name:"Example: global-resources",parameters:{controls:{exclude:["name","library"]}},render:e=>s({axis:{x:{type:"attribute",name:"name",values:["system/picture","content/picture"]},y:{type:"attribute",name:"color"}},constants:[{type:"attribute",name:"library",value:"global-resources"}],options:{templateBackgrounds:{alternate:"y",colors:["white","white","#00358E"]}},args:e})},o={name:"Example: global-resources (overriden)",parameters:{controls:{exclude:["name","library"]}},render:e=>s({axis:{x:{type:"attribute",name:"name",values:["system/picture","content/picture"]},y:{type:"attribute",name:"color"}},constants:[{type:"attribute",name:"library",value:"global-resources-overriden"}],options:{templateBackgrounds:{alternate:"y",colors:["white","white","#00358E"]}},args:e})};var a,i,l,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:`Default: This shows the sd-icon in its default state.

> ❗️ We currently don't provide a default library, as this is blocked by external dependencies.
In future Updates of Solid Components this will be changed. Instead we're showing an icon from global resources.`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var u,p,d,y,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Library: system',
  parameters: {
    controls: {
      exclude: ['name', 'library']
    }
  },
  render: (args: any) => generateTemplate({
    axis: {
      x: {
        type: 'attribute',
        name: 'color'
      },
      y: {
        type: 'attribute',
        name: 'name',
        values: Object.keys(icons)
      }
    },
    constants: [{
      type: 'attribute',
      name: 'library',
      value: 'system'
    }, {
      type: 'attribute',
      name: 'name',
      value: 'check'
    }],
    options: {
      templateBackgrounds: {
        alternate: 'x',
        colors: ['white', 'white', '#00358E']
      }
    },
    args
  })
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:`System icons are an integrated library of the Solid Components to ensure they're always available.
They are a subset of Union Investment's official icons. As these may change over time, we don't recommend using them directly.

The story below shows all available icons.`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var b,g,f,v,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Example: global-resources',
  parameters: {
    controls: {
      exclude: ['name', 'library']
    }
  },
  render: (args: any) => generateTemplate({
    axis: {
      x: {
        type: 'attribute',
        name: 'name',
        values: ['system/picture', 'content/picture']
      },
      y: {
        type: 'attribute',
        name: 'color'
      }
    },
    constants: [{
      type: 'attribute',
      name: 'library',
      value: 'global-resources'
    }],
    options: {
      templateBackgrounds: {
        alternate: 'y',
        colors: ['white', 'white', '#00358E']
      }
    },
    args
  })
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:`The following resolver allows it to fetch data from the global-resources CDN. It points to the latest branch.

\`\`\`js
 registerIconLibrary('global-resources', {
  resolver: name => {
    // split path and name
    let path = name.split('/');
    let iconName = path.pop();

    // "system" and "system/colored" should both resolve to "system/colored", same for "content"
    if (path.length === 1) {
      path.push('colored');
    }

    return \`https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/\${path.join(
      '/'
    )}/\${iconName}.svg\`;
  },

  // We need currentColor as the main color for the icons
  mutator: svg => {
    const recoloredElements = {};
    recoloredElements['currentColorFills'] = svg.querySelectorAll('[fill="#00358e"], [fill="#fff"]');
    recoloredElements['currentColorStrokes'] = svg.querySelectorAll('[stroke="#00358e"], [stroke="#fff"]');
    recoloredElements['greenFills'] = svg.querySelectorAll('[fill="#43b02a"]');
    recoloredElements['greenStrokes'] = svg.querySelectorAll('[stroke="#43b02a"]');

    recoloredElements.currentColorFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'currentColor');
    });

    recoloredElements.currentColorStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'currentColor');
    });

    recoloredElements.greenFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'rgb(var(--sd-color-accent, 67 176 42) / var(--tw-bg-opacity, 1))');
    });

    recoloredElements.greenStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'rgb(var(--sd-color-accent, 67 176 42) / var(--tw-bg-opacity, 1))');
    });
    return svg;
  }
});
\`\`\`

You can now use the component like this:

\`\`\`html
<sd-icon name="system/alarm" library="global-resources"></sd-icon>
<sd-icon name="content/alarm" library="global-resources"></sd-icon>
\`\`\``,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var x,E,k,S,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example: global-resources (overriden)',
  parameters: {
    controls: {
      exclude: ['name', 'library']
    }
  },
  render: (args: any) => generateTemplate({
    axis: {
      x: {
        type: 'attribute',
        name: 'name',
        values: ['system/picture', 'content/picture']
      },
      y: {
        type: 'attribute',
        name: 'color'
      }
    },
    constants: [{
      type: 'attribute',
      name: 'library',
      value: 'global-resources-overriden'
    }],
    options: {
      templateBackgrounds: {
        alternate: 'y',
        colors: ['white', 'white', '#00358E']
      }
    },
    args
  })
}`,...(k=(E=o.parameters)==null?void 0:E.docs)==null?void 0:k.source},description:{story:`The following resolver allows it to fetch data from the global-resources CDN, but overrides given paths and names.
This is especially useful if you want to override icons which are baked into components.

\`\`\`js

registerIconLibrary('global-resources-overriden', {
  resolver: name => {
    // split path and name
    let path = name.split('/');
    let iconName = path.pop();

    // "system" and "system/colored" should both resolve to "system/colored", same for "content"
    if (path.length === 1) {
      path.push('colored');
    }

    // Override icon names which are baked into components
    if (path[0] === 'system') {
      iconName =
        {
          alarm: 'wecker'
        }[iconName] || iconName;
    } else if (path[0] === 'content') {
      iconName =
        {
          letter: 'korrespondenz'
        }[iconName] || iconName;
    }

    return \`https://global-resources.fe.union-investment.de/latest/scripts/services/svg/attrax-icons/\${path.join(
      '/'
    )}/\${iconName}.svg\`;
  },
  // We need currentColor as the main color for the icons
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

\`\`\``,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};const V=["Default","LibrarySystem","ExampleGlobalResources","ExampleGlobalResourcesOverriden"];export{t as Default,r as ExampleGlobalResources,o as ExampleGlobalResourcesOverriden,n as LibrarySystem,V as __namedExportsOrder,U as default};
//# sourceMappingURL=icon.stories-b9a0e171.js.map
