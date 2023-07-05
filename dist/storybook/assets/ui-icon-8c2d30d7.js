import{j as e}from"./jsx-runtime-6eef64cc.js";import{u as o}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function r(i){const n=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",ol:"ol",li:"li"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"ui-icon",children:e.jsx(n.code,{children:"ui-icon"})}),`
`,e.jsxs(n.p,{children:["The new ",e.jsx(n.code,{children:"sd-icon"})," is intended to be a direct replacement for ",e.jsx(n.code,{children:"ui-icon"}),". It strives to mirror the attributes of an original HTML button, providing a wider range of features. Please refer to the ",e.jsx(n.code,{children:"sd-icon"})," documentation for a comprehensive understanding of these attributes."]}),`
`,e.jsxs(n.h2,{id:"ℹ️-independent-from-global-resources",children:["ℹ️ Independent from ",e.jsx(n.code,{children:"global-resources"})]}),`
`,e.jsxs(n.p,{children:["There is no longer a need to import ",e.jsx(n.code,{children:"global-resources"})," with the icon-provider + JSONs containing a list of icons. Instead, you implement your own resolver. This change enhances flexibility and performance. Refer to the ",e.jsx(n.code,{children:"sd-icon"})," documentation for implementation details."]}),`
`,e.jsx(n.h2,{id:"ℹ️-flexible-size-and-color-handling",children:"ℹ️ Flexible Size and Color Handling"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"size"})," and ",e.jsx(n.code,{children:"color"})," attributes are inherited from the parent's ",e.jsx(n.code,{children:"font-size"})," and ",e.jsx(n.code,{children:"(text-)color"})," properties."]}),`
`,e.jsxs(n.h2,{id:"-new-attribute-color",children:["✨ New attribute: ",e.jsx(n.code,{children:"color"})]}),`
`,e.jsxs(n.p,{children:["To ensure flexible coloring while simplifying skinning, we introduced the ",e.jsx(n.code,{children:"color"})," attribute."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currentColor"})," (default) inherits the text color from the parent element, mimicking the current CSS variable handling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"primary"})," and ",e.jsx(n.code,{children:"white"})," are self-explanatory, both being skinnable by default."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"-new-attribute-src",children:["✨ New attribute: ",e.jsx(n.code,{children:"src"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"src"})," attribute allows you to fetch and set an icon from any URL."]}),`
`,e.jsxs(n.h2,{id:"-new-attribute-label",children:["✨ New attribute: ",e.jsx(n.code,{children:"label"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"label"})," attribute offers a way to describe the icon for screen readers."]}),`
`,e.jsxs(n.h2,{id:"-replaced-attributes-icon-type-variant-with-name",children:["🔀 Replaced attributes ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"variant"})," with ",e.jsx(n.code,{children:"name"})]}),`
`,e.jsxs(n.p,{children:["We removed the ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"type"}),", and ",e.jsx(n.code,{children:"variant"})," attributes."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"variant"})," attribute is now obsolete, as color is managed via the ",e.jsx(n.code,{children:"color"})," attribute."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"type"})," and ",e.jsx(n.code,{children:"icon"})," attributes are consolidated into the ",e.jsx(n.code,{children:"name"})," attribute, e.g., ",e.jsx(n.code,{children:"name='content/letter'"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Ensure your resolver functions correctly. See the examples in the ",e.jsx(n.code,{children:"sd-icon"})," documentation under ",e.jsx(n.code,{children:"global-resources"})," and ",e.jsx(n.code,{children:"global-resources-overridden"})," for guidance."]}),`
`,e.jsxs(n.h2,{id:"-css-variables---component-icon-",children:["❌ CSS Variables: ",e.jsx(n.code,{children:"--component-icon-..."})]}),`
`,e.jsxs(n.p,{children:["Component-specific CSS variables are discontinued. You can now override the icon's color using the ",e.jsx(n.code,{children:"currentColor"})," attribute."]})]})}function l(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(r,i)})):r(i)}export{l as default};
//# sourceMappingURL=ui-icon-8c2d30d7.js.map
