import"./spinner-2d4845a1.js";import{i as v}from"./lit-element-eaf0d7ea.js";import"./directive-helpers-09afb1c8.js";import{S as y,l as g,n,e as x}from"./solid-element-6d3454b3.js";import{t as w}from"./state-e7e0c1a5.js";import{i as V}from"./query-5b99250b.js";import{H as _,l as d}from"./if-defined-dd14bf0f.js";import{i as c,n as f}from"./helper-229b0a9d.js";import{w as C}from"./watch-73ae212f.js";import{c as F}from"./component.styles-5b59c2b0.js";import{t as u}from"./classix-ee785c7e.js";import"./localize-4c2caee5.js";import"./_commonjsHelpers-725317a4.js";const p=new WeakMap,b=new WeakMap,m=new WeakMap;class A{constructor(t,o){(this.host=t).addController(this),this.options={form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){const i=e.getRootNode(),l=e.getAttribute("form");if(l)return i.getElementById(l)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,setValue:(e,i)=>e.value=i,...o},this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),this.host.addEventListener("sd-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sd-input",this.handleUserInput)}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(t){t?(this.form=t,p.has(this.form)?p.get(this.form).add(this.host):p.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),m.has(this.form)||(m.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=p.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),m.has(this.form)&&(this.form.reportValidity=m.get(this.form),m.delete(this.form))),this.form=void 0}handleFormData(t){const o=this.options.disabled(this.host),e=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sd-button";!o&&!l&&typeof e=="string"&&e.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(h=>{t.formData.append(e,h.toString())}):t.formData.append(e,i.toString()))}handleFormSubmit(t){var i;const o=this.options.disabled(this.host),e=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=p.get(this.form))==null||i.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!o&&!e(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const o of t)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0}setUserInteracted(t,o){b.set(t,o),t.requestUpdate()}doAction(t,o){if(this.form){const e=document.createElement("button");e.type=t,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",o&&(e.name=o.name,e.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{o.hasAttribute(i)&&e.setAttribute(i,o.getAttribute(i))})),this.form.append(e),e.click(),e.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){var l;const o=this.host,e=!!b.get(o),i=!!o.required;(l=this.form)!=null&&l.noValidate?(o.removeAttribute("data-required"),o.removeAttribute("data-optional"),o.removeAttribute("data-invalid"),o.removeAttribute("data-valid"),o.removeAttribute("data-user-invalid"),o.removeAttribute("data-user-valid")):(o.toggleAttribute("data-required",i),o.toggleAttribute("data-optional",!i),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&e),o.toggleAttribute("data-user-valid",t&&e))}updateValidity(){const t=this.host;this.setValidity(t.checkValidity())}}var $=Object.defineProperty,S=Object.getOwnPropertyDescriptor,a=(r,t,o,e)=>{for(var i=e>1?void 0:e?S(t,o):t,l=r.length-1,h;l>=0;l--)(h=r[l])&&(i=(e?h(t,o,i):h(i))||i);return e&&i&&$(t,o,i),i};let s=class extends y{constructor(){super(...arguments),this.formControlController=new A(this,{form:r=>{if(r.hasAttribute("form")){const t=r.getRootNode(),o=r.getAttribute("form");return t.getElementById(o)}return r.closest("form")}}),this.hasSlotController=new _(this,"[default]","icon-left","icon-right"),this.invalid=!1,this.title="",this.variant="primary",this.inverted=!1,this.size="lg",this.disabled=!1,this.loading=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.emit("sd-blur")}handleFocus(){this.emit("sd-focus")}handleClick(r){if(this.disabled||this.loading){r.preventDefault(),r.stopPropagation();return}this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(r){this.button.focus(r)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(r){this.isButton()&&(this.button.setCustomValidity(r),this.formControlController.updateValidity())}render(){const r=this.isLink(),t=r?c`a`:c`button`,o={label:this.hasSlotController.test("[default]"),"icon-left":this.hasSlotController.test("icon-left"),"icon-right":this.hasSlotController.test("icon-right"),"icon-only":this._iconsInDefaultSlot.length>0};return f`
      <${t}
      part="base"
      class=${u(`font-md leading-[calc(var(--tw-varspacing)-2px)] no-underline
        w-full h-varspacing whitespace-nowrap align-middle inline-flex items-stretch justify-center
        border transition-colors duration-200 ease-in-out rounded-md
        select-none cursor-[inherit]`,this.inverted?"focus-visible:focus-outline-inverted":"focus-visible:focus-outline",this.loading&&"relative cursor-wait",this.disabled&&"cursor-not-allowed",o["icon-only"]&&"px-0 w-varspacing",{sm:"text-sm varspacing-8 px-4",md:"text-base varspacing-10 px-4",lg:"text-base varspacing-12 px-4"}[this.size],{primary:this.inverted?`text-primary bg-white border-transparent
           hover:text-primary-500 hover:bg-primary-100
           active:text-primary-800 active:bg-primary-200
           disabled:bg-neutral-600 disabled:text-white`:`text-white bg-primary border-transparent
           hover:text-primary-100 hover:bg-primary-500
           active:text-primary-200 active:bg-primary-800
           disabled:bg-neutral-500`,secondary:this.inverted?`text-white border-white
          hover:text-primary-100 hover:bg-primary-500 hover:border-primary-100
          active:text-primary-200 active:bg-primary-800 active:border-primary-200
          disabled:text-neutral-600 disabled:border-neutral-600`:`text-primary border-primary
          hover:text-primary-500 hover:border-primary-500 hover:bg-primary-100
          active:text-primary-800 active:border-primary-800 active:bg-primary-200
          disabled:text-neutral-500 disabled:border-neutral-500`,tertiary:this.inverted?`text-white border-transparent
          hover:text-primary-100 hover:bg-primary-500
          active:text-primary-200 active:bg-primary-800
          disabled:text-neutral-600`:`text-primary border-transparent
          hover:text-primary-500 hover:bg-primary-100
          active:text-primary-800 active:bg-primary-200
          disabled:text-neutral-500`,cta:`text-white bg-accent border-transparent
          hover:bg-accent-300
          active:bg-accent-500
          ${this.inverted?"disabled:bg-neutral-600":"disabled:bg-neutral-500"} disabled:text-white`}[this.variant])}
        ?disabled=${d(r?void 0:this.disabled)}
        type=${d(r?void 0:this.type)}
        title=${this.title}
        name=${d(r?void 0:this.name)}
        value=${d(r?void 0:this.value)}
        href=${d(r?this.href:void 0)}
        target=${d(r?this.target:void 0)}
        download=${d(r?this.download:void 0)}
        rel=${d(r&&this.target?"noreferrer noopener":void 0)}
        role=${d(r?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="icon-left" part="icon-left" class=${u("flex flex-auto items-center pointer-events-none",o["icon-only"]&&"hidden",this.loading&&"invisible",o["icon-left"]&&{sm:"mr-1",md:"mr-2",lg:"mr-2"}[this.size])}></slot>
        <slot part="label" class=${u(o["icon-only"]?"flex flex-auto items-center pointer-events-none":"inline-block",this.loading&&"invisible")}></slot>
        <slot name="icon-right"
          part="icon-right"
          class=${u("flex flex-auto items-center pointer-events-none",this.loading&&"invisible",o["icon-only"]&&"hidden",o["icon-right"]&&{sm:"ml-1",md:"ml-2",lg:"ml-2"}[this.size])}>
        </slot>
      ${this.loading?f`<sd-spinner
              class="${u("absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")}"
            ></sd-spinner>`:""}
      </${t}>
    `}};s.styles=[F,y.styles,v`
      :host {
        display: inline-block;
        position: relative;
        width: auto;
        cursor: pointer;
      }

      sd-spinner {
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
       * sd-icons should automatically resize correctly based on the button size.
       */

      ::slotted(sd-icon),
      sd-spinner {
        font-size: calc(var(--tw-varspacing) / 2);
      }

      ///*
      // * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
      // * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
      // * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
      // * buttons and we style them here instead.
      // */

      // :host(.sd-button-group__button--first:not(.sd-button-group__button--last)) .button {
      //   border-start-end-radius: 0;
      //   border-end-end-radius: 0;
      // }

      // :host(.sd-button-group__button--inner) .button {
      //   border-radius: 0;
      // }

      // :host(.sd-button-group__button--last:not(.sd-button-group__button--first)) .button {
      //   border-start-start-radius: 0;
      //   border-end-start-radius: 0;
      // }

      // /* All except the first */
      // :host(.sd-button-group__button:not(.sd-button-group__button--first)) {
      //   margin-inline-start: calc(-1 * var(--sd-input-border-width));
      // }

      // /* Add a visual separator between solid buttons */
      // :host(
      //     .sd-button-group__button:not(
      //         .sd-button-group__button--first,
      //         .sd-button-group__button--radio,
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
      // :host(.sd-button-group__button--hover) {
      //   z-index: 1;
      // }

      // /* Focus and checked are always on top */
      // :host(.sd-button-group__button--focus),
      // :host(.sd-button-group__button[checked]) {
      //   z-index: 2;
      // }
    `];a([V("a, button")],s.prototype,"button",2);a([g({selector:"sd-icon"})],s.prototype,"_iconsInDefaultSlot",2);a([w()],s.prototype,"invalid",2);a([n()],s.prototype,"title",2);a([n({reflect:!0})],s.prototype,"variant",2);a([n({type:Boolean,reflect:!0})],s.prototype,"inverted",2);a([n({reflect:!0})],s.prototype,"size",2);a([n({type:Boolean,reflect:!0})],s.prototype,"disabled",2);a([n({type:Boolean,reflect:!0})],s.prototype,"loading",2);a([n()],s.prototype,"type",2);a([n()],s.prototype,"name",2);a([n()],s.prototype,"value",2);a([n()],s.prototype,"href",2);a([n()],s.prototype,"target",2);a([n()],s.prototype,"download",2);a([n()],s.prototype,"form",2);a([n({attribute:"formaction"})],s.prototype,"formAction",2);a([n({attribute:"formenctype"})],s.prototype,"formEnctype",2);a([n({attribute:"formmethod"})],s.prototype,"formMethod",2);a([n({attribute:"formnovalidate",type:Boolean})],s.prototype,"formNoValidate",2);a([n({attribute:"formtarget"})],s.prototype,"formTarget",2);a([C("disabled",{waitUntilFirstUpdate:!0})],s.prototype,"handleDisabledChange",1);s=a([x("sd-button")],s);export{s as default};
//# sourceMappingURL=button-51ea629c.js.map
