import{j as e}from"./jsx-runtime-6eef64cc.js";import{u as o}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function s(t){const n=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",pre:"pre"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"ui-button",children:e.jsx(n.code,{children:"ui-button"})}),`
`,e.jsxs(n.p,{children:["Solid Components aims to mirror default HTML behavior as closely as possible. The new ",e.jsx(n.code,{children:"sd-button"})," component supports a range of attributes with correctly typed values. It replaces the ",e.jsx(n.code,{children:"ui-button"})," with enhanced features and functionality. To understand all the available attributes, please refer to the ",e.jsx(n.code,{children:"sd-button"})," documentation."]}),`
`,e.jsxs(n.h2,{id:"-new-attribute-load",children:["✨ New attribute: ",e.jsx(n.code,{children:"load"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"load"})," attribute improves handling of buttons that display a loading state. In the past, manual intervention was necessary to control this state. Now, simply set the ",e.jsx(n.code,{children:"load"})," attribute. It activates an ",e.jsx(n.code,{children:"sd-spinner"}),", maintains the current content (and consequently, the width), and manages all essential HTML and A11y features."]}),`
`,e.jsxs(n.h2,{id:"-updated-attribute-varianttransparent-to-varianttertiary",children:["🔀 Updated attribute: ",e.jsx(n.code,{children:"variant/transparent"})," to ",e.jsx(n.code,{children:"variant/tertiary"})]}),`
`,e.jsxs(n.p,{children:["The attribute argument ",e.jsx(n.code,{children:"variant/transparent"})," has been renamed to ",e.jsx(n.code,{children:"variant/tertiary"})," to accurately represent the button hierarchy. To enhance user experience, its behavior on hover has been updated; it now changes background instead of applying an underline."]}),`
`,e.jsxs(n.h2,{id:"-css-variables---component-button-",children:["❌ CSS Variables: ",e.jsx(n.code,{children:"--component-button-..."})]}),`
`,e.jsx(n.p,{children:"We have discontinued component-specific CSS variables. You can now alter colors and padding using the part selector. Alternatively, override CSS variables used within the element as needed."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`sd-button::part(base) {
  background: pink;
  color: black;
}
`})}),`
`,e.jsx(n.p,{children:"As an alternative you can override CSS variables used in the element:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`sd-button {
  --sd-spacing-4: 15px; // overrides default 16px
}
`})}),`
`,e.jsxs(n.h2,{id:"-removed-attribute-variantplain",children:["❌ Removed attribute: ",e.jsx(n.code,{children:"variant/plain"})]}),`
`,e.jsxs(n.p,{children:["We no longer support manually setting negative margins for aligning a tertiary button horizontally. Design-wise, this approach is discouraged as the hover and focus states would be affected. If you require a more minimal link component, please utilize the ",e.jsx(n.code,{children:"sd-link"})," component. Note that the ",e.jsx(n.code,{children:"sd-link"})," component is not designed to behave like a button and will not support such features in the future."]}),`
`,e.jsxs(n.h2,{id:"-removed-attribute-icon",children:["❌ Removed attribute: ",e.jsx(n.code,{children:"icon"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sd-button"})," no longer includes an ",e.jsx(n.code,{children:"icon"})," attribute. Instead, it provides a slot for the same purpose. For usage examples, refer to the ",e.jsx(n.code,{children:"sd-button/Slots"})," story. You might need to manually add 'skinning' data to invert the icon, as this function is no longer provided by the button."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<sd-button
  <ui-icon slot="icon-left" ...></ui-icon>.
</sd-button>.
`})}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.code,{children:"sd-button/Slots"})," story for examples."]}),`
`,e.jsxs(n.h2,{id:"-new-icon-only-state",children:["✨ New ",e.jsx(n.code,{children:"icon-only"})," state"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"icon-only"})," state activates when an ",e.jsx(n.code,{children:"sd-icon"})," is placed inside the main slot of an ",e.jsx(n.code,{children:"sd-button"}),". In this state, the button automatically becomes square, embodying an ",e.jsx(n.code,{children:"icon-only"})," button."]}),`
`,e.jsx(n.h2,{id:"-automatic-color-inversion",children:"❌ Automatic Color Inversion"}),`
`,e.jsxs(n.p,{children:["In our pursuit of creating standalone, robust components, the ",e.jsx(n.code,{children:"sd-button"})," does not automatically invert its colors based on CSS variables from higher elements in the DOM. Instead, to invert colors, you simply need to add the ",e.jsx(n.code,{children:"inverted"})," attribute."]})]})}function c(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{c as default};
//# sourceMappingURL=ui-button-8f93b9d2.js.map
