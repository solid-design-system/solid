import{i as m}from"./lit-element-eaf0d7ea.js";import{x as c}from"./directive-helpers-09afb1c8.js";import{S as n,n as C,e as u}from"./solid-element-6d3454b3.js";import{L as d}from"./localize-4c2caee5.js";import{t as f}from"./classix-ee785c7e.js";var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,p=(a,r,o,t)=>{for(var e=t>1?void 0:t?v(r,o):r,s=a.length-1,i;s>=0;s--)(i=a[s])&&(e=(t?i(r,o,e):i(e))||e);return t&&e&&h(r,o,e),e};let l=class extends n{constructor(){super(...arguments),this.color="currentColor",this.localize=new d(this)}render(){return c`
      <svg
        role="progressbar"
        viewBox="0 0 24 24"
        class=${f("animate-spin",{primary:"text-primary",white:"text-white",currentColor:""}[this.color])}
        aria-valuetext=${this.localize.term("loading")}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
          class="opacity-20"
          fill="currentColor"
        />
        <mask id="mask0_5273_25391" style="mask-type:alpha" maskUnits="userSpaceOnUse">
          <path d="M24 12C24 5.37258 18.6274 0 12 0V12H24Z" fill="currentColor" />
        </mask>
        <g mask="url(#mask0_5273_25391)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
            fill="currentColor"
          />
        </g>
      </svg>
    `}};l.styles=[n.styles,m`
      :host {
        display: inline-block;
        width: 1em;
        height: 1em;
      }
    `];p([C({reflect:!0})],l.prototype,"color",2);l=p([u("sd-spinner")],l);export{l as default};
//# sourceMappingURL=spinner-2d4845a1.js.map
