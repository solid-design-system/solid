import"./accordion-380df17c.js";import{i as a}from"./lit-element-eaf0d7ea.js";import{x as d}from"./directive-helpers-09afb1c8.js";import{o as m,S as p,l as u,n as h,e as f}from"./solid-element-6d3454b3.js";import{c as v}from"./component.styles-5b59c2b0.js";import"./icon-e649e544.js";import"./state-e7e0c1a5.js";import"./library-7f5d43fd.js";import"./library.system-98f1a9a4.js";import"./request-372c4178.js";import"./request-f73f8173.js";import"./helper-229b0a9d.js";import"./_commonjsHelpers-725317a4.js";import"./watch-73ae212f.js";import"./query-5b99250b.js";import"./localize-4c2caee5.js";import"./classix-ee785c7e.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(t){return m({descriptor:o=>({get(){var e,r;return(r=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelectorAll(t))!==null&&r!==void 0?r:[]},enumerable:!0,configurable:!0})})}var y=Object.defineProperty,S=Object.getOwnPropertyDescriptor,n=(t,o,e,r)=>{for(var s=r>1?void 0:r?S(o,e):o,c=t.length-1,l;c>=0;c--)(l=t[c])&&(s=(r?l(o,e,s):l(s))||s);return r&&s&&y(o,e,s),s};let i=class extends p{constructor(){super(...arguments),this.closeOthers=!1,this.handleAccordionShow=t=>{this.closeOthers&&this._accordionsInDefaultSlot.forEach(o=>{o!==t.target&&o.parentNode===t.target.parentNode&&o.removeAttribute("open")})}}connectedCallback(){super.connectedCallback(),this.addEventListener("sd-show",this.handleAccordionShow)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sd-show",this.handleAccordionShow)}render(){return d`
      <div part="base">
        <slot></slot>
      </div>
    `}};i.styles=[v,p.styles,a`
      :host {
        display: block;
      }
      ::slotted(sd-accordion:not(:first-of-type)) {
        margin-top: -1px;
      }
    `];n([b("sd-accordion")],i.prototype,"accordions",2);n([u({selector:"sd-accordion"})],i.prototype,"_accordionsInDefaultSlot",2);n([h({attribute:"close-others",type:Boolean})],i.prototype,"closeOthers",2);i=n([f("sd-accordion-group")],i);export{i as default};
//# sourceMappingURL=accordion-group-f8e559cb.js.map
