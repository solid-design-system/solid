import{j as e}from"./jsx-runtime-6eef64cc.js";import{u as s}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function t(i){const n=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",h3:"h3",em:"em",ul:"ul",li:"li",pre:"pre"},s(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"ui-link",children:e.jsx(n.code,{children:"ui-link"})}),`
`,e.jsxs(n.p,{children:["Solid Components aim to emulate the default HTML behavior as closely as possible. The new ",e.jsx(n.code,{children:"sd-link"})," component therefore supports a range of correctly typed attributes (e.g., ",e.jsx(n.code,{children:"target: '_blank' | '_parent' | '_self' | '_top'"}),"). Working alongside the ",e.jsx(n.code,{children:"sd-button"}),", it replaces the ",e.jsx(n.code,{children:"ui-link"})," with enhanced features and functionality. For a comprehensive understanding of all available attributes, refer to the ",e.jsx(n.code,{children:"sd-link"})," documentation."]}),`
`,e.jsxs(n.h2,{id:"-removed-attribute-button",children:["❌ Removed attribute: ",e.jsx(n.code,{children:"button"})]}),`
`,e.jsxs(n.p,{children:["In the legacy component library, styles were duplicated between ",e.jsx(n.code,{children:"ui-link"})," and ",e.jsx(n.code,{children:"ui-button"}),", leading to maintainability issues."]}),`
`,e.jsxs(n.h3,{id:"links-that-look-like-buttons",children:["Links that look like ",e.jsx(n.em,{children:"buttons"})]}),`
`,e.jsxs(n.p,{children:["If you have links that should resemble buttons, use the new ",e.jsx(n.code,{children:"sd-button"}),". By setting a ",e.jsx(n.code,{children:"href"})," attribute, you can leverage all attributes of an original HTML anchor, thereby providing more options than before. Refer to the ",e.jsx(n.code,{children:"sd-button"})," documentation for further details."]}),`
`,e.jsxs(n.h3,{id:"links-that-look-like-links",children:["Links that look like ",e.jsx(n.em,{children:"links"})]}),`
`,e.jsxs(n.p,{children:["The new ",e.jsx(n.code,{children:"sd-link"})," offers styles for links that may span more than one line and always display an underline."]}),`
`,e.jsxs(n.h2,{id:"-new-attribute-standalone",children:["✨ New attribute: ",e.jsx(n.code,{children:"standalone"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ui-link"})," posed two problems:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component automatically wraps to a new line, forcing subsequent content to a new line. This breaks away from the default ",e.jsx(n.code,{children:"<a>"})," behavior, causing problems particularly in CMS Rich Text Editors where true inline behavior isn't possible."]}),`
`,e.jsx(n.li,{children:"Icons within the component are always displayed inline, even if the text wraps across multiple lines. This often leads to misuse of the component and unexpected behavior."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sd-link"})," resolves these issues with the ",e.jsx(n.code,{children:"standalone"})," attribute that controls the layout of the icon and text within the component:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"false"})," (Default): Icons are displayed inline with the text, mimicking the default ",e.jsx(n.code,{children:"<a>"})," element behavior. Icons adjust their spacing according to the current font size."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"true"}),": The link moves to a new line, with the icon and text displayed side-by-side, each in its own column."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"-new-attribute-size",children:["✨ New attribute: ",e.jsx(n.code,{children:"size"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sd-link"})," component offers three different sizes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The default size, ",e.jsx(n.code,{children:"inherit"}),", adapts the font size from the parent element, especially useful for non-",e.jsx(n.code,{children:"standalone"})," links."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"lg"})," and ",e.jsx(n.code,{children:"sm"})," sizes set predefined font sizes, beneficial for ",e.jsx(n.code,{children:"standalone"})," links."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"-css-variables---component-link----component-button-",children:["❌ CSS Variables: ",e.jsx(n.code,{children:"--component-link-..., --component-button-..."})]}),`
`,e.jsx(n.p,{children:"Component-specific CSS variables have been discontinued. Now, you can override colors and padding using the part selector."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`sd-button::part(base) {
  background: pink;
  color: black;
}
`})}),`
`,e.jsx(n.p,{children:"Alternatively, you can override CSS variables used within the element."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`sd-button {
  --sd-spacing-4: 15px; // overrides default 16px
}
`})}),`
`,e.jsxs(n.h2,{id:"-removed-attribute-icon",children:["❌ Removed attribute: ",e.jsx(n.code,{children:"icon"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sd-button"})," and ",e.jsx(n.code,{children:"sd-link"})," no longer contain an ",e.jsx(n.code,{children:"icon"})," attribute. They instead offer new ",e.jsx(n.code,{children:"icon-left"})," and ",e.jsx(n.code,{children:"icon-right"})," slots."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<sd-button
  <sd-icon slot="icon-left" ...></sd-icon>.
</sd-button>.
`})}),`
`,e.jsxs(n.h2,{id:"-removed-attribute-icon-option",children:["❌ Removed attribute: ",e.jsx(n.code,{children:"icon-option"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sd-button"})," and ",e.jsx(n.code,{children:"sd-link"})," no longer offer an ",e.jsx(n.code,{children:"icon-option"})," attribute. You can place icons in the main slot, which automatically adjusts the padding."]}),`
`,e.jsxs(n.h2,{id:"-removed-attributess-delay--conversion",children:["❌ Removed attributess: ",e.jsx(n.code,{children:"delay"})," / ",e.jsx(n.code,{children:"conversion"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sd-button"})," and ",e.jsx(n.code,{children:"sd-link"})," no longer provide ",e.jsx(n.code,{children:"delay"})," and ",e.jsx(n.code,{children:"conversion"})," attributes. If you need to catch the event, handle it in your parent component. Refer to the existing ",e.jsx(n.code,{children:"ui-link"})," component implementation for an example."]})]})}function r(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(t,i)})):t(i)}export{r as default};
//# sourceMappingURL=ui-link-8a8eed8f.js.map
