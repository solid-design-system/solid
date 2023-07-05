import"./icon-e649e544.js";import{i as x}from"./lit-element-eaf0d7ea.js";import{x as A}from"./directive-helpers-09afb1c8.js";import{S as w,n as b,e as k}from"./solid-element-6d3454b3.js";import{i as c}from"./query-5b99250b.js";import{L as E}from"./localize-4c2caee5.js";import{w as L}from"./watch-73ae212f.js";import{t as a}from"./classix-ee785c7e.js";import"./state-e7e0c1a5.js";import"./library-7f5d43fd.js";import"./library.system-98f1a9a4.js";import"./request-372c4178.js";import"./request-f73f8173.js";import"./helper-229b0a9d.js";import"./_commonjsHelpers-725317a4.js";import"./component.styles-5b59c2b0.js";function l(e,t,i){return new Promise(r=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,{...i,duration:P()?0:i.duration});o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function P(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function u(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{const r=requestAnimationFrame(i);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}function p(e,t){return e.map(i=>({...i,height:i.height==="auto"?`${t}px`:i.height}))}const g=new Map,$=new WeakMap;function D(e){return e??{keyframes:[],options:{duration:0}}}function f(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function v(e,t){g.set(e,D(t))}function m(e,t,i){const r=$.get(e);if(r!=null&&r[t])return f(r[t],i.dir);const o=g.get(t);return o?f(o,i.dir):{keyframes:[],options:{duration:0}}}function y(e,t){return new Promise(i=>{function r(o){o.target===e&&(e.removeEventListener(t,r),i())}e.addEventListener(t,r)})}var S=Object.defineProperty,C=Object.getOwnPropertyDescriptor,n=(e,t,i,r)=>{for(var o=r>1?void 0:r?C(t,i):t,d=e.length-1,h;d>=0;d--)(h=e[d])&&(o=(r?h(t,i,o):h(o))||o);return r&&o&&S(t,i,o),o};let s=class extends w{constructor(){super(...arguments),this.localize=new E(this),this.open=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}handleSummaryClick(){this.header.focus(),this.open?this.hide():this.show()}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.emit("sd-show",{cancelable:!0}).defaultPrevented){this.open=!1;return}await u(this.body),this.body.hidden=!1;const{keyframes:t,options:i}=m(this,"accordion.show",{dir:this.localize.dir()});await l(this.body,p(t,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sd-after-show")}else{if(this.emit("sd-hide",{cancelable:!0}).defaultPrevented){this.open=!0;return}await u(this.body);const{keyframes:t,options:i}=m(this,"accordion.hide",{dir:this.localize.dir()});await l(this.body,p(t,this.body.scrollHeight),i),this.body.hidden=!0,this.body.style.height="auto",this.emit("sd-after-hide")}}async show(){if(!this.open)return this.open=!0,y(this,"sd-after-show")}async hide(){if(this.open)return this.open=!1,y(this,"sd-after-hide")}render(){return A`
      <div part="base" class="border border-neutral-400">
        <header
          part="header"
          id="header"
          class=${a("flex text-base gap-4 font-bold items-center cursor-pointer select-none px-4 py-3 focus:focus-outline",this.open?"bg-white text-accent hover:bg-neutral-200":"text-primary bg-neutral-100 hover:bg-neutral-200")}
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="flex flex-auto items-center ">${this.summary}</slot>

          <span
            part="summary-icon"
            class=${a("flex flex-grow-0 flex-shrink-0 flex-auto items-center transition-all ease-in-out duration-300",this.open&&"rotate-180")}
          >
            <slot name="expand-icon" class=${a(this.open&&"hidden")}>
              <sd-icon library="system" name="chevron-down"></sd-icon>
            </slot>
            <slot name="collapse-icon" class=${a(!this.open&&"hidden")}>
              <sd-icon library="system" name="chevron-down"></sd-icon>
            </slot>
          </span>
        </header>
        <div part="content" id="content" class="overflow-hidden">
          <slot class="block px-4 py-6" role="region" aria-labelledby="header"></slot>
        </div>
      </div>
    `}};s.styles=[w.styles,x`
      :host {
        display: block;
      }
    `];n([c('[part="base"]')],s.prototype,"accordion",2);n([c('[part="header"]')],s.prototype,"header",2);n([c('[part="content"]')],s.prototype,"body",2);n([b({type:Boolean,reflect:!0})],s.prototype,"open",2);n([b()],s.prototype,"summary",2);n([L("open",{waitUntilFirstUpdate:!0})],s.prototype,"handleOpenChange",1);s=n([k("sd-accordion")],s);v("accordion.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:300,easing:"ease"}});v("accordion.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:300,easing:"ease"}});export{s as default};
//# sourceMappingURL=accordion-380df17c.js.map
