import"./spinner.js";import{x as t,i as e}from"./lit-element.js";import{S as o,l as i,n as r,e as s}from"./solid-element.js";import{t as a}from"./state.js";import{i as n}from"./query.js";import{H as l,l as d}from"./if-defined.js";import{w as h}from"./watch.js";import{c as u}from"./component.styles.js";import{t as p}from"./classix.js";import"./localize.js";const m=new WeakMap,c=new WeakMap,b=new WeakMap;class f{constructor(t,e){(this.host=t).addController(this),this.options={form:t=>{if(t.hasAttribute("form")&&""!==t.getAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");if(o)return e.getElementById(o)}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>t.disabled??!1,reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e,...e},this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),this.host.addEventListener("sd-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sd-input",this.handleUserInput)}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(t){t?(this.form=t,m.has(this.form)?m.get(this.form).add(this.host):m.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),b.has(this.form)||(b.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&(null==(t=m.get(this.form))||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),b.has(this.form)&&(this.form.reportValidity=b.get(this.form),b.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),r="sd-1-2-5-button"===this.host.tagName.toLowerCase();!e&&!r&&"string"==typeof o&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,i.toString()))}handleFormSubmit(t){var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=m.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){c.set(t,e),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){var e;const o=this.host,i=!!c.get(o),r=!!o.required;null!=(e=this.form)&&e.noValidate?(o.removeAttribute("data-required"),o.removeAttribute("data-optional"),o.removeAttribute("data-invalid"),o.removeAttribute("data-valid"),o.removeAttribute("data-user-invalid"),o.removeAttribute("data-user-valid")):(o.toggleAttribute("data-required",r),o.toggleAttribute("data-optional",!r),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&i),o.toggleAttribute("data-user-valid",t&&i))}updateValidity(){const t=this.host;this.setValidity(t.checkValidity())}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=Symbol.for(""),v=t=>{if((null==t?void 0:t.r)===y)return null==t?void 0:t._$litStatic$},g=(t,...e)=>({_$litStatic$:e.reduce(((e,o,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]),r:y}),x=new Map,w=(V=t,(t,...e)=>{const o=e.length;let i,r;const s=[],a=[];let n,l=0,d=!1;for(;l<o;){for(n=t[l];l<o&&(r=e[l],void 0!==(i=v(r)));)n+=i+t[++l],d=!0;l!==o&&a.push(r),s.push(n),l++}if(l===o&&s.push(t[o]),d){const o=s.join("$$lit$$");void 0===(t=x.get(o))&&(s.raw=s,x.set(o,t=s)),e=a}return V(t,...e)});var V,$=Object.defineProperty,_=Object.getOwnPropertyDescriptor,F=(t,e,o,i)=>{for(var r,s=i>1?void 0:i?_(e,o):e,a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i?r(e,o,s):r(s))||s);return i&&s&&$(e,o,s),s};let A=class extends o{constructor(){super(...arguments),this.formControlController=new f(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new l(this,"[default]","icon-left","icon-right"),this.invalid=!1,this.title="",this.variant="primary",this.inverted=!1,this.size="lg",this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.emit("sd-blur")}handleFocus(){this.emit("sd-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?g`a`:g`button`,o={label:this.hasSlotController.test("[default]"),"icon-left":this.hasSlotController.test("icon-left"),"icon-right":this.hasSlotController.test("icon-right"),"icon-only":this._iconsInDefaultSlot.length>0};return w`
      <${e}
      part="base"
      class=${p("font-md leading-[calc(var(--tw-varspacing)-2px)] no-underline\n        w-full h-varspacing whitespace-nowrap align-middle inline-flex items-stretch justify-center\n        border transition-colors duration-200 ease-in-out rounded-md\n        select-none cursor-[inherit]",this.inverted?"focus-visible:focus-outline-inverted":"focus-visible:focus-outline",this.loading&&"relative cursor-wait",this.disabled&&"cursor-not-allowed",o["icon-only"]&&"px-0 w-varspacing",{sm:"text-sm varspacing-8 px-4",md:"text-base varspacing-10 px-4",lg:"text-base varspacing-12 px-4"}[this.size],{primary:this.inverted?"text-primary bg-white border-transparent\n           hover:text-primary-500 hover:bg-primary-100\n           active:text-primary-800 active:bg-primary-200\n           disabled:bg-neutral-600 disabled:text-white":"text-white bg-primary border-transparent\n           hover:text-primary-100 hover:bg-primary-500\n           active:text-primary-200 active:bg-primary-800\n           disabled:bg-neutral-500",secondary:this.inverted?"text-white border-white\n          hover:text-primary-100 hover:bg-primary-500 hover:border-primary-100\n          active:text-primary-200 active:bg-primary-800 active:border-primary-200\n          disabled:text-neutral-600 disabled:border-neutral-600":"text-primary border-primary\n          hover:text-primary-500 hover:border-primary-500 hover:bg-primary-100\n          active:text-primary-800 active:border-primary-800 active:bg-primary-200\n          disabled:text-neutral-500 disabled:border-neutral-500",tertiary:this.inverted?"text-white border-transparent\n          hover:text-primary-100 hover:bg-primary-500\n          active:text-primary-200 active:bg-primary-800\n          disabled:text-neutral-600":"text-primary border-transparent\n          hover:text-primary-500 hover:bg-primary-100\n          active:text-primary-800 active:bg-primary-200\n          disabled:text-neutral-500",cta:`text-white bg-accent border-transparent\n          hover:bg-accent-300\n          active:bg-accent-500\n          ${this.inverted?"disabled:bg-neutral-600":"disabled:bg-neutral-500"} disabled:text-white`}[this.variant])}
        ?disabled=${d(t?void 0:this.disabled)}
        type=${d(t?void 0:this.type)}
        title=${this.title}
        name=${d(t?void 0:this.name)}
        value=${d(t?void 0:this.value)}
        href=${d(t?this.href:void 0)}
        target=${d(t?this.target:void 0)}
        download=${d(t?this.download:void 0)}
        rel=${d(t&&this.target?"noreferrer noopener":void 0)}
        role=${d(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="icon-left" part="icon-left" class=${p("flex flex-auto items-center pointer-events-none",o["icon-only"]&&"hidden",this.loading&&"invisible",o["icon-left"]&&{sm:"mr-1",md:"mr-2",lg:"mr-2"}[this.size])}></slot>
        <slot part="label" class=${p(o["icon-only"]?"flex flex-auto items-center pointer-events-none":"inline-block",this.loading&&"invisible")}></slot>
        <slot name="icon-right"
          part="icon-right"
          class=${p("flex flex-auto items-center pointer-events-none",this.loading&&"invisible",o["icon-only"]&&"hidden",o["icon-right"]&&{sm:"ml-1",md:"ml-2",lg:"ml-2"}[this.size])}>
        </slot>
      ${this.loading?w`<sd-1-2-5-spinner
              class="${p("absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")}"
            ></sd-1-2-5-spinner>`:""}
      </${e}>
    `}};A.styles=[u,o.styles,e`
      :host {
        display: inline-block;
        position: relative;
        width: auto;
        cursor: pointer;
      }

      sd-1-2-5-spinner {
        --indicator-color: currentColor;
        --track-color: var(--tw-varcolor-200);
      }

      /*
    * Badges:
    * Slotted badges are positioned absolutely in the top right corner of the button.
    */

      ::slotted(sd-badge) {
        position: absolute;
        top: 0;
        right: 0;
        translate: 50% -50%;
        pointer-events: none;
      }

      /**
       * sd-1-2-5-icons should automatically resize correctly based on the button size.
       */

      ::slotted(sd-1-2-5-icon),
      sd-1-2-5-spinner {
        font-size: calc(var(--tw-varspacing) / 2);
      }

      ///*
      // * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
      // * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
      // * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
      // * buttons and we style them here instead.
      // */

      // :host(.sd-1-2-5-button-group__button--first:not(.sd-1-2-5-button-group__button--last)) .button {
      //   border-start-end-radius: 0;
      //   border-end-end-radius: 0;
      // }

      // :host(.sd-1-2-5-button-group__button--inner) .button {
      //   border-radius: 0;
      // }

      // :host(.sd-1-2-5-button-group__button--last:not(.sd-1-2-5-button-group__button--first)) .button {
      //   border-start-start-radius: 0;
      //   border-end-start-radius: 0;
      // }

      // /* All except the first */
      // :host(.sd-1-2-5-button-group__button:not(.sd-1-2-5-button-group__button--first)) {
      //   margin-inline-start: calc(-1 * var(--sd-input-border-width));
      // }

      // /* Add a visual separator between solid buttons */
      // :host(
      //     .sd-1-2-5-button-group__button:not(
      //         .sd-1-2-5-button-group__button--first,
      //         .sd-1-2-5-button-group__button--radio,
      //         [variant='default']
      //       ):not(:hover)
      //   )
      //   .button:after {
      //   content: '';
      //   position: absolute;
      //   top: 0;
      //   inset-inline-start: 0;
      //   bottom: 0;
      //   border-left: solid 1px rgb(128 128 128 / 33%);
      //   mix-blend-mode: multiply;
      // }

      // /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
      // :host(.sd-1-2-5-button-group__button--hover) {
      //   z-index: 1;
      // }

      // /* Focus and checked are always on top */
      // :host(.sd-1-2-5-button-group__button--focus),
      // :host(.sd-1-2-5-button-group__button[checked]) {
      //   z-index: 2;
      // }
    `],F([n("a, button")],A.prototype,"button",2),F([i({selector:"sd-1-2-5-icon"})],A.prototype,"_iconsInDefaultSlot",2),F([a()],A.prototype,"invalid",2),F([r()],A.prototype,"title",2),F([r({reflect:!0})],A.prototype,"variant",2),F([r({type:Boolean,reflect:!0})],A.prototype,"inverted",2),F([r({reflect:!0})],A.prototype,"size",2),F([r({type:Boolean,reflect:!0})],A.prototype,"disabled",2),F([r({type:Boolean,reflect:!0})],A.prototype,"loading",2),F([r()],A.prototype,"type",2),F([r()],A.prototype,"name",2),F([r()],A.prototype,"value",2),F([r()],A.prototype,"href",2),F([r()],A.prototype,"target",2),F([r()],A.prototype,"download",2),F([r()],A.prototype,"form",2),F([r({attribute:"formaction"})],A.prototype,"formAction",2),F([r({attribute:"formenctype"})],A.prototype,"formEnctype",2),F([r({attribute:"formmethod"})],A.prototype,"formMethod",2),F([r({attribute:"formnovalidate",type:Boolean})],A.prototype,"formNoValidate",2),F([r({attribute:"formtarget"})],A.prototype,"formTarget",2),F([h("disabled",{waitUntilFirstUpdate:!0})],A.prototype,"handleDisabledChange",1),A=F([s("sd-1-2-5-button")],A);export{A as default};