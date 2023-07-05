function u(t,c){const l={waitUntilFirstUpdate:!1,...c};return(a,o)=>{const{update:d}=a,f=Array.isArray(t)?t:[t];a.update=function(i){f.forEach(h=>{const s=h;if(i.has(s)){const n=i.get(s),e=this[s];n!==e&&(!l.waitUntilFirstUpdate||this.hasUpdated)&&this[o](n,e)}}),d.call(this,i)}}}export{u as w};
//# sourceMappingURL=watch-73ae212f.js.map
