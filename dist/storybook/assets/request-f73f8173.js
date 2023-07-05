const n=new Map;function i(t,u="cors"){if(n.has(t))return n.get(t);const a=fetch(t,{mode:u}).then(async e=>({ok:e.ok,status:e.status,html:await e.text()}));return n.set(t,a),a}export{i as requestInclude};
//# sourceMappingURL=request-f73f8173.js.map
