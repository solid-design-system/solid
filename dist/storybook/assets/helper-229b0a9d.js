var H=Object.freeze,ot=Object.defineProperty;var W=(e,t)=>H(ot(e,"raw",{value:H(t||e.slice())}));import{x as it,e as ct,A as ut}from"./directive-helpers-09afb1c8.js";import{g as dt}from"./_commonjsHelpers-725317a4.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=Symbol.for(""),ft=e=>{if((e==null?void 0:e.r)===R)return e==null?void 0:e._$litStatic$},w=e=>({_$litStatic$:e,r:R}),ne=(e,...t)=>({_$litStatic$:t.reduce((r,s,a)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[a+1],e[0]),r:R}),z=new Map,gt=e=>(t,...r)=>{const s=r.length;let a,n;const l=[],o=[];let f,p=0,c=!1;for(;p<s;){for(f=t[p];p<s&&(n=r[p],(a=ft(n))!==void 0);)f+=a+t[++p],c=!0;p!==s&&o.push(n),l.push(f),p++}if(p===s&&l.push(t[s]),c){const $=l.join("$$lit$$");(t=z.get($))===void 0&&(l.raw=l,z.set($,t=l)),r=o}return e(t,...r)},v=gt(it);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ht=e=>(...t)=>({_$litDirective$:e,values:t});class $t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=(e,t)=>{var r,s;const a=e._$AN;if(a===void 0)return!1;for(const n of a)(s=(r=n)._$AO)===null||s===void 0||s.call(r,t,!1),C(n,t);return!0},L=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},X=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),wt(t)}};function vt(e){this._$AN!==void 0?(L(this),this._$AM=e,X(this)):this._$AM=e}function yt(e,t=!1,r=0){const s=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(s))for(let n=r;n<s.length;n++)C(s[n],!1),L(s[n]);else s!=null&&(C(s,!1),L(s));else C(this,e)}const wt=e=>{var t,r,s,a;e.type==pt.CHILD&&((t=(s=e)._$AP)!==null&&t!==void 0||(s._$AP=yt),(r=(a=e)._$AQ)!==null&&r!==void 0||(a._$AQ=vt))};class mt extends $t{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,s){super._$AT(t,r,s),X(this),this.isConnected=t._$AU}_$AO(t,r=!0){var s,a;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(a=this.disconnected)===null||a===void 0||a.call(this)),r&&(C(this,t),L(this))}setValue(t){if(ct(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}class Tt extends mt{constructor(){super(...arguments),this.prevData={}}render(t){return ut}update(t,[r]){var s;this.element!==t.element&&(this.element=t.element),this.host=((s=t.options)===null||s===void 0?void 0:s.host)||this.element,this.apply(r),this.groom(r),this.prevData={...r}}apply(t){if(!t)return;const{prevData:r,element:s}=this;for(const a in t){const n=t[a];n!==r[a]&&(s[a]=n)}}groom(t){const{prevData:r,element:s}=this;if(r)for(const a in r)(!t||!(a in t)&&s[a]===r[a])&&(s[a]=void 0)}}class bt extends Tt{constructor(){super(...arguments),this.eventData={}}apply(t){if(t)for(const r in t){const s=t[r];s!==this.eventData[r]&&this.applyEvent(r,s)}}applyEvent(t,r){const{prevData:s,element:a}=this;this.eventData[t]=r,s[t]&&a.removeEventListener(t,this,r),a.addEventListener(t,this,r)}groom(t){const{prevData:r,element:s}=this;if(r)for(const a in r)(!t||!(a in t)&&s[a]===r[a])&&this.groomEvent(a,r[a])}groomEvent(t,r){const{element:s}=this;delete this.eventData[t],s.removeEventListener(t,this,r)}handleEvent(t){const r=this.eventData[t.type];typeof r=="function"?r.call(this.host,t):r.handleEvent(t)}disconnected(){const{eventData:t,element:r}=this;for(const s in t){const a=s.slice(1),n=t[s];r.removeEventListener(a,this,n)}}reconnected(){const{eventData:t,element:r}=this;for(const s in t){const a=s.slice(1),n=t[s];r.addEventListener(a,this,n)}}}class St extends bt{apply(t){if(!t)return;const{prevData:r,element:s}=this;for(const a in t){const n=t[a];if(n===r[a])continue;const l=a.slice(1);switch(a[0]){case"@":this.eventData[l]=n,this.applyEvent(l,n);break;case".":s[l]=n;break;case"?":n?s.setAttribute(l,""):s.removeAttribute(l);break;default:n!=null?s.setAttribute(a,String(n)):s.removeAttribute(a);break}}}groom(t){const{prevData:r,element:s}=this;if(r)for(const a in r){const n=a.slice(1);if(!t||!(a in t)&&s[n]===r[a])switch(a[0]){case"@":this.groomEvent(n,r[a]);break;case".":s[n]=void 0;break;case"?":s.removeAttribute(n);break;default:s.removeAttribute(a);break}}}}const _t=ht(St);function At(e,t){var s;const r=(s=t.modules)==null?void 0:s.find(a=>{var n;return(n=a.declarations)==null?void 0:n.some(l=>l.tagName===e)});return r==null?void 0:r.declarations.find(a=>a.kind==="class"&&a.tagName===e)}function j(e,t){var s;const r={};return(s=e==null?void 0:e.members)==null||s.forEach(a=>{var p,c;if(a.kind!=="field"||(a.attribute&&(r[a.attribute]={name:a.attribute,table:{disable:!0}}),r[a.name]={name:a.name,table:{disable:!0}},a.privacy==="private"||a.privacy==="protected"||a.static))return;const n=tt((p=a==null?void 0:a.type)==null?void 0:p.text),l=a.attribute?`${a.attribute}-attr`:`${a.name}-prop`,o=D(a.default);r[l]={name:a.attribute||a.name,description:V(a.description,t!=null&&t.showArgRef?l:"",a.deprecated),defaultValue:o==="''"?"":o,control:{type:x(n)},table:{category:a.attribute?"attributes":"properties",defaultValue:{summary:o},type:{summary:(c=a==null?void 0:a.type)==null?void 0:c.text}}};const f=n==null?void 0:n.split("|");f&&(f==null?void 0:f.length)>1&&(r[l].options=f.map($=>D($)))}),r}function Et(e){var r;const t={};return(r=e==null?void 0:e.members)==null||r.forEach(s=>{var f,p;if(s.kind!=="field"||(t[s.name]={name:s.name,table:{disable:!0}},s.privacy==="private"||s.privacy==="protected"||s.static))return;const a=tt((f=s==null?void 0:s.type)==null?void 0:f.text),n=`${s.name}`,l=D(s.default);t[n]={name:s.name,description:s.description,defaultValue:l==="false"?!1:l==="''"?"":l,control:{type:x(a)},table:{category:"properties",defaultValue:{summary:l},type:{summary:(p=s==null?void 0:s.type)==null?void 0:p.text}}};const o=a==null?void 0:a.split("|");o&&(o==null?void 0:o.length)>1&&(t[n].options=o.map(c=>D(c)))}),t}function Nt(e){var r;const t={};return(r=e==null?void 0:e.events)==null||r.forEach(s=>{const a=kt(s.name);t[a]={name:a,description:s.description,table:{category:"events"}}}),t}function Z(e){var r;const t={};return(r=e==null?void 0:e.cssProperties)==null||r.forEach(s=>{t[s.name]={name:s.name,description:s.description,defaultValue:s.default,control:{type:"text"}}}),t}function G(e,t){var s;const r={};return(s=e==null?void 0:e.cssParts)==null||s.forEach(a=>{r[a.name]={name:a.name,table:{disable:!0}},r[`${a.name}-part`]={name:a.name,description:V(a.description,t!=null&&t.showArgRef?`${a.name}-part`:""),control:"text",defaultValue:`${e==null?void 0:e.tagName}::part(${a.name}) {
}`,table:{category:"css shadow parts"}}}),r}function J(e,t){var s;const r={};return(s=e==null?void 0:e.slots)==null||s.forEach(a=>{r[a.name]={name:a.name,table:{disable:!0}};const n=a.name||"default";r[`${n}-slot`]={name:n,description:V(a.description,t!=null&&t.showArgRef?`${n}-part`:""),control:"text",defaultValue:n==="default"?"":`<span slot="${n}"></span>`,table:{category:"slots"}}}),r}function x(e){if(!e)return"text";if(e.includes("boolean"))return"boolean";if(e.includes("number")&&!e.includes("string"))return"number";if(e.includes("Date"))return"date";const t=e.split("|");return t.length>1?t.length<3?"inline-radio":t.length<=4?"radio":"select":"text"}function tt(e){return e?e.replace(" | undefined","").replace(" | null",""):""}function D(e){return e==null?void 0:e.trim().replace(/^["'](.+(?=["']$))["']$/,"$1")}function V(e,t,r){let s="";return r&&(s+=`\`@deprecated\` ${r}`),e&&(s+=s?`


`:"",s+=e),t&&(s+=s?`

`:"",s+=`arg ref - \`${t}\``),s}const kt=e=>`on${Ot(Ct(e))}`;function Ct(e=""){return e.split("-").map((s,a)=>a?s.charAt(0).toUpperCase()+s.slice(1).toLowerCase():s.toLowerCase()).join("")}function Ot(e){return e.charAt(0).toUpperCase()+e.slice(1)}const{useArgs:Pt}=__STORYBOOK_MODULE_CLIENT_API__;let A,Q;var K;function Lt(e,t,r){if(!t)return v`<${w(e.tagName)}></${w(e.tagName)}>`;(e==null?void 0:e.tagName)!==Q&&(A=void 0,Q=e==null?void 0:e.tagName);const s=Dt(e,t),a=jt(e,t);Vt(e);const n=Mt(e,t);return v(K||(K=W(["",`
<`," "," ",">","","</",`>

<script>
  component = document.querySelector('`,`');
<\/script>
`])),et(e,t),w(e.tagName),_t(s),n,a,r||"",w(e.tagName),e.tagName)}function et(e,t){var s;const r=Rt(e,t);return((s=`${r}`)==null?void 0:s.replaceAll(/\s+/g,""))!=""?v`<style>${r}</style>
`:""}function Dt(e,t){const r=j(e),s={};return Object.keys(r).filter(a=>a.endsWith("-attr")).forEach(a=>{const n=r[a],l=r[a].name,o=t[a],f=n.control.type==="boolean"?`?${l}`:l;s[f]=o==="false"?!1:o}),Object.keys(t).filter(a=>!a.endsWith("-attr")&&!a.endsWith("-part")&&!a.endsWith("-slot")).forEach(a=>{if(a.startsWith("on"))return;const n=t[a];s[`.${a}`]=n}),s}function Mt(e,t){const r=Z(e);return Object.keys(r).some(n=>!!t[n])?w(`style="${Object.keys(r).map(n=>{const l=r[n].name,o=t[n];return o?`${l}: ${o||""}`:null}).filter(n=>n!==null).join(";")}"`):void 0}function Rt(e,t){const r=G(e);return Object.keys(r).some(n=>!!t[n])?w(`${Object.keys(r).filter(n=>n.endsWith("-part")).map(n=>{const l=r[n].name,o=t[n];return(o==null?void 0:o.replaceAll(/\s+/g,""))!==`${e==null?void 0:e.tagName}::part(${l}){}`?`
${o}`:null}).filter(n=>n!==null).join(`
`)}
`):void 0}function jt(e,t){const r=J(e);return w(`${Object.keys(r).filter(a=>a.endsWith("-slot")).map(a=>{const n=r[a].name,l=t[a];return n==="default"?l||null:l!==`<span slot="${n}"></span>`?l:null}).filter(a=>a!==null).join("")}`)}function Vt(e){Ut(e),setTimeout(()=>{const t=document.querySelector(e.tagName);A==null||A.observe(t,{attributes:!0})})}function Ut(e){let t=!1;const r=Pt()[1],s=j(e);A||(A=new MutationObserver(a=>{a.forEach(n=>{var o,f;if(n.type!=="attributes"||n.attributeName==="class"&&t)return;t=!0;const l=s[`${n.attributeName}-attr`];(l==null?void 0:l.control)==="boolean"||((o=l==null?void 0:l.control)==null?void 0:o.type)==="boolean"?r({[`${n.attributeName}-attr`]:(f=n.target)==null?void 0:f.hasAttribute(n.attributeName||"")}):r({[`${n.attributeName}-attr`]:n.target.getAttribute(n.attributeName||"")}),t=!1})}))}function rt(e,t){var n;const r=window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;if(!r)throw new Error(`Custom Elements Manifest not found. Be sure to follow the pre-install steps in this guide:
https://www.npmjs.com/package/wc-storybook-helpers#before-you-install`);const s=At(e,r),a=((n=s==null?void 0:s.events)==null?void 0:n.map(l=>l.name))||[];return{argTypes:st(s,{showArgRef:t==null?void 0:t.showArgRef}),reactArgTypes:It(s),args:Ft(s),events:a,styleTemplate:l=>et(s,l),template:(l,o)=>Lt(s,l,o),manifest:s}}function st(e,t){return{...j(e,{showArgRef:t==null?void 0:t.showArgRef}),...J(e,{showArgRef:t==null?void 0:t.showArgRef}),...Z(e),...G(e,{showArgRef:t==null?void 0:t.showArgRef})}}function Ft(e){return Object.entries(st(e)).filter(([,r])=>r==null?void 0:r.control).map(([r,s])=>({[r]:s.defaultValue||""})).reduce((r,s)=>({...r,...s}),{})}function It(e){return{...Et(e),...Nt(e)}}const Y=String.raw`[A-Za-z][^/\s>]*`,Bt=String.raw`(?<!\w)"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,qt=String.raw`(?<!\w)'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,at=String.raw`${Bt}|${qt}`,Ht=String.raw`"(?<quotedAttrValue>[^"]*)"`,Wt=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,zt=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Qt=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,Yt=String.raw`${Ht}|${Wt}|${zt}`,Kt=String.raw`(?<attrName>${Qt})(?:\s*=\s*(?:${Yt}))?`,Xt=String.raw`${at}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,nt=String.raw`(?<attrSpace>\s*)(?:${Kt}|(?<attrText>${Xt}))`,Zt={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${Y})(?<attrs>(?:${nt})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${Y})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${at}|['"]`,wildcard:String.raw`.`},Gt=Object.entries(Zt).map(([e,t])=>`(?<${e}>${t})`).join("|");function*Jt(e,t){let r,{lastIndex:s}=e;for(;r=e.exec(t);)yield r,{lastIndex:s}=e;if(s!=t.length)throw new Error("Failed to parse string")}const xt=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function O(e,t="  ",r=80){var S;const s=new RegExp(Gt,"gys"),a=new RegExp(nt,"gy"),n=[];let l=null,o=0,f=!1,p=0;const c=(...g)=>{for(const d of g){if(!l)if(d==`
`)f=!0;else{const T=d.indexOf(`
`),h=T==-1?d.length:T;p+h>r&&/^[ \t]+$/.test(n[n.length-1])&&(n.pop(),c(`
`)),f&&(f=!1,c(t.repeat(o)))}const m=d.lastIndexOf(`
`);m==-1?p+=d.length:p=d.length-m-1,n.push(d)}};for(const g of Jt(s,e)){if(O.__strict&&g.groups.wildcard)throw new Error("Unexpected wildcard");if(g.groups.endTag){const d=g.groups.endTagName.toLowerCase();d==l&&(l=null),l||(--o,c(`</${d}>`))}if(l)c(g[0]);else if(g.groups.space)c(...((S=g[0].match(/\n/g))==null?void 0:S.slice(0,2))??[" "]);else if(g.groups.comment||g.groups.dtd||g.groups.text||g.groups.wildcard)c(g[0]);else if(g.groups.startTag){const d=g.groups.startTagName.toLowerCase();if(c(`<${d}`),++o,g.groups.attrs){let{lastIndex:T}=a,h,i;for(;h=a.exec(g.groups.attrs);){if({lastIndex:T}=a,O.__strict&&h.groups.attrText)throw new Error("Unexpected attr text");h.groups.attrText?(h.groups.attrSpace&&c(/\n/.test(h.groups.attrSpace)?`
`:" "),c(h.groups.attrText)):((h.groups.attrSpace||!(i!=null&&i.groups.attrText))&&c(/\n/.test(h.groups.attrSpace)?`
`:" "),c(`${h.groups.attrName}${h.groups.quotedAttrValue?`="${h.groups.quotedAttrValue}"`:h.groups.singleQuotedAttrValue?`='${h.groups.singleQuotedAttrValue}'`:h.groups.unquotedAttrValue?`=${h.groups.unquotedAttrValue}`:""}`)),i=h}if(T!=g.groups.attrs.length)throw new Error("Failed to parse attributes")}const m=!!g.groups.closingSlash;c(m?" />":">"),m||xt.has(d)?--o:["pre","script","style"].includes(d)&&(l=d)}}let $=!1;for(;/^\s+$/.test(n[n.length-1]);){const g=n.pop();/\n/.test(g)&&($=!0)}return $&&n.push(`
`),n.join("")}O.default=O;var te=O;const ee=dt(te),M=e=>{const{args:t,events:r,argTypes:s,manifest:a}=rt(e),n=()=>({status:{styles:{backgroundColor:(a==null?void 0:a.status)==="stable"?"#43b02a":"rgb(255, 131, 0)",borderColor:"white",color:"white"},title:`Status: ${a==null?void 0:a.status}`},since:{styles:{backgroundColor:"#333",borderColor:"#fff",color:"#fff"},title:`Since: ${a==null?void 0:a.since}`}});return{args:t,events:r,argTypes:(()=>{var f,p;const o=()=>{var g;const c=a.members.filter(d=>d.kind==="field"),$=new Set((g=a.attributes)==null?void 0:g.map(d=>d.fieldName));return c.filter(d=>!$.has(d.name)&&(d==null?void 0:d.privacy)!=="private").map(d=>d.name)};return{...s,...(f=a.events)==null?void 0:f.reduce((c,$)=>(c[$.name]={control:!1},c),{}),...(p=o())==null?void 0:p.reduce((c,$)=>(c[`${$}-prop`]={table:{disable:!0}},c[$]={control:!1},c),{})}})(),parameters:{badges:["status","since"],badgesConfig:n()}}},_=e=>({getSuffixFromType:t=>({attribute:"-attr",property:"-prop",slot:"-slot",cssPart:"-part",cssProperty:""})[t],getValuesFromAttribute:t=>{var s,a;t.endsWith("-attr")||(t=`${t}-attr`);const{argTypes:r}=M(e);return((a=(s=r[t])==null?void 0:s.control)==null?void 0:a.type)==="boolean"?[!0,!1]:r[t].options},getValuesFromAttributes:t=>t==null?void 0:t.map(r=>(r.endsWith("-attr")||(r=`${r}-attr`),{name:r,values:_(e).getValuesFromAttribute(r)})),overrideArgs:(t,r)=>{const s=r||M(e).args,a=Array.isArray(t)?t:[t];for(const n of a){const l=_(e).getSuffixFromType(n.type);s[`${n.name}${l}`]=n.value}return s}}),le=e=>{const{template:t}=rt(e),{args:r}=M(e),{getValuesFromAttribute:s}=_(e);return{generateTemplate:({axis:n,constants:l=[],options:o,args:f=r})=>{var T,h;const p=(Array.isArray(l)?l:[l]).reduce((i,u)=>({...i,[`${u.name}${_(e).getSuffixFromType(u.type)}`]:u.value}),{});if(!(n!=null&&n.x)&&!(n!=null&&n.y)&&!(o!=null&&o.title))return v`${t({...f,...p})}`;const c=i=>i?Array.isArray(i)?i.map(u=>({...u,values:u.values||s(u.name)})):[{...i,values:i.values||s(i.name)}]:[{}],$=c(n==null?void 0:n.x),S=c(n==null?void 0:n.y),d=(T=(Array.isArray(l)?l:[l]).find(i=>i.type==="template"))==null?void 0:T.value,m=`uuid-${crypto.randomUUID()}`;return v`
      <style>
        table:not(:first-of-type).story-template {
          margin-top: 72px;
        }
        .story-template th {
          text-align: left;
        }
        .story-template td {
          text-align: center;
        }
        .story-template th,
        .story-template td {
          padding: 16px;
          font-size: 12px;
        }
        td.template {
          font-size: 16px;
        }
        .story-template thead tr th {
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }
        .story-template thead th.title {
          background: #e0e0e0;
          text-align: left;
          font-size: 14px;
        }
        .story-template tbody tr th {
          font-weight: normal;
          text-align: center;
        }

        .story-template tbody tr:first-of-type th:first-of-type {
          width: 32px;
        }

        .story-template tbody tr th[rowspan] {
          text-align: center;
          padding-left: 0;
          border-right: 1px solid #e0e0e0;
          font-weight: bold;
        }

        .story-template tbody tr th span {
          -ms-writing-mode: tb-rl;
          -webkit-writing-mode: vertical-rl;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
        }

        ${(o==null?void 0:o.templateBackground)&&`
          .${m}.story-template tbody tr.template-row td.template {
            background: ${o==null?void 0:o.templateBackground};
          }
        `}

        ${(h=o==null?void 0:o.templateBackgrounds)==null?void 0:h.colors.map((i,u)=>{var P;const E=N=>{var k;return`${(k=o==null?void 0:o.templateBackgrounds)==null?void 0:k.colors.length}n + ${N+1}`};return((P=o==null?void 0:o.templateBackgrounds)==null?void 0:P.alternate)==="y"?`
                .${m}.story-template tbody tr.template-row:nth-of-type(${E(u)}) td.template {
                  background: ${i};
                }
              `:`
                .${m}.story-template tbody tr.template-row td.template:nth-of-type(${E(u)}) {
                  background: ${i};
                }
              `})}
      </style>
      ${$.map(i=>v` ${S.map(u=>{var k,U,F;let E=!0;const P=$.length>1||i.values,N=(i&&u||S.length>1)&&(u==null?void 0:u.values);return v`
            <table class="story-template ${m} ${o==null?void 0:o.classes}">
              <thead>
                ${(o==null?void 0:o.title)&&v`<tr>
                  <th class="title" colspan=${(((k=i.values)==null?void 0:k.length)||0)+3}><code>${o==null?void 0:o.title}</code></th>
                </tr>`}
                ${i&&i.values&&v`
                  <tr>
                    ${N?v`<td></td>`:""} <td></td>
                    ${P&&v`<th colspan=${((U=i.values)==null?void 0:U.length)||0}><code>${i.title||i.name}</code></th>`}
                    </tr>
                  </tr>
                  ${v`
                    <tr>
                      ${N?v`<td></td>`:""}
                      <td></td>
                      ${(F=i==null?void 0:i.values)==null?void 0:F.map(y=>v`<td><code>${y.title||y}</code></td>`)}
                    </tr>
                  `}
                `}
              </thead>
              <tbody>
                ${((u==null?void 0:u.values)||[""]).map(y=>{var I;const lt=v`
                    <tr class="template-row">
                      ${E&&N?v`<th rowspan="${(I=u==null?void 0:u.values)==null?void 0:I.length}">
                            <span><code>${u.title||u.name}</code></span>
                          </th>`:""}
                      <th><code>${y.title||y}</code></th>
                      ${((i==null?void 0:i.values)||[""]).map(b=>{var B,q;return v`
                          <td class="template template-x-${((B=i==null?void 0:i.values)==null?void 0:B.indexOf(b))||1} template-y-${((q=u==null?void 0:u.values)==null?void 0:q.indexOf(y.value||y))||1}">
                          ${i.type==="template"&&w((b.value||b).split("%TEMPLATE%")[0]||"")||""}
                          ${u.type==="template"&&w((y.value||y).split("%TEMPLATE%")[0]||"")||""}
                          ${d&&w(d.split("%TEMPLATE%")[0]||"")||""}
                            ${t({...f,...p,...i&&i.type!=="template"&&{[`${i.name}${_(e).getSuffixFromType(i.type)}`]:b.hasOwnProperty("value")?b.value:b},...u&&u.type!=="template"&&{[`${u.name}${_(e).getSuffixFromType(u.type)}`]:y.hasOwnProperty("value")?y.value:y}})}
                         ${u.type==="template"&&w((y.value||y).split("%TEMPLATE%")[1]||"")||""}
                         ${i.type==="template"&&w((b.value||b).split("%TEMPLATE%")[1]||"")||""}
                          ${d&&w(d.split("%TEMPLATE%")[1]||"")||""}</td></div>
                        `})}
                    </tr>
                  `;return E=!1,lt})}
              </tbody>
            </table>
          `})}`)}
    `}}},oe={codeOptimizer:e=>{const t=new DOMParser().parseFromString(e,"text/html").body,r=t.querySelectorAll(".template");let s="";return r.length?s=Array.from(r).map(a=>a.innerHTML).join(`
`):s=t.innerHTML,s=s.replace(/<style><\/style>/g,"").replace(/<style>\n<\/style>/g,"").replace(/<script>\s*component = document\.querySelector\('(.+?)'\);\s*<\/script>/g,""),ee(s)}};export{le as a,_ as b,oe as c,$t as d,ht as e,ne as i,v as n,M as s,pt as t};
//# sourceMappingURL=helper-229b0a9d.js.map
