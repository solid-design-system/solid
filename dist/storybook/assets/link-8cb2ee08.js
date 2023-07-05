import{i as c}from"./lit-element-eaf0d7ea.js";import{x as p}from"./directive-helpers-09afb1c8.js";import{S as m,n as o,e as u}from"./solid-element-6d3454b3.js";import{i as b}from"./query-5b99250b.js";import{H as v,l as n}from"./if-defined-dd14bf0f.js";import{t as f}from"./classix-ee785c7e.js";var g=Object.defineProperty,x=Object.getOwnPropertyDescriptor,e=(s,r,a,l)=>{for(var i=l>1?void 0:l?x(r,a):r,h=s.length-1,d;h>=0;h--)(d=s[h])&&(i=(l?d(r,a,i):d(i))||i);return l&&i&&g(r,a,i),i};let t=class extends m{constructor(){super(...arguments),this.hasSlotController=new v(this,"[default]","icon-left","icon-right"),this.size="inherit",this.inverted=!1,this.standalone=!1,this.href=""}handleBlur(){this.emit("sd-blur")}handleFocus(){this.emit("sd-focus")}focus(s){this.button.focus(s)}blur(){this.button.blur()}render(){const s={label:this.hasSlotController.test("[default]"),"icon-left":this.hasSlotController.test("icon-left"),"icon-right":this.hasSlotController.test("icon-right")};return p`<a
      part="base"
      class=${f("inline",this.href?"cursor-pointer":"",{sm:"text-sm",lg:"text-base",inherit:""}[this.size],{disabled:this.inverted?"text-neutral-600":"text-neutral-500",enabled:this.inverted?"text-white hover:text-primary-200 active:text-primary-400 focus-visible:focus-outline-inverted":" text-primary hover:text-primary-500 active:text-primary-800 focus-visible:focus-outline"}[this.href?"enabled":"disabled"],this.standalone&&"flex items-start")}
      href=${n(this.href||void 0)}
      target=${n(this.target||void 0)}
      download=${n(this.download||void 0)}
      rel=${n(this.target?"noreferrer noopener":void 0)}
      aria-disabled=${this.href?"false":"true"}
      tabindex=${this.href?"0":"-1"}
      @blur=${this.handleBlur}
      @focus=${this.handleFocus}
      ><slot
        name="icon-left"
        part="icon-left"
        class=${f("inline",s["icon-left"]&&(this.standalone?{sm:"mr-1",lg:"mr-2",inherit:"mr-[0.5em]"}[this.size]:"mr-[0.25em]"))}
      ></slot
      ><span part="label" class="inline underline underline-offset-2"><slot></slot></span
      ><slot
        name="icon-right"
        part="icon-right"
        class=${f("inline",s["icon-right"]&&(this.standalone?{sm:"ml-1",lg:"ml-2",inherit:"ml-[0.5em]"}[this.size]:"ml-[0.25em]"))}
      ></slot
    ></a>`}};t.styles=[m.styles,c`
      ::slotted(sd-icon) {
        font-size: 1.25em;
        margin-bottom: -0.25em;
      }
      /**
       * In standalone mode, the icon sizes are fixed when a size is set
       */
      :host([size='sm'][standalone]) ::slotted(sd-icon) {
        font-size: 1rem;
      }
      :host([size='lg'][standalone]) ::slotted(sd-icon) {
        font-size: 1.5rem;
      }
    `];e([b("a")],t.prototype,"button",2);e([o({reflect:!0})],t.prototype,"size",2);e([o({type:Boolean,reflect:!0})],t.prototype,"inverted",2);e([o({type:Boolean,reflect:!0})],t.prototype,"standalone",2);e([o()],t.prototype,"href",2);e([o()],t.prototype,"target",2);e([o()],t.prototype,"download",2);t=e([u("sd-link")],t);export{t as default};
//# sourceMappingURL=link-8cb2ee08.js.map
