import{j as e}from"./jsx-runtime-6eef64cc.js";import{d as t,M as i}from"./index-ba917e57.js";import{u as c}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-4c2cee6f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const o="1.2.5",l="https://solid-design-system.fe.union-investment.de";function r(s){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",blockquote:"blockquote",a:"a",ol:"ol",li:"li",ul:"ul",em:"em"},c(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.h2,{id:"cdn-installation",children:"CDN Installation"}),`
`,e.jsx(n.h3,{id:"umd",children:"UMD"}),`
`,e.jsx(n.p,{children:`The UMD bundle registers all Solid Components in a single file. If you're using many Solid Components, this is the most performant way to load and hydrate them.
You can use the following script tag to load all components:`}),`
`,e.jsx(t,{language:"html",code:`<script src="${l}/${o}/components/umd/solid-components.js" type="module"><\/script>`}),`
`,e.jsx(n.h3,{id:"es-modules",children:"ES modules"}),`
`,e.jsx(n.p,{children:`The ES modules bundle is a collection of all Solid Components as ES modules.
This allows you to cherry pick the components you want to use and load them asynchronously.`}),`
`,e.jsx(t,{language:"html",code:`<script src="${l}/${o}/components/es/button.js" type="module"><\/script>`}),`
`,e.jsxs(n.p,{children:[`This approach will load only the components you need up front, while limiting the number of files the browser has to download.
The disadvantage is that you need to import each individual component.
While you could load the whole bundle as well (`,e.jsx(n.code,{children:"../es/solid-components.js"}),"), we recommend using the ",e.jsx(n.code,{children:"UMD"})," bundle instead, as it hydrates and loads components much faster."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Important: You should only use either UMD or ES modules on a single website, not both, as this could lead to collisions in the custom element registry."}),`
`]}),`
`,e.jsx(n.h3,{id:"fixed-vs-flexible-version",children:"Fixed vs. flexible version"}),`
`,e.jsxs(n.p,{children:["As shown above you can select a fixed version of the components by setting the version in the URL. For example, to use the current version (",o,"), you would use the following URL:"]}),`
`,e.jsx(t,{language:"html",code:`<script src="${l}/${o}/components/es/button.js" type="module"><\/script>`}),`
`,e.jsxs(n.p,{children:["This project adheres to ",e.jsx(n.a,{href:"http://semver.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Semantic Versioning"}),"."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["If you want to receive bug fixes for you current version, you can use the wildcard patch version selector: ",e.jsx(i,{children:`\`${o.split(".")[0]}.${o.split(".")[1]}.x\``})]}),`
`,e.jsxs(n.li,{children:["If you want to receive new features, you can use the wildcard minor version selector: ",e.jsx(i,{children:`\`${o.split(".")[0]}.x.x\``})]}),`
`,e.jsxs(n.li,{children:["If you want to receive even breaking changes by using the latest version, you can use the wildcard major version selector: ",e.jsx(i,{children:"`x.x.x`"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Important: In production environments you should always use a fixed version, as otherwise you could receive breaking changes without noticing. Using a more flexible version is only recommended for development environments and at own risk."}),`
`]}),`
`,e.jsx(n.h2,{id:"versioned-components",children:"Versioned Components"}),`
`,e.jsxs(n.p,{children:[`In microfrontends it is often necessary to use different versions of the same component.
For example, if you have two microfrontends, one using `,e.jsx(n.code,{children:"1.0.0"})," and the other using ",e.jsx(n.code,{children:"1.1.0"}),", you can't use the same bundle for both, as this would lead to collisions in the custom element registry."]}),`
`,e.jsx(n.p,{children:"Instead to use versioned components in your projects, follow these steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Modify the CDN URL from ",e.jsx(n.code,{children:"../components/es/solid-components.js"})," to ",e.jsx(n.code,{children:"../versioned-components/es/solid-components.js"}),". You can still cherry-pick the components you want to use, for example, ",e.jsx(n.code,{children:"../versioned-components/es/button.js"}),"."]}),`
`,e.jsxs(n.li,{children:["Update the tags of your components to include their version, such as ",e.jsx(n.code,{children:"sd-1-1-0-button"})," instead of ",e.jsx(n.code,{children:"sd-button"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Info: We can only allow one bundle for versioned components as otherwise custom-element-registries could collide. We decided to go with only ES modules, as this allows to cherry pick single components, what could help in micro service contexts."}),`
`]}),`
`,e.jsx(n.p,{children:"Keep the following in mind for nested components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Slotted components"}),", which are added by your app or website, are not automatically versioned. You need to version them yourself if necessary."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Nested components"}),", which are generated by the component itself, are automatically versioned (e.g., ",e.jsx(n.code,{children:"sd-1-1-0-button"})," will generate an ",e.jsx(n.code,{children:"sd-1-1-0-spinner"})," when in the loading state)."]}),`
`]})]})}function w(s={}){const{wrapper:n}=Object.assign({},c(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{l as cdnBase,w as default};
//# sourceMappingURL=Installation-137cb35e.js.map
