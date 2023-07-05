import{i as b}from"./lit-element-eaf0d7ea.js";import{A as u,T as g,x as v}from"./directive-helpers-09afb1c8.js";import{S as y,n,e as w}from"./solid-element-6d3454b3.js";import{t as x}from"./state-e7e0c1a5.js";import{watchIcon as C,unwatchIcon as I,getIconLibrary as d}from"./library-7f5d43fd.js";import{requestIcon as L}from"./request-372c4178.js";import{d as $,t as A,e as S}from"./helper-229b0a9d.js";import{w as f}from"./watch-73ae212f.js";import{c as T}from"./component.styles-5b59c2b0.js";import"./library.system-98f1a9a4.js";import"./request-f73f8173.js";import"./_commonjsHelpers-725317a4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends ${constructor(t){if(super(t),this.et=u,t.type!==A.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this.ft=void 0,this.et=t;if(t===g)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}p.directiveName="unsafeHTML",p.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends p{}m.directiveName="unsafeSVG",m.resultType=2;const _=S(m);var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,i=(e,t,s,l)=>{for(var o=l>1?void 0:l?P(t,s):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(o=(l?c(t,s,o):c(o))||o);return l&&o&&O(t,s,o),o};let h,r=class extends y{constructor(){super(...arguments),this.svg="",this.label="",this.library="default",this.color="currentColor"}connectedCallback(){super.connectedCallback(),C(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),I(this)}getUrl(){const e=d(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var s;const e=d(this.library),t=this.getUrl();if(h||(h=new DOMParser),t)try{const l=await L(t);if(t===this.getUrl())if(l.ok){const a=h.parseFromString(l.svg,"text/html").body.querySelector("svg");a!==null?((s=e==null?void 0:e.mutator)==null||s.call(e,a),this.svg=a.outerHTML,this.emit("sd-load")):(this.svg="",this.emit("sd-error"))}else this.svg="",this.emit("sd-error")}catch{this.emit("sd-error")}else this.svg.length>0&&(this.svg="")}render(){return v` ${_(this.svg)} `}};r.styles=[T,b`
      :host {
        display: inline-block;
        width: 1em;
        height: 1em;
        box-sizing: content-box !important;
      }

      svg {
        display: block;
        height: 100%;
        width: 100%;
      }

      :host([color='primary']) svg {
        color: rgb(var(--sd-color-primary, 0 53 142) / var(--tw-text-opacity, 1)); // text-primary
      }

      :host([color='white']) svg {
        color: rgb(var(--sd-color-white, 255 255 255) / var(--tw-text-opacity, 1)); // text-white
      }
    `];i([x()],r.prototype,"svg",2);i([n({reflect:!0})],r.prototype,"name",2);i([n()],r.prototype,"src",2);i([n()],r.prototype,"label",2);i([n({reflect:!0})],r.prototype,"library",2);i([n({reflect:!0})],r.prototype,"color",2);i([f("label")],r.prototype,"handleLabelChange",1);i([f(["name","src","library"])],r.prototype,"setIcon",1);r=i([w("sd-icon")],r);export{r as default};
//# sourceMappingURL=icon-e649e544.js.map
